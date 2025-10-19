import React from 'react';
import './EquipmentGrid.css'; // To be created later for styles

const EquipmentGrid = ({ blok = {} }) => {
  const { items = [] } = blok;
  
  // Default items if none provided
  const defaultItems = [
    {
      title: 'Dry Ice Blasting Systems',
      description: 'Our advanced dry ice blasting systems offer superior cleaning power and precision for a wide range of applications. Ideal for removing contaminants, coatings, and residues without damaging delicate surfaces.',
      image: { filename: `${process.env.PUBLIC_URL}/images/AERO2-PCS-ULTRA.jpg` },
      link_url: 'https://www.coldjet.com/our-equipment/dry-ice-blasting-equipment/',
      link_text: 'View Solutions'
    },
    {
      title: 'Dry Ice Production Systems',
      description: 'Efficiently produce high-quality dry ice on-site with our advanced production systems. Ideal for various applications, including food processing, cold chain logistics, and industrial needs.',
      image: { filename: `${process.env.PUBLIC_URL}/images/PR750H.jpg` },
      link_url: 'https://www.coldjet.com/our-equipment/dry-ice-production-equipment/',
      link_text: 'View Solutions'
    }
  ];
  
  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <section className="product-equipment-grid margin-top--none margin-bottom--md padding-top--none padding-bottom--none">
      <div className="container container--lg">
        <ul
          className="product-equipment-grid__grid row gx-4 product-equipment-grid__grid--inner-borders align-center"
          style={{
            '--bs-gap': `${blok.spacing || 20}px`,
            gap: 'var(--bs-gap)'
          }}
        >
          {displayItems.map((item, index) => (
            <li key={index} className="product-equipment-grid__item product-equipment-grid__item--2">
              {item.image && (
                <figure className="c-product">
                  <div className="c-product__img">
                    <a href={item.link_url} target="_blank" rel="noopener noreferrer">
                      <img
                        loading="lazy"
                        src={item.image.filename}
                        alt={item.alt_text || item.title}
                        height="500"
                        width="500"
                      />
                    </a>
                  </div>
                  <figcaption className="c-product__content">
                    <h3 className="font-weight--600 margin-bottom--xxxxs" style={{fontFamily: 'Inter, "Avenir Next", sans-serif'}}>{item.title}</h3>
                    <p className="text--md color--primary-light margin-bottom--xxs" style={{fontFamily: 'Inter, "Avenir Next", sans-serif'}}>
                      {item.description}
                    </p>
                    <a href={item.link_url} className="g-link g-link--icon-text" target="_blank" rel="noopener noreferrer">
                      <span>{item.link_text || 'View Solutions'}</span>
                      <svg className="icon" pointerEvents="none">
                        <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#chevron-right"></use>
                      </svg>
                    </a>
                  </figcaption>
                </figure>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EquipmentGrid;