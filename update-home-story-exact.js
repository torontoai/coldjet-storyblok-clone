async function updateOrCreateHomeStory() {
  const MANAGEMENT_TOKEN = 'eDnw7ANwiuU17rUOqZL8Jgtt-256880-tzX65gQafwdWTum-cUL3';
  const SPACE_ID = '324703';

  const headers = {
    'Authorization': MANAGEMENT_TOKEN,
    'Content-Type': 'application/json',
  };

  const content = {
    component: 'page',
    headline: 'Cold Jet: Leading Dry Ice Solutions Manufacturer',
    subheadline: 'Driving Sustainable Innovation<br />in Industrial Applications',
    body: [
      {
        component: 'header',
        _uid: 'header-1',
        logo: 'Cold Jet',
        navigation: [
          { text: 'Dry Ice Blasting', url: '/dry-ice-blasting/' },
          { text: 'Dry Ice Production', url: '/dry-ice-production/' },
          { text: 'Our Equipment', url: '/our-equipment/' },
          { text: 'Parts & Services', url: '/parts-services/' },
          { text: 'Contact Us', url: '/contact-us/' },
        ],
      },
      {
        component: 'hero',
        _uid: 'hero-1',
        headline: 'Cold Jet: Leading Dry Ice Solutions Manufacturer',
        subheadline: 'Driving Sustainable Innovation<br />in Industrial Applications',
        text: 'Experience the power of Cold Jet\'s innovative dry ice technology. Our eco-friendly solutions deliver superior cleaning results, enhance efficiency, and minimize environmental impact across a broad spectrum of industries. Cold Jet provides complete and sustainable solutions for your business. These include dry ice blasting equipment as well as dry ice production systems.',
        cta_text: 'View All Equipment',
        cta_url: '/our-equipment/',
        video_url: 'https://www.coldjet.com/wp-content/uploads/Home_page_banner_video__compressed_v2.mp4',
      },
      {
        component: 'productSection',
        _uid: 'product-1',
        title: 'The Dry Ice Blasting & Production Solutions You Can Trust',
        text: 'Advanced Dry Ice Solutions for Industry The Dry Ice Blasting & Production Solutions You Can Trust Experience the power of Cold Jet\'s innovative dry ice technology. We provide high-performance dry ice cleaning machines and dry ice production solutions tailored to your specific business needs. Efficiently produce high-quality dry ice on-site with our advanced production systems.',
      },
      {
        component: 'equipmentGrid',
        _uid: 'equipment-1',
        title: 'Dry Ice Blasting Systems',
        items: [
          {
            name: 'Dry Ice Blasting Systems',
            description: 'Our advanced dry ice blasting systems offer superior cleaning power and precision for a wide range of applications. Ideal for removing contaminants, coatings, and residues without damaging delicate surfaces.',
            image: 'https://www.coldjet.com/wp-content/uploads/AERO2-PCS-ULTRA-square-500x500.jpg',
            url: '/our-equipment/dry-ice-blasting-equipment/',
          },
          {
            name: 'Dry Ice Production Systems',
            description: 'Efficiently produce high-quality dry ice on-site with our advanced production systems. Ideal for various applications, including food processing, cold chain logistics, and industrial needs.',
            image: 'https://www.coldjet.com/wp-content/uploads/Cold-Jet-PR750H-Food-Processing-Dry-Ice.jpg',
            url: '/our-equipment/dry-ice-production-equipment/',
          },
        ],
      },
      {
        component: 'cta',
        _uid: 'cta-1',
        text: 'View all equipment',
        url: '/our-equipment/',
      },
      {
        component: 'circularEconomy',
        _uid: 'circular-1',
        title: 'Driving a Circular Economy with Recycled CO2',
        text: 'Cold Jet: Pioneering Sustainable Dry Ice Solutions with Recycled CO2 As a leading provider of dry ice solutions, we are committed to a circular economy. We utilize recycled CO2 to create powerful and sustainable dry ice solutions, minimizing waste and maximizing environmental benefits.',
        image: 'https://cdn.bfldr.com/YCAINI82/at/s3tjthg5k43qswckxgppb9tz/Carbon_Dioxide_-_ESG.jpg?format=webp&width=1200',
      },
      {
        component: 'industrialChallenges',
        _uid: 'challenges-1',
        title: 'Cold Jet: 35+ Years of Expertise in Industrial Cleaning & Surface Preparation',
        text: 'Overcoming Industrial Challenges with Dry Ice Blasting Solutions Cold Jet: 35+ Years of Expertise in Industrial Cleaning & Surface Preparation Inefficient production processes can hinder success. Cold Jet\'s decades of experience mean we offer dry ice blasting solutions for every need—standard and custom.',
      },
      {
        component: 'industryCards',
        _uid: 'industries-1',
        title: 'Industries We Serve',
        cards: [
          {
            title: 'Plastics & Composites',
            description: 'Efficient cleaning for plastics manufacturing.',
            image: 'https://www.coldjet.com/wp-content/uploads/2019/07/IMG_1696-500x300.jpg',
            url: '/dry-ice-blasting/industries/plastics-composites/',
          },
          {
            title: 'Automotive',
            description: 'Precision cleaning for automotive production.',
            image: 'https://www.coldjet.com/wp-content/uploads/automotive.jpg',
            url: '/dry-ice-blasting/industries/automotive/',
          },
          {
            title: 'Food & Beverage',
            description: 'Hygienic cleaning without water.',
            image: 'https://www.coldjet.com/wp-content/uploads/food-beverage.jpg',
            url: '/dry-ice-blasting/industries/food-beverage/',
          },
          {
            title: 'Medical Equipment',
            description: 'Sterile cleaning for medical devices.',
            image: 'https://www.coldjet.com/wp-content/uploads/medical.jpg',
            url: '/dry-ice-blasting/industries/medical-equipment/',
          },
          {
            title: 'Contract Cleaning',
            description: 'Versatile cleaning services.',
            image: 'https://www.coldjet.com/wp-content/uploads/contract-cleaning.jpg',
            url: '/dry-ice-blasting/industries/contract-cleaning/',
          },
          {
            title: 'Printing',
            description: 'Clean printing presses without downtime.',
            image: 'https://www.coldjet.com/wp-content/uploads/printing.jpg',
            url: '/dry-ice-blasting/industries/printing/',
          },
          {
            title: 'Aerospace & Aviation',
            description: 'Precision cleaning for aerospace components.',
            image: 'https://www.coldjet.com/wp-content/uploads/aerospace.jpg',
            url: '/dry-ice-blasting/industries/aerospace-aviation/',
          },
          {
            title: 'Oil & Gas',
            description: 'Safe cleaning in hazardous environments.',
            image: 'https://www.coldjet.com/wp-content/uploads/oil-gas.jpg',
            url: '/dry-ice-blasting/industries/oil-gas/',
          },
          {
            title: 'Restoration & Remediation',
            description: 'Effective restoration cleaning.',
            image: 'https://www.coldjet.com/wp-content/uploads/restoration.jpg',
            url: '/dry-ice-blasting/industries/restoration-remediation/',
          },
          {
            title: 'Textiles',
            description: 'Gentle cleaning for textiles.',
            image: 'https://www.coldjet.com/wp-content/uploads/textiles.jpg',
            url: '/dry-ice-blasting/industries/textiles/',
          },
          {
            title: 'Foundry',
            description: 'Cleaning in foundry operations.',
            image: 'https://www.coldjet.com/wp-content/uploads/foundry.jpg',
            url: '/dry-ice-blasting/industries/foundry/',
          },
          {
            title: 'Packaging',
            description: 'Clean packaging lines.',
            image: 'https://www.coldjet.com/wp-content/uploads/packaging.jpg',
            url: '/dry-ice-blasting/industries/packaging/',
          },
        ],
      },
      {
        component: 'cta',
        _uid: 'cta-2',
        text: 'Find a solution in your industry',
        url: '/dry-ice-blasting/industries/',
      },
      {
        component: 'cleaningMethods',
        _uid: 'methods-1',
        title: 'Why Choose Dry Ice Blasting?',
        text: 'A Cleaner, Faster, and More Sustainable Approach to Industrial Cleaning Discover the benefits of dry ice blasting. It offers a non-toxic, non-abrasive, and waste-free alternative to traditional surface cleaning methods. Plus, dry ice blasting is highly efficient, leading to reduced downtime and lower operational costs.',
      },
      {
        component: 'footer',
        _uid: 'footer-1',
        links: [
          { text: 'Dry Ice Blasting', url: '/dry-ice-blasting/' },
          { text: 'Aerospace & Aviation', url: '/dry-ice-blasting/industries/aerospace-aviation/' },
          { text: 'Automotive', url: '/dry-ice-blasting/industries/automotive/' },
          { text: 'Contract Cleaning', url: '/dry-ice-blasting/industries/contract-cleaning/' },
          { text: 'Engineered Wood', url: '/dry-ice-blasting/industries/engineered-wood/' },
          { text: 'Food & Beverage', url: '/dry-ice-blasting/industries/food-beverage/' },
          { text: 'Foundry', url: '/dry-ice-blasting/industries/foundry/' },
          { text: 'View All', url: '/dry-ice-blasting/applications/' },
          { text: 'Dry Ice Production', url: '/dry-ice-production/' },
          { text: 'Airline Catering', url: '/dry-ice-production/applications/airline-catering/' },
          { text: 'Biogas', url: '/dry-ice-production/applications/biogas/' },
          { text: 'Cold Chain Management', url: '/dry-ice-production/applications/cold-chain-management/' },
          { text: 'Dry Ice Cooling in Food Processing Facilities', url: '/dry-ice-production/applications/food-processing-cooling/' },
          { text: 'Dry Ice For Food Shipping', url: '/dry-ice-production/applications/dry-ice-for-food-shipping/' },
          { text: 'Dry Ice Production for Life Sciences', url: '/dry-ice-production/applications/life-sciences/' },
          { text: 'View All', url: '/dry-ice-production/applications/' },
          { text: 'Our Equipment', url: '/our-equipment/' },
          { text: 'Dry Ice Blasting Equipment', url: '/our-equipment/dry-ice-blasting-equipment/' },
          { text: 'Dry Ice Production Equipment', url: '/our-equipment/dry-ice-production-equipment/' },
          { text: 'CO2 Recovery for Dry Ice Production', url: '/our-equipment/dry-ice-production-equipment/co2-recovery-system/' },
          { text: 'CO2 Capture for Biogas Upgrading', url: '/our-equipment/carbon-capture-storage-systems/' },
          { text: 'Integrated Blasting Equipment', url: '/our-equipment/integrated-blasting-equipment/' },
          { text: 'Parts & Services', url: '/parts-services/' },
          { text: 'Cold Jet CONNECT®', url: '/parts-services/cold-jet-connect/' },
          { text: 'Service & Repair', url: '/parts-services/service-repair/' },
          { text: 'Parts & Accessories', url: '/parts-services/parts-accessories/' },
          { text: 'Preventative Maintenance', url: '/parts-services/preventative-maintenance/' },
          { text: 'Installation & Training', url: '/parts-services/installation-training/' },
          { text: 'Warranty Registration', url: '/warranty-registration/' },
          { text: 'Returns', url: '/returns/' },
          { text: 'Contact Us', url: '/contact-us/' },
          { text: 'Sustainability at Cold Jet', url: '/sustainability/' },
          { text: 'Virtual Demo', url: '/get-started/' },
          { text: 'Careers', url: '/careers/' },
          { text: 'Events', url: '/events-calendar/' },
          { text: 'Legal', url: '/legal/' },
          { text: 'Privacy Policy', url: '/privacy-policy/' },
          { text: 'Pay Online', url: 'https://www.payerexpress.com/ebp/ColdJet/Login/Index' },
          { text: 'Languages', url: '/language-selector/' },
        ],
      },
    ],
  };

  // First, search for existing home story
  const searchUrl = `https://api.storyblok.com/v1/spaces/${SPACE_ID}/stories/?filter_query[slug]=home`;

  try {
    console.log('Searching for existing home story...');
    const searchResponse = await fetch(searchUrl, {
      method: 'GET',
      headers: headers,
    });

    if (searchResponse.ok) {
      const searchData = await searchResponse.json();
      if (searchData.stories && searchData.stories.length > 0) {
        const storyId = searchData.stories[0].id;
        console.log('Found existing home story ID:', storyId);
        const updateUrl = `https://api.storyblok.com/v1/spaces/${SPACE_ID}/stories/${storyId}`;
        const requestBody = {
          story: {
            name: 'Home',
            slug: 'home',
            content: content,
          },
          publish: 1,
        };

        console.log('Updating existing home story...');
        const updateResponse = await fetch(updateUrl, {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(requestBody),
        });

        if (updateResponse.ok) {
          const data = await updateResponse.json();
          console.log('Update success! Story updated and published.');
          console.log('Story ID:', data.story.id);
          console.log('Body length:', data.story.content.body ? data.story.content.body.length : 0);
        } else {
          const errorData = await updateResponse.json();
          console.error('Update error:', updateResponse.status, errorData);
        }
      } else {
        console.log('No existing home story found, creating new one...');
        const createUrl = `https://api.storyblok.com/v1/spaces/${SPACE_ID}/stories/`;
        const createRequestBody = {
          story: {
            name: 'Home',
            slug: 'home',
            content: content,
          },
          publish: 1,
        };

        const createResponse = await fetch(createUrl, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(createRequestBody),
        });

        if (createResponse.ok) {
          const data = await createResponse.json();
          console.log('Creation success! Story created and published.');
          console.log('Story ID:', data.story.id);
          console.log('Body length:', data.story.content.body ? data.story.content.body.length : 0);
        } else {
          const errorData = await createResponse.json();
          console.error('Creation error:', createResponse.status, errorData);
        }
      }
    } else {
      const errorData = await searchResponse.json();
      console.error('Search error:', searchResponse.status, errorData);
    }
  } catch (error) {
    console.error('Network error:', error.message);
  }
}

updateOrCreateHomeStory();