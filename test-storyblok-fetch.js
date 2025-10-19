const { StoryblokClient } = require('@storyblok/js');

const apiToken = process.env.REACT_APP_STORYBLOK_TOKEN || 'Il3q3ANPr6ncFWVT8skU9Qtt';

const storyblok = new StoryblokClient({
  accessToken: apiToken,
});

async function testFetch() {
  try {
    console.log('Testing fetch with draft version...');
    const draftData = await storyblok.get('cdn/stories/home', {
      version: 'draft',
    });
    console.log('Draft fetch success:', !!draftData.data.story);
    if (draftData.data.story) {
      console.log('Draft story content keys:', Object.keys(draftData.data.story.content));
      console.log('Draft body length:', draftData.data.story.content.body ? draftData.data.story.content.body.length : 0);
    }

    console.log('Testing fetch with published version...');
    const publishedData = await storyblok.get('cdn/stories/home', {
      version: 'published',
    });
    console.log('Published fetch success:', !!publishedData.data.story);
    if (publishedData.data.story) {
      console.log('Published story content keys:', Object.keys(publishedData.data.story.content));
      console.log('Published body length:', publishedData.data.story.content.body ? publishedData.data.story.content.body.length : 0);
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

testFetch();