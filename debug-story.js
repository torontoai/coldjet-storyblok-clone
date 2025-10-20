const axios = require('axios');

const SPACE_ID = '287617756728481';
const PAT_TOKEN = 'Cr366ZpqFOEiANZlKYd4VQtt-98283665806763-3yRxoYrMyzheMjzxLwxs';
const MAPI_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

const headers = {
  'Authorization': PAT_TOKEN,
  'Content-Type': 'application/json'
};

async function debugStory() {
  try {
    console.log('Fetching home story...\n');
    
    // First get the story list to find the ID
    const listResponse = await axios.get(
      `${MAPI_BASE}/stories`,
      {
        headers,
        params: {
          with_slug: 'home'
        }
      }
    );

    if (listResponse.data.stories && listResponse.data.stories.length > 0) {
      const storyId = listResponse.data.stories[0].id;
      console.log(`Found story ID: ${storyId}\n`);
      
      // Now fetch the full story with content
      const storyResponse = await axios.get(
        `${MAPI_BASE}/stories/${storyId}`,
        { headers }
      );
      
      const story = storyResponse.data.story;
      console.log('Full story structure:');
      console.log(JSON.stringify(story, null, 2));
      
      if (story.content) {
        console.log('\n\nContent body:');
        console.log(JSON.stringify(story.content.body, null, 2));
      }
    } else {
      console.log('No home story found');
    }
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

debugStory();