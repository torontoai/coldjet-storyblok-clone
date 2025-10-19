const axios = require('axios');

const SPACE_ID = '324703';
const PAT_TOKEN = 'eDnw7ANwiuU17rUOqZL8Jgtt-256880-tzX65gQafwdWTum-cUL3';
const API_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

const headers = {
  'Authorization': PAT_TOKEN,
  'Content-Type': 'application/json'
};

// Component schemas definition
const componentSchemas = [
  {
    name: 'page',
    display_name: 'Page',
    is_root: true,
    is_nestable: false,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        required: true,
        description: 'Page title'
      },
      body: {
        type: 'bloks',
        pos: 1,
        restrict_components: true,
        component_whitelist: [
          'hero',
          'equipmentGrid',
          'industryCards',
          'onSiteProduction',
          'testimonials',
          'logoGrid',
          'footer'
        ]
      },
      global_style: {
        type: 'group',
        pos: 2,
        name: 'global_style',
        label: 'Global Styles',
        fields: {
          fonts: {
            type: 'group',
            pos: 0,
            name: 'fonts',
            label: 'Fonts',
            fields: {
              family: {
                type: 'option',
                pos: 0,
                label: 'Font Family',
                default_value: 'Avenir Next',
                options: [
                  { name: 'Avenir Next', value: 'Avenir Next' },
                  { name: 'System Default', value: 'system' }
                ]
              },
              weight: {
                type: 'option',
                pos: 1,
                label: 'Font Weight',
                default_value: 'normal',
                options: [
                  { name: 'Normal (400)', value: 'normal' },
                  { name: 'Bold (600)', value: 'bold' },
                  { name: 'Heavy (700)', value: 'heavy' }
                ]
              }
            }
          },
          spacing: {
            type: 'group',
            pos: 1,
            name: 'spacing',
            label: 'Spacing',
            fields: {
              bottom_margin: {
                type: 'number',
                pos: 0,
                label: 'Bottom Margin (px)',
                default_value: 0,
                description: 'Additional bottom margin for the page'
              }
            }
          }
        }
      }
    }
  },
  {
    name: 'hero',
    display_name: 'Hero Section',
    is_root: false,
    is_nestable: true,
    schema: {
      headline: {
        type: 'text',
        pos: 0,
        description: 'Main headline'
      },
      subheadline: {
        type: 'text',
        pos: 1,
        description: 'Subheadline (green text)'
      },
      subtitle: {
        type: 'text',
        pos: 2,
        description: 'Subtitle',
        default_value: 'Leading the way in sustainable cleaning'
      },
      description: {
        type: 'textarea',
        pos: 3,
        description: 'Description paragraph'
      },
      video_url: {
        type: 'text',
        pos: 4,
        description: 'Background video URL',
        default_value: 'https://www.coldjet.com/wp-content/uploads/Home_page_banner_video__compressed_v2.mp4'
      },
      background_image: {
        type: 'asset',
        pos: 5,
        description: 'Fallback background image',
        filetypes: ['images']
      }
    }
  },
  {
    name: 'equipmentGrid',
    display_name: 'Equipment Grid',
    is_root: false,
    is_nestable: true,
    schema: {
      items: {
        type: 'bloks',
        pos: 0,
        restrict_components: true,
        component_whitelist: ['equipmentItem']
      },
      spacing: {
        type: 'number',
        pos: 1,
        label: 'Card Gap (px)',
        default_value: 20,
        description: 'Spacing between cards in pixels'
      }
    }
  },
  {
    name: 'equipmentItem',
    display_name: 'Equipment Item',
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        required: true,
        description: 'Equipment title'
      },
      description: {
        type: 'textarea',
        pos: 1,
        description: 'Equipment description'
      },
      image: {
        type: 'asset',
        pos: 2,
        required: true,
        label: 'Product Photo (500x500px JPG/WebP)',
        description: 'Equipment image (recommended 500x500px JPG or WebP)',
        filetypes: ['images'],
        accept: 'image/jpeg,image/webp'
      },
      alt_text: {
        type: 'text',
        pos: 3,
        required: true,
        label: 'Image Alt Text',
        description: 'Accessible description of the image'
      },
      link_url: {
        type: 'text',
        pos: 4,
        required: true,
        description: 'Link URL'
      },
      link_text: {
        type: 'text',
        pos: 5,
        description: 'Link text',
        default_value: 'View Solutions'
      }
    }
  },
  {
    name: 'industryCards',
    display_name: 'Industry Cards',
    is_root: false,
    is_nestable: true,
    schema: {
      cards: {
        type: 'bloks',
        pos: 0,
        restrict_components: true,
        component_whitelist: ['industryCard']
      }
    }
  },
  {
    name: 'industryCard',
    display_name: 'Industry Card',
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        required: true,
        description: 'Industry name'
      },
      background_image: {
        type: 'asset',
        pos: 1,
        required: true,
        label: 'Background Image',
        description: 'Industry background image',
        filetypes: ['images']
      },
      link: {
        type: 'text',
        pos: 2,
        required: true,
        description: 'Industry page URL'
      },
      overlay: {
        type: 'group',
        pos: 3,
        name: 'overlay',
        label: 'Overlay Styles',
        fields: {
          gradient: {
            type: 'option',
            pos: 0,
            label: 'Gradient',
            default_value: 'dark-blue',
            options: [
              { name: 'Dark Blue', value: 'dark-blue' },
              { name: 'Light', value: 'light' },
              { name: 'None', value: 'none' }
            ]
          },
          font_weight: {
            type: 'option',
            pos: 1,
            label: 'Font Weight',
            default_value: 'bold',
            options: [
              { name: 'Normal (400)', value: 'normal' },
              { name: 'Bold (600)', value: 'bold' }
            ]
          }
        }
      }
    }
  },
  {
    name: 'onSiteProduction',
    display_name: 'On-Site Production Cards',
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        description: 'Section title'
      },
      cards: {
        type: 'bloks',
        pos: 1,
        restrict_components: true,
        component_whitelist: ['productionCard']
      }
    }
  },
  {
    name: 'productionCard',
    display_name: 'Production Card',
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        description: 'Card title'
      },
      image: {
        type: 'asset',
        pos: 1,
        description: 'Card image',
        filetypes: ['images']
      },
      link: {
        type: 'text',
        pos: 2,
        description: 'Card link URL'
      }
    }
  },
  {
    name: 'testimonials',
    display_name: 'Testimonials Section',
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        description: 'Section title'
      },
      items: {
        type: 'bloks',
        pos: 1,
        restrict_components: true,
        component_whitelist: ['testimonial']
      }
    }
  },
  {
    name: 'testimonial',
    display_name: 'Testimonial',
    is_root: false,
    is_nestable: true,
    schema: {
      quote: {
        type: 'textarea',
        pos: 0,
        description: 'Testimonial quote'
      },
      author: {
        type: 'text',
        pos: 1,
        description: 'Author name'
      },
      company: {
        type: 'text',
        pos: 2,
        description: 'Company name'
      },
      image: {
        type: 'asset',
        pos: 3,
        description: 'Author/company logo',
        filetypes: ['images']
      }
    }
  },
  {
    name: 'logoGrid',
    display_name: 'Logo Grid',
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        description: 'Section title'
      },
      logos: {
        type: 'bloks',
        pos: 1,
        restrict_components: true,
        component_whitelist: ['logo']
      }
    }
  },
  {
    name: 'logo',
    display_name: 'Logo',
    is_root: false,
    is_nestable: true,
    schema: {
      image: {
        type: 'asset',
        pos: 0,
        description: 'Logo image',
        filetypes: ['images']
      },
      alt: {
        type: 'text',
        pos: 1,
        description: 'Alt text'
      }
    }
  },
  {
    name: 'footer',
    display_name: 'Footer',
    is_root: false,
    is_nestable: true,
    schema: {
      logo: {
        type: 'asset',
        pos: 0,
        description: 'Footer logo',
        filetypes: ['images']
      },
      address_title: {
        type: 'text',
        pos: 1,
        description: 'Address title',
        default_value: 'Global Headquarters'
      },
      address: {
        type: 'textarea',
        pos: 2,
        description: 'Company address'
      },
      social_links: {
        type: 'bloks',
        pos: 3,
        restrict_components: true,
        component_whitelist: ['socialLink']
      },
      menu_columns: {
        type: 'bloks',
        pos: 4,
        restrict_components: true,
        component_whitelist: ['menuColumn']
      },
      copyright: {
        type: 'text',
        pos: 5,
        description: 'Copyright text',
        default_value: '© 2025 Cold Jet'
      },
      utility_links: {
        type: 'bloks',
        pos: 6,
        restrict_components: true,
        component_whitelist: ['link']
      }
    }
  },
  {
    name: 'socialLink',
    display_name: 'Social Link',
    is_root: false,
    is_nestable: true,
    schema: {
      platform: {
        type: 'option',
        pos: 0,
        options: [
          { name: 'Facebook', value: 'facebook' },
          { name: 'Instagram', value: 'instagram' },
          { name: 'Twitter', value: 'twitter' },
          { name: 'LinkedIn', value: 'linkedin' },
          { name: 'YouTube', value: 'youtube' },
          { name: 'Vimeo', value: 'vimeo' }
        ]
      },
      url: {
        type: 'text',
        pos: 1,
        description: 'Social media URL'
      }
    }
  },
  {
    name: 'menuColumn',
    display_name: 'Menu Column',
    is_root: false,
    is_nestable: true,
    schema: {
      title: {
        type: 'text',
        pos: 0,
        description: 'Column title'
      },
      link: {
        type: 'text',
        pos: 1,
        description: 'Column title link'
      },
      items: {
        type: 'bloks',
        pos: 2,
        restrict_components: true,
        component_whitelist: ['link']
      }
    }
  },
  {
    name: 'link',
    display_name: 'Link',
    is_root: false,
    is_nestable: true,
    schema: {
      text: {
        type: 'text',
        pos: 0,
        description: 'Link text'
      },
      url: {
        type: 'text',
        pos: 1,
        description: 'Link URL'
      },
      is_bold: {
        type: 'boolean',
        pos: 2,
        description: 'Bold text',
        default_value: false
      }
    }
  }
];

async function createComponent(component) {
  try {
    console.log(`\n📝 Creating component: ${component.name}`);
    
    const response = await axios.post(
      `${API_BASE}/components`,
      { component },
      { headers }
    );
    
    console.log(`✅ Created: ${component.display_name} (ID: ${response.data.component.id})`);
    return response.data.component;
  } catch (error) {
    if (error.response?.status === 422 && error.response?.data?.name?.[0] === 'has already been taken') {
      console.log(`⚠️  Component ${component.name} already exists, updating...`);
      return await updateComponent(component);
    }
    console.error(`❌ Error creating ${component.name}:`, error.response?.data || error.message);
    throw error;
  }
}

async function updateComponent(component) {
  try {
    // First, get the component ID
    const listResponse = await axios.get(`${API_BASE}/components`, { headers });
    const existingComponent = listResponse.data.components.find(c => c.name === component.name);
    
    if (!existingComponent) {
      console.log(`Component ${component.name} not found, creating new...`);
      return await createComponent(component);
    }
    
    const response = await axios.put(
      `${API_BASE}/components/${existingComponent.id}`,
      { component },
      { headers }
    );
    
    console.log(`✅ Updated: ${component.display_name} (ID: ${response.data.component.id})`);
    return response.data.component;
  } catch (error) {
    console.error(`❌ Error updating ${component.name}:`, error.response?.data || error.message);
    throw error;
  }
}

