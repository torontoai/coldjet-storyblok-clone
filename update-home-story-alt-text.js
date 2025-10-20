const https = require('https');

const SPACE_ID = '324703'; // Dotfusion Sandbox space (contains the actual home story)
const TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';
const STORY_ID = '621399566'; // home story ID

// Helper function to make API requests
function apiRequest(method, path, data = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'mapi.storyblok.com',
      path: path,
      method: method,
      headers: {
        'Authorization': TOKEN,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(body));
        } else {
          reject(new Error(`API request failed: ${res.statusCode} ${body}`));
        }
      });
    });

    req.on('error', reject);
    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function updateHomeStory() {
  console.log('Fetching current home story...');
  
  // Get current story
  const response = await apiRequest('GET', `/v1/spaces/${SPACE_ID}/stories/${STORY_ID}`);
  const story = response.story;
  
  console.log('Current story fetched. Updating content...');
  
  // Update equipment items with alt_text
  const equipmentGrid = story.content.body.find(b => b.component === 'equipmentGrid');
  if (equipmentGrid && equipmentGrid.items) {
    equipmentGrid.items.forEach((item, idx) => {
      if (!item.alt_text) {
        item.alt_text = item.title; // Use title as alt text
        console.log(`  ✓ Added alt_text to equipment item ${idx + 1}: ${item.title}`);
      }
    });
  }
  
  // Update industry cards with alt_text
  const industryCards = story.content.body.find(b => b.component === 'industryCards');
  if (industryCards && industryCards.cards) {
    industryCards.cards.forEach((card, idx) => {
      if (!card.alt_text) {
        card.alt_text = `${card.title} industry application - Dry ice blasting solutions`;
        console.log(`  ✓ Added alt_text to industry card ${idx + 1}: ${card.title}`);
      }
    });
  }
  
  // Update production cards with alt_text (onSiteProduction section)
  const onSiteProduction = story.content.body.find(b => b.component === 'onSiteProduction');
  if (onSiteProduction && onSiteProduction.cards) {
    onSiteProduction.cards.forEach((card, idx) => {
      if (!card.alt_text) {
        card.alt_text = `${card.title} - On-site dry ice production solution`;
        console.log(`  ✓ Added alt_text to production card ${idx + 1}: ${card.title}`);
      }
    });
  }
  
  // Update the story
  console.log('\nUpdating story in Storyblok...');
  const updatePayload = {
    story: {
      content: story.content,
      publish: 1 // Publish immediately
    }
  };
  
  const updateResponse = await apiRequest('PUT', `/v1/spaces/${SPACE_ID}/stories/${STORY_ID}`, updatePayload);
  
  console.log('✅ Story updated successfully!');
  console.log(`\nSummary:`);
  console.log(`- Equipment items updated: ${equipmentGrid?.items?.length || 0}`);
  console.log(`- Industry cards updated: ${industryCards?.cards?.length || 0}`);
  console.log(`- Production cards updated: ${onSiteProduction?.cards?.length || 0}`);
  console.log(`\nStory published at: ${new Date(updateResponse.story.published_at).toLocaleString()}`);
  
  return updateResponse;
}

updateHomeStory()
  .then(() => {
    console.log('\n✅ Migration complete! All alt_text fields have been added.');
    process.exit(0);
  })
  .catch(err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  });