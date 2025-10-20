const https = require('https');

const OLD_SPACE_ID = '324703';
const NEW_SPACE_ID = '287934232080460';
const NEW_STORY_ID = '103348086419141'; // Existing home story in new space
const TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';
const OLD_PREVIEW_TOKEN = '3n9neOQQNTnW2rNDgA2mfAtt';

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
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            resolve(body);
          }
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

// Fetch story from CDN
function fetchStory(spaceId, slug, token) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.storyblok.com',
      path: `/v2/cdn/stories/${slug}?version=draft&token=${token}&cv=${Date.now()}`,
      method: 'GET'
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(body));
        } else {
          reject(new Error(`Failed to fetch story: ${res.statusCode} ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

async function migrateHomeStory() {
  console.log('Fetching home story from old space (324703)...');
  const oldStoryData = await fetchStory(OLD_SPACE_ID, 'home', OLD_PREVIEW_TOKEN);
  const oldContent = oldStoryData.story.content;
  
  console.log('✓ Fetched home story from old space');
  console.log(`  Title: ${oldContent.title}`);
  console.log(`  Sections: ${oldContent.body?.length || 0}`);
  
  // Update existing home story in new space
  console.log(`\nUpdating home story (${NEW_STORY_ID}) in new space (${NEW_SPACE_ID})...`);
  const updatePayload = {
    story: {
      name: 'Home',
      content: oldContent,
      publish: 1
    }
  };
  
  const response = await apiRequest('PUT', `/v1/spaces/${NEW_SPACE_ID}/stories/${NEW_STORY_ID}`, updatePayload);
  
  console.log(`✅ Home story updated and published!`);
  console.log(`  Story ID: ${response.story.id}`);
  console.log(`  UUID: ${response.story.uuid}`);
  console.log(`  Published: ${response.story.published_at}`);
  
  console.log(`\nContent migrated:`);
  console.log(`  - Hero section: ${oldContent.body?.find(b => b.component === 'hero') ? '✓' : '✗'}`);
  console.log(`  - Equipment Grid: ${oldContent.body?.find(b => b.component === 'equipmentGrid')?.items?.length || 0} items`);
  console.log(`  - Industry Cards: ${oldContent.body?.find(b => b.component === 'industryCards')?.cards?.length || 0} cards`);
  console.log(`  - On-Site Production: ${oldContent.body?.find(b => b.component === 'onSiteProduction')?.cards?.length || 0} cards`);
  console.log(`  - Logo Grid: ${oldContent.body?.find(b => b.component === 'logoGrid')?.logos?.length || 0} logos`);
  console.log(`  - Testimonials: ${oldContent.body?.find(b => b.component === 'testimonials')?.items?.length || 0} items`);
  
  console.log(`\n✅ Migration complete!`);
  console.log(`\nNew space is ready with full homepage content!`);
  console.log(`Preview Token: 3jBwdYnafWqZjJUX2nCTqAtt`);
}

migrateHomeStory()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  });