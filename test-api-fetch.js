async function testStoryblokAPI() {
  const token = '5xDVQFuzDIg51xrqRItOFgtt';

  try {
    console.log('Testing draft version...');
    const draftUrl = `https://api.storyblok.com/v1/cdn/stories/home?version=draft&token=${token}`;
    const draftResponse = await fetch(draftUrl);
    const draftData = await draftResponse.json();
    console.log('Draft status:', draftResponse.status);
    if (draftResponse.ok) {
      console.log('Draft story exists:', !!draftData.story);
      if (draftData.story) {
        console.log('Draft content keys:', Object.keys(draftData.story.content));
        console.log('Draft body length:', draftData.story.content.body ? draftData.story.content.body.length : 0);
        if (draftData.story.content.body && draftData.story.content.body.length > 0) {
          console.log('First block component:', draftData.story.content.body[0].component);
        }
      }
    } else {
      console.log('Draft error data:', draftData);
    }

    console.log('\nTesting published version...');
    const publishedUrl = `https://api.storyblok.com/v1/cdn/stories/home?version=published&token=${token}`;
    const publishedResponse = await fetch(publishedUrl);
    const publishedData = await publishedResponse.json();
    console.log('Published status:', publishedResponse.status);
    if (publishedResponse.ok) {
      console.log('Published story exists:', !!publishedData.story);
      if (publishedData.story) {
        console.log('Published content keys:', Object.keys(publishedData.story.content));
        console.log('Published body length:', publishedData.story.content.body ? publishedData.story.content.body.length : 0);
        if (publishedData.story.content.body && publishedData.story.content.body.length > 0) {
          console.log('First block component:', publishedData.story.content.body[0].component);
        }
      }
    } else {
      console.log('Published error data:', publishedData);
    }
  } catch (error) {
    console.error('Fetch error:', error.message);
  }
}

testStoryblokAPI();