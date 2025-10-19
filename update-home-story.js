async function updateStory() {
  const MANAGEMENT_TOKEN = '0rAt6keUZtMUIQWhqfHTRQtt-98283665806763-aYGdcvLg7SZphX7QzX3S';
  const SPACE_ID = '287617756728481';
  const STORY_ID = '98284480572895';

  const storyblokApiUrl = `https://api.storyblok.com/v1/spaces/${SPACE_ID}/stories/${STORY_ID}`;

  const headers = {
    'Authorization': MANAGEMENT_TOKEN,
    'Content-Type': 'application/json',
  };

  const content = {
    component: 'page',
    headline: 'Cold Jet: Leading Dry Ice Solutions Manufacturer',
    subheadline: 'Driving Sustainable Innovation in Industrial Applications',
    body: [
      {
        component: 'header',
        _uid: 'header-1',
      },
      {
        component: 'hero',
        _uid: 'hero-1',
        headline: 'Cold Jet: Leading Dry Ice Solutions Manufacturer',
        subheadline: 'Driving Sustainable Innovation<br />in Industrial Applications',
        text: 'Experience the power of Cold Jet\'s innovative dry ice technology. Our eco-friendly solutions deliver superior cleaning results, enhance efficiency, and minimize environmental impact across a broad spectrum of industries. Cold Jet provides complete and sustainable solutions for your business. These include dry ice blasting equipment as well as dry ice production systems.',
        cta_text: 'View All Equipment',
        cta_url: '/equipment',
        video_url: 'https://www.coldjet.com/wp-content/uploads/Home_page_banner_video__compressed_v2.mp4',
      },
      {
        component: 'equipmentGrid',
        _uid: 'equipment-1',
        title: 'Dry Ice Blasting Equipment',
        items: [
          {
            name: 'PCS 60',
            description: 'Portable dry ice blasting unit for industrial cleaning.',
            image: 'https://www.coldjet.com/wp-content/uploads/pcs-60.png',
            url: '/equipment/pcs-60',
          },
          {
            name: 'i3 MicroClean',
            description: 'Compact dry ice cleaning system.',
            image: 'https://www.coldjet.com/wp-content/uploads/i3-microclean.png',
            url: '/equipment/i3-microclean',
          },
        ],
      },
      {
        component: 'industryCards',
        _uid: 'industries-1',
        title: 'Industries We Serve',
        cards: [
          {
            title: 'Food & Beverage',
            description: 'Efficient cleaning without water or chemicals.',
            image: 'https://www.coldjet.com/wp-content/uploads/food-beverage.jpg',
            url: '/industries/food-beverage',
          },
          {
            title: 'Automotive',
            description: 'Precision cleaning for manufacturing lines.',
            image: 'https://www.coldjet.com/wp-content/uploads/automotive.jpg',
            url: '/industries/automotive',
          },
        ],
      },
      {
        component: 'testimonials',
        _uid: 'testimonials-1',
        title: 'What Our Customers Say',
        testimonials: [
          {
            quote: 'Cold Jet transformed our cleaning process.',
            author: 'John Doe, Company X',
          },
        ],
      },
      {
        component: 'footer',
        _uid: 'footer-1',
      },
    ],
  };

  const requestBody = {
    story: {
      name: 'Home',
      slug: 'home',
      content: content,
    },
    publish: 1,
  };

  try {
    console.log('Updating story with PAT authentication...');
    const response = await fetch(storyblokApiUrl, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Update success! Story updated and published.');
      console.log('Story ID:', data.story.id);
      console.log('Story slug:', data.story.slug);
    } else {
      const errorData = await response.json();
      console.error('Update error:', response.status, errorData);
    }
  } catch (error) {
    console.error('Network error:', error.message);
  }
}

updateStory();