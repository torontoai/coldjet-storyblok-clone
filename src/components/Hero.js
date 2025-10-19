import React, { useEffect, useRef } from 'react';

const Hero = ({ blok = {} }) => {
  const {
    headline = 'Cold Jet: Leading Dry Ice Solutions Manufacturer',
    subheadline = 'Driving Sustainable Innovation in Industrial Applications',
    subtitle = 'Leading the way in sustainable cleaning',
    description = 'Experience the power of Cold Jet\'s innovative dry ice technology. Our eco-friendly solutions deliver superior cleaning results, enhance efficiency, and minimize environmental impact across a broad spectrum of industries. Cold Jet provides complete and sustainable solutions for your business. These include dry ice blasting equipment as well as dry ice production systems.',
    video_url = 'https://www.coldjet.com/wp-content/uploads/Home_page_banner_video__compressed_v2.mp4',
    background_image,
    global_style = {}
  } = blok;

  const fontFamily = global_style.fonts?.family === 'Avenir Next' ? '"Inter", "Avenir Next", sans-serif' : 'sans-serif';
  const fontWeight = global_style.fonts?.weight === 'bold' ? '600' : global_style.fonts?.weight === 'heavy' ? '700' : '400';
  const bottomMargin = global_style.spacing?.bottom_margin || 20; // Default 20px

  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.style.opacity = '0';
      hero.style.transform = 'translateY(20px)';
      hero.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';

      const timer = setTimeout(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero-section container-full-width"
      style={{
        position: 'relative',
        height: '100vh',
        overflow: 'hidden',
        marginBottom: `${bottomMargin}px`
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src={video_url} type="video/mp4" />
      </video>
      {background_image?.filename && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${background_image.filename})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2
        }} />
      )}
      <div className="hero-overlay" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1
      }}></div>
      <div className="hero-content container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-text" style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '50px',
              borderRadius: '5px',
              color: 'white',
              fontFamily: fontFamily,
              fontWeight: fontWeight,
              textAlign: 'left'
            }}>
              <h1 style={{
                fontSize: '2.3rem',
                fontFamily: fontFamily,
                color: 'white',
                margin: '0 0 9.504px',
                fontWeight: fontWeight
              }}>
                {headline}
              </h1>
              <h2 style={{
                fontSize: '1.8rem',
                color: '#aed049',
                fontFamily: fontFamily,
                textAlign: 'left',
                marginBottom: '1rem',
                fontWeight: fontWeight
              }}>
                {subheadline}
              </h2>
              <p style={{
                fontSize: '1.2rem',
                fontFamily: fontFamily,
                textAlign: 'left',
                color: 'white',
                lineHeight: '1.5',
                marginBottom: '1rem',
                fontWeight: fontWeight
              }}>
                {subtitle}
              </p>
              <p style={{
                fontSize: '1rem',
                fontFamily: fontFamily,
                textAlign: 'left',
                color: 'white',
                lineHeight: '1.5',
                fontWeight: fontWeight
              }}>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;