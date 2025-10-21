require('dotenv').config();
const StoryblokClient = require('storyblok-js-client');

const Storyblok = new StoryblokClient.default({
  oauthToken: process.env.STORYBLOK_MANAGEMENT_TOKEN
});

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;

// Complete component schemas
const componentSchemas = {
  hero: {
    name: 'hero',
    display_name: 'Hero Section',
    schema: {
      headline: { type: 'text' },
      subheadline: { type: 'text' },
      description: { type: 'textarea' },
      video_url: { type: 'text' },
      poster_image: { type: 'asset', filetypes: ['images'] },
      background_image: { type: 'asset', filetypes: ['images'] }
    },
    is_root: false,
    is_nestable: true
  },
  
  productSection: {
    name: 'productSection',
    display_name: 'Product Section',
    schema: {
      kicker: { type: 'text' },
      title: { type: 'text' },
      paragraph1: { type: 'textarea' },
      paragraph2: { type: 'textarea' },
      paragraph3: { type: 'textarea' }
    },
    is_root: false,
    is_nestable: true
  },
  
  equipmentGrid: {
    name: 'equipmentGrid',
    display_name: 'Equipment Grid',
    schema: {
      items: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['equipmentItem']
      }
    },
    is_root: false,
    is_nestable: true
  },
  
  equipmentItem: {
    name: 'equipmentItem',
    display_name: 'Equipment Item',
    schema: {
      title: { type: 'text' },
      description: { type: 'textarea' },
      image: { type: 'asset', filetypes: ['images'] },
      link_url: { type: 'text' },
      link_text: { type: 'text' }
    },
    is_root: false,
    is_nestable: true
  },
  
  buttonSection: {
    name: 'buttonSection',
    display_name: 'Button Section',
    schema: {
      text: { type: 'text' },
      url: { type: 'text' },
      style: { type: 'option', options: [{ name: 'bordered', value: 'bordered' }, { name: 'primary', value: 'primary' }] },
      alignment: { type: 'option', options: [{ name: 'left', value: 'left' }, { name: 'center', value: 'center' }, { name: 'right', value: 'right' }] }
    },
    is_root: false,
    is_nestable: true
  },
  
  circularEconomy: {
    name: 'circularEconomy',
    display_name: 'Circular Economy Section',
    schema: {
      kicker: { type: 'text' },
      title: { type: 'text' },
      description: { type: 'textarea' },
      background_image: { type: 'asset', filetypes: ['images'] },
      cta_text: { type: 'text' },
      cta_url: { type: 'text' }
    },
    is_root: false,
    is_nestable: true
  },
  
  industrialChallenges: {
    name: 'industrialChallenges',
    display_name: 'Industrial Challenges',
    schema: {
      kicker: { type: 'text' },
      title: { type: 'text' },
      description: { type: 'textarea' }
    },
    is_root: false,
    is_nestable: true
  },
  
  industryCards: {
    name: 'industryCards',
    display_name: 'Industry Cards',
    schema: {
      cards: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['industryCard']
      }
    },
    is_root: false,
    is_nestable: true
  },
  
  industryCard: {
    name: 'industryCard',
    display_name: 'Industry Card',
    schema: {
      title: { type: 'text' },
      image: { type: 'asset', filetypes: ['images'] },
      link: { type: 'text' }
    },
    is_root: false,
    is_nestable: true
  },
  
  whyChooseBlasting: {
    name: 'whyChooseBlasting',
    display_name: 'Why Choose Blasting',
    schema: {
      kicker: { type: 'text' },
      title: { type: 'text' },
      description: { type: 'textarea' },
      disclaimer: { type: 'textarea' }
    },
    is_root: false,
    is_nestable: true
  },
  
  onSiteProduction: {
    name: 'onSiteProduction',
    display_name: 'On-Site Production',
    schema: {
      kicker: { type: 'text' },
      title: { type: 'text' },
      description: { type: 'textarea' },
      cards: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['productionCard']
      }
    },
    is_root: false,
    is_nestable: true
  },
  
  productionCard: {
    name: 'productionCard',
    display_name: 'Production Card',
    schema: {
      title: { type: 'text' },
      image: { type: 'asset', filetypes: ['images'] },
      link: { type: 'text' }
    },
    is_root: false,
    is_nestable: true
  },
  
  coldChain: {
    name: 'coldChain',
    display_name: 'Cold Chain Section',
    schema: {
      kicker: { type: 'text' },
      title: { type: 'text' },
      description: { type: 'textarea' },
      background_image: { type: 'asset', filetypes: ['images'] }
    },
    is_root: false,
    is_nestable: true
  },
  
  customers: {
    name: 'customers',
    display_name: 'Customers Section',
    schema: {
      kicker: { type: 'text' },
      title: { type: 'text' },
      description: { type: 'textarea' }
    },
    is_root: false,
    is_nestable: true
  },
  
  logoGrid: {
    name: 'logoGrid',
    display_name: 'Logo Grid',
    schema: {
      logos: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['logo']
      }
    },
    is_root: false,
    is_nestable: true
  },
  
  logo: {
    name: 'logo',
    display_name: 'Logo',
    schema: {
      image: { type: 'asset', filetypes: ['images'] },
      alt: { type: 'text' },
      name: { type: 'text' }
    },
    is_root: false,
    is_nestable: true
  },
  
  testimonials: {
    name: 'testimonials',
    display_name: 'Testimonials Slider',
    schema: {
      items: {
        type: 'bloks',
        restrict_components: true,
        component_whitelist: ['testimonial']
      }
    },
    is_root: false,
    is_nestable: true
  },
  
  testimonial: {
    name: 'testimonial',
    display_name: 'Testimonial',
    schema: {
      quote: { type: 'textarea' },
      author: { type: 'text' },
      company: { type: 'text' },
      image: { type: 'asset', filetypes: ['images'] },
      link: { type: 'text' }
    },
    is_root: false,
    is_nestable: true
  },
  
  globalOffices: {
    name: 'globalOffices',
    display_name: 'Global Offices',
    schema: {
      kicker: { type: 'text' },
      title: { type: 'text' },
      description: { type: 'textarea' },
      image: { type: 'asset', filetypes: ['images'] },
      link_text: { type: 'text' },
      link_url: { type: 'text' }
    },
    is_root: false,
    is_nestable: true
  }
};

async function createOrUpdateSchema(componentName, schema) {
  try {
    // Try to get existing component
    let existingComponent;
    try {
      const response = await Storyblok.get(`spaces/${SPACE_ID}/components`);
      existingComponent = response.data.components.find(c => c.name === componentName);
    } catch (err) {
      console.log(`  Component ${componentName} doesn't exist yet`);
    }
    
    if (existingComponent) {
      // Update existing
      await Storyblok.put(`spaces/${SPACE_ID}/components/${existingComponent.id}`, {
        component: schema
      });
      console.log(`  ✅ Updated ${schema.display_name}`);
    } else {
      // Create new
      await Storyblok.post(`spaces/${SPACE_ID}/components`, {
        component: schema
      });
      console.log(`  ✅ Created ${schema.display_name}`);
    }
  } catch (error) {
    console.error(`  ❌ Error with ${componentName}:`, error.response?.data || error.message);
  }
}

async function setupSchemas() {
  console.log('\n📝 Creating/Updating Component Schemas...\n');
  
  for (const [name, schema] of Object.entries(componentSchemas)) {
    await createOrUpdateSchema(name, schema);
  }
  
  console.log('\n✅ All schemas created/updated!');
}

async function populateHomeStory() {
  try {
    console.log('\n📋 Populating Home Story with Complete Content...\n');
    
    // Get Home story
    const response = await Storyblok.get(`spaces/${SPACE_ID}/stories`);
    let homeStory = response.data.stories.find(s => s.is_startpage || s.slug === 'home');
    
    if (!homeStory) {
      console.error('❌ Home story not found!');
      return;
    }
    
    console.log(`Found Home story: ${homeStory.name} (ID: ${homeStory.id})\n`);
    
    // Complete content body matching original site exactly
    const completeBody = [
      // 1. Hero Section
      {
        component: 'hero',
        _uid: 'hero-1',
        headline: 'Cold Jet: Leading Dry Ice Solutions Manufacturer',
        subheadline: 'Driving Sustainable Innovation in Industrial Applications',
        description: 'Experience the power of Cold Jet\'s innovative dry ice technology. Our eco-friendly solutions deliver superior cleaning results, enhance efficiency, and minimize environmental impact across a broad spectrum of industries. Cold Jet provides complete and sustainable solutions for your business. These include dry ice blasting equipment as well as dry ice production systems.',
        video_url: 'https://www.coldjet.com/wp-content/uploads/Home_page_banner_video__compressed_v2.mp4'
      },
      
      // 2. Product Section
      {
        component: 'productSection',
        _uid: 'product-section-1',
        kicker: 'Advanced Dry Ice Solutions for Industry',
        title: 'The Dry Ice Blasting & Production Solutions You Can Trust',
        paragraph1: 'Experience the power of Cold Jet\'s innovative dry ice technology. We provide high-performance dry ice cleaning machines and dry ice production solutions tailored to your specific business needs.',
        paragraph2: 'Efficiency, reliability, and long-lasting performance are at the core of our dry ice solutions.',
        paragraph3: 'We prioritize innovation and customer satisfaction to deliver exceptional results.'
      },
      
      // 3. Equipment Grid
      {
        component: 'equipmentGrid',
        _uid: 'equipment-grid-1',
        items: [
          {
            component: 'equipmentItem',
            _uid: 'equipment-item-1',
            title: 'Dry Ice Blasting Systems',
            description: 'Our advanced dry ice blasting systems offer superior cleaning power and precision for a wide range of applications. Ideal for removing contaminants, coatings, and residues without damaging delicate surfaces.',
            link_url: 'https://www.coldjet.com/our-equipment/dry-ice-blasting-equipment/',
            link_text: 'View Solutions'
          },
          {
            component: 'equipmentItem',
            _uid: 'equipment-item-2',
            title: 'Dry Ice Production Systems',
            description: 'Efficiently produce high-quality dry ice on-site with our advanced production systems. Ideal for various applications, including food processing, cold chain logistics, and industrial needs.',
            link_url: 'https://www.coldjet.com/our-equipment/dry-ice-production-equipment/',
            link_text: 'View Solutions'
          }
        ]
      },
      
      // 4. Button: View all equipment
      {
        component: 'buttonSection',
        _uid: 'button-1',
        text: 'View all equipment',
        url: 'https://www.coldjet.com/our-equipment/',
        style: 'bordered',
        alignment: 'center'
      },
      
      // 5. Circular Economy
      {
        component: 'circularEconomy',
        _uid: 'circular-economy-1',
        kicker: 'Driving a Circular Economy with Recycled CO2',
        title: 'Cold Jet: Pioneering Sustainable Dry Ice Solutions with Recycled CO2',
        description: 'As a leading provider of dry ice solutions, we are committed to a circular economy. We utilize recycled CO2 to create powerful and sustainable dry ice solutions, minimizing waste and maximizing resource efficiency for businesses across industries.',
        cta_text: 'Learn More About Sustainable Dry Ice',
        cta_url: 'https://www.coldjet.com/sustainability/'
      },
      
      // 6. Industrial Challenges
      {
        component: 'industrialChallenges',
        _uid: 'industrial-challenges-1',
        kicker: 'Overcoming Industrial Challenges with Dry Ice Blasting Solutions',
        title: 'Cold Jet: 35+ Years of Expertise in Industrial Cleaning & Surface Preparation',
        description: 'Inefficient production processes can hinder success. Cold Jet\'s decades of experience mean we offer dry ice blasting solutions for every need—standard and custom. These solutions tackle your industry\'s challenges, reducing downtime and boosting efficiency while also being eco-friendly.'
      },
      
      // 7. Industry Cards (12 cards)
      {
        component: 'industryCards',
        _uid: 'industry-cards-1',
        cards: [
          {
            component: 'industryCard',
            _uid: 'industry-card-1',
            title: 'Plastics & Composites',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/plastics-composites/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-2',
            title: 'Automotive',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/automotive/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-3',
            title: 'Food & Beverage',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/food-beverage/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-4',
            title: 'Medical Equipment',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/medical-equipment/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-5',
            title: 'Contract Cleaning',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/contract-cleaning/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-6',
            title: 'Printing',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/printing/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-7',
            title: 'Aerospace & Aviation',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/aerospace-aviation/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-8',
            title: 'Oil & Gas',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/oil-gas/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-9',
            title: 'Restoration & Remediation',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/restoration-remediation/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-10',
            title: 'Textiles',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/textiles/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-11',
            title: 'Foundry',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/foundry/'
          },
          {
            component: 'industryCard',
            _uid: 'industry-card-12',
            title: 'Packaging',
            link: 'https://www.coldjet.com/dry-ice-blasting/industries/packaging/'
          }
        ]
      },
      
      // 8. Button: Find a solution
      {
        component: 'buttonSection',
        _uid: 'button-2',
        text: 'Find a solution in your industry',
        url: 'https://www.coldjet.com/dry-ice-blasting/industries/',
        style: 'bordered',
        alignment: 'center'
      },
      
      // 9. Why Choose Blasting (with comparison table shown in CleaningMethods component)
      {
        component: 'cleaningMethods',
        _uid: 'cleaning-methods-1'
      },
      
      // 10. On-Site Production
      {
        component: 'onSiteProduction',
        _uid: 'on-site-production-1',
        kicker: 'Gaining Control: The Advantages of On-Site Dry Ice Production',
        title: 'Cold Jet: Your Partner for Efficient On-Site Dry Ice Production',
        description: 'Experience the benefits of on-site dry ice production with a leading dry ice solutions provider. Gain greater control over your operations, reduce reliance on external suppliers, and improve cost-effectiveness. Cold Jet Dry Ice Production Solutions deliver a reliable supply of dry ice. Ensure you have the right amount, on demand.',
        cards: [
          {
            component: 'productionCard',
            _uid: 'production-card-1',
            title: 'Airline Catering',
            link: 'https://www.coldjet.com/dry-ice-production/applications/airline-catering/'
          },
          {
            component: 'productionCard',
            _uid: 'production-card-2',
            title: 'For Food Processors',
            link: 'https://www.coldjet.com/dry-ice-production/applications/food-processing-cooling/'
          },
          {
            component: 'productionCard',
            _uid: 'production-card-3',
            title: 'For Life Sciences',
            link: 'https://www.coldjet.com/dry-ice-production/applications/life-sciences/'
          },
          {
            component: 'productionCard',
            _uid: 'production-card-4',
            title: 'Production for Resale',
            link: 'https://www.coldjet.com/dry-ice-production/applications/production-for-resale/'
          },
          {
            component: 'productionCard',
            _uid: 'production-card-5',
            title: 'Cold Chain Management',
            link: 'https://www.coldjet.com/dry-ice-production/applications/cold-chain-management/'
          },
          {
            component: 'productionCard',
            _uid: 'production-card-6',
            title: 'Dry Ice For Food Shipping',
            link: 'https://www.coldjet.com/dry-ice-production/applications/dry-ice-for-food-shipping/'
          },
          {
            component: 'productionCard',
            _uid: 'production-card-7',
            title: 'Production for Blasting',
            link: 'https://www.coldjet.com/dry-ice-production/applications/production-for-blasting/'
          },
          {
            component: 'productionCard',
            _uid: 'production-card-8',
            title: 'Remote Production',
            link: 'https://www.coldjet.com/dry-ice-production/applications/remote-production/'
          }
        ]
      },
      
      // 11. Button: View all applications
      {
        component: 'buttonSection',
        _uid: 'button-3',
        text: 'View all applications',
        url: 'https://www.coldjet.com/dry-ice-production/applications/',
        style: 'bordered',
        alignment: 'center'
      },
      
      // 12. Cold Chain
      {
        component: 'coldChain',
        _uid: 'cold-chain-1',
        kicker: 'Ensuring Continuous Cold Chain Integrity',
        title: 'Reliable Cooling Solutions for Medical, Food, Logistics, and More',
        description: 'Dry ice production is vital for cold chain logistics. It offers the most effective means of preserving temperature-sensitive products. Dry ice keeps ultra-low temperatures without using electricity during transit or storage. This versatile and eco-friendly solution meets the demands of industries needing precision and reliability.\n\nMany sectors rely on dry ice to maintain product quality. This is essential for various industries. Pharmaceuticals, medical research, food distribution, and airline catering all depend on it.\n\nDry ice is essential for businesses looking for sustainable and efficient cold chain solutions.'
      },
      
      // 13. Customers
      {
        component: 'customers',
        _uid: 'customers-1',
        kicker: 'OUR CUSTOMERS & WHAT THEY SAY ABOUT US',
        title: 'Thousands of customers around the world rely on Cold Jet',
        description: 'With a global install base of 15,000+ that consists of companies large and small – Cold Jet delivers real value.'
      },
      
      // 14. Logo Grid (18 logos)
      {
        component: 'logoGrid',
        _uid: 'logo-grid-1',
        logos: [
          { component: 'logo', _uid: 'logo-1', name: '3M', alt: '3M logo' },
          { component: 'logo', _uid: 'logo-2', name: 'Apple', alt: 'Apple logo' },
          { component: 'logo', _uid: 'logo-3', name: 'Bayer', alt: 'Bayer logo' },
          { component: 'logo', _uid: 'logo-4', name: 'Frito-Lay', alt: 'Frito-Lay logo' },
          { component: 'logo', _uid: 'logo-5', name: 'GE', alt: 'GE logo' },
          { component: 'logo', _uid: 'logo-6', name: 'Goodyear', alt: 'Goodyear logo' },
          { component: 'logo', _uid: 'logo-7', name: 'Graham Packaging', alt: 'Graham Packaging logo' },
          { component: 'logo', _uid: 'logo-8', name: 'Honeywell', alt: 'Honeywell logo' },
          { component: 'logo', _uid: 'logo-9', name: 'John Deere', alt: 'John Deere logo' },
          { component: 'logo', _uid: 'logo-10', name: 'Johnson & Johnson', alt: 'Johnson & Johnson logo' },
          { component: 'logo', _uid: 'logo-11', name: 'Kraft', alt: 'Kraft logo' },
          { component: 'logo', _uid: 'logo-12', name: 'Nike', alt: 'Nike logo' },
          { component: 'logo', _uid: 'logo-13', name: 'Red-D-Arc', alt: 'Red-D-Arc logo' },
          { component: 'logo', _uid: 'logo-14', name: 'Siemens', alt: 'Siemens logo' },
          { component: 'logo', _uid: 'logo-15', name: 'Silgan', alt: 'Silgan logo' },
          { component: 'logo', _uid: 'logo-16', name: 'True', alt: 'True logo' },
          { component: 'logo', _uid: 'logo-17', name: 'Tyco', alt: 'Tyco logo' },
          { component: 'logo', _uid: 'logo-18', name: 'WestRock', alt: 'WestRock logo' }
        ]
      },
      
      // 15. Testimonials (6 testimonials)
      {
        component: 'testimonials',
        _uid: 'testimonials-1',
        items: [
          {
            component: 'testimonial',
            _uid: 'testimonial-1',
            quote: 'From the initial inquiry to the installation, we are very satisfied. The employees of Cold Jet were very friendly, reliable and supported us throughout implementation. We look forward to future collaboration with them and the potential for future pelletizer purchases.',
            author: 'Werner Fiedler',
            company: 'KS Aluminum-Technologie GmbH',
            link: 'https://www.coldjet.com/resources/ks-aluminum-technologie-gmbh/'
          },
          {
            component: 'testimonial',
            _uid: 'testimonial-2',
            quote: 'My production team tells me repeatedly that Cold Jet\'s product is user-friendly and that it has the best applicator, nozzle and attachment of all those that we evaluated. Did I mention they are fast? The Aero systems give us everything we asked for in a cleaning solution, and I\'m getting a lot of interest from other plants within our organization because of the efficiency and the production increases we\'ve achieved. Cold Jet has helped us become a better, cleaner manufacturer and the dry ice cleaning system truly adds value to our organization\'s operations.',
            author: 'Tony Tai',
            company: 'Production Supervisor | Global Chocolate Manufacturer',
            link: 'https://www.coldjet.com/resources/chocolate-facility/'
          },
          {
            component: 'testimonial',
            _uid: 'testimonial-3',
            quote: 'Cleaning with Cold Jet will not roll parting lines, change or destroy the metal and best of all, it allows our running time to be extended. We use it every day, on every shift.',
            author: 'Tom Mendel',
            company: 'President and CEO | Performance Plastics',
            link: 'https://www.coldjet.com/resources/performance-plastics/'
          },
          {
            component: 'testimonial',
            _uid: 'testimonial-4',
            quote: 'We estimated that it would pay for itself in six months, but it took only one month. This machine is incredible. Every foundry needs to own a dry ice cleaning system!',
            author: 'Daryl Hesch',
            company: 'Tooling Supervisor | Progress Casting',
            link: 'https://www.coldjet.com/resources/progress-casting-group/'
          },
          {
            component: 'testimonial',
            _uid: 'testimonial-5',
            quote: 'Even when the surface was magnified 350 times, we didn\'t see any pitting. We didn\'t see any signs of abrasion. We didn\'t see any damage.',
            author: 'Will Hoffman',
            company: 'Conservation Project Manager | The Mariners\' Museum and Park',
            link: 'https://www.coldjet.com/resources/uss-monitor/'
          },
          {
            component: 'testimonial',
            _uid: 'testimonial-6',
            quote: 'The time savings alone have been phenomenal as we have been able to clean our equipment better and faster while they are still online and we have dramatically reduced the amount of cleansers, degreasers and alcohol that we buy and use for cleaning.',
            author: 'Joe Pond',
            company: 'Setup Supervisor | Silgan Plastics',
            link: 'https://www.coldjet.com/resources/silgan-plastics/'
          }
        ]
      },
      
      // 16. Global Offices
      {
        component: 'globalOffices',
        _uid: 'global-offices-1',
        kicker: 'Global Offices',
        title: 'We are the global leader with a uniquely local presence',
        description: 'Being responsive to our customer\'s needs is mission critical to our service team. With service centers around the globe, our technicians are always within reach.',
        link_text: 'Find Cold Jet near you',
        link_url: 'https://www.coldjet.com/global-offices/'
      }
    ];
    
    console.log(`Adding ${completeBody.length} content blocks to Home story...\n`);
    
    // Update the story
    await Storyblok.put(`spaces/${SPACE_ID}/stories/${homeStory.id}`, {
      story: {
        name: homeStory.name,
        slug: homeStory.slug,
        content: {
          component: 'page',
          body: completeBody
        },
        is_startpage: homeStory.is_startpage
      },
      publish: 1
    });
    
    console.log('✅ Home story populated and published!\n');
    console.log('📊 Content Summary:');
    console.log(`  - Hero with video`);
    console.log(`  - Product introduction section`);
    console.log(`  - 2 equipment items`);
    console.log(`  - Circular economy section`);
    console.log(`  - Industrial challenges section`);
    console.log(`  - 12 industry cards`);
    console.log(`  - Comparison table (in cleaningMethods)`);
    console.log(`  - On-site production with 8 application cards`);
    console.log(`  - Cold chain section`);
    console.log(`  - Customers section`);
    console.log(`  - 18 company logos`);
    console.log(`  - 6 testimonials`);
    console.log(`  - Global offices section`);
    console.log(`  - 3 CTA buttons`);
    
    console.log('\n🎉 All content is now editable in Storyblok!');
    console.log('\n📝 Next: Add images in Storyblok Visual Editor for each section');
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

async function run() {
  await setupSchemas();
  await populateHomeStory();
}

run();