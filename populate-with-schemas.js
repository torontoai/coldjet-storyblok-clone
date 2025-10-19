const axios = require('axios');

const SPACE_ID = '324703';
const PAT_TOKEN = 'eDnw7ANwiuU17rUOqZL8Jgtt-256880-tzX65gQafwdWTum-cUL3';
const STORY_ID = '621399566';
const API_BASE = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}`;

const headers = {
  'Authorization': PAT_TOKEN,
  'Content-Type': 'application/json'
};

// Helper to generate unique IDs
const generateUid = () => Math.random().toString(36).substring(2, 15);

// Story content with proper schema structure
const storyContent = {
  component: 'page',
  title: 'Cold Jet Homepage',
  body: [
    // Hero Section
    {
      _uid: generateUid(),
      component: 'hero',
      headline: 'Cold Jet: Leading Dry Ice Solutions Manufacturer',
      subheadline: 'Driving Sustainable Innovation in Industrial Applications',
      description: 'Experience the power of Cold Jet\'s innovative dry ice technology. Our eco-friendly solutions deliver superior cleaning results, enhance efficiency, and minimize environmental impact across a broad spectrum of industries. Cold Jet provides complete and sustainable solutions for your business. These include dry ice blasting equipment as well as dry ice production systems.',
      video_url: 'https://www.coldjet.com/wp-content/uploads/Home_page_banner_video__compressed_v2.mp4'
    },
    // Equipment Grid
    {
      _uid: generateUid(),
      component: 'equipmentGrid',
      items: [
        {
          _uid: generateUid(),
          component: 'equipmentItem',
          title: 'Dry Ice Blasting Systems',
          description: 'Our advanced dry ice blasting systems offer superior cleaning power and precision for a wide range of applications. Ideal for removing contaminants, coatings, and residues without damaging delicate surfaces.',
          image: {
            filename: 'https://www.coldjet.com/wp-content/uploads/AERO2-PCS-ULTRA-scaled.jpg'
          },
          link_url: 'https://www.coldjet.com/our-equipment/dry-ice-blasting-equipment/',
          link_text: 'View Solutions'
        },
        {
          _uid: generateUid(),
          component: 'equipmentItem',
          title: 'Dry Ice Production Systems',
          description: 'Efficiently produce high-quality dry ice on-site with our advanced production systems. Ideal for various applications, including food processing, cold chain logistics, and industrial needs.',
          image: {
            filename: 'https://www.coldjet.com/wp-content/uploads/PR750H-scaled.jpg'
          },
          link_url: 'https://www.coldjet.com/our-equipment/dry-ice-production-equipment/',
          link_text: 'View Solutions'
        }
      ]
    },
    // Industry Cards
    {
      _uid: generateUid(),
      component: 'industryCards',
      cards: [
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Plastics & Composites',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/07/IMG_1696-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/plastics-composites/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Automotive',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_AUTOMOTIVE_LEFT-1-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/automotive/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Food & Beverage',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/Cold_Jet_Food_Processing-500x300.webp' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/food-beverage/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Medical Equipment',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/06/Medical3-1-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/medical-equipment/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Contract Cleaning',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/Contract-Cleaning-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/contract-cleaning/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Printing',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/07/Main-Image-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/printing/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Aerospace & Aviation',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_AEROSPACEAVIATION_RIGHT-e1634762746732-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/aerospace-aviation/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Oil & Gas',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-1-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/oil-gas/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Restoration & Remediation',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_RESTORATIONREMEDIATION_HISTORICAL-1-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/restoration-remediation/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Textiles',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_TEXTILES_RIGHT-1-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/textiles/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Foundry',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/Cold-Jet-MWS-DGH-Sandcasting-foundry-industry-69-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/foundry/'
        },
        {
          _uid: generateUid(),
          component: 'industryCard',
          title: 'Packaging',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_FOODBEVERAGE_RIGHT-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-blasting/industries/packaging/'
        }
      ]
    },
    // On-Site Production
    {
      _uid: generateUid(),
      component: 'onSiteProduction',
      title: 'Gaining Control: The Advantages of On-Site Dry Ice Production',
      cards: [
        {
          _uid: generateUid(),
          component: 'productionCard',
          title: 'Airline Catering',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_AIRLINECATERING-10-1-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-production/applications/airline-catering/'
        },
        {
          _uid: generateUid(),
          component: 'productionCard',
          title: 'For Food Processors',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_FOODPROCESSINGCOOLING-9-2-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-production/applications/food-processing-cooling/'
        },
        {
          _uid: generateUid(),
          component: 'productionCard',
          title: 'For Life Sciences',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/Cold_Jet_Life_Science-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-production/applications/life-sciences/'
        },
        {
          _uid: generateUid(),
          component: 'productionCard',
          title: 'Production for Resale',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_PRODUCTIONFORRESALE-3-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-production/applications/production-for-resale/'
        },
        {
          _uid: generateUid(),
          component: 'productionCard',
          title: 'Cold Chain Management',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_COLDCHAINMANAGEMENT-1-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-production/applications/cold-chain-management/'
        },
        {
          _uid: generateUid(),
          component: 'productionCard',
          title: 'Dry Ice For Food Shipping',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/Cold_Jet_Food_Home_Delivery-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-production/applications/dry-ice-for-food-shipping/'
        },
        {
          _uid: generateUid(),
          component: 'productionCard',
          title: 'Production for Blasting',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_PLASTICSCOMPOSITES_PARTSFINISHING-7-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-production/applications/production-for-blasting/'
        },
        {
          _uid: generateUid(),
          component: 'productionCard',
          title: 'Remote Production',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-2-500x300.jpg' },
          link: 'https://www.coldjet.com/dry-ice-production/applications/remote-production/'
        }
      ]
    },
    // Logo Grid
    {
      _uid: generateUid(),
      component: 'logoGrid',
      title: 'Trusted by Industry Leaders',
      logos: [
        {
          _uid: generateUid(),
          component: 'logo',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-18.jpg' },
          alt: '3M logo'
        },
        {
          _uid: generateUid(),
          component: 'logo',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-17.png' },
          alt: 'Apple logo'
        },
        {
          _uid: generateUid(),
          component: 'logo',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-16.png' },
          alt: 'Bayer logo'
        },
        {
          _uid: generateUid(),
          component: 'logo',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-15.png' },
          alt: 'Frito Lay logo'
        },
        {
          _uid: generateUid(),
          component: 'logo',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-14.png' },
          alt: 'GE logo'
        },
        {
          _uid: generateUid(),
          component: 'logo',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-13.png' },
          alt: 'Goodyear logo'
        }
      ]
    },
    // Testimonials
    {
      _uid: generateUid(),
      component: 'testimonials',
      title: 'What Our Customers Say',
      items: [
        {
          _uid: generateUid(),
          component: 'testimonial',
          quote: 'From the initial inquiry to the installation, we are very satisfied. The employees of Cold Jet were very friendly, reliable and supported us throughout implementation. We look forward to future collaboration with them and the potential for future pelletizer purchases.',
          author: 'Werner Fiedler',
          company: 'KS Aluminum-Technologie GmbH',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/KSPG-114x40.png' }
        },
        {
          _uid: generateUid(),
          component: 'testimonial',
          quote: 'My production team tells me repeatedly that Cold Jet\'s product is user-friendly and that it has the best applicator, nozzle and attachment of all those that we evaluated. Did I mention they are fast? The Aero systems give us everything we asked for in a cleaning solution, and I\'m getting a lot of interest from other plants within our organization because of the efficiency and the production increases we\'ve achieved.',
          author: 'Tony Tai',
          company: 'Production Supervisor | Global Chocolate Manufacturer'
        },
        {
          _uid: generateUid(),
          component: 'testimonial',
          quote: 'Cleaning with Cold Jet will not roll parting lines, change or destroy the metal and best of all, it allows our running time to be extended. We use it every day, on every shift.',
          author: 'Tom Mendel',
          company: 'President and CEO | Performance Plastics',
          image: { filename: 'https://www.coldjet.com/wp-content/uploads/Performance-Plastics-e1562875205683-88x40.png' }
        }
      ]
    }
  ]
};

async function updateStory() {
  try {
    console.log('📝 Updating home story with schema-based content...\n');
    
    // Update and publish the story content
    const response = await axios.put(
      `${API_BASE}/stories/${STORY_ID}`,
      {
        story: {
          name: 'home',
          slug: 'home',
          content: storyContent
        },
        publish: 1
      },
      { headers }
    );
    
    console.log('✅ Story updated and published successfully!');
    console.log(`   Story ID: ${response.data.story.id}`);
    console.log(`   Components: ${storyContent.body.length}`);
    console.log(`   Status: Published ✨`);
    
    console.log(`\n📍 View in Storyblok Editor: https://app.storyblok.com/#/me/spaces/${SPACE_ID}/stories/0/0/${STORY_ID}`);
    console.log(`📍 Live Site: https://coldjet-storyblok-clone.netlify.app/`);
    
    console.log(`\n🎉 Content is now live and fully manageable through Storyblok UI!`);
    console.log(`\n💡 To edit content:`);
    console.log(`   1. Open the Storyblok editor link above`);
    console.log(`   2. Click any component to edit text, images, or links`);
    console.log(`   3. Click "Publish" to make changes live`);
    console.log(`   4. Changes appear within 30 seconds`);
    
    return response.data.story;
  } catch (error) {
    console.error('❌ Error updating story:', error.response?.data || error.message);
    throw error;
  }
}

updateStory().catch(console.error);