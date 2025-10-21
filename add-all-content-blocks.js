require('dotenv').config();
const StoryblokClient = require('storyblok-js-client');

// Check for required environment variables
if (!process.env.STORYBLOK_SPACE_ID || !process.env.STORYBLOK_MANAGEMENT_TOKEN) {
  console.error('\n❌ Missing required environment variables!');
  console.error('\nPlease add to your .env file:');
  console.error('STORYBLOK_SPACE_ID=your_space_id');
  console.error('STORYBLOK_MANAGEMENT_TOKEN=your_management_token');
  console.error('\nYou can find these in Storyblok:');
  console.error('1. Space ID: Settings → General → Space ID');
  console.error('2. Management Token: Settings → Access Tokens → Create new token with "Read & Write" permissions');
  process.exit(1);
}

const Storyblok = new StoryblokClient.default({
  oauthToken: process.env.STORYBLOK_MANAGEMENT_TOKEN
});

const SPACE_ID = process.env.STORYBLOK_SPACE_ID;

async function addAllContentBlocks() {
  try {
    console.log('🔍 Fetching Home story...\n');
    
    // Get the Home story
    const response = await Storyblok.get(`spaces/${SPACE_ID}/stories`);
    
    if (!response.data.stories || response.data.stories.length === 0) {
      console.error('❌ No stories found in this space!');
      return;
    }
    
    // Find the Home story (startpage or slug='home' or slug='')
    let homeStory = response.data.stories.find(s => s.is_startpage);
    if (!homeStory) {
      homeStory = response.data.stories.find(s => s.slug === 'home' || s.slug === '');
    }
    
    if (!homeStory) {
      console.error('❌ Home story not found!');
      console.log('\nAvailable stories:');
      response.data.stories.forEach(s => {
        console.log(`  - ${s.name} (slug: ${s.slug}, startpage: ${s.is_startpage})`);
      });
      return;
    }
    
    console.log(`✅ Found Home story: "${homeStory.name}" (ID: ${homeStory.id})\n`);
    
    // Complete content structure with all blocks
    const completeBody = [
      {
        component: 'hero',
        _uid: 'hero-block-1',
        headline: 'Cold Jet: Leading Dry Ice Solutions Manufacturer',
        subheadline: 'Driving Sustainable Innovation in Industrial Applications'
      },
      {
        component: 'equipmentGrid',
        _uid: 'equipment-grid-1',
        kicker: 'Our Equipment',
        title: 'Dry Ice Blasting Equipment & Dry Ice Production'
      },
      {
        component: 'buttonSection',
        _uid: 'button-view-equipment',
        text: 'View all equipment',
        url: 'https://www.coldjet.com/our-equipment/',
        style: 'bordered',
        alignment: 'center'
      },
      {
        component: 'whyChoose',
        _uid: 'why-choose-1',
        kicker: 'Why Choose Cold Jet?',
        title: 'The Leader in Dry Ice Technology',
        description: 'For over 30 years, Cold Jet has been at the forefront of dry ice technology innovation.'
      },
      {
        component: 'circularEconomy',
        _uid: 'circular-economy-1',
        kicker: 'Sustainability',
        title: 'Driving a Circular Economy with Recycled CO₂',
        description: 'Our dry ice is made from recycled CO₂, a by-product of industrial processes.'
      },
      {
        component: 'industrialChallenges',
        _uid: 'industrial-challenges-1',
        kicker: 'Applications',
        title: 'Overcoming Industrial Challenges with Dry Ice Blasting Solutions',
        description: 'From automotive to food processing, our technology solves complex cleaning challenges across industries.'
      },
      {
        component: 'industryCards',
        _uid: 'industry-cards-1',
        title: 'Industries We Serve'
      },
      {
        component: 'buttonSection',
        _uid: 'button-find-solution',
        text: 'Find a solution in your industry',
        url: 'https://www.coldjet.com/dry-ice-blasting/industries/',
        style: 'bordered',
        alignment: 'center'
      },
      {
        component: 'whyChooseBlasting',
        _uid: 'why-choose-blasting-1',
        kicker: 'Why Choose Dry Ice Blasting?',
        title: 'A Cleaner, Faster, and More Sustainable Approach to Industrial Cleaning',
        description: 'Discover the benefits of dry ice blasting. It offers a non-toxic, non-abrasive, and waste-free alternative to traditional surface cleaning methods.\n\nPlus, dry ice blasting is highly efficient, leading to significant savings on operating and maintenance costs. This makes it a incredibly cost-effective cleaning solution. Compare the key benefits and see why industries are making the switch.',
        comparison_table: [
          {
            method: 'Dry Ice Blasting',
            abrasive: false,
            secondary_waste: false,
            sustainable: true,
            toxic: false,
            conductive: false
          },
          {
            method: 'Sand Blasting',
            abrasive: true,
            secondary_waste: true,
            sustainable: false,
            toxic: false,
            conductive: false
          },
          {
            method: 'Water Blasting',
            abrasive: false,
            secondary_waste: true,
            sustainable: false,
            toxic: false,
            conductive: true
          },
          {
            method: 'Chemical Cleaning',
            abrasive: false,
            secondary_waste: true,
            sustainable: false,
            toxic: true,
            conductive: false
          },
          {
            method: 'Manual Scraping',
            abrasive: true,
            secondary_waste: false,
            sustainable: false,
            toxic: false,
            conductive: false
          }
        ]
      },
      {
        component: 'cleaningMethods',
        _uid: 'cleaning-methods-1',
        kicker: 'Applications',
        title: 'Dry Ice Blasting Applications'
      },
      {
        component: 'onSiteProduction',
        _uid: 'on-site-production-1',
        kicker: 'Production Solutions',
        title: 'On-Site Dry Ice Production Cards'
      },
      {
        component: 'coldChain',
        _uid: 'cold-chain-1',
        kicker: 'Cold Chain',
        title: 'Ensuring Continuous Cold Chain Integrity',
        description: 'Protect temperature-sensitive products throughout the supply chain'
      },
      {
        component: 'customers',
        _uid: 'customers-1',
        title: 'Trusted by Industry Leaders',
        description: 'Join thousands of companies worldwide who trust Cold Jet'
      },
      {
        component: 'logoGrid',
        _uid: 'logo-grid-1',
        title: 'Trusted by Industry Leaders'
      },
      {
        component: 'testimonials',
        _uid: 'testimonials-1',
        kicker: 'What Our Customers Say',
        title: 'Real Results from Industry Leaders',
        subtitle: 'Discover how Cold Jet\'s dry ice technology transformed their operations'
      },
      {
        component: 'globalOffices',
        _uid: 'global-offices-1',
        kicker: 'Global Presence',
        title: 'Worldwide Support',
        description: 'With offices and distributors in over 70 countries, we\'re here to support you wherever you are.'
      }
    ];
    
    console.log('📝 Updating Home story with complete content structure...\n');
    console.log(`Adding ${completeBody.length} content blocks:\n`);
    
    completeBody.forEach((block, index) => {
      console.log(`  ${index + 1}. ${block.component} - ${block.title || block.kicker || block.text || '(section)'}`);
    });
    
    console.log('\n');
    
    // Update the story - preserve existing parent_id and is_startpage
    const updateResponse = await Storyblok.put(
      `spaces/${SPACE_ID}/stories/${homeStory.id}`,
      {
        story: {
          name: homeStory.name,
          slug: homeStory.slug,
          content: {
            component: (homeStory.content && homeStory.content.component) || 'page',
            body: completeBody
          },
          parent_id: homeStory.parent_id,
          is_startpage: homeStory.is_startpage
        },
        publish: 1
      }
    );
    
    console.log('✅ Home story updated successfully!\n');
    console.log('📊 Summary:');
    console.log(`  - Total blocks: ${completeBody.length}`);
    console.log(`  - Story published: Yes`);
    console.log(`  - All sections now editable via Storyblok CMS`);
    
    console.log('\n🎉 Next steps:');
    console.log('  1. Open Storyblok Visual Editor to verify all blocks');
    console.log('  2. Deploy your React app to see the changes');
    console.log('  3. Edit any content directly in Storyblok CMS');
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
    if (error.response?.status === 401) {
      console.error('\n💡 This looks like an authentication error.');
      console.error('Please check your STORYBLOK_MANAGEMENT_TOKEN is correct.');
    }
  }
}

addAllContentBlocks();