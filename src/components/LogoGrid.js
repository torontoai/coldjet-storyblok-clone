import React from 'react';
import './LogoGrid.css';

const LogoGrid = ({ blok = {} }) => {
  const { title = '', logos = [] } = blok;
  
  // All 18 logos from the original site in correct order (2 rows of 9)
  const defaultLogos = [
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-18.jpg' }, alt: '3M logo', name: '3M' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-17.png' }, alt: 'Apple logo', name: 'Apple' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-16.png' }, alt: 'Bayer logo', name: 'Bayer' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-15.png' }, alt: 'Frito-Lay logo', name: 'Frito-Lay' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-14.png' }, alt: 'GE logo', name: 'GE' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-13.png' }, alt: 'Goodyear logo', name: 'Goodyear' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-12.png' }, alt: 'Graham Packaging logo', name: 'Graham Packaging' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-11.png' }, alt: 'Honeywell logo', name: 'Honeywell' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-10.png' }, alt: 'John Deere logo', name: 'John Deere' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-9.png' }, alt: 'Johnson & Johnson logo', name: 'Johnson & Johnson' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-8.png' }, alt: 'Kraft logo', name: 'Kraft' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-7.png' }, alt: 'Nike logo', name: 'Nike' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-6.png' }, alt: 'Red-D-Arc logo', name: 'Red-D-Arc' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-5.png' }, alt: 'Siemens logo', name: 'Siemens' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-4.png' }, alt: 'Silgan logo', name: 'Silgan' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-3.png' }, alt: 'True logo', name: 'True' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded-2.png' }, alt: 'Tyco logo', name: 'Tyco' },
    { image: { filename: 'https://www.coldjet.com/wp-content/uploads/img.logo-grid__logo-image.lazyload.loaded.jpg' }, alt: 'WestRock logo', name: 'WestRock' }
  ];
  
  const displayLogos = logos.length > 0 ? logos : defaultLogos;

  return (
    <section className="logo-grid">
      <div className="container container-xxl">
        <ul className="logo-grid__grid">
          {displayLogos.map((logo, index) => (
            <li key={index} className="logo-grid__item">
              <div className="logo-grid__wrapper">
                <img
                  className="logo-grid__logo-image"
                  loading="lazy"
                  src={logo.image?.filename || logo.image}
                  alt={logo.alt || logo.name}
                  width="126"
                  height="40"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoGrid;