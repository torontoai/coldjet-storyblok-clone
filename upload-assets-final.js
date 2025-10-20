const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const SPACE_ID = '287934232080460';
const TOKEN = 'U3VA550SUKdEuQDC9iAvYwtt-98283665806763-6NVFKYshsznZuHpB3vc_';

const imagesDir = path.join(__dirname, 'storyblok-images');
const publicImagesDir = path.join(__dirname, 'public', 'images');

// Simplified mapping - use original filenames
const assetList = [
  // Equipment (from public/images)
  { file: 'AERO2-PCS-ULTRA.jpg', folder: 'equipment', alt: 'AERO2 PCS Ultra dry ice blasting system', title: 'Dry Ice Blasting System', dir: 'public' },
  { file: 'PR750H.jpg', folder: 'equipment', alt: 'PR750H dry ice production system', title: 'Dry Ice Production System', dir: 'public' },
  
  // Industries (from storyblok-images)
  { file: 'IMG_1696-500x300.jpg', folder: 'industries', alt: 'Plastics and composites manufacturing', title: 'Plastics & Composites' },
  { file: 'DRYICEBLASTING_INDUSTRIES_AUTOMOTIVE_LEFT-1-500x300.jpg', folder: 'industries', alt: 'Automotive manufacturing', title: 'Automotive' },
  { file: 'Cold_Jet_Food_Processing-500x300.webp', folder: 'industries', alt: 'Food and beverage processing', title: 'Food & Beverage' },
  { file: 'Medical3-1-500x300.jpg', folder: 'industries', alt: 'Medical equipment cleaning', title: 'Medical Equipment' },
  { file: 'Contract-Cleaning-500x300.jpg', folder: 'industries', alt: 'Professional cleaning services', title: 'Contract Cleaning' },
  { file: 'Main-Image-500x300.jpg', folder: 'industries', alt: 'Printing equipment maintenance', title: 'Printing' },
  { file: 'DRYICEBLASTING_INDUSTRIES_AEROSPACEAVIATION_RIGHT-e1634762746732-500x300.jpg', folder: 'industries', alt: 'Aerospace and aviation applications', title: 'Aerospace & Aviation' },
  { file: 'DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-1-500x300.jpg', folder: 'industries', alt: 'Oil and gas industry solutions', title: 'Oil & Gas' },
  { file: 'DRYICEBLASTING_INDUSTRIES_RESTORATIONREMEDIATION_HISTORICAL-1-500x300.jpg', folder: 'industries', alt: 'Restoration and remediation services', title: 'Restoration & Remediation' },
  { file: 'DRYICEBLASTING_INDUSTRIES_TEXTILES_RIGHT-1-500x300.jpg', folder: 'industries', alt: 'Textile manufacturing cleaning', title: 'Textiles' },
  { file: 'Cold-Jet-MWS-DGH-Sandcasting-foundry-industry-69-500x300.jpg', folder: 'industries', alt: 'Foundry and metal casting', title: 'Foundry' },
  { file: 'DRYICEBLASTING_INDUSTRIES_FOODBEVERAGE_RIGHT-500x300.jpg', folder: 'industries', alt: 'Packaging industry cleaning', title: 'Packaging' },
  
  // Production (from storyblok-images)
  { file: 'DRYICEPRODUCTION_APPLICATIONS_AIRLINECATERING-10-1-500x300.jpg', folder: 'production', alt: 'Airline catering services', title: 'Airline Catering' },
  { file: 'DRYICEPRODUCTION_APPLICATIONS_FOODPROCESSINGCOOLING-9-2-500x300.jpg', folder: 'production', alt: 'Food processing cooling', title: 'Food Processors' },
  { file: 'Cold_Jet_Life_Science-500x300.jpg', folder: 'production', alt: 'Life sciences applications', title: 'Life Sciences' },
  { file: 'DRYICEPRODUCTION_APPLICATIONS_PRODUCTIONFORRESALE-3-500x300.jpg', folder: 'production', alt: 'Commercial dry ice production', title: 'Production for Resale' },
  { file: 'DRYICEPRODUCTION_APPLICATIONS_COLDCHAINMANAGEMENT-1-500x300.jpg', folder: 'production', alt: 'Cold chain logistics', title: 'Cold Chain Management' },
  { file: 'Cold_Jet_Food_Home_Delivery-500x300.jpg', folder: 'production', alt: 'Food shipping and delivery', title: 'Food Shipping' },
  { file: 'DRYICEBLASTING_INDUSTRIES_PLASTICSCOMPOSITES_PARTSFINISHING-7-500x300.jpg', folder: 'production', alt: 'On-site production for blasting', title: 'Production for Blasting' },
  { file: 'DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-2-500x300.jpg', folder: 'production', alt: 'Remote production solutions', title: 'Remote Production' },
  
  // Logos (from storyblok-images)
  { file: 'img.logo-grid__logo-image.lazyload.loaded-13.png', folder: 'logos', alt: '3M logo', title: '3M' },
  { file: 'img.logo-grid__logo-image.lazyload.loaded-14.png', folder: 'logos', alt: 'Apple logo', title: 'Apple' },
  { file: 'img.logo-grid__logo-image.lazyload.loaded-15.png', folder: 'logos', alt: 'Bayer logo', title: 'Bayer' },
  { file: 'img.logo-grid__logo-image.lazyload.loaded-16.png', folder: 'logos', alt: 'Millet logo', title: 'Millet' },
  { file: 'img.logo-grid__logo-image.lazyload.loaded-17.png', folder: 'logos', alt: 'GE logo', title: 'GE' },
  { file: 'img.logo-grid__logo-image.lazyload.loaded-18.jpg', folder: 'logos', alt: 'Goodyear logo', title: 'Goodyear' }
];

