const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const imageUrl = 'https://www.coldjet.com/wp-content/uploads/2020/01/PR750H-Dry-Ice-Production-System.jpg';
const outputPath = path.join(__dirname, 'public', 'images', 'PR750H-downloaded.jpg');

console.log('Using Puppeteer to download PR750H image...');
console.log('URL:', imageUrl);
console.log('Output:', outputPath);

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({ width: 1280, height: 800 });
  
  // Navigate to the image URL
  const response = await page.goto(imageUrl, { waitUntil: 'networkidle0' });
  
  if (response.status() !== 200) {
    console.error('❌ Failed to load image:', response.status(), response.statusText());
    await browser.close();
    process.exit(1);
  }
  
  console.log('✅ Page loaded successfully');
  console.log('   Status:', response.status());
  console.log('   Content-Type:', response.headers()['content-type']);
  
  // Get the image as buffer
  const buffer = await response.buffer();
  
  console.log('   Image size:', buffer.length, 'bytes');
  
  // Save to file
  fs.writeFileSync(outputPath, buffer);
  
  console.log('✅ Image saved successfully!');
  
  await browser.close();
})().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});