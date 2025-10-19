import React from 'react';
import './Testimonials.css';

const Testimonials = ({ blok = {} }) => {
  const { title = '', items = [] } = blok;
  
  // Default testimonials if none provided
  const defaultTestimonials = [
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/KSPG-114x40.png' },
      quote: 'From the initial inquiry to the installation, we are very satisfied. The employees of Cold Jet were very friendly, reliable and supported us throughout implementation. We look forward to future collaboration with them and the potential for future pelletizer purchases.',
      author: 'Werner Fiedler',
      company: 'KS Aluminum-Technologie GmbH'
    },
    {
      image: null,
      quote: 'My production team tells me repeatedly that Cold Jet\'s product is user-friendly and that it has the best applicator, nozzle and attachment of all those that we evaluated. Did I mention they are fast? The Aero systems give us everything we asked for in a cleaning solution, and I\'m getting a lot of interest from other plants within our organization because of the efficiency and the production increases we\'ve achieved. Cold Jet has helped us become a better, cleaner manufacturer and the dry ice cleaning system truly adds value to our organization\'s operations.',
      author: 'Tony Tai',
      company: 'Production Supervisor | Global Chocolate Manufacturer'
    },
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/Performance-Plastics-e1562875205683-88x40.png' },
      quote: 'Cleaning with Cold Jet will not roll parting lines, change or destroy the metal and best of all, it allows our running time to be extended. We use it every day, on every shift.',
      author: 'Tom Mendel',
      company: 'President and CEO | Performance Plastics'
    },
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/05/Progress-Casting-Group-143x40.png' },
      quote: 'We estimated that it would pay for itself in six months, but it took only one month. This machine is incredible. Every foundry needs to own a dry ice cleaning system!',
      author: 'Daryl Hesch',
      company: 'Tooling Supervisor | Progress Casting'
    },
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/The-Mariners-Museum-1-44x40.png' },
      quote: 'Even when the surface was magnified 350 times, we didn\'t see any pitting. We didn\'t see any signs of abrasion. We didn\'t see any damage.',
      author: 'Will Hoffman',
      company: 'Conservation Project Manager | The Mariners\' Museum and Park'
    },
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/05/Silgan-sets-stock-split-1-1-80x40.jpg' },
      quote: 'The time savings alone have been phenomenal as we have been able to clean our equipment better and faster while they are still online and we have dramatically reduced the amount of cleansers, degreasers and alcohol that we buy and use for cleaning.',
      author: 'Joe Pond',
      company: 'Setup Supervisor | Silgan Plastics'
    }
  ];
  
  const displayTestimonials = items.length > 0 ? items : defaultTestimonials;

  return (
    <section className="container container-xxl cards-slider cards-slider--testimonial margin-top--none margin-bottom--none" data-theme="dark">
      <div className="cards-slider__shadow"></div>
      <div className="cards-slider__content">
        <h2 className="g-h-kicker"></h2>
        <h3 className="font-weight--600 text--xxl balance-text"></h3>
        <p className="opacity-80 balance-text"></p>
      </div>

      <div className="cards-slider__arrows margin-top--auto"></div>

      <div className="cards-slider__slides-wrapper">
        <div className="cards-slider__slides" data-slick='{"lazyLoad": "ondemand"}'>
          {displayTestimonials.map((testimonial, index) => (
            <article key={index} className="c-testimonial bg-color--white">
              {testimonial.image?.filename && (
                <div className="c-testimonial__logo">
                  <img loading="lazy" src={testimonial.image.filename} alt="" />
                </div>
              )}
              
              <blockquote className="c-testimonial__quote text-component text--lg font-secondary font-weight--400">
                <p>{testimonial.quote}</p>
              </blockquote>

              <div className="c-testimonial__footer">
                <cite className="c-testimonial__cite text-component">
                  <strong className="color--primary-dark">{testimonial.author}</strong>
                  <br />
                  <span className="text--sm color--primary-light">{testimonial.company}</span>
                </cite>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="cards-slider__counter slider-counter">
        <span className="slider-counter__index">1</span>&nbsp;/&nbsp;<span className="slider-counter__total">1</span>
      </div>

      <div className="cards-slider__dots"></div>
    </section>
  );
};

export default Testimonials;