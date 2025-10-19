import React from 'react';
import './ProductSection.css';

const ProductSection = ({ blok }) => {
  return (
    <section className="wysiwyg-content container text-component margin-top--xl margin-bottom--sm padding-top--none padding-bottom--none container--md">
      <div className="product-section">
        <div style={{ position: 'relative', padding: '20px', textAlign: 'center' }}>
          <h5 style={{ 
            fontSize: '1.5rem', 
            fontFamily: '"Avenir Next Condensed", sans-serif', 
            color: '#aed049', 
            margin: '0 0 9.504px', 
            lineHeight: '2' 
          }}>
            <strong>Advanced Dry Ice Solutions for Industry</strong>
          </h5>
          <h3 className="text--xxl balance-text">
            The Dry Ice Blasting & Production Solutions You Can Trust
          </h3>
          <p className="text--md color--primary-light balance-text">
            Experience the power of Cold Jet's innovative dry ice technology. We provide high-performance dry ice cleaning machines and dry ice production solutions tailored to your specific business needs.<br />
            <span style={{ fontWeight: 'bold' }}>
              Efficiency, reliability, and long-lasting performance are at the core of our dry ice solutions.
            </span><br />
            We prioritize innovation and customer satisfaction to deliver exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;