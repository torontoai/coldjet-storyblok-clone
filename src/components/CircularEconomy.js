import React from 'react';
import './CircularEconomy.css';

const CircularEconomy = ({ blok }) => {
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
          src="https://cdn.bfldr.com/YCAINI82/at/s3tjthg5k43qswckxgppb9tz/Carbon_Dioxide_-_ESG.jpg?format=webp&width=1200" 
          alt="Cold Jet: Utilizing Recycled CO2 for Sustainable Dry Ice Production" 
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
                  <strong>Driving a Circular Economy with Recycled CO2</strong>
                </h5>
                <h4 className="text--xxl" style={{ fontWeight: 'bold', color: 'white' }}>
                  Cold Jet: Pioneering Sustainable Dry Ice Solutions with Recycled CO2
                </h4>
                <p className="text--md balance-text" style={{ fontSize: '18px', marginTop: '20px' }}>
                  As a leading provider of dry ice solutions, we are committed to a circular economy. We utilize recycled CO2 to create powerful and sustainable dry ice solutions, minimizing waste and maximizing resource efficiency for businesses across industries.
                </p>
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
                    href="https://www.coldjet.com/sustainability/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Learn More About Sustainable Dry Ice
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CircularEconomy;