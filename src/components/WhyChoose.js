import React from 'react';
import './WhyChoose.css';

const WhyChoose = ({ blok = {} }) => {
  const {
    kicker = 'Advanced Dry Ice Solutions for Industry',
    title = 'The Dry Ice Blasting & Production Solutions You Can Trust',
    paragraph1 = 'Experience the power of Cold Jet\'s innovative dry ice technology. We provide high-performance dry ice cleaning machines and dry ice production solutions tailored to your specific business needs.',
    paragraph2 = 'Efficiency, reliability, and long-lasting performance are at the core of our dry ice solutions.',
    paragraph3 = 'We prioritize innovation and customer satisfaction to deliver exceptional results.'
  } = blok;

  return (
    <section className="why-choose-section">
      <div className="container container--xl">
        <div className="why-choose-content">
          <h5 className="why-choose-kicker">{kicker}</h5>
          <h2 className="why-choose-title">{title}</h2>
          <p className="why-choose-description">{paragraph1}</p>
          <p className="why-choose-feature-text"><strong>{paragraph2}</strong></p>
          <p className="why-choose-feature-description">{paragraph3}</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;