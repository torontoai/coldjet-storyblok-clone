const axios = require('axios');

const SPACE_ID = '287617756728481';
const PAT_TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';
const MAPI_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

const headers = {
  'Authorization': PAT_TOKEN,
  'Content-Type': 'application/json'
};

async function verifyMigration() {
  try {
    console.log('🔍 Verifying homepage content migration...\n');
    
    // Fetch the story
    const listResponse = await axios.get(
      `${MAPI_BASE}/stories`,
      { headers, params: { with_slug: 'home' } }
    );
    
    const storyId = listResponse.data.stories[0].id;
    const storyResponse = await axios.get(
      `${MAPI_BASE}/stories/${storyId}`,
      { headers }
    );
    
    const story = storyResponse.data.story;
    const content = story.content;
    
    console.log('📊 Verification Results:\n');
    
    // Check equipment items
    const equipmentGrid = content.body.find(b => b.component === 'equipmentGrid');
    const equipmentItems = equipmentGrid?.items || [];
    
    console.log('━━━ EQUIPMENT ITEMS ━━━');
    console.log(`Total: ${equipmentItems.length}`);
    
    let equipmentErrors = 0;
    equipmentItems.forEach((item, idx) => {
      const hasImage = item.image && item.image.filename;
      const hasAltText = item.alt_text && item.alt_text.trim() !== '';
      const hasTitle = item.title && item.title.trim() !== '';
      
      const status = hasImage && hasAltText && hasTitle ? '✅' : '❌';
      console.log(`\n${idx + 1}. ${item.title || 'Untitled'} ${status}`);
      console.log(`   Image: ${hasImage ? '✅' : '❌'} ${item.image?.filename || 'Missing'}`);
      console.log(`   Alt Text: ${hasAltText ? '✅' : '❌'} ${item.alt_text ? `"${item.alt_text.substring(0, 50)}..."` : 'Missing'}`);
      
      if (!hasImage || !hasAltText || !hasTitle) equipmentErrors++;
    });
    
    // Check industry cards
    const industryCards = content.body.find(b => b.component === 'industryCards');
    const cards = industryCards?.cards || [];
    
    console.log('\n\n━━━ INDUSTRY CARDS ━━━');
    console.log(`Total: ${cards.length}`);
    
    let industryErrors = 0;
    cards.forEach((card, idx) => {
      const hasImage = card.background_image && card.background_image.filename;
      const hasAltText = card.alt_text && card.alt_text.trim() !== '';
      const hasTitle = card.title && card.title.trim() !== '';
      const hasLink = card.link && card.link.trim() !== '';
      
      const status = hasImage && hasAltText && hasTitle && hasLink ? '✅' : '❌';
      console.log(`\n${idx + 1}. ${card.title || 'Untitled'} ${status}`);
      console.log(`   Background Image: ${hasImage ? '✅' : '❌'} ${card.background_image?.filename || 'Missing'}`);
      console.log(`   Alt Text: ${hasAltText ? '✅' : '❌'} ${card.alt_text ? `"${card.alt_text.substring(0, 50)}..."` : 'Missing'}`);
      console.log(`   Link: ${hasLink ? '✅' : '❌'} ${card.link || 'Missing'}`);
      
      if (!hasImage || !hasAltText || !hasTitle || !hasLink) industryErrors++;
    });
    
    // Summary
    console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📈 MIGRATION SUMMARY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    const totalErrors = equipmentErrors + industryErrors;
    const totalItems = equipmentItems.length + cards.length;
    const successRate = ((totalItems - totalErrors) / totalItems * 100).toFixed(1);
    
    console.log(`Equipment Items: ${equipmentItems.length - equipmentErrors}/${equipmentItems.length} valid`);
    console.log(`Industry Cards: ${cards.length - industryErrors}/${cards.length} valid`);
    console.log(`Total Success Rate: ${successRate}%`);
    console.log(`\nValidation Errors: ${totalErrors === 0 ? '✅ None - All fixed!' : `❌ ${totalErrors} remaining`}`);
    
    console.log('\n📝 Story Details:');
    console.log(`   ID: ${story.id}`);
    console.log(`   Published: ${story.published ? 'Yes' : 'No'}`);
    console.log(`   Last Updated: ${new Date(story.updated_at).toLocaleString()}`);
    
    console.log('\n🔗 Links:');
    console.log(`   Storyblok Editor: https://app.storyblok.com/#/me/spaces/${SPACE_ID}/stories/0/0/${story.id}`);
    console.log('   Live Preview: https://coldjet-storyblok-clone.netlify.app/\n');
    
    if (totalErrors === 0) {
      console.log('🎉 SUCCESS! All validation errors have been resolved!');
    } else {
      console.log(`⚠️  ${totalErrors} items still need attention in Storyblok UI`);
    }
    
  } catch (error) {
    console.error('❌ Verification failed:', error.response?.data || error.message);
  }
}

verifyMigration();