async function createFolder(name) {
  try {
    const response = await axios.post(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/asset_folders`,
      { name },
      { headers: { 'Authorization': TOKEN } }
    );
    return response.data.asset_folder.id;
  } catch (error) {
    if (error.response?.data?.error?.includes('already been taken')) {
      const folders = await axios.get(
        `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/asset_folders`,
        { headers: { 'Authorization': TOKEN } }
      );
      const existing = folders.data.asset_folders.find(f => f.name === name);
      return existing?.id;
    }
    return null;
  }
}

async function uploadAsset(asset, folderId) {
  try {
    const sourceDir = asset.dir === 'public' ? publicImagesDir : imagesDir;
    const filePath = path.join(sourceDir, asset.file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠ File not found: ${asset.file}`);
      return null;
    }
    
    console.log(`\nUploading: ${asset.title} (${asset.file})...`);
    
    const fileSize = fs.statSync(filePath).size;
    const payload = {
      filename: asset.file,
      size: fileSize.toString(),
      asset_folder_id: folderId
    };
    
    console.log(`  Payload:`, JSON.stringify(payload, null, 2));
    
    // Step 1: Create signed upload
    const signResponse = await axios.post(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets`,
      payload,
      { headers: { 'Authorization': TOKEN } }
    );
    
    const { id, signed_request, public_url, pretty_url } = signResponse.data;
    
    // Step 2: Upload to S3
    const formData = new FormData();
    const fields = signed_request.fields ? JSON.parse(signed_request.fields) : {};
    
    Object.keys(fields).forEach(key => {
      formData.append(key, fields[key]);
    });
    
    formData.append('file', fs.createReadStream(filePath));
    
    await axios.post(signed_request.post_url, formData, {
      headers: formData.getHeaders()
    });
    
    // Step 3: Update metadata
    await axios.put(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets/${id}`,
      {
        alt: asset.alt,
        title: asset.title,
        name: asset.title
      },
      { headers: { 'Authorization': TOKEN } }
    );
    
    console.log(`✓ Uploaded successfully`);
    console.log(`  Asset ID: ${id}`);
    console.log(`  URL: ${pretty_url || public_url}`);
    
    return {
      id,
      filename: pretty_url || public_url,
      alt: asset.alt,
      title: asset.title,
      originalFile: asset.file
    };
    
  } catch (error) {
    console.error(`✗ Failed:`);
    if (error.response) {
      console.error(`  Status: ${error.response.status}`);
      console.error(`  Data:`, JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(`  ${error.message}`);
    }
    return null;
  }
}

async function main() {
  console.log('🚀 Uploading assets to Storyblok...\n');
  
  // Create folders
  const folders = {
    equipment: await createFolder('equipment'),
    industries: await createFolder('industries'),
    production: await createFolder('production'),
    logos: await createFolder('logos')
  };
  
  console.log('\n✓ Folders ready\n');
  
  const uploaded = {};
  
  for (const asset of assetList) {
    const result = await uploadAsset(asset, folders[asset.folder]);
    if (result) {
      uploaded[asset.file] = result;
    }
    await new Promise(r => setTimeout(r, 1000)); // Rate limit
  }
  
  // Save mapping
  fs.writeFileSync('storyblok-asset-mapping.json', JSON.stringify(uploaded, null, 2));
  
  console.log(`\n\n✅ Upload complete!`);
  console.log(`   Uploaded: ${Object.keys(uploaded).length}/${assetList.length} assets`);
  console.log(`   Mapping saved to: storyblok-asset-mapping.json`);
}

main().catch(console.error);