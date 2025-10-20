const https = require('https');

const SPACE_ID = '287934232080460'; // New ColdJet Growth Plus space
const TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';
const PREVIEW_TOKEN = '3jBwdYnafWqZjJUX2nCTqAtt';

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

const components = [
  {
    name: 'page',
    display_name: 'Page',
    is_root: true,
    is_nestable: false,
    schema: {
      title: { type: 'text' },
      body: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['hero', 'equipmentGrid', 'industryCards', 'onSiteProduction', 'testimonials', 'logoGrid']
      }
    }
  },
  {
    name: 'hero',
    display_name: 'Hero Section',
    is_nestable: true,
    schema: {
      headline: { type: 'text', required: true },
      subheadline: { type: 'text' },
      description: { type: 'textarea' },
      video_url: { type: 'text' }
    }
  },
  {
    name: 'equipmentGrid',
    display_name: 'Equipment Grid',
    is_nestable: true,
    schema: {
      items: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['equipmentItem']
      }
    }
  },
  {
    name: 'equipmentItem',
    display_name: 'Equipment Item',
    is_nestable: true,
    schema: {
      title: { type: 'text', required: true },
      description: { type: 'textarea', required: true },
      image: { type: 'asset', filetypes: ['images'], required: true },
      alt_text: { type: 'text', required: true },
      link_url: { type: 'text', required: true },
      link_text: { type: 'text', default_value: 'View Solutions' }
    }
  },
  {
    name: 'industryCards',
    display_name: 'Industry Cards',
    is_nestable: true,
    schema: {
      cards: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['industryCard']
      }
    }
  },
  {
    name: 'industryCard',
    display_name: 'Industry Card',
    is_nestable: true,
    schema: {
      title: { type: 'text', required: true },
      background_image: { type: 'asset', filetypes: ['images'], required: true },
      alt_text: { type: 'text', required: true },
      link: { type: 'text', required: true }
    }
  },
  {
    name: 'onSiteProduction',
    display_name: 'On-Site Production',
    is_nestable: true,
    schema: {
      title: { type: 'text', default_value: 'Gaining Control: The Advantages of On-Site Dry Ice Production' },
      cards: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['productionCard']
      }
    }
  },
  {
    name: 'productionCard',
    display_name: 'Production Card',
    is_nestable: true,
    schema: {
      title: { type: 'text', required: true },
      image: { type: 'asset', filetypes: ['images'], required: true },
      alt_text: { type: 'text', required: true },
      link: { type: 'text', required: true }
    }
  },
  {
    name: 'logoGrid',
    display_name: 'Logo Grid',
    is_nestable: true,
    schema: {
      title: { type: 'text', default_value: 'Trusted by Industry Leaders' },
      logos: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['logo']
      }
    }
  },
  {
    name: 'logo',
    display_name: 'Logo',
    is_nestable: true,
    schema: {
      image: { type: 'asset', filetypes: ['images'], required: true },
      alt: { type: 'text', required: true }
    }
  },
  {
    name: 'testimonials',
    display_name: 'Testimonials',
    is_nestable: true,
    schema: {
      title: { type: 'text', default_value: 'What Our Customers Say' },
      items: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['testimonial']
      }
    }
  },
  {
    name: 'testimonial',
    display_name: 'Testimonial',
    is_nestable: true,
    schema: {
      quote: { type: 'textarea', required: true },
      author: { type: 'text', required: true },
      company: { type: 'text', required: true },
      image: { type: 'asset', filetypes: ['images'] }
    }
  }
];

async function setupNewSpace() {
  console.log(`Setting up new ColdJet space (${SPACE_ID})...`);
  console.log(`Preview Token: ${PREVIEW_TOKEN}\n`);
  
  // Create components
  console.log('Creating component schemas...');
  for (const component of components) {
    try {
      const response = await apiRequest(
        'POST',
        `/v1/spaces/${SPACE_ID}/components`,
        { component }
      );
      console.log(`  ✓ Created: ${component.name} (ID: ${response.component.id})`);
    } catch (err) {
      console.error(`  ✗ Failed to create ${component.name}:`, err.message);
    }
  }
  
  console.log('\n✅ Component setup complete!');
  console.log(`\nNext steps:`);
  console.log(`1. Update .env file: REACT_APP_STORYBLOK_PREVIEW_TOKEN=${PREVIEW_TOKEN}`);
  console.log(`2. Update Netlify env var: REACT_APP_STORYBLOK_PREVIEW_TOKEN=${PREVIEW_TOKEN}`);
  console.log(`3. Create home story in Storyblok UI with these components`);
  console.log(`4. Configure Visual Editor Location: https://coldjet-storyblok-clone.netlify.app/`);
}

setupNewSpace()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
  });