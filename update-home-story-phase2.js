const axios = require('axios');

const SPACE_ID = '324703';
const MANAGEMENT_TOKEN = 'eDnw7ANwiuU17rUOqZL8Jgtt-256880-tzX65gQafwdWTum-cUL3'; // Use the PAT from setup script
const STORY_SLUG = 'home';

const API_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;
const headers = {
  'Authorization': `Token ${MANAGEMENT_TOKEN}`,
  'Content-Type': 'application/json'
};

// Exact content from original Cold Jet site
const homeStoryContent = {
  component: 'page',
  title: 'Home',
  body: [
    {
      component: 'hero',
      _uid: 'hero-uid-1',
      headline: 'Cold Jet: Leading Dry Ice Solutions Manufacturer',
      subheadline: 'Driving Sustainable Innovation in Industrial Applications',
      subtitle: 'Leading the way in sustainable cleaning',
      description: '<p>Experience the power of Cold Jet\'s innovative dry ice technology. Our eco-friendly solutions deliver superior cleaning results, enhance efficiency, and minimize environmental impact across a broad spectrum of industries. Cold Jet provides complete and sustainable solutions for your business. These include dry ice blasting equipment as well as dry ice production systems.</p>',
      video: { filename: 'https://www.coldjet.com/wp-content/uploads/Home_page_banner_video__compressed_v2.mp4' }, // Assume uploaded or external
      background_image: null // Upload if needed
    },
    // Add other components like equipmentGrid, industryCards, etc., with exact text/images from original
    {
      component: 'equipmentGrid',
      _uid: 'equipment-uid-1',
      items: [
        // Hardcoded equipment items from original site
        {
          component: 'equipmentItem',
          _uid: 'eq1',
          title: 'PCS 60',
          description: 'Portable dry ice blasting unit for industrial cleaning.',
          image: { filename: '/images/pcs-60.jpg' }, // Upload to public or Storyblok asset
          alt_text: 'PCS 60 Equipment',
          link_url: '/equipment/pcs-60',
          link_text: 'View Solutions'
        },
        // Add more...
      ]
    },
    {
      component: 'industryCards',
      _uid: 'industry-uid-1',
      cards: [
        {
          component: 'industryCard',
          _uid: 'ind1',
          title: 'Plastics & Composites',
          background_image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/07/IMG_1696-500x300.jpg' },
          link: '/industries/plastics-composites',
          overlay: {
            gradient: 'dark-blue',
            font_weight: 'bold'
          }
        },
        // Add all 12 industries with exact images/links from original
        // ... (Food & Beverage, Automotive, etc.)
      ],
      overlay: {
        gradient: 'dark-blue',
        font_weight: 'bold'
      }
    },
    // Footer content
    {
      component: 'footer',
      _uid: 'footer-uid-1',
      logo: { filename: 'https://www.coldjet.com/wp-content/themes/coldjet/assets/images/logo/coldjet-white-no-tagline.svg' },
      address_title: 'Global Headquarters',
      address: '6283 Tri Ridge Blvd.\nLoveland, OH 45140, USA',
      social_links: [
        {
          component: 'socialLink',
          _uid: 'social1',
          platform: 'facebook',
          url: 'https://www.facebook.com/ColdJetLLC'
        },
        // Add all social links
        // ...
      ],
      menu_columns: [
        {
          component: 'menuColumn',
          _uid: 'menu1',
          title: 'Dry Ice Blasting',
          link: 'https://www.coldjet.com/dry-ice-blasting/',
          items: [
            {
              component: 'link',
              _uid: 'link1',
              text: 'Aerospace & Aviation',
              url: 'https://www.coldjet.com/dry-ice-blasting/industries/aerospace-aviation/'
            },
            // Add all submenu items for each column
            // ...
          ]
        },
        // Add other columns: Dry Ice Production, Our Equipment, etc.
        // ...
      ],
      language: 'en',
      copyright: '© 2025 Cold Jet',
      utility_links: [
        {
          component: 'link',
          _uid: 'util1',
          text: 'Legal',
          url: 'https://www.coldjet.com/legal/'
        },
        {
          component: 'link',
          _uid: 'util2',
          text: 'Privacy Policy',
          url: 'https://www.coldjet.com/privacy-policy/'
        },
        {
          component: 'link',
          _uid: 'util3',
          text: 'Pay Online',
          url: 'https://www.payerexpress.com/ebp/ColdJet/Login/Index'
        }
      ]
    }
    // Add other sections: testimonials, logoGrid, etc., with exact content
  ]
};

async function getOrCreateHomeStory() {
  try {
    // Get existing home story
    const getResponse = await axios.get(`${API_BASE}/stories?slug=${STORY_SLUG}`, { headers });
    if (getResponse.data.stories.length > 0) {
      return getResponse.data.stories[0].id;
    }
    // Create if not exists
    const createResponse = await axios.post(`${API_BASE}/stories`, {
      story: {
        name: 'Home',
        slug: 'home',
        content: homeStoryContent
      }
    }, { headers });
    console.log('Created home story:', createResponse.data.story.id);
    return createResponse.data.story.id;
  } catch (error) {
    console.error('Error getting/creating story:', error.response?.data || error.message);
  }
}

async function uploadAsset(filePath, filename) {
  // Storyblok asset upload - requires multipart form
  // For now, assume external URLs or manual upload; implement if local files
  console.log(`Asset upload for ${filename} - manual upload required to /assets/`);
}

async function updateHomeStory() {
  const storyId = await getOrCreateHomeStory();
  if (!storyId) return;

  try {
    const response = await axios.put(
      `${API_BASE}/stories/${storyId}`,
      {
        story: {
          content: homeStoryContent
        },
        publish: 1 // Publish after update
      },
      { headers }
    );
    console.log('Home story updated and published successfully');
    console.log('Story ID:', response.data.story.id);
  } catch (error) {
    console.error('Error updating story:', error.response?.data || error.message);
  }
}

// Upload missing assets (SVGs/icons) - placeholder, manual or extend with fs
// For example: uploadAsset('./public/images/icon.svg', 'icon.svg');

// Run update
updateHomeStory();