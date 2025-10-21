const axios = require('axios');

const SPACE_ID = '287934232080460';
const TOKEN = 'U3VA550SUKdEuQDC9iAvYwtt-98283665806763-6NVFKYshsznZuHpB3vc_';

const components = [
  {
    name: 'buttonSection',
    display_name: 'Button Section',
    schema: {
      text: { type: 'text' },
      url: { type: 'text' },
      style: {
        type: 'option',
        options: [
          { name: 'Primary', value: 'primary' },
          { name: 'Bordered', value: 'bordered' }
        ]
      },
      alignment: {
        type: 'option',
        options: [
          { name: 'Left', value: 'left' },
          { name: 'Center', value: 'center' },
          { name: 'Right', value: 'right' }
        ]
      }
    }
  },
  {
    name: 'whyChooseBlasting',
    display_name: 'Why Choose Dry Ice Blasting',
    schema: {
      kicker: { type: 'text' },
      title: { type: 'textarea' },
      description: { type: 'textarea' },
      comparison_table: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['comparisonRow']
      }
    }
  },
  {
    name: 'comparisonRow',
    display_name: 'Comparison Row',
    schema: {
      method: { type: 'text' },
      abrasive: { type: 'boolean' },
      secondary_waste: { type: 'boolean' },
      sustainable: { type: 'boolean' },
      toxic: { type: 'boolean' },
      conductive: { type: 'boolean' }
    }
  }
];

async function createComponent(component) {
  try {
    const response = await axios.post(
      `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/components`,
      {
        component: {
          name: component.name,
          display_name: component.display_name,
          schema: component.schema,
          is_root: false,
          is_nestable: true
        }
      },
      { headers: { 'Authorization': TOKEN } }
    );
    console.log(`✓ Created: ${component.display_name}`);
    return true;
  } catch (error) {
    if (error.response?.data?.error?.includes('already been taken')) {
      console.log(`⏭ Exists: ${component.display_name}`);
      return true;
    }
    console.error(`✗ Failed ${component.display_name}:`, error.response?.data || error.message);
    return false;
  }
}

async function main() {
  console.log('🚀 Creating missing Storyblok components...\n');
  console.log('═'.repeat(80));
  
  for (const component of components) {
    await createComponent(component);
    await new Promise(r => setTimeout(r, 500));
  }
  
  console.log('\n═'.repeat(80));
  console.log('\n✅ Component creation complete!');
  console.log('\nCreated components:');
  console.log('  1. buttonSection - For "View all equipment", "Find a solution" buttons');
  console.log('  2. whyChooseBlasting - "Why Choose Dry Ice Blasting?" section with table');
  console.log('  3. comparisonRow - Row data for comparison table');
}

main().catch(console.error);