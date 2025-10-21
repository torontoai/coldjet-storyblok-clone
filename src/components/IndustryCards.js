import React from 'react';
import './IndustryCards.css';

const IndustryCards = ({ blok = {} }) => {
  const { cards = [] } = blok;
  
  // Default industries if none provided from Storyblok
  const defaultIndustries = [
    {
      title: 'Plastics & Composites',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/07/IMG_1696-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/plastics-composites/'
    },
    {
      title: 'Automotive',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_AUTOMOTIVE_LEFT-1-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/automotive/'
    },
    {
      title: 'Food & Beverage',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/Cold_Jet_Food_Processing-500x300.webp' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/food-beverage/'
    },
    {
      title: 'Medical Equipment',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/06/Medical3-1-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/medical-equipment/'
    },
    {
      title: 'Contract Cleaning',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/Contract-Cleaning-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/contract-cleaning/'
    },
    {
      title: 'Printing',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/07/Main-Image-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/printing/'
    },
    {
      title: 'Aerospace & Aviation',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_AEROSPACEAVIATION_RIGHT-e1634762746732-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/aerospace-aviation/'
    },
    {
      title: 'Oil & Gas',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEPRODUCTION_APPLICATIONS_REMOTEPRODUCTION-1-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/oil-gas/'
    },
    {
      title: 'Restoration & Remediation',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_RESTORATIONREMEDIATION_HISTORICAL-1-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/restoration-remediation/'
    },
    {
      title: 'Textiles',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_TEXTILES_RIGHT-1-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/textiles/'
    },
    {
      title: 'Foundry',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/Cold-Jet-MWS-DGH-Sandcasting-foundry-industry-69-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/foundry/'
    },
    {
      title: 'Packaging',
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/DRYICEBLASTING_INDUSTRIES_FOODBEVERAGE_RIGHT-500x300.jpg' },
      link: 'https://www.coldjet.com/dry-ice-blasting/industries/packaging/'
    }
  ];

  const displayCards = cards.length > 0 ? cards : defaultIndustries;

  return (
    <section className="industries-section">
      <div className="container container-xxl align-center margin-top--md margin-bottom--md padding-top--md padding-bottom--md">
        <ul className="grid--tight">
          {displayCards.map((card, index) => {
            const imageUrl = card.background_image?.filename || card.image?.filename;
            return (
            <li key={index}>
              {imageUrl && (
                <article className="c-card-image-link">
                  <a href={card.link} className="c-card-image-link__link">
                    <span
                      className={`c-card-image-link__img img-bg ${card.overlay?.gradient === 'dark-blue' ? 'img-bg--dark-blue-gradient' : card.overlay?.gradient === 'light' ? 'img-bg--light-gradient' : ''} industry-card-hover`}
                      style={{
                        fontWeight: card.overlay?.font_weight === 'bold' ? '600' : '400',
                        fontFamily: 'Inter, "Avenir Next", sans-serif',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                      }}
                    >
                      <img loading="lazy" src={imageUrl} alt={card.alt_text || card.title} />
                      <span className="c-card-image-link__overlay" style={{backgroundColor: 'rgba(0,0,0,0.4)'}}>
                        <p className="c-card-image-link__title" style={{fontFamily: 'Inter, "Avenir Next", sans-serif', fontWeight: 600}}>{card.title}</p>
                      </span>
                    </span>
                  </a>
                </article>
              )}
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default IndustryCards;