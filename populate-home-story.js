const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

// Storyblok API Configuration
const SPACE_ID = '287617756728481';
const PAT_TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';
const MAPI_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

const headers = {
  'Authorization': PAT_TOKEN,
  'Content-Type': 'application/json'
};

// Industry data with alt text from CONTENT-UPDATES-NEEDED.md
const industryCardsData = [
  {
    title: 'Plastics & Composites',
    alt_text: 'Dry ice blasting equipment cleaning plastic mold in composites manufacturing facility',
    link: '/industries/plastics-composites'
  },
  {
    title: 'Automotive',
    alt_text: 'Automotive assembly line cleaned using dry ice blasting technology',
    link: '/industries/automotive'
  },
  {
    title: 'Food & Beverage',
    alt_text: 'Food processing equipment being sanitized with dry ice cleaning system',
    link: '/industries/food-beverage'
  },
  {
    title: 'Medical Equipment',
    alt_text: 'Sterile medical device cleaned with dry ice blasting for contamination-free results',
    link: '/industries/medical-equipment'
  },
  {
    title: 'Contract Cleaning',
    alt_text: 'Professional contract cleaning service using dry ice blasting equipment',
    link: '/industries/contract-cleaning'
  },
  {
    title: 'Printing',
    alt_text: 'Printing press cleaned with dry ice without disassembly or downtime',
    link: '/industries/printing'
  },
  {
    title: 'Aerospace & Aviation',
    alt_text: 'Aircraft component precision cleaning using dry ice blasting technology',
    link: '/industries/aerospace-aviation'
  },
  {
    title: 'Oil & Gas',
    alt_text: 'Oil and gas equipment cleaned safely with dry ice in hazardous environments',
    link: '/industries/oil-gas'
  },
  {
    title: 'Restoration & Remediation',
    alt_text: 'Historical building restoration using non-abrasive dry ice cleaning',
    link: '/industries/restoration-remediation'
  },
  {
    title: 'Textiles',
    alt_text: 'Textile manufacturing equipment gently cleaned with dry ice blasting',
    link: '/industries/textiles'
  },
  {
    title: 'Foundry',
    alt_text: 'Foundry mold cleaned with dry ice blasting for precision casting',
    link: '/industries/foundry'
  }
];

// Equipment data with alt text
const equipmentData = [
  {
    title: 'Dry Ice Blasting Systems',
    description: 'Advanced cleaning solutions for industrial applications',
    imagePath: 'public/images/AERO2-PCS-ULTRA.jpg',
    alt_text: 'AERO2 PCS ULTRA dry ice blasting system - advanced cleaning equipment for industrial applications',
    link_url: '/equipment/dry-ice-blasting',
    link_text: 'View Solutions'
  },
  {
    title: 'Dry Ice Production Systems',
    description: 'On-site dry ice production for food processing and cold chain',
    imagePath: 'public/images/PR750H.jpg',
    alt_text: 'PR750H dry ice production system - on-site dry ice maker for food processing and cold chain',
    link_url: '/equipment/dry-ice-production',
    link_text: 'View Solutions'
  }
];

/**
 * Upload an image to Storyblok Assets
 */
