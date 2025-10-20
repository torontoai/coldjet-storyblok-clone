import React from 'react';
import './Customers.css';

const Customers = ({ blok }) => {
  return (
    <section className="wysiwyg-content container text-component margin-top--xxl margin-bottom--none padding-top--none padding-bottom--none container--xl">
      <div style={{ position: 'relative', padding: '40px 20px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <h5 style={{
          fontSize: '0.875rem',
          fontFamily: '"Avenir Next Condensed", "Avenir Next", sans-serif',
          color: '#aed049',
          margin: '0 0 16px',
          lineHeight: '1.5',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          fontWeight: '600'
        }}>
          OUR CUSTOMERS & WHAT THEY SAY ABOUT US
        </h5>
        <h2 style={{
          fontSize: '2.5rem',
          fontFamily: '"Avenir Next", sans-serif',
          fontWeight: '700',
          color: '#003366',
          margin: '0 0 24px',
          lineHeight: '1.2'
        }}>
          Thousands of customers around<br />
          the world rely on Cold Jet
        </h2>
        <p style={{
          fontSize: '1.125rem',
          fontFamily: '"Avenir Next", sans-serif',
          color: '#666',
          lineHeight: '1.6',
          margin: '0'
        }}>
          With a global install base of <strong>15,000+</strong> that consists of companies large and small – <strong>Cold Jet delivers real value.</strong>
        </p>
      </div>
    </section>
  );
};

export default Customers;