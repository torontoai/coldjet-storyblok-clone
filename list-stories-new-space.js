async function listStories() {
  const MANAGEMENT_TOKEN = 'eDnw7ANwiuU17rUOqZL8Jgtt-256880-tzX65gQafwdWTum-cUL3';
  const SPACE_ID = '324703';

  const headers = {
    'Authorization': MANAGEMENT_TOKEN,
    'Content-Type': 'application/json',
  };

  const url = `https://api.storyblok.com/v1/spaces/${SPACE_ID}/stories`;

  try {
    console.log('Fetching stories from space', SPACE_ID, '...');
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      console.log('\n✓ Found', data.stories.length, 'stories:\n');
      data.stories.forEach(story => {
        console.log(`  - ID: ${story.id}`);
        console.log(`    Name: ${story.name}`);
        console.log(`    Slug: ${story.slug}`);
        console.log(`    Is Startpage: ${story.is_startpage}`);
        console.log(`    Parent ID: ${story.parent_id || 'none'}`);
        console.log('');
      });
    } else {
      const errorText = await response.text();
      console.error('✗ Error:', response.status);
      console.error('  Response:', errorText);
    }
  } catch (error) {
    console.error('✗ Network error:', error.message);
  }
}

listStories();