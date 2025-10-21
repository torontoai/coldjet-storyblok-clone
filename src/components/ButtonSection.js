import React from 'react';

const ButtonSection = ({ blok = {} }) => {
  const {
    text = 'Learn More',
    url = '#',
    style = 'bordered',
    alignment = 'center'
  } = blok;
  
  const buttonClass = style === 'primary' ? 'g-btn g-btn--lg' : 'g-btn g-btn--bordered g-btn--lg';
  
  return (
    <section className="wysiwyg-content container text-component margin-top--none margin-bottom--none padding-top--xxs padding-bottom--xxs container--xl">
      <p style={{ textAlign: alignment }}>
        <a 
          className={buttonClass} 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {text}
        </a>
      </p>
    </section>
  );
};

export default ButtonSection;