import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { getStoryContent } from './lib/storyblok';
import Header from './components/Header';
import Banner from './components/Banner';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import EquipmentGrid from './components/EquipmentGrid';
import WhyChoose from './components/WhyChoose';
import ButtonSection from './components/ButtonSection';
import WhyChooseBlasting from './components/WhyChooseBlasting';
import CircularEconomy from './components/CircularEconomy';
import IndustrialChallenges from './components/IndustrialChallenges';
import IndustryCards from './components/IndustryCards';
import CleaningMethods from './components/CleaningMethods';
import OnSiteProduction from './components/OnSiteProduction';
import ColdChain from './components/ColdChain';
import Customers from './components/Customers';
import LogoGrid from './components/LogoGrid';
import Testimonials from './components/Testimonials';
import GlobalOffices from './components/GlobalOffices';
import Footer from './components/Footer';
import './App.css';

// Initialize Storyblok with bridge for Visual Editor
storyblokInit({
  accessToken: process.env.REACT_APP_STORYBLOK_PREVIEW_TOKEN,
  bridge: true,
  use: [apiPlugin],
});

// Component mapping for Storyblok blocks
const ComponentMap = {
  hero: Hero,
  productSection: ProductSection,
  equipmentGrid: EquipmentGrid,
  buttonSection: ButtonSection,
  whyChoose: WhyChoose,
  whyChooseBlasting: WhyChooseBlasting,
  industryCards: IndustryCards,
  circularEconomy: CircularEconomy,
  industrialChallenges: IndustrialChallenges,
  cleaningMethods: CleaningMethods,
  onSiteProduction: OnSiteProduction,
  coldChain: ColdChain,
  customers: Customers,
  logoGrid: LogoGrid,
  testimonials: Testimonials,
  globalOffices: GlobalOffices,
  footer: Footer,
};

const App = () => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract slug from current URL path
    let slug = 'home';
    const path = window.location.pathname;
    if (path === '/' || path === '') {
      slug = 'home';
    } else {
      slug = path.replace(/^\/+|\/+$/g, '');
      if (!slug) slug = 'home';
    }

    console.log(`Loading story for slug: ${slug} from path: ${path}`);
    
    const loadStory = () => {
      getStoryContent(slug)
        .then((fetchedStory) => {
          setStory(fetchedStory);
          if (!fetchedStory) {
            console.log(`Story not found for slug: ${slug}, using fallback`);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error('Fetch error:', err);
          setLoading(false);
        });
    };
    
    loadStory();
    
    // Storyblok bridge for Visual Editor live updates
    if (window.storyblok) {
      window.storyblok.on(['input', 'published', 'change'], () => {
        loadStory();
      });
    }
  }, []);

  if (loading) {
    return (
      <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>Loading...</div>
      </div>
    );
  }

  // Render with Storyblok content if available, otherwise use defaults
  const renderContent = () => {
    if (story && story.content && story.content.body) {
      return story.content.body.map((blok) => {
        const Component = ComponentMap[blok.component];
        if (Component) {
          return <Component key={blok._uid} blok={blok} />;
        }
        console.warn(`Component not found for: ${blok.component}`);
        return null;
      });
    }

    console.log('Using fallback content');
    return (
      <>
        <Hero />
        <ProductSection />
        <EquipmentGrid />
        
        <section className="wysiwyg-content container text-component margin-top--none margin-bottom--none padding-top--xxs padding-bottom--xxs container--xl">
          <p style={{ textAlign: 'center' }}>
            <a className="g-btn g-btn--bordered g-btn--lg" href="https://www.coldjet.com/our-equipment/" target="_blank" rel="noopener noreferrer">
              View all equipment
            </a>
          </p>
        </section>
        
        <WhyChoose />
        <CircularEconomy />
        <IndustrialChallenges />
        <IndustryCards />
        
        <section className="wysiwyg-content container text-component margin-top--lg margin-bottom--lg padding-top--md padding-bottom--lg container--xl">
          <p style={{ textAlign: 'center' }}>
            <a className="g-btn--lg g-btn g-btn--bordered" href="https://www.coldjet.com/dry-ice-blasting/industries/" target="_blank" rel="noopener noreferrer">
              Find a solution in your industry
            </a>
          </p>
        </section>
        
        <CleaningMethods />
        <OnSiteProduction />
        <ColdChain />
        <Customers />
        
        <section className="wysiwyg-content container text-component margin-top--none margin-bottom--none padding-top--none padding-bottom--none container--xl">
          <p>
            <a
              className="mobile-only-button"
              style={{
                lineHeight: '0.5',
                fontSize: '1rem',
                position: 'fixed',
                top: '40%',
                left: '10px',
                transform: 'translateY(-50%) rotate(90deg)',
                transformOrigin: 'left center',
                backgroundColor: '#aed047',
                color: 'white',
                padding: '0px 20px 20px 20px',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
                borderRadius: '5px 5px 0 0',
                zIndex: 1000,
                whiteSpace: 'nowrap'
              }}
              href="https://www.coldjet.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br />
              Contact Us<br />
            </a>
          </p>
        </section>
        
        <LogoGrid />
        <Testimonials />
        <GlobalOffices />
      </>
    );
  };

  const pageTitle = story?.content?.title || 'Cold Jet: Leading Dry Ice Solutions Manufacturer';
  const pageDescription = story?.content?.description || 'Driving Sustainable Innovation in Industrial Applications';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.coldjet.com/" />
      </Helmet>
      <div className="App">
        <div className="site-wrapper">
          <Header />
          <Banner />
          
          <main id="content" className="site-content" role="main">
            {renderContent()}
          </main>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;