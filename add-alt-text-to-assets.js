const axios = require('axios');

const SPACE_ID = '287934232080460';
const TOKEN = 'U3VA550SUKdEuQDC9iAvYwtt-98283665806763-6NVFKYshsznZuHpB3vc_';

// Asset metadata mapping (from IMAGE-UPLOAD-GUIDE.md)
const assetMetadata = {
  // Equipment
  'aero2': { alt: 'AERO2 PCS Ultra dry ice blasting system', title: 'Dry Ice Blasting System - AERO2' },
  'pr750h': { alt: 'PR750H dry ice production system', title: 'Dry Ice Production System - PR750H' },
  
  // Industries
  'plastics': { alt: 'Plastics and composites manufacturing', title: 'Plastics & Composites Industry' },
  'automotive': { alt: 'Automotive manufacturing', title: 'Automotive Industry' },
  'food': { alt: 'Food and beverage processing', title: 'Food & Beverage Industry' },
  'medical': { alt: 'Medical equipment cleaning', title: 'Medical Equipment Industry' },
  'contract': { alt: 'Professional cleaning services', title: 'Contract Cleaning Industry' },
  'printing': { alt: 'Printing equipment maintenance', title: 'Printing Industry' },
  'aerospace': { alt: 'Aerospace and aviation applications', title: 'Aerospace & Aviation Industry' },
  'oil': { alt: 'Oil and gas industry solutions', title: 'Oil & Gas Industry' },
  'restoration': { alt: 'Restoration and remediation services', title: 'Restoration & Remediation' },
  'textiles': { alt: 'Textile manufacturing cleaning', title: 'Textiles Industry' },
  'foundry': { alt: 'Foundry and metal casting', title: 'Foundry Industry' },
  'packaging': { alt: 'Packaging industry cleaning', title: 'Packaging Industry' },
  
  // Production
  'airline': { alt: 'Airline catering services', title: 'Airline Catering Application' },
  'processor': { alt: 'Food processing cooling', title: 'Food Processing Application' },
  'life': { alt: 'Life sciences applications', title: 'Life Sciences Application' },
  'resale': { alt: 'Commercial dry ice production', title: 'Production for Resale' },
  'cold-chain': { alt: 'Cold chain logistics', title: 'Cold Chain Management' },
  'shipping': { alt: 'Food shipping and delivery', title: 'Food Shipping Application' },
  'blasting': { alt: 'On-site production for blasting', title: 'Production for Blasting' },
  'remote': { alt: 'Remote production solutions', title: 'Remote Production' },
  
  // Logos
  '3m': { alt: '3M logo', title: '3M Logo' },
  'apple': { alt: 'Apple logo', title: 'Apple Logo' },
  'bayer': { alt: 'Bayer logo', title: 'Bayer Logo' },
  'millet': { alt: 'Millet logo', title: 'Millet Logo' },
  'ge': { alt: 'GE logo', title: 'GE Logo' },
  'goodyear': { alt: 'Goodyear logo', title: 'Goodyear Logo' }
};

// Folder IDs
const folders = {
  equipment: 103373439220366,
  industries: 103373441878671,
  production: 103373444913808,
  logos: 103373447989905
};

async function listAssetsInFolder(folderId, folderName) {
  try {
    const response = await axios.get(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets`,
      {
        params: {
          asset_folder_id: folderId,
          per_page: 100
        },
        headers: { 'Authorization': TOKEN }
      }
    );
    
    console.log(`\n📁 ${folderName.toUpperCase()} Folder (${response.data.assets.length} assets)`);
    console.log('─'.repeat(80));
    
    return response.data.assets;
  } catch (error) {
    console.error(`✗ Error listing ${folderName}:`, error.response?.data || error.message);
    return [];
  }
}

async function updateAssetMetadata(assetId, filename, alt, title) {
  try {
    await axios.put(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/assets/${assetId}`,
      {
        alt: alt,
        title: title,
        name: title
      },
      { headers: { 'Authorization': TOKEN } }
    );
    
    console.log(`✓ Updated: ${filename}`);
    console.log(`  Alt: ${alt}`);
    console.log(`  Title: ${title}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to update ${filename}:`, error.response?.data || error.message);
    return false;
  }
}

function findMetadataKey(filename) {
  const lower = filename.toLowerCase();
  
  // Equipment
  if (lower.includes('aero')) return 'aero2';
  if (lower.includes('pr750')) return 'pr750h';
  
  // Industries
  if (lower.includes('plastics') || lower.includes('1696')) return 'plastics';
  if (lower.includes('automotive')) return 'automotive';
  if (lower.includes('food_processing') || lower.includes('food_jet')) return 'food';
  if (lower.includes('medical')) return 'medical';
  if (lower.includes('contract')) return 'contract';
  if (lower.includes('main-image')) return 'printing';
  if (lower.includes('aerospace') || lower.includes('aviation')) return 'aerospace';
  if (lower.includes('remoteproduction-1')) return 'oil';
  if (lower.includes('restoration') || lower.includes('remediation')) return 'restoration';
  if (lower.includes('textiles')) return 'textiles';
  if (lower.includes('foundry') || lower.includes('sandcasting')) return 'foundry';
  if (lower.includes('foodbeverage_right')) return 'packaging';
  
  // Production
  if (lower.includes('airline')) return 'airline';
  if (lower.includes('foodprocessingcooling')) return 'processor';
  if (lower.includes('life_science')) return 'life';
  if (lower.includes('productionforresale')) return 'resale';
  if (lower.includes('coldchainmanagement')) return 'cold-chain';
  if (lower.includes('food_home_delivery')) return 'shipping';
  if (lower.includes('partsfinishing')) return 'blasting';
  if (lower.includes('remoteproduction-2')) return 'remote';
  
  // Logos
  if (lower.includes('loaded-13')) return '3m';
  if (lower.includes('loaded-14')) return 'apple';
  if (lower.includes('loaded-15')) return 'bayer';
  if (lower.includes('loaded-16')) return 'millet';
  if (lower.includes('loaded-17')) return 'ge';
  if (lower.includes('loaded-18')) return 'goodyear';
  
  return null;
}

async function main() {
  console.log('🔍 Listing all uploaded assets and adding alt text...\n');
  
  let totalUpdated = 0;
  let totalAssets = 0;
  
  for (const [folderName, folderId] of Object.entries(folders)) {
    const assets = await listAssetsInFolder(folderId, folderName);
    totalAssets += assets.length;
    
    for (const asset of assets) {
      const metaKey = findMetadataKey(asset.filename);
      
      if (metaKey && assetMetadata[metaKey]) {
        const { alt, title } = assetMetadata[metaKey];
        const success = await updateAssetMetadata(asset.id, asset.filename, alt, title);
        if (success) totalUpdated++;
      } else {
        console.log(`⚠ No metadata found for: ${asset.filename}`);
        console.log(`  ID: ${asset.id}`);
        console.log(`  Current alt: ${asset.alt || 'none'}`);
      }
      
      console.log('');
      await new Promise(r => setTimeout(r, 500)); // Rate limit
    }
  }
  
  console.log('\n' + '='.repeat(80));
  console.log(`✅ Complete! Updated ${totalUpdated}/${totalAssets} assets with alt text`);
  console.log('='.repeat(80));
}

main().catch(console.error);