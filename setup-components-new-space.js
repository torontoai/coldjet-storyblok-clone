const axios = require('axios');

// NEW SPACE CREDENTIALS
const SPACE_ID = '287617756728481';
const PAT_TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';
const API_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

const headers = {
  'Authorization': PAT_TOKEN,
  'Content-Type': 'application/json'
};

// Component schemas with alt_text fields included
const componentSchemas = [
  {
    name: 'page',
    display_name: 'Page',
    is_root: true,
    is_nestable: false,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        required: true,
        description: 'Page title'
      },
      body: {
        type: 'bloks',
        pos: 1,
        restrict_components: true,
        component_whitelist: [
          'hero',
          'equipmentGrid',
          'industryCards',
          'onSiteProduction',
          'testimonials',
          'logoGrid',
          'footer'
        ]
      }
    }
  },
  {
    name: 'hero',
    display_name: 'Hero Section',
    is_root: false,
    is_nestable: true,
    schema: {
      headline: {
        type: 'text',
        pos: 0,
        description: 'Main headline'
      },
      subheadline: {
        type: 'text',
        pos: 1,
        description: 'Subheadline (green text)'
      },
      subtitle: {
        type: 'text',
        pos: 2,
        description: 'Subtitle',
        default_value: 'Leading the way in sustainable cleaning'
      },
      description: {
        type: 'richtext',
        pos: 3,
        description: 'Description paragraph'
      },
      video: {
        type: 'asset',
        pos: 4,
        description: 'Background video',
        filetypes: ['video']
      },
      background_image: {
        type: 'asset',
        pos: 5,
        description: 'Fallback background image',
        filetypes: ['images']
      }
    }
  },
  {
    name: 'equipmentGrid',
    display_name: 'Equipment Grid',
    is_root: false,
    is_nestable: true,
    schema: {
      items: {
        type: 'bloks',
        pos: 0,
        restrict_components: true,
        component_whitelist: ['equipmentItem']
      },
      spacing: {
        type: 'number',
        pos: 1,
        label: 'Card Gap (px)',
        default_value: 20,
        description: 'Spacing between cards in pixels'
      }
    }
  },
  {
    name: 'equipmentItem',
    display_name: 'Equipment Item',
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        required: true,
        description: 'Equipment title'
      },
      description: {
        type: 'textarea',
        pos: 1,
        description: 'Equipment description'
      },
      image: {
        type: 'asset',
        pos: 2,
        required: true,
        label: 'Product Photo (500x500px JPG/WebP)',
        description: 'Equipment image (recommended 500x500px JPG or WebP)',
        filetypes: ['images']
      },
      alt_text: {
        type: 'text',
        pos: 3,
        required: true,
        label: 'Image Alt Text',
        description: 'Accessible description of the image for screen readers'
      },
      link_url: {
        type: 'text',
        pos: 4,
        required: true,
        description: 'Link URL'
      },
      link_text: {
        type: 'text',
        pos: 5,
        description: 'Link text',
        default_value: 'View Solutions'
      }
    }
  },
  {
    name: 'industryCards',
    display_name: 'Industry Cards',
    is_root: false,
    is_nestable: true,
    schema: {
      cards: {
        type: 'bloks',
        pos: 0,
        restrict_components: true,
        component_whitelist: ['industryCard']
      }
    }
  },
  {
    name: 'industryCard',
    display_name: 'Industry Card',
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        required: true,
        description: 'Industry name'
      },
      background_image: {
        type: 'asset',
        pos: 1,
        required: true,
        label: 'Background Image',
        description: 'Industry background image',
        filetypes: ['images']
      },
      alt_text: {
        type: 'text',
        pos: 2,
        required: true,
        label: 'Image Alt Text',
        description: 'Accessible description of the background image for screen readers'
      },
      link: {
        type: 'text',
        pos: 3,
        required: true,
        description: 'Industry page URL'
      }
    }
  },
  {
    name: 'footer',
    display_name: 'Footer',
    is_root: false,
    is_nestable: true,
    schema: {
      logo: {
        type: 'asset',
        pos: 0,
        description: 'Footer logo',
        filetypes: ['images']
      },
      copyright: {
        type: 'text',
        pos: 1,
        description: 'Copyright text',
        default_value: '© 2025 Cold Jet'
      }
    }
  }
];

async function createComponent(component) {
  try {
    console.log(`\n📝 Creating component: ${component.name}`);
    
    const response = await axios.post(
      `${API_BASE}/components`,
      { component },
      { headers }
    );
    
    console.log(`✅ Created: ${component.display_name} (ID: ${response.data.component.id})`);
    return response.data.component;
  } catch (error) {
    if (error.response?.status === 422 && error.response?.data?.name?.[0] === 'has already been taken') {
      console.log(`⚠️  Component ${component.name} already exists, updating...`);
      return await updateComponent(component);
    }
    console.error(`❌ Error creating ${component.name}:`, error.response?.data || error.message);
    throw error;
  }
}

async function updateComponent(component) {
  try {
    // First, get the component ID
    const listResponse = await axios.get(`${API_BASE}/components`, { headers });
    const existingComponent = listResponse.data.components.find(c => c.name === component.name);
    
    if (!existingComponent) {
      console.log(`Component ${component.name} not found, creating new...`);
      return await createComponent(component);
    }
    
    const response = await axios.put(
      `${API_BASE}/components/${existingComponent.id}`,
      { component },
      { headers }
    );
    
    console.log(`✅ Updated: ${component.display_name} (ID: ${response.data.component.id})`);
    return response.data.component;
  } catch (error) {
    console.error(`❌ Error updating ${component.name}:`, error.response?.data || error.message);
    throw error;
  }
}

async function setupComponents() {
  console.log('🚀 Setting up Storyblok components in NEW space...\n');
  console.log(`Space ID: ${SPACE_ID}`);
  console.log(`Total components to create: ${componentSchemas.length}\n`);
  
  const results = [];
  
  for (const schema of componentSchemas) {
    try {
      const result = await createComponent(schema);
      results.push(result);
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to process component ${schema.name}`);
    }
  }
  
  console.log('\n✨ Component setup complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   Total components: ${results.length}/${componentSchemas.length}`);
  console.log(`\n✅ Component schemas now include:`);
  console.log(`   - industryCard: alt_text field (required)`);
  console.log(`   - equipmentItem: alt_text field (required)`);
  
  return results;
}

async function main() {
  try {
    await setupComponents();
    
    console.log('\n\n🎉 Setup complete!');
    console.log('\n📝 Next steps:');
    console.log('   1. Update React components to use blok.alt_text');
    console.log('   2. Add alt_text values to content in Storyblok');
    console.log('   3. Add background images to industry cards');
  } catch (error) {
    console.error('\n💥 Setup failed:', error.message);
    process.exit(1);
  }
}

main();