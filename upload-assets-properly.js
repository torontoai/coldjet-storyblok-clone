const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const SPACE_ID = '287934232080460';
const TOKEN = 'U3VA550SUKdEuQDC9iAvYwtt-98283665806763-6NVFKYshsznZuHpB3vc_'; // Management API Token

const imagesDir = path.join(__dirname, 'storyblok-images');
const publicImagesDir = path.join(__dirname, 'public', 'images');

// Mapping of local files to asset names and alt text
const assetConfig = {
  // Equipment (from public/images)
  'AERO2-PCS-ULTRA.jpg': {
    name: 'Dry Ice Blasting System - AERO2',
    alt: 'AERO2 PCS Ultra dry ice blasting system for industrial cleaning',
    folder: 'equipment',
    sourceDir: 'public'
  },
  'PR750H.jpg': {
    name: 'Dry Ice Production System - PR750H',
    alt: 'PR750H dry ice production system for on-site manufacturing',
    folder: 'equipment',
    sourceDir: 'public'
  },
  
  // Industries
  'IMG_1696-500x300.jpg': {
    name: 'Plastics & Composites Industry',
    alt: 'Dry ice blasting for plastics and composites manufacturing',
    folder: 'industries'
  },
  'DRYICEBLASTING_INDUSTRIES_AUTOMOTIVE_LEFT-1-500x300.jpg': {
    name: 'Automotive Industry',
    alt: 'Dry ice blasting for automotive manufacturing and maintenance',
    folder: 'industries'
  },
  'Cold_Jet_Food_Processing-500x300.webp': {
    name: 'Food & Beverage Industry',
    alt: 'Dry ice blasting for food and beverage processing facilities',
    folder: 'industries'
  },
  'Medical3-1-500x300.jpg': {
    name: 'Medical Equipment Industry',
    alt: 'Dry ice blasting for medical equipment cleaning',
    folder: 'industries'
  },
  'Contract-Cleaning-500x300.jpg': {
    name: 'Contract Cleaning Industry',
    alt: 'Professional dry ice cleaning services',
    folder: 'industries'
  },
  'Main-Image-500x300.jpg': {
    name: 'Printing Industry',
    alt: 'Dry ice blasting for printing equipment maintenance',
    folder: 'industries'
  },
  'DRYICEBLASTING_INDUSTRIES_AEROSPACEAVIATION_RIGHT-e1634762746732-500x300.jpg': {
    name: 'Aerospace & Aviation Industry',
    alt: 'Dry ice blasting for aerospace and aviation applications',
    folder: 'industries'
  },
  'DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-1-500x300.jpg': {
    name: 'Oil & Gas Industry',
    alt: 'Dry ice solutions for oil and gas industry',
    folder: 'industries'
  },
  'DRYICEBLASTING_INDUSTRIES_RESTORATIONREMEDIATION_HISTORICAL-1-500x300.jpg': {
    name: 'Restoration & Remediation',
    alt: 'Dry ice blasting for historical restoration and remediation',
    folder: 'industries'
  },
  'DRYICEBLASTING_INDUSTRIES_TEXTILES_RIGHT-1-500x300.jpg': {
    name: 'Textiles Industry',
    alt: 'Dry ice cleaning for textile manufacturing',
    folder: 'industries'
  },
  'Cold-Jet-MWS-DGH-Sandcasting-foundry-industry-69-500x300.jpg': {
    name: 'Foundry Industry',
    alt: 'Dry ice blasting for foundry and metal casting',
    folder: 'industries'
  },
  'DRYICEBLASTING_INDUSTRIES_FOODBEVERAGE_RIGHT-500x300.jpg': {
    name: 'Packaging Industry',
    alt: 'Dry ice cleaning for packaging industry',
    folder: 'industries'
  },
  
  // Production Applications
  'DRYICEPRODUCTION_APPLICATIONS_AIRLINECATERING-10-1-500x300.jpg': {
    name: 'Airline Catering Application',
    alt: 'Dry ice production for airline catering services',
    folder: 'production'
  },
  'DRYICEPRODUCTION_APPLICATIONS_FOODPROCESSINGCOOLING-9-2-500x300.jpg': {
    name: 'Food Processing Application',
    alt: 'Dry ice cooling for food processing',
    folder: 'production'
  },
  'Cold_Jet_Life_Science-500x300.jpg': {
    name: 'Life Sciences Application',
    alt: 'Dry ice solutions for life sciences and pharmaceuticals',
    folder: 'production'
  },
  'DRYICEPRODUCTION_APPLICATIONS_PRODUCTIONFORRESALE-3-500x300.jpg': {
    name: 'Production for Resale',
    alt: 'Dry ice production systems for commercial resale',
    folder: 'production'
  },
  'DRYICEPRODUCTION_APPLICATIONS_COLDCHAINMANAGEMENT-1-500x300.jpg': {
    name: 'Cold Chain Management',
    alt: 'Dry ice for cold chain logistics and management',
    folder: 'production'
  },
  'Cold_Jet_Food_Home_Delivery-500x300.jpg': {
    name: 'Food Shipping Application',
    alt: 'Dry ice for food shipping and home delivery',
    folder: 'production'
  },
  'DRYICEBLASTING_INDUSTRIES_PLASTICSCOMPOSITES_PARTSFINISHING-7-500x300.jpg': {
    name: 'Production for Blasting',
    alt: 'On-site dry ice production for blasting operations',
    folder: 'production'
  },
  'DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-2-500x300.jpg': {
    name: 'Remote Production',
    alt: 'Remote dry ice production solutions',
    folder: 'production'
  },
  
  // Logos
  'img.logo-grid__logo-image.lazyload.loaded-13.png': {
    name: '3M Logo',
    alt: '3M company logo',
    folder: 'logos'
  },
  'img.logo-grid__logo-image.lazyload.loaded-14.png': {
    name: 'Apple Logo',
    alt: 'Apple company logo',
    folder: 'logos'
  },
  'img.logo-grid__logo-image.lazyload.loaded-15.png': {
    name: 'Bayer Logo',
    alt: 'Bayer company logo',
    folder: 'logos'
  },
  'img.logo-grid__logo-image.lazyload.loaded-16.png': {
    name: 'Millet Logo',
    alt: 'Millet company logo',
    folder: 'logos'
  },
  'img.logo-grid__logo-image.lazyload.loaded-17.png': {
    name: 'GE Logo',
    alt: 'General Electric company logo',
    folder: 'logos'
  },
  'img.logo-grid__logo-image.lazyload.loaded-18.jpg': {
    name: 'Goodyear Logo',
    alt: 'Goodyear company logo',
    folder: 'logos'
  }
};

