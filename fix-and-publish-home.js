const https = require('https');

const SPACE_ID = '287934232080460';
const STORY_ID = '103348086419141';
const TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';

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

async function fixAndPublish() {
  console.log('Fetching current story...');
  const getResponse = await apiRequest('GET', `/v1/spaces/${SPACE_ID}/stories/${STORY_ID}`);
  const story = getResponse.story;
  const content = story.content;
  
  console.log(`Story: ${story.name}`);
  console.log(`Sections: ${content.body?.length || 0}`);
  
  // Fix field name mismatches
  console.log('\nFixing field names...');
  
  // Fix industryCards: rename 'image' to 'background_image'
  const industryCards = content.body.find(b => b.component === 'industryCards');
  if (industryCards && industryCards.cards) {
    industryCards.cards.forEach(card => {
      if (card.image && !card.background_image) {
        card.background_image = card.image;
        delete card.image;
        console.log(`  ✓ Fixed industryCard: ${card.title}`);
      }
    });
  }
  
  console.log('\nPublishing story...');
  const updatePayload = {
    story: {
      name: story.name,
      slug: story.slug,
      content: content
    },
    publish: 1
  };
  
  const response = await apiRequest('PUT', `/v1/spaces/${SPACE_ID}/stories/${STORY_ID}`, updatePayload);
  
  console.log('✅ Story fixed and published!');
  console.log(`  Story ID: ${response.story.id}`);
  console.log(`  Published: ${response.story.published ? 'YES' : 'NO'}`);
}

fixAndPublish()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });