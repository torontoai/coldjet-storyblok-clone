import React from 'react';
import './Customers.css';

const Customers = ({ blok }) => {
  return (
    <section className="wysiwyg-content container text-component margin-top--xxl margin-bottom--none padding-top--none padding-bottom--none container--xl">
      <div style={{ position: 'relative', padding: '20px', textAlign: 'center' }}>
        <h5 style={{ 
          fontSize: '1.5rem', 
          fontFamily: '"Avenir Next Condensed", sans-serif', 
          color: '#aed049', 
          margin: '0 0 9.504px', 
          lineHeight: '2' 
        }}>
          <strong>OUR CUSTOMERS & WHAT THEY SAY ABOUT US</strong>
        </h5>
        <h4 className="text--xxl" style={{ fontWeight: 'bold', color: 'black' }}>
          Thousands of customers around<br />
          the world rely on Cold Jet
        </h4>
        <p className="text--md color--primary-light balance-text">
          With a global install base of <strong>15,000+ </strong>that consists of companies large and small – <strong>Cold Jet delivers real value.</strong>
        </p>
      </div>
    </section>
  );
};

export default Customers;