import React from 'react';
import './IndustrialChallenges.css';

const IndustrialChallenges = ({ blok }) => {
  return (
    <section className="wysiwyg-content container text-component margin-top--lg margin-bottom--xxs padding-top--none padding-bottom--none container--xl">
      <div style={{ position: 'relative', padding: '20px', textAlign: 'center' }}>
        <h5 style={{ 
          fontSize: '1.5rem', 
          fontFamily: '"Avenir Next Condensed", sans-serif', 
          color: '#aed049', 
          margin: '0 0 9.504px', 
          lineHeight: '2' 
        }}>
          <strong>Overcoming Industrial Challenges with Dry Ice Blasting Solutions</strong>
        </h5>
        <h3 className="text--xxl balance-text">
          Cold Jet: 35+ Years of Expertise in Industrial Cleaning & Surface Preparation
        </h3>
        <p className="text--md color--primary-light balance-text">
          Inefficient production processes can hinder success. Cold Jet's decades of experience mean we offer dry ice blasting solutions for every need—standard and custom. These solutions tackle your industry's challenges, reducing downtime and boosting efficiency while also being eco-friendly.
        </p>
      </div>
    </section>
  );
};

export default IndustrialChallenges;