const axios = require('axios');

const SPACE_ID = '287934232080460';
const TOKEN = 'U3VA550SUKdEuQDC9iAvYwtt-98283665806763-6NVFKYshsznZuHpB3vc_';

// Complete mapping based on actual uploaded filenames
const assetUpdates = [
  // Equipment - fix the two main images
  { id: 103376695105324, alt: 'AERO2 PCS Ultra dry ice blasting system', title: 'Dry Ice Blasting System - AERO2' },
  { id: 103376768587565, alt: 'PR750H dry ice production system', title: 'Dry Ice Production System - PR750H' },
  
  // Industries - missing ones
  { id: 103377452934962, alt: 'Food and beverage processing', title: 'Food & Beverage Industry' },
  { id: 103377618958134, alt: 'Printing equipment maintenance', title: 'Printing Industry' },
  { id: 103377813858105, alt: 'Oil and gas industry solutions', title: 'Oil & Gas Industry' },
  { id: 103378069464894, alt: 'Packaging industry cleaning', title: 'Packaging Industry' },
  
  // Production - missing ones
  { id: 103378205476674, alt: 'Food processing cooling', title: 'Food Processors' },
  { id: 103378244953923, alt: 'Life sciences applications', title: 'Life Sciences' },
  { id: 103378280298308, alt: 'Commercial dry ice production', title: 'Production for Resale' },
  { id: 103378335156037, alt: 'Cold chain logistics', title: 'Cold Chain Management' },
  { id: 103378392778566, alt: 'Food shipping and delivery', title: 'Food Shipping' },
  { id: 103378712000335, alt: 'On-site production for blasting', title: 'Production for Blasting' },
  { id: 103378790709073, alt: 'Remote production solutions', title: 'Remote Production' },
  
  // Logos - fix the main ones
  { id: 103379057272660, alt: '3M company logo', title: '3M Logo' },
  { id: 103379098335061, alt: 'Apple company logo', title: 'Apple Logo' },
  { id: 103379134142294, alt: 'Bayer company logo', title: 'Bayer Logo' },
  { id: 103379301807961, alt: 'GE company logo', title: 'GE Logo' },
  { id: 103379333134170, alt: 'Goodyear company logo', title: 'Goodyear Logo' },
  
  // Additional logos that were uploaded
  { id: 103379260368728, alt: 'Frito-Lay company logo', title: 'Frito-Lay Logo' },
  { id: 103379387930459, alt: 'KSPG company logo', title: 'KSPG Logo' },
  { id: 103379387930459, alt: 'Performance Plastics company logo', title: 'Performance Plastics Logo' }
];

async function updateAsset(id, alt, title) {
  try {
    await axios.put(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets/${id}`,
      {
        alt: alt,
        title: title,
        name: title
      },
      { headers: { 'Authorization': TOKEN } }
    );
    
    console.log(`✓ Updated asset ${id}`);
    console.log(`  Alt: ${alt}`);
    console.log(`  Title: ${title}\n`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to update asset ${id}:`, error.response?.data || error.message);
    return false;
  }
}

async function main() {
  console.log('🔄 Adding alt text to remaining assets...\n');
  console.log('─'.repeat(80));
  
  let updated = 0;
  
  for (const asset of assetUpdates) {
    const success = await updateAsset(asset.id, asset.alt, asset.title);
    if (success) updated++;
    await new Promise(r => setTimeout(r, 500)); // Rate limit
  }
  
  console.log('─'.repeat(80));
  console.log(`\n✅ Complete! Updated ${updated}/${assetUpdates.length} additional assets`);
  console.log(`\nTotal assets with alt text: ${40 + updated} assets`);
}

main().catch(console.error);