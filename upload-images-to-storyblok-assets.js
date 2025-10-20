const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const SPACE_ID = '287934232080460';
const MANAGEMENT_TOKEN = 'yJe6atW4p3Gl0SzAFdYztwtt-287934232080460-dHdJzPDCRQI0ydukzJuE';

const imagesDir = path.join(__dirname, 'storyblok-images');

// Mapping of local filenames to logical names
const imageMapping = {
  // Equipment images
  'AERO2-PCS-ULTRA.jpg': 'equipment-aero2',
  'PR750H.jpg': 'equipment-pr750h',
  
  // Industry card images
  'IMG_1696-500x300.jpg': 'industry-plastics-composites',
  'DRYICEBLASTING_INDUSTRIES_AUTOMOTIVE_LEFT-1-500x300.jpg': 'industry-automotive',
  'Cold_Jet_Food_Processing-500x300.webp': 'industry-food-beverage',
  'Medical3-1-500x300.jpg': 'industry-medical-equipment',
  'Contract-Cleaning-500x300.jpg': 'industry-contract-cleaning',
  'Main-Image-500x300.jpg': 'industry-printing',
  'DRYICEBLASTING_INDUSTRIES_AEROSPACEAVIATION_RIGHT-e1634762746732-500x300.jpg': 'industry-aerospace-aviation',
  'DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-1-500x300.jpg': 'industry-oil-gas',
  'DRYICEBLASTING_INDUSTRIES_RESTORATIONREMEDIATION_HISTORICAL-1-500x300.jpg': 'industry-restoration-remediation',
  'DRYICEBLASTING_INDUSTRIES_TEXTILES_RIGHT-1-500x300.jpg': 'industry-textiles',
  'Cold-Jet-MWS-DGH-Sandcasting-foundry-industry-69-500x300.jpg': 'industry-foundry',
  'DRYICEBLASTING_INDUSTRIES_FOODBEVERAGE_RIGHT-500x300.jpg': 'industry-packaging',
  
  // Production card images
  'DRYICEPRODUCTION_APPLICATIONS_AIRLINECATERING-10-1-500x300.jpg': 'production-airline-catering',
  'DRYICEPRODUCTION_APPLICATIONS_FOODPROCESSINGCOOLING-9-2-500x300.jpg': 'production-food-processors',
  'Cold_Jet_Life_Science-500x300.jpg': 'production-life-sciences',
  'DRYICEPRODUCTION_APPLICATIONS_PRODUCTIONFORRESALE-3-500x300.jpg': 'production-for-resale',
  'DRYICEPRODUCTION_APPLICATIONS_COLDCHAINMANAGEMENT-1-500x300.jpg': 'production-cold-chain',
  'Cold_Jet_Food_Home_Delivery-500x300.jpg': 'production-food-shipping',
  'DRYICEBLASTING_INDUSTRIES_PLASTICSCOMPOSITES_PARTSFINISHING-7-500x300.jpg': 'production-for-blasting',
  'DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-2-500x300.jpg': 'production-remote',
  
  // Logo images
  'img.logo-grid__logo-image.lazyload.loaded-13.png': 'logo-3m',
  'img.logo-grid__logo-image.lazyload.loaded-14.png': 'logo-apple',
  'img.logo-grid__logo-image.lazyload.loaded-15.png': 'logo-bayer',
  'img.logo-grid__logo-image.lazyload.loaded-16.png': 'logo-millet',
  'img.logo-grid__logo-image.lazyload.loaded-17.png': 'logo-ge',
  'img.logo-grid__logo-image.lazyload.loaded-18.jpg': 'logo-goodyear',
  'KSPG-114x40.png': 'logo-kspg',
  'Performance-Plastics-e1562875205683-88x40.png': 'logo-performance-plastics'
};

async function uploadImageToStoryblok(filePath, assetName) {
  try {
    console.log(`\nUploading ${assetName}...`);
    
    // Step 1: Create form data with the image
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));
    form.append('filename', assetName);
    
    // Step 2: Upload to Storyblok Assets
    const uploadResponse = await axios.post(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets`,
      form,
      {
        headers: {
          ...form.getHeaders(),
          'Authorization': MANAGEMENT_TOKEN
        }
      }
    );
    
    console.log(`✓ Uploaded: ${assetName}`);
    console.log(`  Asset ID: ${uploadResponse.data.id}`);
    console.log(`  Public URL: ${uploadResponse.data.public_url || uploadResponse.data.pretty_url}`);
    
    return {
      id: uploadResponse.data.id,
      filename: uploadResponse.data.public_url || uploadResponse.data.pretty_url,
      name: assetName,
      alt: uploadResponse.data.alt || assetName
    };
    
  } catch (error) {
    console.error(`✗ Failed to upload ${assetName}:`, error.response?.data || error.message);
    return null;
  }
}

async function uploadAllImages() {
  console.log('Starting image upload to Storyblok Assets...\n');
  console.log(`Space ID: ${SPACE_ID}`);
  console.log(`Images directory: ${imagesDir}\n`);
  
  const uploadedAssets = {};
  const files = fs.readdirSync(imagesDir);
  
  console.log(`Found ${files.length} files to upload\n`);
  
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const assetName = imageMapping[file] || file.replace(/\.[^/.]+$/, ''); // Remove extension if no mapping
    
    const asset = await uploadImageToStoryblok(filePath, assetName);
    if (asset) {
      uploadedAssets[assetName] = asset;
    }
    
    // Rate limiting: wait 500ms between uploads
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Save the mapping to a file
  const mappingPath = path.join(__dirname, 'storyblok-asset-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(uploadedAssets, null, 2));
  
  console.log(`\n\n✓ Upload complete!`);
  console.log(`  Total uploaded: ${Object.keys(uploadedAssets).length}/${files.length}`);
  console.log(`  Asset mapping saved to: ${mappingPath}`);
  
  return uploadedAssets;
}

// Run the upload
uploadAllImages().catch(console.error);