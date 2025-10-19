async function checkSpaceStructure() {
  const MANAGEMENT_TOKEN = '0rAt6keUZtMUIQWhqfHTRQtt-98283665806763-aYGdcvLg7SZphX7QzX3S';
  const SPACE_ID = '287617756728481';

  const headers = {
    'Authorization': MANAGEMENT_TOKEN,
    'Content-Type': 'application/json',
  };

  try {
    console.log('Fetching all stories in space...');
    const response = await fetch(`https://api.storyblok.com/v1/spaces/${SPACE_ID}/stories`, {
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      console.log('\nTotal stories:', data.stories.length);
      console.log('\nStory structure:');
      data.stories.forEach(story => {
        console.log(`- ID: ${story.id}, Name: "${story.name}", Slug: "${story.slug}", Parent: ${story.parent_id || 'root'}, Is Folder: ${story.is_folder}, Is Startpage: ${story.is_startpage}`);
      });
    } else {
      const errorData = await response.json();
      console.error('Error:', response.status, errorData);
    }
  } catch (error) {
    console.error('Network error:', error.message);
  }
}

checkSpaceStructure();