require('dotenv').config();
const StoryblokClient = require('storyblok-js-client');

const Storyblok = new StoryblokClient.default({
  oauthToken: process.env.STORYBLOK_MANAGEMENT_TOKEN
});

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;

async function debugStory() {
  try {
    console.log('\n🔍 DETAILED STORY DEBUG\n');
    
    // Get all stories
    const response = await Storyblok.get(`spaces/${SPACE_ID}/stories`);
    console.log(`Total stories found: ${response.data.stories.length}\n`);
    
    // List all stories
    console.log('All stories:');
    response.data.stories.forEach(s => {
      console.log(`  - ${s.name} (slug: "${s.slug}", startpage: ${s.is_startpage}, ID: ${s.id})`);
    });
    
    // Find home
    let homeStory = response.data.stories.find(s => s.is_startpage || s.slug === 'home');
    
    if (!homeStory) {
      console.log('\n❌ No home story found!');
      return;
    }
    
    console.log(`\n📄 HOME STORY DETAILS:\n`);
    console.log(`Name: ${homeStory.name}`);
    console.log(`Slug: ${homeStory.slug}`);
    console.log(`ID: ${homeStory.id}`);
    console.log(`Is Startpage: ${homeStory.is_startpage}`);
    console.log(`Parent ID: ${homeStory.parent_id}`);
    console.log(`Published: ${homeStory.published}`);
    
    console.log(`\n📦 CONTENT OBJECT:\n`);
    console.log(`Type: ${typeof homeStory.content}`);
    console.log(`Is null: ${homeStory.content === null}`);
    console.log(`Is undefined: ${homeStory.content === undefined}`);
    
    if (homeStory.content) {
      console.log(`Has component: ${!!homeStory.content.component}`);
      console.log(`Component type: ${homeStory.content.component}`);
      console.log(`Has body: ${!!homeStory.content.body}`);
      
      if (homeStory.content.body) {
        console.log(`Body is array: ${Array.isArray(homeStory.content.body)}`);
        console.log(`Body length: ${homeStory.content.body.length}`);
        
        if (homeStory.content.body.length > 0) {
          console.log('\n📋 CONTENT BLOCKS:');
          homeStory.content.body.forEach((block, i) => {
            console.log(`  ${i + 1}. ${block.component} (uid: ${block._uid})`);
          });
        }
      }
      
      console.log(`\n📄 FULL CONTENT:\n`);
      console.log(JSON.stringify(homeStory.content, null, 2));
    } else {
      console.log('❌ Content is null/undefined!');
    }
    
    // Try getting the story directly by ID
    console.log(`\n🔍 Fetching story directly by ID...\n`);
    const directResponse = await Storyblok.get(`spaces/${SPACE_ID}/stories/${homeStory.id}`);
    console.log(`Direct fetch - Has content: ${!!directResponse.data.story.content}`);
    
    if (directResponse.data.story.content) {
      console.log(`Direct fetch - Has body: ${!!directResponse.data.story.content.body}`);
      if (directResponse.data.story.content.body) {
        console.log(`Direct fetch - Body length: ${directResponse.data.story.content.body.length}`);
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

debugStory();