import React from 'react';
import './ColdChain.css';

const ColdChain = ({ blok = {} }) => {
  const {
    kicker = 'Ensuring Continuous Cold Chain Integrity',
    title = 'Reliable Cooling Solutions for Medical, Food, Logistics, and More',
    description = 'Dry ice production is vital for cold chain logistics. It offers the most effective means of preserving temperature-sensitive products. Dry ice keeps ultra-low temperatures without using electricity during transit or storage. This versatile and eco-friendly solution meets the demands of industries needing precision and reliability.',
    background_image
  } = blok;
  
  const backgroundImageUrl = background_image?.filename || '';
  
  return (
    <section className="wysiwyg-content container text-component margin-top--none margin-bottom--none padding-top--none padding-bottom--none container--full-width">
      <div style={{ position: 'relative', width: '100%', padding: '100px 0' }}>
        <p>
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
            alt={background_image?.alt || 'Cold chain background'}
          />
        </p>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-lg-6">
              <div style={{ 
                textAlign: 'center', 
                color: '#fff', 
                zIndex: 2, 
                padding: '40px', 
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
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
                <p className="text--md balance-text" style={{ fontSize: '16px', marginTop: '20px' }}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColdChain;