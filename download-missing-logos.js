const axios = require('axios');
const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, 'storyblok-images', 'logos');

// Ensure directory exists
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// All 18 logos from the original site
const logos = [
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-18.jpg', name: '3m-logo.jpg' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-17.png', name: 'apple-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-16.png', name: 'bayer-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-15.png', name: 'frito-lay-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-14.png', name: 'ge-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-13.png', name: 'goodyear-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-12.png', name: 'graham-packaging-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-11.png', name: 'honeywell-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-10.png', name: 'john-deere-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-9.png', name: 'johnson-johnson-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-8.png', name: 'kraft-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-7.png', name: 'nike-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-6.png', name: 'red-d-arc-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-5.png', name: 'siemens-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-4.png', name: 'silgan-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-3.png', name: 'true-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-2.png', name: 'tyco-logo.png' },
  { url: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded.jpg', name: 'westrock-logo.jpg' }
];

async function downloadLogo(url, filename) {
  try {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const filepath = path.join(logosDir, filename);
    fs.writeFileSync(filepath, response.data);
    console.log(`✓ Downloaded: ${filename}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error.message);
    return false;
  }
}

async function main() {
  console.log('📥 Downloading missing logos from coldjet.com...\n');
  
  let downloaded = 0;
  
  for (const logo of logos) {
    const filepath = path.join(logosDir, logo.name);
    if (fs.existsSync(filepath)) {
      console.log(`⏭ Skipped (exists): ${logo.name}`);
      downloaded++;
    } else {
      const success = await downloadLogo(logo.url, logo.name);
      if (success) downloaded++;
      await new Promise(r => setTimeout(r, 500)); // Rate limit
    }
  }
  
  console.log(`\n✅ Complete! ${downloaded}/${logos.length} logos ready`);
}

main().catch(console.error);