const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser to find AERO2 image...');
  
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
    
    console.log('\n📸 Found images:');
    images.forEach((img, i) => {
      if (img.alt && (img.alt.toLowerCase().includes('aero') || img.src.includes('AERO'))) {
        console.log(`\n${i + 1}. ${img.alt}`);
        console.log(`   URL: ${img.src}`);
        console.log(`   Size: ${img.width}x${img.height}`);
      }
    });
    
    // Find AERO2 image specifically
    const aero2Image = images.find(img => 
      (img.src.includes('AERO2') || img.src.includes('aero2') || 
       (img.alt && img.alt.toLowerCase().includes('aero'))) &&
      img.width > 0 && img.height > 0
    );
    
    if (aero2Image) {
      console.log('\n✅ Found AERO2 image:');
      console.log(`   URL: ${aero2Image.src}`);
      console.log(`   Alt: ${aero2Image.alt}`);
      console.log(`   Size: ${aero2Image.width}x${aero2Image.height}`);
      
      // Download the image
      const outputPath = path.join(__dirname, 'public', 'images', 'AERO2-PCS-ULTRA-new.jpg');
      console.log(`\n📥 Downloading to: ${outputPath}`);
      
      const imgPage = await browser.newPage();
      const response = await imgPage.goto(aero2Image.src, { waitUntil: 'networkidle2' });
      const buffer = await response.buffer();
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Successfully downloaded ${buffer.length} bytes`);
      
      await imgPage.close();
    } else {
      console.log('\n❌ Could not find AERO2 image');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();