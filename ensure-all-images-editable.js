require('dotenv').config();
const StoryblokClient = require('storyblok-js-client');

const Storyblok = new StoryblokClient.default({
  oauthToken: process.env.STORYBLOK_MANAGEMENT_TOKEN
});

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;

async function ensureAllImagesEditable() {
  try {
    console.log('🔍 Step 1: Checking component schemas for image fields...\n');
    
    const componentsResponse = await Storyblok.get(`spaces/${SPACE_ID}/components`);
    const components = componentsResponse.data.components;
    
    // Components that need image asset fields
    const imageFieldUpdates = {
      hero: {
        needsFields: ['background_image'],
        currentFields: []
      },
      circularEconomy: {
        needsFields: ['background_image'],
        currentFields: []
      },
      coldChain: {
        needsFields: ['background_image'],
        currentFields: []
      }
    };
    
    // Check existing fields
    for (const [componentName, config] of Object.entries(imageFieldUpdates)) {
      const component = components.find(c => c.name === componentName);
      if (component && component.schema) {
        const schemaObj = typeof component.schema === 'string' ? JSON.parse(component.schema) : component.schema;
        const schemaKeys = Object.keys(schemaObj);
        
        config.needsFields.forEach(fieldName => {
          if (schemaKeys.includes(fieldName)) {
            config.currentFields.push(fieldName);
          }
        });
        
        const missing = config.needsFields.filter(f => !config.currentFields.includes(f));
        if (missing.length > 0) {
          console.log(`⚠️  ${componentName} missing image fields: ${missing.join(', ')}`);
        } else {
          console.log(`✅ ${componentName} has all image fields`);
        }
      }
    }
    
    console.log('\n📝 Step 2: Updating component schemas with image asset fields...\n');
    
    // Update hero component
    const heroComponent = components.find(c => c.name === 'hero');
    if (heroComponent) {
      const heroSchema = typeof heroComponent.schema === 'string' ? JSON.parse(heroComponent.schema) : heroComponent.schema;
      
      if (!heroSchema.background_image) {
        heroSchema.background_image = {
          type: 'asset',
          filetypes: ['images'],
          description: 'Hero background image'
        };
        
        await Storyblok.put(`spaces/${SPACE_ID}/components/${heroComponent.id}`, {
          component: {
            name: 'hero',
            schema: heroSchema
          }
        });
        console.log('✅ Updated hero component with background_image field');
      }
    }
    
    // Update circularEconomy component
    const circularComponent = components.find(c => c.name === 'circularEconomy');
    if (circularComponent) {
      const circularSchema = typeof circularComponent.schema === 'string' ? JSON.parse(circularComponent.schema) : circularComponent.schema;
      
      if (!circularSchema.background_image) {
        circularSchema.background_image = {
          type: 'asset',
          filetypes: ['images'],
          description: 'Background image for circular economy section'
        };
        
        await Storyblok.put(`spaces/${SPACE_ID}/components/${circularComponent.id}`, {
          component: {
            name: 'circularEconomy',
            schema: circularSchema
          }
        });
        console.log('✅ Updated circularEconomy component with background_image field');
      }
    }
    
    // Update coldChain component
    const coldChainComponent = components.find(c => c.name === 'coldChain');
    if (coldChainComponent) {
      const coldChainSchema = typeof coldChainComponent.schema === 'string' ? JSON.parse(coldChainComponent.schema) : coldChainComponent.schema;
      
      if (!coldChainSchema.background_image) {
        coldChainSchema.background_image = {
          type: 'asset',
          filetypes: ['images'],
          description: 'Background image for cold chain section'
        };
        
        await Storyblok.put(`spaces/${SPACE_ID}/components/${coldChainComponent.id}`, {
          component: {
            name: 'coldChain',
            schema: coldChainSchema
          }
        });
        console.log('✅ Updated coldChain component with background_image field');
      }
    }
    
    console.log('\n🎉 All component schemas verified and updated!\n');
    console.log('💡 Next: Update Home story content with actual image asset references');
    console.log('   You can now select images from Storyblok Assets in the Visual Editor');
    
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

ensureAllImagesEditable();