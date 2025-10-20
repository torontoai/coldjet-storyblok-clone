const axios = require('axios');

// NEW SPACE CREDENTIALS
const SPACE_ID = '287617756728481';
const PAT_TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';
const API_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

const headers = {
  'Authorization': PAT_TOKEN,
  'Content-Type': 'application/json'
};

async function getComponent(componentName) {
  try {
    const response = await axios.get(`${API_BASE}/components`, { headers });
    return response.data.components.find(c => c.name === componentName);
  } catch (error) {
    console.error(`Error fetching component ${componentName}:`, error.response?.data || error.message);
    throw error;
  }
}

async function updateIndustryCardSchema() {
  try {
    console.log('\n📝 Updating industryCard schema...');
    
    const existingComponent = await getComponent('industryCard');
    
    if (!existingComponent) {
      console.log('❌ industryCard component not found in space!');
      return;
    }
    
    console.log(`Found component ID: ${existingComponent.id}`);
    
    // Update the schema to add alt_text field
    const updatedSchema = {
      ...existingComponent.schema,
      alt_text: {
        type: 'text',
        pos: 3,
        required: true,
        label: 'Image Alt Text',
        description: 'Accessibility text for screen readers describing the background image'
      }
    };
    
    // Shift other fields down
    if (existingComponent.schema.link) {
      existingComponent.schema.link.pos = 4;
    }
    if (existingComponent.schema.overlay) {
      existingComponent.schema.overlay.pos = 5;
    }
    
    const response = await axios.put(
      `${API_BASE}/components/${existingComponent.id}`,
      {
        component: {
          name: existingComponent.name,
          display_name: existingComponent.display_name,
          schema: updatedSchema,
          is_root: existingComponent.is_root,
          is_nestable: existingComponent.is_nestable
        }
      },
      { headers }
    );
    
    console.log('✅ industryCard schema updated successfully!');
    console.log('   Added: alt_text field (required)');
    return response.data.component;
  } catch (error) {
    console.error('❌ Error updating industryCard:', error.response?.data || error.message);
    throw error;
  }
}

async function verifyEquipmentItemSchema() {
  try {
    console.log('\n🔍 Verifying equipmentItem schema...');
    
    const component = await getComponent('equipmentItem');
    
    if (!component) {
      console.log('❌ equipmentItem component not found!');
      return;
    }
    
    const hasAltText = component.schema.alt_text;
    const imageRequired = component.schema.image?.required;
    
    console.log(`Equipment Item Schema Status:`);
    console.log(`  - alt_text field exists: ${hasAltText ? '✅ YES' : '❌ NO'}`);
    console.log(`  - alt_text required: ${hasAltText?.required ? '✅ YES' : '❌ NO'}`);
    console.log(`  - image field required: ${imageRequired ? '✅ YES' : '❌ NO'}`);
    
    if (hasAltText && hasAltText.required && imageRequired) {
      console.log('✅ equipmentItem schema is already correctly configured!');
    } else {
      console.log('⚠️  equipmentItem schema may need updates');
    }
    
    return component;
  } catch (error) {
    console.error('❌ Error verifying equipmentItem:', error.response?.data || error.message);
    throw error;
  }
}

async function main() {
  try {
    console.log('🚀 Updating Storyblok Component Schemas');
    console.log(`Space ID: ${SPACE_ID}\n`);
    
    // Update industryCard to add alt_text
    await updateIndustryCardSchema();
    
    // Verify equipmentItem already has alt_text
    await verifyEquipmentItemSchema();
    
    console.log('\n✨ Schema updates complete!');
    console.log('\n📝 Next steps:');
    console.log('   1. Update IndustryCards.js to use card.alt_text');
    console.log('   2. Add alt_text values to all industry cards in Storyblok');
    console.log('   3. Verify equipment items have alt_text values');
    
  } catch (error) {
    console.error('\n💥 Update failed:', error.message);
    process.exit(1);
  }
}

main();