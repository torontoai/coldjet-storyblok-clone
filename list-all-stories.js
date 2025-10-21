require('dotenv').config();
const StoryblokClient = require('storyblok-js-client');

const Storyblok = new StoryblokClient.default({
  oauthToken: process.env.STORYBLOK_MANAGEMENT_TOKEN
});

const SPACE_ID = process.env.REACT_APP_STORYBLOK_SPACE_ID;

async function listAllStories() {
  try {
    console.log(`Fetching all stories from space ${SPACE_ID}...`);
    
    const response = await Storyblok.get(`spaces/${SPACE_ID}/stories`);
    
    console.log(`\nFound ${response.data.stories.length} stories:\n`);
    
    response.data.stories.forEach((story, index) => {
      console.log(`${index + 1}. ${story.name}`);
      console.log(`   - ID: ${story.id}`);
      console.log(`   - Slug: ${story.slug}`);
      console.log(`   - Full slug: ${story.full_slug}`);
      console.log(`   - Is startpage: ${story.is_startpage}`);
      console.log(`   - Published: ${story.published}`);
      console.log(`   - Content type: ${story.content?.component || 'unknown'}`);
      console.log('');
    });
    
    // Check for startpage
    const startpage = response.data.stories.find(s => s.is_startpage);
    if (startpage) {
      console.log(`✅ Startpage found: "${startpage.name}" (slug: ${startpage.slug || '(root)'})`);
    } else {
      console.log(`⚠️  No startpage configured!`);
    }
    
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

listAllStories();