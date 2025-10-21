require('dotenv').config();
const StoryblokClient = require('storyblok-js-client');

const Storyblok = new StoryblokClient.default({
  oauthToken: process.env.STORYBLOK_MANAGEMENT_TOKEN
});

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;

async function verifyComponentSchemas() {
  try {
    console.log('🔍 Fetching all component schemas...\n');
    
    const response = await Storyblok.get(`spaces/${SPACE_ID}/components`);
    
    const componentsToCheck = [
      'hero',
      'equipmentGrid', 
      'industryCards',
      'onSiteProduction',
      'circularEconomy',
      'coldChain',
      'logoGrid',
      'testimonials'
    ];
    
    console.log('📋 Image Field Status:\n');
    
    componentsToCheck.forEach(componentName => {
      const component = response.data.components.find(c => c.name === componentName);
      if (!component) {
        console.log(`❌ ${componentName}: NOT FOUND`);
        return;
      }
      
      const imageFields = component.schema.filter(field => 
        field.type === 'asset' || 
        field.type === 'bloks' ||
        (field.type === 'section' && field.keys)
      );
      
      console.log(`${imageFields.length > 0 ? '✅' : '❌'} ${componentName}:`);
      if (imageFields.length > 0) {
        imageFields.forEach(field => {
          console.log(`   - ${field.name} (${field.type})`);
        });
      } else {
        console.log(`   - NO IMAGE FIELDS!`);
      }
      console.log('');
    });
    
    console.log('\n📝 Components needing image fields:');
    
    componentsToCheck.forEach(componentName => {
      const component = response.data.components.find(c => c.name === componentName);
      if (!component) return;
      
      const hasImageFields = component.schema.some(field => 
        field.type === 'asset' || field.type === 'bloks'
      );
      
      if (!hasImageFields) {
        console.log(`  - ${componentName}`);
      }
    });
    
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

verifyComponentSchemas();