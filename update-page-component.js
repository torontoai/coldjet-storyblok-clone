const https = require('https');

const SPACE_ID = '287934232080460';
const COMPONENT_ID = '103348086138505'; // page component ID
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

async function updatePageComponent() {
  console.log('Updating page component schema...');
  
  const updatePayload = {
    component: {
      name: 'page',
      display_name: 'Page',
      schema: {
        title: { type: 'text' },
        body: {
          type: 'bloks',
          restrict_components: true,
          component_whitelist: [
            'hero',
            'equipmentGrid',
            'circularEconomy',
            'industrialChallenges',
            'industryCards',
            'cleaningMethods',
            'onSiteProduction',
            'coldChain',
            'customers',
            'logoGrid',
            'testimonials',
            'globalOffices'
          ]
        }
      }
    }
  };
  
  const response = await apiRequest('PUT', `/v1/spaces/${SPACE_ID}/components/${COMPONENT_ID}`, updatePayload);
  
  console.log('✅ Page component updated!');
  console.log(`  Component ID: ${response.component.id}`);
  console.log(`  Allowed components: ${updatePayload.component.schema.body.component_whitelist.length}`);
}

updatePageComponent()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('❌ Error:', err.message);
    process.exit(1);
  });