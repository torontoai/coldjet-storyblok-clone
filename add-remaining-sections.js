const https = require('https');

const SPACE_ID = '287934232080460';
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

// Missing components needed for complete homepage
const missingComponents = [
  {
    name: 'circularEconomy',
    display_name: 'Circular Economy Section',
    is_nestable: true,
    schema: {
      headline: { type: 'text', default_value: 'Circular Economy Solutions' },
      description: { type: 'textarea' },
      background_image: { type: 'asset', filetypes: ['images'] },
      cta_text: { type: 'text', default_value: 'Learn More' },
      cta_url: { type: 'text' }
    }
  },
  {
    name: 'industrialChallenges',
    display_name: 'Industrial Challenges',
    is_nestable: true,
    schema: {
      title: { type: 'text', default_value: 'Tackling Industrial Challenges' },
      content: { type: 'richtext' }
    }
  },
  {
    name: 'cleaningMethods',
    display_name: 'Cleaning Methods Comparison',
    is_nestable: true,
    schema: {
      title: { type: 'text', default_value: 'Why Choose Dry Ice Blasting?' },
      content: { type: 'richtext' },
      comparison_table: { type: 'textarea' }
    }
  },
  {
    name: 'coldChain',
    display_name: 'Cold Chain Section',
    is_nestable: true,
    schema: {
      title: { type: 'text' },
      content: { type: 'richtext' },
      image: { type: 'asset', filetypes: ['images'] }
    }
  },
  {
    name: 'customers',
    display_name: 'Customers Section',
    is_nestable: true,
    schema: {
      title: { type: 'text', default_value: 'Our Customers' },
      content: { type: 'richtext' }
    }
  },
  {
    name: 'globalOffices',
    display_name: 'Global Offices',
    is_nestable: true,
    schema: {
      title: { type: 'text', default_value: 'Global Presence' },
      description: { type: 'textarea' },
      offices: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['office']
      }
    }
  },
  {
    name: 'office',
    display_name: 'Office Location',
    is_nestable: true,
    schema: {
      city: { type: 'text', required: true },
      country: { type: 'text', required: true },
      address: { type: 'textarea' },
      phone: { type: 'text' },
      email: { type: 'text' }
    }
  }
];

async function addMissingSections() {
  console.log('Adding missing component schemas...\n');
  
  for (const component of missingComponents) {
    try {
      const response = await apiRequest(
        'POST',
        `/v1/spaces/${SPACE_ID}/components`,
        { component }
      );
      console.log(`✓ Created: ${component.name} (ID: ${response.component.id})`);
    } catch (err) {
      if (err.message.includes('has already been taken')) {
        console.log(`⚠ Exists: ${component.name}`);
      } else {
        console.error(`✗ Failed: ${component.name} - ${err.message}`);
      }
    }
  }
  
  console.log('\n✅ Missing components setup complete!');
  console.log('\nNext: Update home story to include these sections');
}

addMissingSections()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  });