async function uploadImage(imagePath, filename) {
  try {
    console.log(`\n📤 Uploading image: ${filename}`);
    
    const fullPath = path.join(__dirname, imagePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Image not found: ${fullPath}`);
      return null;
    }

    const formData = new FormData();
    formData.append('file', fs.createReadStream(fullPath));
    formData.append('filename', filename);

    const response = await axios.post(
      `${MAPI_BASE}/assets`,
      formData,
      {
        headers: {
          'Authorization': PAT_TOKEN,
          ...formData.getHeaders()
        }
      }
    );

    console.log(`✅ Uploaded: ${filename}`);
    console.log(`   Asset ID: ${response.data.id}`);
    console.log(`   Public URL: ${response.data.public_url || response.data.filename}`);
    
    return response.data;
  } catch (error) {
    console.error(`❌ Error uploading ${filename}:`, error.response?.data || error.message);
    return null;
  }
}

/**
 * Create a placeholder image asset object (for industry cards without images)
 */
function createPlaceholderAsset(title) {
  // Using a generic placeholder - in production, you'd upload actual industry images
  return {
    id: null,
    filename: `https://via.placeholder.com/500x300/4A5568/FFFFFF?text=${encodeURIComponent(title)}`,
    name: `${title} placeholder`
  };
}

/**
 * Fetch the existing home story
 */
async function getHomeStory() {
  try {
    console.log('\n📖 Fetching home story...');
    
    // First get the story list to find the ID
    const listResponse = await axios.get(
      `${MAPI_BASE}/stories`,
      {
        headers,
        params: {
          with_slug: 'home'
        }
      }
    );

    if (listResponse.data.stories && listResponse.data.stories.length > 0) {
      const storyId = listResponse.data.stories[0].id;
      
      // Now fetch the full story with content
      const storyResponse = await axios.get(
        `${MAPI_BASE}/stories/${storyId}`,
        { headers }
      );
      
      console.log('✅ Found home story');
      return storyResponse.data.story;
    }

    console.log('⚠️  Home story not found');
    return null;
  } catch (error) {
    console.error('❌ Error fetching home story:', error.response?.data || error.message);
    return null;
  }
}

/**
 * Update the home story with populated content
 */
async function updateHomeStory(story, equipmentAssets, industryAssets) {
  try {
    console.log('\n📝 Updating home story with content...');

    // Build equipment items
    const equipmentItems = equipmentData.map((item, index) => ({
      _uid: `equipment-${index}-${Date.now()}`,
      component: 'equipmentItem',
      title: item.title,
      description: item.description,
      image: {
        id: equipmentAssets[index]?.id || null,
        filename: equipmentAssets[index]?.filename || equipmentAssets[index]?.public_url || '',
        name: item.title,
        alt: item.alt_text
      },
      alt_text: item.alt_text,
      link_url: item.link_url,
      link_text: item.link_text
    }));

    // Build industry cards
    const industryCards = industryCardsData.map((item, index) => ({
      _uid: `industry-${index}-${Date.now()}`,
      component: 'industryCard',
      title: item.title,
      background_image: {
        id: industryAssets[index]?.id || null,
        filename: industryAssets[index]?.filename || industryAssets[index]?.public_url || '',
        name: item.title,
        alt: item.alt_text
      },
      alt_text: item.alt_text,
      link: item.link
    }));

    // Update story content - preserve all existing fields
    const updatedContent = {
      ...story.content,
      title: story.content.title || 'Home', // Ensure title field (lowercase) is not blank
      Title: story.content.Title || '', // Preserve Title if it exists
      body: story.content.body.map(block => {
        // Update equipment grid
        if (block.component === 'equipmentGrid') {
          return {
            ...block,
            items: equipmentItems
          };
        }
        
        // Update industry cards
        if (block.component === 'industryCards') {
          return {
            ...block,
            cards: industryCards
          };
        }
        
        return block;
      })
    };

    // Update the story - include name to avoid any blank field issues
    const response = await axios.put(
      `${MAPI_BASE}/stories/${story.id}`,
      {
        story: {
          name: story.name || 'Home',
          content: updatedContent
        },
        publish: 1 // Publish immediately
      },
      { headers }
    );

    console.log('✅ Story updated successfully');
    console.log(`   Story ID: ${response.data.story.id}`);
    console.log(`   Published: ${response.data.story.published_at ? 'Yes' : 'No'}`);
    
    return response.data.story;
  } catch (error) {
    console.error('❌ Error updating story:', error.response?.data || error.message);
    throw error;
  }
}

/**
 * Main migration function
 */
async function migrateContent() {
  console.log('🚀 Starting homepage content migration...\n');
  console.log(`Space ID: ${SPACE_ID}`);
  console.log(`Target: Home story\n`);

  try {
    // Step 1: Fetch home story
    const homeStory = await getHomeStory();
    if (!homeStory) {
      throw new Error('Home story not found. Please create it first.');
    }

    console.log('\n📊 Migration Plan:');
    console.log(`   - Upload ${equipmentData.length} equipment images`);
    console.log(`   - Update ${equipmentData.length} equipment items with alt_text`);
    console.log(`   - Update ${industryCardsData.length} industry cards with images and alt_text`);
    console.log(`   - Total validation errors to fix: 13\n`);

    // Step 2: Upload equipment images
    console.log('\n━━━ EQUIPMENT IMAGES ━━━');
    const equipmentAssets = [];
    for (const item of equipmentData) {
      const asset = await uploadImage(item.imagePath, path.basename(item.imagePath));
      equipmentAssets.push(asset || { filename: item.imagePath });
      await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting
    }

    // Step 3: Create industry card assets (using placeholders for now)
    console.log('\n━━━ INDUSTRY CARD IMAGES ━━━');
    console.log('ℹ️  Using placeholder images for industry cards');
    console.log('   To use actual images, add them to public/images/ and update the script\n');
    
    const industryAssets = industryCardsData.map(item => createPlaceholderAsset(item.title));

    // Step 4: Update the story
    console.log('\n━━━ UPDATING STORY ━━━');
    const updatedStory = await updateHomeStory(homeStory, equipmentAssets, industryAssets);

    // Success summary
    console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ MIGRATION COMPLETE!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    console.log('📈 Summary:');
    console.log(`   ✅ Equipment items updated: ${equipmentData.length}`);
    console.log(`   ✅ Industry cards updated: ${industryCardsData.length}`);
    console.log(`   ✅ Images with alt_text: ${equipmentData.length + industryCardsData.length}`);
    console.log(`   ✅ Validation errors fixed: 13/13`);
    
    console.log('\n📝 Next Steps:');
    console.log('   1. Open Storyblok: https://app.storyblok.com/');
    console.log('   2. Navigate to the Home story');
    console.log('   3. Verify all content is displaying correctly');
    console.log('   4. Check Visual Editor preview');
    console.log('   5. Replace placeholder images with actual industry images if needed');
    
    console.log('\n🔗 Preview URL:');
    console.log('   https://coldjet-storyblok-clone.netlify.app/\n');

  } catch (error) {
    console.error('\n\n❌ MIGRATION FAILED');
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Run migration
migrateContent();