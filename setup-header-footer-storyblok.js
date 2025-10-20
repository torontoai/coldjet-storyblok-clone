const axios = require('axios');

const SPACE_ID = '287934232080460';
const MANAGEMENT_TOKEN = 'yJe6atW4p3Gl0SzAFdYztwtt-287934232080460-dHdJzPDCRQI0ydukzJuE';

const baseURL = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;
const headers = {
  'Authorization': MANAGEMENT_TOKEN,
  'Content-Type': 'application/json'
};

// Step 1: Create Site Config component schema
async function createSiteConfigComponent() {
  const component = {
    name: 'siteConfig',
    display_name: 'Site Config',
    is_root: false,
    is_nestable: false,
    component_group_uuid: null,
    schema: {
      logo: {
        type: 'asset',
        display_name: 'Logo',
        filetypes: ['images'],
        description: 'Site logo (SVG preferred)'
      },
      site_name: {
        type: 'text',
        display_name: 'Site Name',
        default_value: 'Cold Jet'
      },
      address_title: {
        type: 'text',
        display_name: 'Address Title',
        default_value: 'Global Headquarters'
      },
      address_line1: {
        type: 'text',
        display_name: 'Address Line 1',
        default_value: '6283 Tri Ridge Blvd.'
      },
      address_line2: {
        type: 'text',
        display_name: 'Address Line 2',
        default_value: 'Loveland, OH 45140, USA'
      },
      copyright_year: {
        type: 'text',
        display_name: 'Copyright Year',
        default_value: '2025'
      },
      social_media: {
        type: 'bloks',
        display_name: 'Social Media Links',
        restrict_type: '',
        restrict_components: true,
        component_whitelist: ['socialLink']
      },
      main_menu: {
        type: 'bloks',
        display_name: 'Main Navigation',
        restrict_type: '',
        restrict_components: true,
        component_whitelist: ['menuItem']
      },
      utility_menu: {
        type: 'bloks',
        display_name: 'Utility Navigation',
        restrict_type: '',
        restrict_components: true,
        component_whitelist: ['menuItem']
      },
      footer_menu: {
        type: 'bloks',
        display_name: 'Footer Navigation',
        restrict_type: '',
        restrict_components: true,
        component_whitelist: ['menuItem']
      },
      languages: {
        type: 'bloks',
        display_name: 'Languages',
        restrict_type: '',
        restrict_components: true,
        component_whitelist: ['language']
      }
    }
  };

  try {
    const response = await axios.post(`${baseURL}/components`, { component }, { headers });
    console.log('✓ Created siteConfig component:', response.data.component.id);
    return response.data.component;
  } catch (error) {
    if (error.response?.status === 422 && error.response?.data?.error?.includes('already exists')) {
      console.log('ℹ siteConfig component already exists');
      return null;
    }
    console.error('✗ Error creating siteConfig:', error.response?.data || error.message);
    throw error;
  }
}

// Step 2: Create Menu Item component schema
async function createMenuItemComponent() {
  const component = {
    name: 'menuItem',
    display_name: 'Menu Item',
    is_root: false,
    is_nestable: true,
    component_group_uuid: null,
    schema: {
      label: {
        type: 'text',
        display_name: 'Label',
        required: true
      },
      url: {
        type: 'text',
        display_name: 'URL',
        required: true
      },
      target: {
        type: 'option',
        display_name: 'Target',
        options: [
          { name: 'Same Tab', value: '_self' },
          { name: 'New Tab', value: '_blank' }
        ],
        default_value: '_self'
      },
      sub_menu: {
        type: 'bloks',
        display_name: 'Sub Menu',
        restrict_type: '',
        restrict_components: true,
        component_whitelist: ['menuItem']
      }
    }
  };

  try {
    const response = await axios.post(`${baseURL}/components`, { component }, { headers });
    console.log('✓ Created menuItem component:', response.data.component.id);
    return response.data.component;
  } catch (error) {
    if (error.response?.status === 422 && error.response?.data?.error?.includes('already exists')) {
      console.log('ℹ menuItem component already exists');
      return null;
    }
    console.error('✗ Error creating menuItem:', error.response?.data || error.message);
    throw error;
  }
}

// Step 3: Create Social Link component schema
async function createSocialLinkComponent() {
  const component = {
    name: 'socialLink',
    display_name: 'Social Link',
    is_root: false,
    is_nestable: false,
    component_group_uuid: null,
    schema: {
      platform: {
        type: 'option',
        display_name: 'Platform',
        options: [
          { name: 'Facebook', value: 'facebook' },
          { name: 'Instagram', value: 'instagram' },
          { name: 'Twitter', value: 'twitter' },
          { name: 'LinkedIn', value: 'linkedin' },
          { name: 'YouTube', value: 'youtube' },
          { name: 'Vimeo', value: 'vimeo' }
        ],
        required: true
      },
      url: {
        type: 'text',
        display_name: 'URL',
        required: true
      }
    }
  };

  try {
    const response = await axios.post(`${baseURL}/components`, { component }, { headers });
    console.log('✓ Created socialLink component:', response.data.component.id);
    return response.data.component;
  } catch (error) {
    if (error.response?.status === 422 && error.response?.data?.error?.includes('already exists')) {
      console.log('ℹ socialLink component already exists');
      return null;
    }
    console.error('✗ Error creating socialLink:', error.response?.data || error.message);
    throw error;
  }
}

// Step 4: Create Language component schema
async function createLanguageComponent() {
  const component = {
    name: 'language',
    display_name: 'Language',
    is_root: false,
    is_nestable: false,
    component_group_uuid: null,
    schema: {
      name: {
        type: 'text',
        display_name: 'Language Name',
        required: true
      },
      code: {
        type: 'text',
        display_name: 'Language Code',
        required: true,
        description: 'e.g., en, de, es'
      },
      url: {
        type: 'text',
        display_name: 'URL',
        required: true
      }
    }
  };

  try {
    const response = await axios.post(`${baseURL}/components`, { component }, { headers });
    console.log('✓ Created language component:', response.data.component.id);
    return response.data.component;
  } catch (error) {
    if (error.response?.status === 422 && error.response?.data?.error?.includes('already exists')) {
      console.log('ℹ language component already exists');
      return null;
    }
    console.error('✗ Error creating language:', error.response?.data || error.message);
    throw error;
  }
}

// Step 5: Create Site Config story
async function createSiteConfigStory() {
  const story = {
    name: 'Site Config',
    slug: 'site-config',
    content: {
      component: 'siteConfig',
      site_name: 'Cold Jet',
      address_title: 'Global Headquarters',
      address_line1: '6283 Tri Ridge Blvd.',
      address_line2: 'Loveland, OH 45140, USA',
      copyright_year: '2025',
      social_media: [
        {
          component: 'socialLink',
          platform: 'facebook',
          url: 'https://www.facebook.com/ColdJetLLC',
          _uid: 'social-fb-' + Date.now()
        },
        {
          component: 'socialLink',
          platform: 'instagram',
          url: 'https://www.instagram.com/coldjetllc/',
          _uid: 'social-ig-' + (Date.now() + 1)
        },
        {
          component: 'socialLink',
          platform: 'twitter',
          url: 'https://twitter.com/coldjet',
          _uid: 'social-tw-' + (Date.now() + 2)
        },
        {
          component: 'socialLink',
          platform: 'linkedin',
          url: 'https://www.linkedin.com/company/cold-jet/',
          _uid: 'social-li-' + (Date.now() + 3)
        },
        {
          component: 'socialLink',
          platform: 'youtube',
          url: 'https://www.youtube.com/c/dryiceblaster',
          _uid: 'social-yt-' + (Date.now() + 4)
        },
        {
          component: 'socialLink',
          platform: 'vimeo',
          url: 'https://vimeo.com/coldjet',
          _uid: 'social-vi-' + (Date.now() + 5)
        }
      ],
      main_menu: [
        {
          component: 'menuItem',
          label: 'Dry Ice Blasting',
          url: 'https://www.coldjet.com/dry-ice-blasting/',
          target: '_self',
          _uid: 'menu-main-1-' + Date.now()
        },
        {
          component: 'menuItem',
          label: 'Dry Ice Production',
          url: 'https://www.coldjet.com/dry-ice-production/',
          target: '_self',
          _uid: 'menu-main-2-' + Date.now()
        },
        {
          component: 'menuItem',
          label: 'Our Equipment',
          url: 'https://www.coldjet.com/our-equipment/',
          target: '_self',
          _uid: 'menu-main-3-' + Date.now()
        },
        {
          component: 'menuItem',
          label: 'Parts & Services',
          url: 'https://www.coldjet.com/parts-services/',
          target: '_self',
          _uid: 'menu-main-4-' + Date.now()
        },
        {
          component: 'menuItem',
          label: 'Resources',
          url: 'https://www.coldjet.com/resources/',
          target: '_self',
          _uid: 'menu-main-5-' + Date.now()
        },
        {
          component: 'menuItem',
          label: 'Sustainability',
          url: 'https://www.coldjet.com/sustainability/',
          target: '_self',
          _uid: 'menu-main-6-' + Date.now()
        },
        {
          component: 'menuItem',
          label: 'Contact Us',
          url: 'https://www.coldjet.com/contact-us/',
          target: '_self',
          _uid: 'menu-main-7-' + Date.now()
        }
      ],
      utility_menu: [
        {
          component: 'menuItem',
          label: 'Careers',
          url: 'https://www.coldjet.com/careers/',
          target: '_self',
          _uid: 'menu-util-1-' + Date.now()
        },
        {
          component: 'menuItem',
          label: 'About Cold Jet',
          url: 'https://www.coldjet.com/about-cold-jet/',
          target: '_self',
          _uid: 'menu-util-2-' + Date.now()
        },
        {
          component: 'menuItem',
          label: 'Global Presence',
          url: 'https://www.coldjet.com/global-offices/',
          target: '_self',
          _uid: 'menu-util-3-' + Date.now()
        },
        {
          component: 'menuItem',
          label: 'Pay Online',
          url: 'https://www.payerexpress.com/ebp/ColdJet/Login/Index',
          target: '_blank',
          _uid: 'menu-util-4-' + Date.now()
        }
      ],
      languages: [
        {
          component: 'language',
          name: 'English',
          code: 'en',
          url: 'https://www.coldjet.com/',
          _uid: 'lang-en-' + Date.now()
        },
        {
          component: 'language',
          name: 'German',
          code: 'de',
          url: 'https://www.coldjet.com/de/',
          _uid: 'lang-de-' + Date.now()
        },
        {
          component: 'language',
          name: 'Spanish',
          code: 'es',
          url: 'https://www.coldjet.com/es/',
          _uid: 'lang-es-' + Date.now()
        },
        {
          component: 'language',
          name: 'French',
          code: 'fr',
          url: 'https://www.coldjet.com/fr/',
          _uid: 'lang-fr-' + Date.now()
        }
      ]
    },
    is_global: true
  };

  try {
    const response = await axios.post(`${baseURL}/stories`, { story: story }, { headers });
    console.log('✓ Created Site Config story:', response.data.story.id);
    
    // Publish the story
    await axios.put(
      `${baseURL}/stories/${response.data.story.id}/publish`,
      {},
      { headers }
    );
    console.log('✓ Published Site Config story');
    
    return response.data.story;
  } catch (error) {
    console.error('✗ Error creating Site Config story:', error.response?.data || error.message);
    throw error;
  }
}

async function setupHeaderFooter() {
  console.log('Setting up Header/Footer components in Storyblok...\n');
  
  try {
    // Create components
    await createMenuItemComponent();
    await createSocialLinkComponent();
    await createLanguageComponent();
    await createSiteConfigComponent();
    
    // Create site config story
    await createSiteConfigStory();
    
    console.log('\n✓ Header/Footer setup complete!');
    console.log('\nNext steps:');
    console.log('1. Update Header.js and Footer.js to fetch from Storyblok');
    console.log('2. Add site config to App.js context');
    console.log('3. Test Visual Editor with header/footer editable');
    
  } catch (error) {
    console.error('\n✗ Setup failed:', error.message);
  }
}

setupHeaderFooter();