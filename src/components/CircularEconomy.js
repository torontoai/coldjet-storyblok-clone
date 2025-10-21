import React from 'react';
import './CircularEconomy.css';

const CircularEconomy = ({ blok = {} }) => {
  const {
    kicker = 'Driving a Circular Economy with Recycled CO2',
    title = 'Cold Jet: Pioneering Sustainable Dry Ice Solutions with Recycled CO2',
    description = 'As a leading provider of dry ice solutions, we are committed to a circular economy. We utilize recycled CO2 to create powerful and sustainable dry ice solutions, minimizing waste and maximizing resource efficiency for businesses across industries.',
    background_image,
    cta_text = 'Learn More About Sustainable Dry Ice',
    cta_url = 'https://www.coldjet.com/sustainability/'
  } = blok;
  
  const backgroundImageUrl = background_image?.filename || '';
  
  return (
    <section className="wysiwyg-content container text-component margin-top--lg margin-bottom--none padding-top--sm padding-bottom--sm container--full-width">
      <div style={{ position: 'relative', width: '100%', padding: '100px 0' }}>
        <img
          decoding="async"
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1
          }}
          src={backgroundImageUrl}
          alt={background_image?.alt || 'Circular economy background'}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-lg-6 offset-lg-3 offset-sm-2">
              <div style={{ 
                textAlign: 'center', 
                color: '#fff', 
                zIndex: 2, 
                padding: '40px', 
                background: 'rgba(0,0,0,0.5)', 
                borderRadius: '5px' 
              }}>
                <h5 style={{
                  fontSize: '1.5rem',
                  fontFamily: '"Avenir Next Condensed", sans-serif',
                  color: '#aed049',
                  margin: '0 0 9.504px',
                  lineHeight: '2'
                }}>
                  <strong>{kicker}</strong>
                </h5>
                <h4 className="text--xxl" style={{ fontWeight: 'bold', color: 'white' }}>
                  {title}
                </h4>
                <p className="text--md balance-text" style={{ fontSize: '18px', marginTop: '20px' }}>
                  {description}
                </p>
                {cta_text && cta_url && (
                  <p>
                    <a
                      style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#aed049',
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        marginTop: '20px',
                        textDecoration: 'none'
                      }}
                      href={cta_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cta_text}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;