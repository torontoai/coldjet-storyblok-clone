import React from 'react';
import './WhyChoose.css';

const WhyChoose = ({ blok = {} }) => {
  const {
    kicker = 'ADVANCED DRY ICE SOLUTIONS FOR INDUSTRY',
    title = 'The Dry Ice Blasting & Production Solutions You Can Trust',
    description = 'Experience the power of Cold Jet\'s innovative dry ice technology. We provide high-performance dry ice cleaning machines and dry ice production solutions tailored to your specific business needs.',
    features = []
  } = blok;
  
  // Default features matching the original site
  const defaultFeatures = [
    {
      title: 'Efficiency, reliability, and long-lasting performance are at the core of our dry ice solutions.',
      description: 'We prioritize innovation and customer satisfaction to deliver exceptional results.'
    }
  ];
  
  const displayFeatures = features.length > 0 ? features : defaultFeatures;

  return (
    <section className="why-choose-section">
      <div className="container container--xl">
        <div className="why-choose-content">
          <h5 className="why-choose-kicker">{kicker}</h5>
          <h2 className="why-choose-title">{title}</h2>
          <p className="why-choose-description">{description}</p>
          
          {displayFeatures.map((feature, index) => (
            <div key={index} className="why-choose-feature">
              {feature.title && <p className="why-choose-feature-text"><strong>{feature.title}</strong></p>}
              {feature.description && <p className="why-choose-feature-description">{feature.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;