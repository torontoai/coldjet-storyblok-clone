import React from 'react';
import './GlobalOffices.css';

const GlobalOffices = ({ blok }) => {
  return (
    <section className="content-with-image margin-top--lg margin-bottom--lg padding-top--none padding-bottom--none bg-color--white content-with-image--bleed">
      <div className="container container-xxl">
        <div className="content-with-image__grid row">
          <div className="content-with-image__img">
            <img 
              loading="lazy" 
              src="https://www.coldjet.com/wp-content/uploads/2019/06/global-offices-2-1-1.png" 
              className="lazyload" 
              alt="Global Offices Map"
            />
          </div>

          <div className="content-with-image__text">
            <div className="content-with-image__text-container">
              <p className="p1 g-h-kicker color--primary-light">Global Offices</p>
              <h3 className="text--xxl color--primary-dark margin-bottom--xs">
                We are the global leader with a uniquely local presence
              </h3>
              <p className="margin-bottom--md text--md color--primary-light">
                Being responsive to our customer's needs is mission critical to our service team. With service centers around the globe, our technicians are always within reach.
              </p>
              <p>
                <a className="g-link g-link--icon-text g-link--chevron text--md" href="https://www.coldjet.com/global-offices/">
                  Find Cold Jet near you
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