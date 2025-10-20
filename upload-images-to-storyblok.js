const https = require('https');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

const SPACE_ID = '287934232080460';
const TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';

// Helper to upload asset
function uploadAsset(filepath, filename) {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append('file', fs.createReadStream(filepath), filename);

    const options = {
      hostname: 'mapi.storyblok.com',
      path: `/v1/spaces/${SPACE_ID}/assets`,
      method: 'POST',
      headers: {
        'Authorization': TOKEN,
        ...form.getHeaders()
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            reject(new Error(`Parse error: ${e.message}`));
          }
        } else {
          reject(new Error(`Upload failed: ${res.statusCode} ${body}`));
        }
      });
    });

    req.on('error', reject);
    form.pipe(req);
  });
}

async function uploadAllImages() {
  const imagesDir = path.join(__dirname, 'storyblok-images');
  const files = fs.readdirSync(imagesDir);
  
  console.log(`Uploading ${files.length} images to Storyblok...`);
  console.log(`Space: ${SPACE_ID}\n`);
  
  const uploadedAssets = {};
  let uploaded = 0;
  let failed = 0;
  
  for (const file of files) {
    const filepath = path.join(imagesDir, file);
    
    try {
      const response = await uploadAsset(filepath, file);
      uploaded++;
      uploadedAssets[file] = response.pretty_url || response.filename;
      console.log(`✓ [${uploaded + failed}/${files.length}] ${file}`);
      console.log(`  → ${uploadedAssets[file]}`);
    } catch (err) {
      failed++;
      console.error(`✗ [${uploaded + failed}/${files.length}] ${file}: ${err.message}`);
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`\n✅ Upload complete!`);
  console.log(`  Uploaded: ${uploaded}`);
  console.log(`  Failed: ${failed}`);
  console.log(`  Total: ${files.length}`);
  
  // Save mapping file
  const mappingPath = path.join(__dirname, 'image-mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(uploadedAssets, null, 2));
  console.log(`\nImage mapping saved to: image-mapping.json`);
}

uploadAllImages()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  });