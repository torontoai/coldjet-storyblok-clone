import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { storyblokInit, apiPlugin, StoryblokComponent } from '@storyblok/react';
import Header from './components/Header';
import Banner from './components/Banner';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import EquipmentGrid from './components/EquipmentGrid';
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

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.REACT_APP_STORYBLOK_PREVIEW_TOKEN,
  bridge: true,
  use: [apiPlugin],
  components: {
    page: ({ blok }) => <div>{blok.body?.map((nestedBlok) => <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />)}</div>,
    hero: Hero,
    equipmentGrid: EquipmentGrid,
    industryCards: IndustryCards,
    onSiteProduction: OnSiteProduction,
    testimonials: Testimonials,
    logoGrid: LogoGrid,
    footer: Footer,
  },
});

const App = () => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await fetch(
          `https://api.storyblok.com/v2/cdn/stories/home?version=draft&token=${process.env.REACT_APP_STORYBLOK_PREVIEW_TOKEN}&cv=${Date.now()}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Storyblok story loaded:', data.story);
        setStory(data.story);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching story:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStory();
  }, []);

  if (loading) {
    return (
      <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    console.error('Rendering with error, falling back to default content');
  }

  // Render with Storyblok content if available, otherwise use defaults
  const renderContent = () => {
    if (story?.content?.body) {
      return story.content.body.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ));
    }

    // Fallback to hardcoded content if Storyblok data not available
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