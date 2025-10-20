import React from 'react';
import './GlobalOffices.css';

const GlobalOffices = ({ blok }) => {
  return (
    <section className="content-with-image margin-top--lg margin-bottom--lg padding-top--none padding-bottom--none bg-color--white content-with-image--bleed">
      <div className="container container-xxl">
        <div className="content-with-image__grid row" style={{display: 'flex', alignItems: 'center'}}>
          <div className="content-with-image__img col-12 col-lg-6" style={{order: 2}}>
            <img
              loading="lazy"
              src="https://www.coldjet.com/wp-content/uploads/2019/06/global-offices-2-1-1.png"
              className="lazyload"
              alt="Global Offices Map"
              style={{maxWidth: '100%', height: 'auto'}}
            />
          </div>

          <div className="content-with-image__text col-12 col-lg-6" style={{order: 1, paddingRight: '40px'}}>
            <div className="content-with-image__text-container">
              <p style={{
                fontSize: '0.875rem',
                fontFamily: '"Avenir Next Condensed", "Avenir Next", sans-serif',
                color: '#aed049',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '16px',
                fontWeight: '600'
              }}>
                GLOBAL OFFICES
              </p>
              <h2 style={{
                fontSize: '2rem',
                fontFamily: '"Avenir Next", sans-serif',
                color: '#003366',
                marginBottom: '20px',
                fontWeight: '700',
                lineHeight: '1.2'
              }}>
                We are the global leader with a uniquely local presence
              </h2>
              <p style={{
                fontSize: '1.125rem',
                fontFamily: '"Avenir Next", sans-serif',
                color: '#666',
                marginBottom: '24px',
                lineHeight: '1.6'
              }}>
                Being responsive to our customer's needs is mission critical to our service team. With service centers around the globe, our technicians are always within reach.
              </p>
              <p>
                <a
                  className="g-link g-link--icon-text g-link--chevron"
                  href="https://www.coldjet.com/global-offices/"
                  style={{
                    fontSize: '1rem',
                    fontFamily: '"Avenir Next", sans-serif',
                    color: '#0066cc',
                    textDecoration: 'none',
                    fontWeight: '600'
                  }}
                >
                  Find Cold Jet near you →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOffices;