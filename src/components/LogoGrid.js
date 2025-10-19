import React from 'react';
import './LogoGrid.css';

const LogoGrid = ({ blok = {} }) => {
  const { title = '', logos = [] } = blok;
  
  // Default logos if none provided
  const defaultLogos = [
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-18.jpg' }, alt: '3m logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-17.png' }, alt: 'apple logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-16.png' }, alt: 'bayer logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-15.png' }, alt: 'frito lay logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-14.png' }, alt: 'ge logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-13.png' }, alt: 'good year logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-12.png' }, alt: 'graham packaging company logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-11.png' }, alt: 'honeywell logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-10.png' }, alt: 'john deere logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-9.png' }, alt: 'johnson & johnson logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-8.png' }, alt: 'kraft logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-7.png' }, alt: 'nike logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-6.png' }, alt: 'red-d-arc logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-5.png' }, alt: 'siemens logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-4.png' }, alt: 'silgan plastics logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-3.png' }, alt: 'true logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-2.png' }, alt: 'tyco logo' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded.jpg' }, alt: 'westrock logo' }
  ];
  
  const displayLogos = logos.length > 0 ? logos : defaultLogos;

  return (
    <section className="logo-grid margin-top--lg margin-bottom--none padding-top--none padding-bottom--xs">
      <div className="container container-xxl">
        <ul className="logo-grid__grid row logo-grid__grid--home">
          {displayLogos.map((logo, index) => (
            <li key={index} className="logo-grid__wrapper logo-grid__wrapper-home">
              <img
                className="logo-grid__logo-image lazyload"
                loading="lazy"
                src={logo.image?.filename || logo.image}
                alt={logo.alt}
                width="126"
                height="126"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoGrid;