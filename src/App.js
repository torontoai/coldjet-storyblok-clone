import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { storyblokInit, apiPlugin, StoryblokComponent } from '@storyblok/react';
import { getStoryContent } from './lib/storyblok';
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
  bridge: true, // Enable bridge for Visual Editor
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
  apiOptions: {
    region: 'us', // Verify this matches your Storyblok space region
  },
});

const App = () => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentSlugRef = useRef('home');
  const isMountedRef = useRef(true);

  const fetchStory = async (slug) => {
    if (!isMountedRef.current) return;
    setLoading(true);
    setError(null);
    try {
      const fetchedStory = await getStoryContent(slug);
      if (isMountedRef.current) {
        setStory(fetchedStory);
        if (!fetchedStory) {
          setError(`Failed to load story for slug: ${slug}`);
        }
      }
    } catch (err) {
      if (isMountedRef.current) {
        console.error('Fetch error:', err);
        setError('Error loading story');
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    isMountedRef.current = true;
    
    // Extract slug from current URL path
    let slug = 'home';
    const path = window.location.pathname;
    if (path === '/' || path === '') {
      slug = 'home';
    } else {
      slug = path.replace(/^\/+|\/+$/g, '');
      if (!slug) slug = 'home';
    }

    currentSlugRef.current = slug;
    console.log(`Loading story for slug: ${slug} from path: ${path}`);
    fetchStory(slug);

    // Storyblok bridge for live preview updates - with safety checks
    let handleChange = null;
    
    const initBridge = () => {
      if (window.storyblok && typeof window.storyblok.on === 'function') {
        handleChange = (event) => {
          if (!isMountedRef.current) return;
          try {
            console.log('Storyblok bridge change detected:', event);
            const slugToLoad = event.story ? event.story.slug : currentSlugRef.current;
            fetchStory(slugToLoad);
          } catch (err) {
            console.error('Bridge callback error:', err);
          }
        };
        window.storyblok.on('change', handleChange);
        window.storyblok.on('published', handleChange);
        window.storyblok.on('unpublished', handleChange);
        console.log('Storyblok bridge initialized successfully');
      } else {
        // Retry if bridge not ready (max 10 attempts = 2 seconds)
        if ((window.bridgeRetries || 0) < 10) {
          window.bridgeRetries = (window.bridgeRetries || 0) + 1;
          setTimeout(initBridge, 200);
        } else {
          console.warn('Storyblok bridge failed to initialize after retries');
        }
      }
    };
    
    initBridge();

    return () => {
      isMountedRef.current = false;
      if (handleChange && window.storyblok && typeof window.storyblok.off === 'function') {
        window.storyblok.off('change', handleChange);
        window.storyblok.off('published', handleChange);
        window.storyblok.off('unpublished', handleChange);
        console.log('Storyblok bridge listeners removed');
      }
    };
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
      return story.content.body.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ));
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