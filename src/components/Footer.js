import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer bg-color--footer-bg" role="contentinfo">
      <div className="site-footer__top container container-xxl">
        <div className="site-footer__contact">
          <a className="site-footer__logo" href="https://www.coldjet.com">
            <img src="https://www.coldjet.com/wp-content/themes/coldjet/assets/images/logo/coldjet-white-no-tagline.svg" alt="Cold Jet" />
          </a>

          <p className="site-footer__address-title color--white opacity-50 font-weight--600">Global Headquarters</p>
          <address className="color--white">
            6283 Tri Ridge Blvd.<br />
            Loveland, OH 45140, USA
          </address>
          
          <ul className="site-footer__social">
            <li>
              <a className="color--white" href="https://www.facebook.com/ColdJetLLC" target="_blank" rel="noopener noreferrer">
                <svg className="c-icon" pointerEvents="none">
                  <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a className="color--white" href="https://www.instagram.com/coldjetllc/" target="_blank" rel="noopener noreferrer">
                <svg className="c-icon" pointerEvents="none">
                  <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#instagram"></use>
                </svg>
              </a>
            </li>
            <li>
              <a className="color--white" href="https://twitter.com/coldjet" target="_blank" rel="noopener noreferrer">
                <svg className="c-icon" pointerEvents="none">
                  <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a className="color--white" href="https://www.linkedin.com/company/cold-jet/" target="_blank" rel="noopener noreferrer">
                <svg className="c-icon" pointerEvents="none">
                  <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#linkedin"></use>
                </svg>
              </a>
            </li>
            <li>
              <a className="color--white" href="https://www.youtube.com/c/dryiceblaster" target="_blank" rel="noopener noreferrer">
                <svg className="c-icon" pointerEvents="none">
                  <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#youtube"></use>
                </svg>
              </a>
            </li>
            <li>
              <a className="color--white" href="https://vimeo.com/coldjet" target="_blank" rel="noopener noreferrer">
                <svg className="c-icon" pointerEvents="none">
                  <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#vimeo"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <nav className="site-nav site-footer__nav site-footer__nav--main" role="navigation" aria-label="Footer menu">
          <ul className="site-menu site-menu--footer" role="menubar" aria-hidden="true">
            <li className="site-menu__item site-menu__item--parent site-menu__item--7 dropdown--" role="menuitem" tabIndex="-1" aria-haspopup="true">
              <a href="https://www.coldjet.com/dry-ice-blasting/" className="site-menu__link" data-title="Dry Ice Blasting">Dry Ice Blasting</a>
              <ul className="site-menu__sub-menu site-menu__sub-menu--1" aria-hidden="true">
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--5136 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/dry-ice-blasting/industries/aerospace-aviation/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link" data-title="Aerospace & Aviation">Aerospace & Aviation</a>
                </li>
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--5140 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/dry-ice-blasting/industries/automotive/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link" data-title="Automotive">Automotive</a>
                </li>
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--16 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/dry-ice-blasting/applications/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link font-weight--600" data-title="View All">
                    View All
                    <svg className="icon" pointerEvents="none">
                      <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#chevron-right"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
            <li className="site-menu__item site-menu__item--parent site-menu__item--8 dropdown--" role="menuitem" tabIndex="-1" aria-haspopup="true">
              <a href="https://www.coldjet.com/dry-ice-production/" className="site-menu__link" data-title="Dry Ice Production">Dry Ice Production</a>
              <ul className="site-menu__sub-menu site-menu__sub-menu--1" aria-hidden="true">
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--3759 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/dry-ice-production/applications/airline-catering/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link" data-title="Airline Catering">Airline Catering</a>
                </li>
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--5118 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/dry-ice-production/applications/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link font-weight--600" data-title="View All">
                    View All
                    <svg className="icon" pointerEvents="none">
                      <use xlinkHref="/wp-content/themes/coldjet/build/spritemap.svg#chevron-right"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
            <li className="site-menu__item site-menu__item--parent site-menu__item--9 dropdown--" role="menuitem" tabIndex="-1" aria-haspopup="true">
              <a href="https://www.coldjet.com/our-equipment/" className="site-menu__link" data-title="Our Equipment">Our Equipment</a>
              <ul className="site-menu__sub-menu site-menu__sub-menu--1" aria-hidden="true">
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--21 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/our-equipment/dry-ice-blasting-equipment/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link" data-title="Dry Ice Blasting Equipment">Dry Ice Blasting Equipment</a>
                </li>
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--94067 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/our-equipment/dry-ice-production-equipment/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link" data-title="Dry Ice Production Equipment">Dry Ice Production Equipment</a>
                </li>
              </ul>
            </li>
            <li className="site-menu__item site-menu__item--parent site-menu__item--10 dropdown--" role="menuitem" tabIndex="-1" aria-haspopup="true">
              <a href="https://www.coldjet.com/parts-services/" className="site-menu__link" data-title="Parts & Services">Parts & Services</a>
              <ul className="site-menu__sub-menu site-menu__sub-menu--1" aria-hidden="true">
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--51408 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/parts-services/cold-jet-connect/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link" data-title="Cold Jet CONNECT®">Cold Jet CONNECT®</a>
                </li>
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--23 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/parts-services/service-repair/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link" data-title="Service & Repair">Service & Repair</a>
                </li>
              </ul>
            </li>
            <li className="site-menu__item site-menu__item--parent site-menu__item--12 dropdown--" role="menuitem" tabIndex="-1" aria-haspopup="true">
              <a href="https://www.coldjet.com/contact-us/" className="site-menu__link" data-title="Contact Us">Contact Us</a>
              <ul className="site-menu__sub-menu site-menu__sub-menu--1" aria-hidden="true">
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--61161 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/sustainability/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link" data-title="Sustainability at Cold Jet">Sustainability at Cold Jet</a>
                </li>
                <li className="site-menu__sub-menu__item site-menu__sub-menu--1__item site-menu__item--4023 dropdown--" role="menuitem" tabIndex="-1">
                  <a href="https://www.coldjet.com/careers/" className="site-menu__sub-menu__link site-menu__sub-menu--1__link" data-title="Careers">Careers</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>

      <div className="site-footer__bottom container container-xxl">
        <p className="color--white site-footer__copyright">&copy; 2025 Cold Jet</p>

        <nav className="site-nav site-footer__nav site-footer__nav--util" role="navigation" aria-label="Footer utility menu">
          <ul className="site-menu site-menu--footer-util" role="menubar" aria-hidden="true">
            <li className="site-menu__item site-menu__item--189 dropdown--" role="menuitem" tabIndex="-1">
              <a href="https://www.coldjet.com/legal/" className="site-menu__link" data-title="Legal">Legal</a>
            </li>
            <li className="site-menu__item site-menu__item--3 dropdown--" role="menuitem" tabIndex="-1">
              <a href="https://www.coldjet.com/privacy-policy/" className="site-menu__link" data-title="Privacy Policy">Privacy Policy</a>
            </li>
            <li className="site-menu__item site-menu__item--54265 dropdown--" role="menuitem" tabIndex="-1">
              <a href="https://www.payerexpress.com/ebp/ColdJet/Login/Index" className="site-menu__link" data-title="Pay Online">Pay Online</a>
            </li>
          </ul>
        </nav>

        <div className="current-language" data-nosnippet>
          <p className="margin-bottom--0">
            <a href="/language-selector/" style={{ alignItems: 'center', display: 'inline-flex', gap: '.5em' }}>
              <svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20">
                <g fill="currentColor">
                  <path d="M20 18h-1.44a.61.61 0 0 1-.4-.12.81.81 0 0 1-.23-.31L17 15h-5l-1 2.54a.77.77 0 0 1-.22.3.59.59 0 0 1-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 0 1-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 0 1-2.91-1.41 11.46 11.46 0 0 0 2.81-5.37H12V4H7.31a4 4 0 0 0-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 0 0 5 10.7a17.19 17.19 0 0 1-5 2.1q.56.82.87 1.38a23.28 23.28 0 0 0 5.22-2.51 15.64 15.64 0 0 0 3.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 0 1-2.45 4.45 9.11 9.11 0 0 1-2.46-4.45z" />
                </g>
              </svg>
              Languages
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;