import React from 'react';
import './Header.css';

const Header = ({ blok }) => {
  return (
    <>
      <header className="site-header" role="banner">
        <div className="site-header__main">
          <div className="container container-xxl site-header__container">
            <button className="search-toggle search-toggle--search-is-closed" aria-expanded="false">
              <svg className="c-icon" pointerEvents="none">
                <use className="search" xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#search"></use>
                <use className="close" xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#times-light"></use>
              </svg>
            </button>

            <a className="site-header__logo" href="https://www.coldjet.com">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 244 63" data-desktop-viewbox="0 0 244 63" data-mobile-viewbox="0 0 244 47" width="100%" height="100%">
                <path className="tagline" d="M121.26 52.94l.26-1.83h1.13l.32-2.3h2.11l-.33 2.3h1.83l-.26 1.83h-1.83l-.37 2.6a2.53 2.53 0 000 .61.59.59 0 00.2.36.73.73 0 00.41.17 3.72 3.72 0 00.62 0h.47v1.7l-.52.05h-.66a5.54 5.54 0 01-1.2-.12 1.87 1.87 0 01-.88-.43 1.76 1.76 0 01-.49-.88 3.75 3.75 0 010-1.43l.37-2.69zm7.74 5.47h-2.11l1.56-11.11h2.11l-.56 4.14a8.45 8.45 0 01.82-.23 5.08 5.08 0 011-.1 2.21 2.21 0 012 .83 3.52 3.52 0 01.31 2.43l-.56 4h-2.11l.55-3.75a6 6 0 00.05-.77 1.15 1.15 0 00-.12-.5.67.67 0 00-.35-.26 2 2 0 00-.61-.08 4.33 4.33 0 00-.66.05 3.39 3.39 0 00-.53.14zM139.62 54c.07-.83-.27-1.24-1-1.24a1.22 1.22 0 00-.83.31 2.28 2.28 0 00-.58.93zm-2.15 2.37a2.06 2.06 0 001.23.31 5.47 5.47 0 00.91-.1 5.8 5.8 0 00.82-.2l.2 1.69a6.13 6.13 0 01-1 .29 5.51 5.51 0 01-1.25.14 3.6 3.6 0 01-2.54-.81 3 3 0 01-.88-2.33 4.49 4.49 0 01.39-2 4.36 4.36 0 01.95-1.34 3.68 3.68 0 011.24-.79 3.59 3.59 0 011.26-.26 3.36 3.36 0 011.31.24 2 2 0 01.89.79 3.08 3.08 0 01.47 1.37 7.25 7.25 0 01-.06 2.05H137a1.25 1.25 0 00.47.95zm8.58-3.89l.17-1.21h1.28l.25-1.63a3.57 3.57 0 01.32-1.1 2.26 2.26 0 01.56-.71 2 2 0 01.74-.38 3 3 0 01.85-.12 3.51 3.51 0 01.68.06 4.84 4.84 0 01.61.14l-.37 1.14a4.5 4.5 0 00-.44-.1 3.19 3.19 0 00-.45 0 1.28 1.28 0 00-.8.28 1.74 1.74 0 00-.46 1.11l-.19 1.34h1.7l-.17 1.21h-1.7l-1.28 8.84h-1.3l1.28-8.84zm8.49 4.62a2.17 2.17 0 00.73-.56 2.69 2.69 0 00.52-.87 3.25 3.25 0 00.19-1.16 2.35 2.35 0 00-.46-1.53 1.55 1.55 0 00-1.28-.56 2 2 0 00-.85.19 2.27 2.27 0 00-.73.56 2.79 2.79 0 00-.51.88 3.27 3.27 0 00-.15 1.15 2.4 2.4 0 00.45 1.53 1.54 1.54 0 001.28.57 2 2 0 00.81-.2zm-2.14 1.19a2.66 2.66 0 01-1.56-1.63 3.65 3.65 0 01-.23-1.32 4.5 4.5 0 01.33-1.77 4.26 4.26 0 01.86-1.31 3.62 3.62 0 011.19-.8 3.44 3.44 0 011.35-.28 3.16 3.16 0 011.2.22 2.58 2.58 0 01.94.64 2.74 2.74 0 01.62 1 3.64 3.64 0 01.23 1.31 4.41 4.41 0 01-.34 1.8 3.74 3.74 0 01-.86 1.29 3.63 3.63 0 01-2.53 1.06 3.29 3.29 0 01-1.2-.21zm9-6.75a6 6 0 011.33-.39l-.17 1.3a5.08 5.08 0 00-1.25.34 8.66 8.66 0 00-1 .48l-.73 5.14h-1.28l1-7.14h1l.06.8a7.62 7.62 0 011.02-.53zm3.18 6.75a2.66 2.66 0 01-.94-.62 2.63 2.63 0 01-.61-1 3.62 3.62 0 01-.22-1.32 4.59 4.59 0 01.33-1.8 4.17 4.17 0 01.87-1.31 3.6 3.6 0 011.21-.8 3.54 3.54 0 011.35-.27 4.42 4.42 0 011.11.11 4.16 4.16 0 01.76.29l-.59 1.1a3.9 3.9 0 00-.57-.18 3 3 0 00-.73-.08 2.17 2.17 0 00-.9.19 2.26 2.26 0 00-.78.55 2.43 2.43 0 00-.54.88 3.13 3.13 0 00-.21 1.17 2.22 2.22 0 00.5 1.53 1.8 1.8 0 001.42.55 3.28 3.28 0 00.59-.06 4.22 4.22 0 00.59-.15l.22 1.09a3.52 3.52 0 01-.79.24 4.3 4.3 0 01-.84.09 3.45 3.45 0 01-1.25-.2zm8.86-4.12a2.09 2.09 0 00-.3-1.39 1.33 1.33 0 00-1.11-.44 1.6 1.6 0 00-1.11.49 2.89 2.89 0 00-.78 1.34zM170 55.31a2.12 2.12 0 00.45 1.47 1.77 1.77 0 001.44.55 4.47 4.47 0 001-.1 7.54 7.54 0 00.77-.18l.19 1.08a6.26 6.26 0 01-2.08.37 3 3 0 01-2.27-.82 3.15 3.15 0 01-.76-2.24 4.89 4.89 0 01.32-1.82 4.83 4.83 0 01.83-1.34 3.47 3.47 0 011.12-.82 2.91 2.91 0 011.21-.28 3 3 0 011.15.2 1.8 1.8 0 01.85.67 2.84 2.84 0 01.46 1.25 7 7 0 010 1.92H170zm13.19 1.79a2.2 2.2 0 00.74-.56 2.67 2.67 0 00.51-.87 3.24 3.24 0 00.2-1.16 2.4 2.4 0 00-.46-1.53 1.56 1.56 0 00-1.28-.56 1.92 1.92 0 00-.85.19 2.17 2.17 0 00-.73.56 2.46 2.46 0 00-.51.88 3.27 3.27 0 00-.2 1.15 2.35 2.35 0 00.46 1.53 1.54 1.54 0 001.28.57 1.92 1.92 0 00.81-.2zM181 58.29a2.78 2.78 0 01-.94-.63 3 3 0 01-.62-1 3.66 3.66 0 01-.22-1.32 4.5 4.5 0 01.33-1.77 4.09 4.09 0 01.86-1.31 3.62 3.62 0 011.19-.8 3.37 3.37 0 011.35-.28 3.16 3.16 0 011.2.22 2.66 2.66 0 01.94.64 2.88 2.88 0 01.62 1 3.64 3.64 0 01.22 1.31 4.59 4.59 0 01-.33 1.8 3.89 3.89 0 01-.86 1.29 3.68 3.68 0 01-2.54 1.06 3.36 3.36 0 01-1.2-.21zm6-5.81l.17-1.21h1.29l.25-1.63a3.57 3.57 0 01.32-1.1 2.26 2.26 0 01.56-.71 2 2 0 01.73-.38 3.08 3.08 0 01.86-.12 3.58 3.58 0 01.68.06 4.84 4.84 0 01.61.14l-.38 1.14a3.93 3.93 0 00-.44-.1 3 3 0 00-.44 0 1.26 1.26 0 00-.8.28 1.8 1.8 0 00-.47 1.11l-.18 1.34h1.7l-.17 1.21h-1.7l-1.29 8.84H187l1.29-8.84zm11.4-1.07a5.2 5.2 0 011.23-.14 2.17 2.17 0 011.94.77 3.35 3.35 0 01.3 2.4l-.55 4H200l.51-3.65a7.35 7.35 0 00.1-1 1.6 1.6 0 00-.14-.71.93.93 0 00-.45-.4 2.18 2.18 0 00-.84-.13 5.64 5.64 0 00-1 .08 7.21 7.21 0 00-.71.18l-.79 5.67h-1.28l1-7.14h1l.05.41a5.75 5.75 0 01.92-.34zm10 1.33a5 5 0 00-.68-.19 3.33 3.33 0 00-.76-.07 2.38 2.38 0 00-1.07.23 2.1 2.1 0 00-.73.62 2.49 2.49 0 00-.42.90 3.93 3.93 0 00-.13 1 3.25 3.25 0 00.09.77 1.61 1.61 0 00.32.64 1.59 1.59 0 00.57.45 1.86 1.86 0 00.86.18 2.88 2.88 0 00.68-.08c.2 0 .43-.12.66-.2zm.43-1.47h1l-1 7.14h-1l-.05-.36a4.35 4.35 0 01-.78.31 3.54 3.54 0 01-1 .14 2.94 2.94 0 01-1.23-.23 2.57 2.57 0 01-.88-.63 2.64 2.64 0 01-.53-1 3.74 3.74 0 01-.18-1.18 5.57 5.57 0 01.24-1.67 3.8 3.8 0 01.7-1.34 3.3 3.3 0 011.1-.9 3.4 3.4 0 011.49-.32 3.65 3.65 0 011.07.14 4.94 4.94 0 01.8.32zm2 1.21l.17-1.21h1.2l.34-2.42h1.3l-.34 2.42h1.85l-.17 1.21h-1.85l-.52 3.64a2 2 0 000 .65.58.58 0 00.2.37.88.88 0 00.42.16 3.79 3.79 0 00.62 0h.56v1.1a4.43 4.43 0 01-.9.07 2.73 2.73 0 01-1.82-.53 2 2 0 01-.38-1.85l.51-3.64zm10.75-1.21h1.29l-1 7.14h-1v-.34a6.59 6.59 0 01-.87.27 4.48 4.48 0 01-1.2.15 2.23 2.23 0 01-2-.77 3.38 3.38 0 01-.31-2.39l.57-4.06h1.29l-.57 3.73a7.18 7.18 0 00-.09 1 1.6 1.6 0 00.14.71.83.83 0 00.45.41 2.4 2.4 0 00.85.12 5.28 5.28 0 001.59-.25zm5.39.27a5.84 5.84 0 011.33-.39l-.17 1.3a5 5 0 00-1.26.34 8.49 8.49 0 00-1 .48l-.73 5.14h-1.28l1-7.14h1l.06.8a7.07 7.07 0 011.01-.53zm6.14 2.63a2.09 2.09 0 00-.3-1.39 1.33 1.33 0 00-1.11-.44 1.6 1.6 0 00-1.11.49 2.89 2.89 0 00-.78 1.34zm-3.45 1.14a2.12 2.12 0 00.45 1.47 1.77 1.77 0 001.44.55 4.47 4.47 0 001-.1 7.54 7.54 0 00.77-.18l.19 1.08a6.26 6.26 0 01-2.08.37 3 3 0 01-2.27-.82 3.15 3.15 0 01-.76-2.24 4.89 4.89 0 01.32-1.82 4.83 4.83 0 01.83-1.34 3.47 3.47 0 011.12-.82 2.91 2.91 0 011.21-.28 3 3 0 011.15.2 1.8 1.8 0 01.85.67 2.84 2.84 0 01.46 1.25 7 7 0 010 1.92h-4.61z" fill="#95b449" fillRule="evenodd"/>
                <path className="cold-jet" d="M206.85 26a5.32 5.32 0 00-1.44 3.26h12.5a6.39 6.39 0 00-6.23-5.43 6.61 6.61 0 00-4.83 2.17zm11.42 9.41l1.65-1.46 2.8 2.8c-3.94 4.1-6.35 5.66-11.08 5.66A11.27 11.27 0 01200.55 31a11.09 11.09 0 1122.17-.29l-.05 1.29v1.07h-17.1A6.45 6.45 0 00211.8 38a9.47 9.47 0 006.47-2.62zm-104-17.51l-3.77 3.61a11.69 11.69 0 00-8.68-4.08 9.53 9.53 0 00-9.63 9.65 10.08 10.08 0 001.24 5.05 8.8 8.8 0 003.49 3.46 10.06 10.06 0 005 1.25 10.42 10.42 0 004.3-.87 15.66 15.66 0 004.28-3.2l3.66 3.82a20.16 20.16 0 01-6 4.26 16.22 16.22 0 01-6.34 1.15 14.42 14.42 0 01-15-15 14.75 14.75 0 011.92-7.56 14.3 14.3 0 015.5-5.32 15.59 15.59 0 017.71-2 16.34 16.34 0 0112.37 5.72zm12.61 20a7 7 0 10-4.87-2 6.77 6.77 0 004.87 1.95zm0-18.46a11.44 11.44 0 11-11.71 11.35 11.54 11.54 0 0111.71-11.4zm14.84 22.33V13h4.74v28.72zM161 37.89a7 7 0 006.89-7.31 6.78 6.78 0 00-6.94-6.77 6.67 6.67 0 00-6.64 7 6.83 6.83 0 006.69 7.08zM167.55 13h4.74v28.72h-4.44v-2.37a9.37 9.37 0 01-7.10 2.91c-6.4 0-11.21-5-11.21-11.56a11 11 0 0110.87-11.31 10.84 10.84 0 017.14 2.75zm24.94 0h4.91v21.14a7.86 7.86 0 01-8.12 8.12 8 8 0 01-8.11-6.42l-.09-.5h5l.10.27a3 3 0 003 2.12c2 0 3.38-1.64 3.38-4zm42.11 11.31h-3.43v11.84c0 1.63.23 2 1.5 2a9 9 0 00.90-.07h.46v3.73a18 18 0 01-2.86.26c-2.07 0-3.56-.58-4.22-1.72a6.39 6.39 0 01-.58-3.41V24.31h-2.85v-4.37h2.85V13h4.73v7h3.43zm5.3 14.06a1.53 1.53 0 00-.74-.13h-.52v1.22h.55a1.71 1.71 0 00.58-.07.53.53 0 00.36-.53.5.5 0 00-.23-.49zm-.65-.55a2.63 2.63 0 01.93.12.86.86 0 01.53.86.76.76 0 01-.33.68 1.34 1.34 0 01-.49.16.79.79 0 01.57.33 1 1 0 01.18.53v.50a.89.89 0 000 .17h-.57v-.44a.83.83 0 00-.32-.78 1.5 1.5 0 00-.67-.11h-.48v1.33h-.57v-3.35zm-1.83-.17a2.68 2.68 0 103.79 0 2.67 2.67 0 00-3.79 0zm4.08 4.08a3.1 3.1 0 11.91-2.20 3 3 0 01-.91 2.20z" fill="#004693" fillRule="evenodd"/>
                <path className="bear" d="M7.19 13.34s-11.37 13.92 7.66 28.51h-4.7a11.27 11.27 0 01-3.29-.49c-1.32-.36-3.27-1.21-4.21-2.67a7 7 0 01-1-3.78v-12.3a5.72 5.72 0 010-.61 15.26 15.26 0 011.55-7.09A22.75 22.75 0 0113.34 6a26.52 26.52 0 0117-1.37 36.55 36.55 0 018.15 2.56 10 10 0 015.61-2.78 22.61 22.61 0 019.65 2l6-4a4.51 4.51 0 015 .18c2 1.57 9.12 7.88 12.29 10.5L64.83 4.91c-2.62-2-4.54-.46-4.54-.46l-6.6 4.13C48.8 6.11 42.94 5 38.67 9.82c0 0-18.09-10.47-31.48 3.52zm23.94 18.9c1.47-.28 6.36 8 10.84 9.61H35c.11-.44.05-1.36-1.22-3.10.04 0-4.27-6.21-2.65-6.51zM64.25 8.13l13 5.61v21.21a2.47 2.47 0 010 .38 7.56 7.56 0 01-.48 2.67 5.64 5.64 0 01-2.68 3 8.3 8.3 0 01-3.79.84h-7.9c.26-.40.40-1.31-1.35-3.05 0 0-7-6.70-7.27-8.14 0 0-.85-2 2.21-.35 0 0 7.06 4.16 10.42 7.53 0 0 2.50 1.17 2.65-1 0 0 .14-.76-1.17-2.16 0 0 .07-1 .76-1 0 0 .23 2.45 2.11 3 0 0 1.87.90 3.60-1.78 0 0 .16-2.77-3-7.59 0 0-1.12-1.09-1-5.18a5.86 5.86 0 00-1.86-2.40s-1.25-1.09-1.74-1.60a4.63 4.63 0 01-.42-2.40 2.76 2.76 0 00-3.45-.60 42 42 0 00-7-5.42l-1.50-.85 5.75-1.70 2.63 3.27z" fill="#004693" fillRule="evenodd"/>
              </svg>
            </a>

            <button className="nav-toggle nav-toggle--nav-is-closed" aria-expanded="false">
              <svg className="c-icon" pointerEvents="none">
                <use className="bars" xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#bars-regular"></use>
                <use className="close" xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#times-light"></use>
              </svg>
            </button>

            <nav className="site-nav site-header__nav site-header__nav--main" role="navigation" aria-label="Main menu">
              <ul className="site-menu site-menu--main" role="menubar" aria-hidden="true">
                <li className="site-menu__item site-menu__item--parent site-menu__item--7 dropdown--mega-menu" role="menuitem" tabIndex="-1" aria-haspopup="true">
                  <a href="https://www.coldjet.com/dry-ice-blasting/" className="site-menu__link" data-title="Dry Ice Blasting">Dry Ice Blasting</a>
                </li>
                <li className="site-menu__item site-menu__item--parent site-menu__item--8 dropdown--mega-menu" role="menuitem" tabIndex="-1" aria-haspopup="true">
                  <a href="https://www.coldjet.com/dry-ice-production/" className="site-menu__link" data-title="Dry Ice Production">Dry Ice Production</a>
                </li>
                <li className="site-menu__item site-menu__item--parent site-menu__item--9 dropdown--single-column" role="menuitem" tabIndex="-1" aria-haspopup="true">
                  <a href="https://www.coldjet.com/our-equipment/" className="site-menu__link" data-title="Our Equipment">Our Equipment</a>
                </li>
                <li className="site-menu__item site-menu__item--parent site-menu__item--10 dropdown--single-column" role="menuitem" tabIndex="-1" aria-haspopup="true">
                  <a href="https://www.coldjet.com/parts-services/" className="site-menu__link" data-title="Parts & Services">Parts & Services</a>
                </li>
                <li className="site-menu__item site-menu__item--parent site-menu__item--11" role="menuitem" tabIndex="-1" aria-haspopup="true">
                  <a href="https://www.coldjet.com/resources/" className="site-menu__link" data-title="Resources">Resources</a>
                </li>
                <li className="site-menu__item site-menu__item--61161" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/sustainability/" className="site-menu__link" data-title="Sustainability">Sustainability</a>
                </li>
                <li className="site-menu__item site-menu__item--12 site-menu__item--btn" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/contact-us/" className="site-menu__link" data-title="Contact Us">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="site-header__mobile-contact-bar" id="mobile-contact-bar">
            <a className="site-header__mobile-contact-bar-link" href="tel:18003379423">
              <svg className="c-icon" pointerEvents="none">
                <title>phone</title>
                <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#phone"></use>
              </svg>
              Call
            </a>
            <a className="site-header__mobile-contact-bar-link" href="/contact-us/">
              <svg className="c-icon" pointerEvents="none">
                <title>envelope</title>
                <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#envelope"></use>
              </svg>
              Contact Us
            </a>
          </div>
        </div>

        <div className="site-header__util">
          <div className="container container-xxl">
            <div className="current-language" data-nosnippet>
              <form id="country-selector">
                <select onChange={(e) => { if (e.target.value) window.location.href = e.target.value; }}>
                  <option value="https://www.coldjet.com/de/">German</option>
                  <option value="https://www.coldjet.com/" selected>English</option>
                  <option value="https://www.coldjet.com/es/">Spanish</option>
                  <option value="https://www.coldjet.com/fr/">French</option>
                  <option value="https://www.coldjet.com/it/">Italian</option>
                  <option value="https://www.coldjet.com/ja/">Japanese</option>
                  <option value="https://www.coldjet.com/nl/">Dutch</option>
                  <option value="https://www.coldjet.com/pl/">Polish</option>
                  <option value="https://www.coldjet.pt/">Portuguese (Portugal)</option>
                  <option value="https://www.coldjet.com/pt-br/">Portuguese (Brazil)</option>
                  <option value="https://www.coldjet.com.cn/">中文</option>
                </select>
              </form>
            </div>
            <nav className="site-nav site-header__nav site-header__nav--util" role="navigation" aria-label="Utility menu">
              <ul className="site-menu site-menu--util" role="menubar" aria-hidden="true">
                <li className="site-menu__item site-menu__item--4023 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/careers/" className="site-menu__link" data-title="Careers">Careers</a>
                </li>
                <li className="site-menu__item site-menu__item--14 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/about-cold-jet/" className="site-menu__link" data-title="About Cold Jet">About Cold Jet</a>
                </li>
                <li className="site-menu__item site-menu__item--15 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/global-offices/" className="site-menu__link" data-title="Global Presence">Global Presence</a>
                </li>
                <li className="site-menu__item site-menu__item--54261 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.payerexpress.com/ebp/ColdJet/Login/Index" className="site-menu__link" data-title="Pay Online">Pay Online</a>
                </li>
              </ul>
            </nav>

            <ul className="site-header__social display--md">
              <li>
                <a className="color--secondary-dark" href="https://www.facebook.com/ColdJetLLC" target="_blank" rel="noopener noreferrer">
                  <svg className="c-icon" pointerEvents="none">
                    <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#facebook-header"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a className="color--secondary-dark" href="https://www.instagram.com/coldjetllc/" target="_blank" rel="noopener noreferrer">
                  <svg className="c-icon" pointerEvents="none">
                    <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#instagram-header"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a className="color--secondary-dark" href="https://twitter.com/coldjet" target="_blank" rel="noopener noreferrer">
                  <svg className="c-icon" pointerEvents="none">
                    <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#twitter-header"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a className="color--secondary-dark" href="https://www.linkedin.com/company/cold-jet/" target="_blank" rel="noopener noreferrer">
                  <svg className="c-icon" pointerEvents="none">
                    <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#linkedin-header"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a className="color--secondary-dark" href="https://www.youtube.com/c/dryiceblaster" target="_blank" rel="noopener noreferrer">
                  <svg className="c-icon" pointerEvents="none">
                    <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#youtube-header"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a className="color--secondary-dark" href="https://vimeo.com/coldjet" target="_blank" rel="noopener noreferrer">
                  <svg className="c-icon" pointerEvents="none">
                    <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#vimeo-header"></use>
                  </svg>
                </a>
              </li>
            </ul>
            
            <div className="site-header__search-form">
              <form role="search" method="get" className="search-form" action="https://www.coldjet.com">
                <label>
                  <span className="sr-only">Search for:</span>
                  <input type="search" className="search-field" placeholder="Search ColdJet.com" name="s" />
                </label>
                <input type="submit" className="search-submit" value="Search" />
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;