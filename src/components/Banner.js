import React, { useState } from 'react';

const Banner = ({ blok }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div data-cj-banner className="banner bg-color--secondary" data-theme="dark" style={{
      padding: '8px 0',
      position: 'relative',
      width: '100%',
      backgroundColor: '#aed049'
    }}>
      <div className="container container-xxl">
        <button 
          type="button" 
          className="banner__close" 
          onClick={() => setIsVisible(false)}
          title="Close banner"
          style={{
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '50px',
            color: 'inherit',
            display: 'flex',
            height: '35px',
            justifyContent: 'center',
            padding: '5px',
            position: 'absolute',
            right: '3px',
            top: '3px',
            width: '35px',
            zIndex: 1,
            cursor: 'pointer'
          }}
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ height: '15px', width: '15px' }}>
            <path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/>
          </svg>
        </button>
        
        <div className="banner__wrapper" style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          padding: '0 30px'
        }}>
          <strong className="banner__copy" style={{ color: 'white' }}>
            🚨Food professionals: Join our October 7 webinar to discover how dry ice blasting transforms facility cleaning
          </strong>

          <a 
            className="g-btn g-btn--sm g-btn--white" 
            href="https://zoom.us/webinar/register/2117528443573/WN_9IObw3ZkQlaYMmEVASqY4g" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flexShrink: 0,
              marginLeft: '14px',
              padding: '7px 1.125rem 6px',
              backgroundColor: 'white',
              color: '#084896',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;