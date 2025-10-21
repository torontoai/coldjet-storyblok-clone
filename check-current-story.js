require('dotenv').config();
const StoryblokClient = require('storyblok-js-client');

const Storyblok = new StoryblokClient.default({
  oauthToken: process.env.STORYBLOK_MANAGEMENT_TOKEN
});

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;

async function checkStory() {
  try {
    const response = await Storyblok.get(`spaces/${SPACE_ID}/stories`);
    const home = response.data.stories.find(s => s.is_startpage || s.slug === 'home');
    
    console.log('\n📋 HOME STORY CONTENT AUDIT\n');
    console.log(`Story Name: ${home.name}`);
    console.log(`Story ID: ${home.id}`);
    console.log(`Slug: ${home.slug}`);
    console.log(`Is Startpage: ${home.is_startpage}`);
    console.log('\n📦 CONTENT BLOCKS:\n');
    
    if (home.content && home.content.body) {
      home.content.body.forEach((block, index) => {
        console.log(`${index + 1}. ${block.component}`);
        console.log(`   _uid: ${block._uid}`);
        
        // Show key fields for each component type
        const keys = Object.keys(block).filter(k => k !== 'component' && k !== '_uid' && k !== '_editable');
        if (keys.length > 0) {
          console.log(`   Fields: ${keys.join(', ')}`);
        }
        console.log('');
      });
      
      console.log(`\n✅ Total blocks: ${home.content.body.length}`);
    } else {
      console.log('❌ No body content found!');
    }
    
    // Also show the full structure
    console.log('\n📄 FULL CONTENT STRUCTURE:\n');
    console.log(JSON.stringify(home.content, null, 2));
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

checkStory();