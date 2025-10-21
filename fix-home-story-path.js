require('dotenv').config();
const StoryblokClient = require('storyblok-js-client');

const Storyblok = new StoryblokClient.default({
  oauthToken: process.env.STORYBLOK_MANAGEMENT_TOKEN
});

const SPACE_ID = process.env.REACT_APP_STORYBLOK_SPACE_ID;

async function fixHomeStoryPath() {
  try {
    console.log('Fetching Home story...');
    
    // Get the Home story
    const response = await Storyblok.get(`spaces/${SPACE_ID}/stories`, {
      with_slug: 'home'
    });
    
    if (!response.data.stories || response.data.stories.length === 0) {
      console.error('Home story not found!');
      return;
    }
    
    const homeStory = response.data.stories[0];
    console.log('\nCurrent Home story configuration:');
    console.log('- ID:', homeStory.id);
    console.log('- Name:', homeStory.name);
    console.log('- Slug:', homeStory.slug);
    console.log('- Full slug:', homeStory.full_slug);
    console.log('- Default full slug:', homeStory.default_full_slug);
    console.log('- Is startpage:', homeStory.is_startpage);
    console.log('- Parent ID:', homeStory.parent_id);
    
    // Check if it needs fixing
    if (homeStory.slug === 'home' && homeStory.default_full_slug !== '') {
      console.log('\n⚠️  Issue detected: Home story path is "home" instead of root "/"');
      console.log('This causes the Visual Editor to show: Location + /home');
      console.log('\nFixing...');
      
      // Update the story to be at root
      const updateResponse = await Storyblok.put(
        `spaces/${SPACE_ID}/stories/${homeStory.id}`,
        {
          story: {
            name: homeStory.name,
            slug: '', // Empty slug for root
            default_full_slug: '',
            is_startpage: true,
            parent_id: 0
          },
          force_update: '1',
          publish: '1'
        }
      );
      
      console.log('\n✅ Home story updated successfully!');
      console.log('New configuration:');
      console.log('- Slug:', updateResponse.data.story.slug || '(empty/root)');
      console.log('- Default full slug:', updateResponse.data.story.default_full_slug || '(empty/root)');
      console.log('- Is startpage:', updateResponse.data.story.is_startpage);
      
      console.log('\n📝 The Visual Editor should now preview at:');
      console.log('https://coldjet-storyblok-clone.netlify.app/');
      console.log('\nPlease refresh your Storyblok Visual Editor to see the changes.');
      
    } else if (homeStory.slug === '' || homeStory.default_full_slug === '') {
      console.log('\n✅ Home story is already correctly configured at root path!');
      console.log('The Visual Editor should preview at:');
      console.log('https://coldjet-storyblok-clone.netlify.app/');
      
      console.log('\n💡 If you\'re still seeing my-company.com, try these steps:');
      console.log('1. Clear your browser cache');
      console.log('2. Hard refresh the Storyblok editor (Ctrl+Shift+R or Cmd+Shift+R)');
      console.log('3. Check Settings → Visual Editor → Location is: https://coldjet-storyblok-clone.netlify.app/');
      console.log('4. Make sure there are no Preview URLs configured that might override');
      
    } else {
      console.log('\n⚠️  Unexpected configuration. Current slug:', homeStory.slug);
    }
    
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

fixHomeStoryPath();