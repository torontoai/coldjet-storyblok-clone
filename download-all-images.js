const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'storyblok-images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of all image URLs from the story content
const imageUrls = [
  // Equipment items
  'https://www.coldjet.com/wp-content/uploads/AERO2-PCS-ULTRA-scaled.jpg',
  'https://www.coldjet.com/wp-content/uploads/PR750H-scaled.jpg',
  
  // Industry cards
  'https://www.coldjet.com/wp-content/uploads/2019/07/IMG_1696-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_AUTOMOTIVE_LEFT-1-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/Cold_Jet_Food_Processing-500x300.webp',
  'https://www.coldjet.com/wp-content/uploads/2019/06/Medical3-1-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/Contract-Cleaning-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/2019/07/Main-Image-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_AEROSPACEAVIATION_RIGHT-e1634762746732-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-1-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_RESTORATIONREMEDIATION_HISTORICAL-1-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_TEXTILES_RIGHT-1-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/Cold-Jet-MWS-DGH-Sandcasting-foundry-industry-69-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_FOODBEVERAGE_RIGHT-500x300.jpg',
  
  // Production cards
  'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_AIRLINECATERING-10-1-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_FOODPROCESSINGCOOLING-9-2-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/Cold_Jet_Life_Science-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_PRODUCTIONFORRESALE-3-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_COLDCHAINMANAGEMENT-1-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/Cold_Jet_Food_Home_Delivery-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_PLASTICSCOMPOSITES_PARTSFINISHING-7-500x300.jpg',
  'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-2-500x300.jpg',
  
  // Logos
  'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-18.jpg',
  'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-17.png',
  'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-16.png',
  'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-15.png',
  'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-14.png',
  'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-13.png',
  
  // Testimonial logos
  'https://www.coldjet.com/wp-content/uploads/KSPG-114x40.png',
  'https://www.coldjet.com/wp-content/uploads/Performance-Plastics-e1562875205683-88x40.png'
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadAllImages() {
  console.log(`Downloading ${imageUrls.length} images from coldjet.com...`);
  console.log(`Saving to: ${imagesDir}\n`);
  
  let downloaded = 0;
  let failed = 0;
  
  for (const url of imageUrls) {
    const filename = path.basename(url);
    const filepath = path.join(imagesDir, filename);
    
    try {
      await downloadImage(url, filepath);
      downloaded++;
      console.log(`✓ [${downloaded + failed}/${imageUrls.length}] ${filename}`);
    } catch (err) {
      failed++;
      console.error(`✗ [${downloaded + failed}/${imageUrls.length}] ${filename}: ${err.message}`);
    }
  }
  
  console.log(`\n✅ Download complete!`);
  console.log(`  Downloaded: ${downloaded}`);
  console.log(`  Failed: ${failed}`);
  console.log(`  Total: ${imageUrls.length}`);
  console.log(`\nImages saved to: ${imagesDir}`);
}

downloadAllImages()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  });