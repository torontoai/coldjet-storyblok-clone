const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrl = 'https://www.coldjet.com/wp-content/uploads/2020/01/PR750H-Dry-Ice-Production-System.jpg';
const outputPath = path.join(__dirname, 'public', 'images', 'PR750H-downloaded.jpg');

console.log('Downloading PR750H image from:', imageUrl);
console.log('Saving to:', outputPath);

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        console.log('Following redirect to:', response.headers.location);
        file.close();
        fs.unlinkSync(dest);
        downloadImage(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode} ${response.statusMessage}`));
        return;
      }
      
      console.log('Content-Type:', response.headers['content-type']);
      console.log('Content-Length:', response.headers['content-length']);
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        const stats = fs.statSync(dest);
        console.log('Download complete! File size:', stats.size, 'bytes');
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
    
    file.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

downloadImage(imageUrl, outputPath)
  .then(() => {
    console.log('✅ Image downloaded successfully!');
  })
  .catch((err) => {
    console.error('❌ Download failed:', err.message);
    process.exit(1);
  });