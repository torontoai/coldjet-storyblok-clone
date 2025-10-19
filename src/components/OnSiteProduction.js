import React from 'react';
import './OnSiteProduction.css';

const OnSiteProduction = ({ blok = {} }) => {
  const {
    title = 'Gaining Control: The Advantages of On-Site Dry Ice Production',
    cards = []
  } = blok;
  
  // Default applications if none provided
  const defaultApplications = [
    {
      title: 'Airline Catering',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_AIRLINECATERING-10-1-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-production/applications/airline-catering/'
    },
    {
      title: 'For Food Processors',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_FOODPROCESSINGCOOLING-9-2-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-production/applications/food-processing-cooling/'
    },
    {
      title: 'For Life Sciences',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/Cold_Jet_Life_Science-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-production/applications/life-sciences/'
    },
    {
      title: 'Production for Resale',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_PRODUCTIONFORRESALE-3-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-production/applications/production-for-resale/'
    },
    {
      title: 'Cold Chain Management',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_COLDCHAINMANAGEMENT-1-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-production/applications/cold-chain-management/'
    },
    {
      title: 'Dry Ice For Food Shipping',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/Cold_Jet_Food_Home_Delivery-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-production/applications/dry-ice-for-food-shipping/'
    },
    {
      title: 'Production for Blasting',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_PLASTICSCOMPOSITES_PARTSFINISHING-7-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-production/applications/production-for-blasting/'
    },
    {
      title: 'Remote Production',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-2-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-production/applications/remote-production/'
    }
  ];
  
  const displayCards = cards.length > 0 ? cards : defaultApplications;

  return (
    <>
      <section className="wysiwyg-content container text-component margin-top--lg margin-bottom--none padding-top--xl padding-bottom--none container--xl">
        <div style={{ position: 'relative', padding: '20px', textAlign: 'center' }}>
          <h5 style={{ 
            fontSize: '1.5rem', 
            fontFamily: '"Avenir Next Condensed", sans-serif', 
            color: '#aed049', 
            margin: '0 0 9.504px', 
            lineHeight: '2' 
          }}>
            <strong>{title}</strong>
          </h5>
          <h3 className="text--xxl balance-text" style={{ color: 'black' }}>
            Cold Jet: Your Partner for Efficient On-Site Dry Ice Production
          </h3>
          <p className="text--md color--primary-light balance-text">
            Experience the benefits of on-site dry ice production with a leading dry ice solutions provider. Gain <strong>greater control</strong> over your operations, <strong>reduce reliance on external suppliers</strong>, and <strong>improve cost-effectiveness</strong>. Cold Jet Dry Ice Production Solutions deliver <strong>a reliable supply of dry ice</strong>. Ensure you have the <strong>right amount, on demand</strong>.
          </p>
        </div>
      </section>
      
      <section className="container container-xxl align-center margin-top--md margin-bottom--md padding-top--md padding-bottom--md">
        <ul className="row gx-2 gy-2 gx-md-3 gy-md-3 grid--tight">
          {displayCards.map((card, index) => (
            <li key={index} className="col-6 col-md-3">
              <article className="c-card-image-link">
                <a href={card.link} className="c-card-image-link__link">
                  <span className="c-card-image-link__img img-bg img-bg--dark-blue-gradient">
                    <img loading="lazy" src={card.image?.filename || card.image} alt={card.title} />
                    <span className="c-card-image-link__overlay">
                      <p className="c-card-image-link__title">{card.title}</p>
                    </span>
                  </span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </section>
      
      <section className="wysiwyg-content container text-component margin-top--none margin-bottom--xl padding-top--none padding-bottom--md container--xl">
        <p style={{ textAlign: 'center' }}>
          <a className="g-btn g-btn--bordered g-btn--lg" href="https://www.coldjet.com/dry-ice-production/applications/" target="_blank" rel="noopener noreferrer">
            View all applications
          </a>
        </p>
      </section>
    </>
  );
};

export default OnSiteProduction;