async function setupComponents() {
  console.log('🚀 Setting up Storyblok components...\n');
  console.log(`Space ID: ${SPACE_ID}`);
  console.log(`Total components to create: ${componentSchemas.length}\n`);
  
  const results = [];
  
  // Create components in order (root components first, then nested)
  for (const schema of componentSchemas) {
    try {
      const result = await createComponent(schema);
      results.push(result);
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to process component ${schema.name}`);
    }
  }
  
  console.log('\n✨ Component setup complete!');
  console.log(`\n📊 Summary:`);
  console.log(`   Total components: ${results.length}/${componentSchemas.length}`);
  
  return results;
}

// Configure visual editor preview URL
async function setupPreviewUrl() {
  try {
    console.log('\n🔧 Configuring visual editor preview URL...');
    
    const response = await axios.put(
      `${API_BASE}`,
      {
        space: {
          domain: 'https://coldjet-storyblok-clone.netlify.app/'
        }
      },
      { headers }
    );
    
    console.log('✅ Preview URL configured successfully');
    return response.data;
  } catch (error) {
    console.error('❌ Error setting preview URL:', error.response?.data || error.message);
  }
}

// Main execution
async function main() {
  try {
    await setupComponents();
    await setupPreviewUrl();
    
    console.log('\n\n🎉 All setup tasks completed!');
    console.log('\n📝 Next steps:');
    console.log('   1. Run update script to populate with actual content');
    console.log('   2. Update React components to use blok data');
    console.log('   3. Test visual editor at https://app.storyblok.com/');
  } catch (error) {
    console.error('\n💥 Setup failed:', error.message);
    process.exit(1);
  }
}

main();