async function createAssetFolder(folderName) {
  try {
    const response = await axios.post(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/asset_folders`,
      {
        name: folderName
      },
      {
        headers: {
          'Authorization': TOKEN,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`✓ Created folder: ${folderName} (ID: ${response.data.asset_folder.id})`);
    return response.data.asset_folder;
  } catch (error) {
    if (error.response?.data?.error?.includes('already been taken')) {
      console.log(`ℹ Folder already exists: ${folderName}`);
      // Get existing folder
      const folders = await axios.get(
        `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/asset_folders`,
        {
          headers: { 'Authorization': TOKEN }
        }
      );
      const existing = folders.data.asset_folders.find(f => f.name === folderName);
      return existing || null;
    }
    console.error(`✗ Error creating folder ${folderName}:`, error.response?.data || error.message);
    return null;
  }
}

async function uploadAsset(filePath, assetName, altText, folderId, originalFilename) {
  try {
    console.log(`\nUploading: ${assetName}...`);
    
    // Extract file extension from original filename
    const ext = path.extname(originalFilename);
    const filenameWithExt = assetName.replace(/\s+/g, '-') + ext;
    
    // Create signed upload request
    const signedRequest = await axios.post(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets`,
      {
        filename: filenameWithExt,
        size: fs.statSync(filePath).size.toString(),
        asset_folder_id: folderId
      },
      {
        headers: {
          'Authorization': TOKEN,
          'Content-Type': 'application/json'
        }
      }
    );
    
    const { signed_request, public_url, id, pretty_url } = signedRequest.data;
    
    // Upload file to signed URL
    const form = new FormData();
    const fileBuffer = fs.readFileSync(filePath);
    
    // Parse signed request fields
    const fields = JSON.parse(signed_request.fields);
    Object.keys(fields).forEach(key => {
      form.append(key, fields[key]);
    });
    form.append('file', fileBuffer, { filename: assetName });
    
    await axios.post(signed_request.post_url, form, {
      headers: form.getHeaders()
    });
    
    // Update asset with alt text
    if (altText) {
      await axios.put(
        `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets/${id}`,
        {
          alt: altText,
          title: assetName
        },
        {
          headers: {
            'Authorization': TOKEN,
            'Content-Type': 'application/json'
          }
        }
      );
    }
    
    console.log(`✓ Uploaded: ${assetName}`);
    console.log(`  Asset ID: ${id}`);
    console.log(`  URL: ${pretty_url || public_url}`);
    
    return {
      id,
      filename: pretty_url || public_url,
      alt: altText,
      name: assetName
    };
    
  } catch (error) {
    console.error(`✗ Failed to upload ${assetName}:`);
    console.error(error.response?.data || error.message);
    return null;
  }
}

async function uploadAllAssets() {
  console.log('Starting asset upload to Storyblok...\n');
  console.log(`Space ID: ${SPACE_ID}\n`);
  
  // Create folders first
  const folders = {};
  for (const folderName of ['equipment', 'industries', 'production', 'logos']) {
    const folder = await createAssetFolder(folderName);
    if (folder) {
      folders[folderName] = folder.id;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\nFolders ready. Starting image uploads...\n');
  
  const uploadedAssets = {};
  
  for (const [filename, config] of Object.entries(assetConfig)) {
    // Check source directory
    const sourceDir = config.sourceDir === 'public' ? publicImagesDir : imagesDir;
    const filePath = path.join(sourceDir, filename);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠ File not found: ${filename} in ${sourceDir}`);
      continue;
    }
    
    const folderId = folders[config.folder];
    const asset = await uploadAsset(filePath, config.name, config.alt, folderId, filename);
    
    if (asset) {
      uploadedAssets[filename] = asset;
    }
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Save mapping
  const mappingPath = path.join(__dirname, 'storyblok-asset-urls.json');
  fs.writeFileSync(mappingPath, JSON.stringify(uploadedAssets, null, 2));
  
  console.log(`\n\n✓ Upload complete!`);
  console.log(`  Uploaded: ${Object.keys(uploadedAssets).length}/${Object.keys(assetConfig).length} assets`);
  console.log(`  Mapping saved to: storyblok-asset-urls.json`);
  
  return uploadedAssets;
}

uploadAllAssets().catch(console.error);