const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser to find AERO2 FRONT view image...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Visit the dry ice blasting equipment page
    console.log('Navigating to equipment page...');
    await page.goto('https://www.coldjet.com/our-equipment/dry-ice-blasting-equipment/', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    
    // Wait for images to load
    await page.waitForSelector('img', { timeout: 10000 });
    
    // Find all images on the page
    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight
      }));
    });
    
    console.log('\n📸 All AERO2-related images found:');
    const aero2Images = images.filter(img => 
      (img.src.toLowerCase().includes('aero') || 
       (img.alt && img.alt.toLowerCase().includes('aero'))) &&
      img.width > 0 && img.height > 0
    );
    
    aero2Images.forEach((img, i) => {
      const isBack = img.src.toLowerCase().includes('back');
      console.log(`\n${i + 1}. ${img.alt || 'No alt text'}`);
      console.log(`   URL: ${img.src}`);
      console.log(`   Size: ${img.width}x${img.height}`);
      console.log(`   Type: ${isBack ? '❌ BACK VIEW' : '✅ FRONT/SIDE VIEW'}`);
    });
    
    // Find AERO2 FRONT image (exclude BACK views)
    const aero2FrontImage = aero2Images.find(img => 
      !img.src.toLowerCase().includes('back') &&
      img.width >= 300 && img.height >= 300
    );
    
    if (aero2FrontImage) {
      console.log('\n✅ Selected FRONT view image:');
      console.log(`   URL: ${aero2FrontImage.src}`);
      console.log(`   Size: ${aero2FrontImage.width}x${aero2FrontImage.height}`);
      
      // Download the image
      const outputPath = path.join(__dirname, 'public', 'images', 'AERO2-PCS-ULTRA-front.jpg');
      console.log(`\n📥 Downloading to: ${outputPath}`);
      
      const imgPage = await browser.newPage();
      const response = await imgPage.goto(aero2FrontImage.src, { waitUntil: 'networkidle2' });
      const buffer = await response.buffer();
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Successfully downloaded ${buffer.length} bytes`);
      
      await imgPage.close();
    } else {
      console.log('\n❌ Could not find suitable AERO2 front view image');
      console.log('Available images:');
      aero2Images.forEach((img, i) => {
        console.log(`${i + 1}. ${img.src}`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();