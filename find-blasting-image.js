const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Searching for dry ice blasting machine images...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    console.log('Navigating to ColdJet blasting equipment page...');
    await page.goto('https://www.coldjet.com/our-equipment/dry-ice-blasting-equipment/', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });
    
    await page.waitForSelector('img', { timeout: 10000 });
    
    // Find all images
    const images = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      return imgs.map(img => ({
        src: img.src,
        alt: img.alt || '',
        width: img.naturalWidth,
        height: img.naturalHeight,
        className: img.className
      }));
    });
    
    // Filter for product images (exclude logos, icons, small images)
    const productImages = images.filter(img => 
      img.width >= 300 && 
      img.height >= 300 &&
      !img.src.includes('logo') &&
      !img.src.includes('icon') &&
      !img.src.toLowerCase().includes('back') &&
      (img.src.toLowerCase().includes('aero') ||
       img.src.toLowerCase().includes('pcs') ||
       img.src.toLowerCase().includes('blaster') ||
       img.src.toLowerCase().includes('blasting') ||
       img.alt.toLowerCase().includes('blasting') ||
       img.alt.toLowerCase().includes('machine'))
    );
    
    console.log(`\n📸 Found ${productImages.length} potential blasting machine images:\n`);
    productImages.forEach((img, i) => {
      console.log(`${i + 1}. Size: ${img.width}x${img.height}`);
      console.log(`   Alt: ${img.alt}`);
      console.log(`   URL: ${img.src}`);
      console.log('');
    });
    
    if (productImages.length > 0) {
      // Pick the first one that's square-ish and good size
      const bestImage = productImages.find(img => 
        Math.abs(img.width - img.height) < 100 &&
        img.width >= 400
      ) || productImages[0];
      
      console.log('✅ Selected image:');
      console.log(`   URL: ${bestImage.src}`);
      console.log(`   Size: ${bestImage.width}x${bestImage.height}`);
      
      const outputPath = path.join(__dirname, 'public', 'images', 'AERO2-PCS-ULTRA-selected.jpg');
      console.log(`\n📥 Downloading to: ${outputPath}`);
      
      const imgPage = await browser.newPage();
      const response = await imgPage.goto(bestImage.src, { waitUntil: 'networkidle2' });
      const buffer = await response.buffer();
      
      fs.writeFileSync(outputPath, buffer);
      console.log(`✅ Successfully downloaded ${buffer.length} bytes`);
      
      await imgPage.close();
    } else {
      console.log('❌ No suitable blasting machine images found');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
})();