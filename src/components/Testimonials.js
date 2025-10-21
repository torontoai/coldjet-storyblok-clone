import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = ({ blok = {} }) => {
  const { title = '', subtitle = '', items = [] } = blok;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  
  // All 6 testimonials from the original site
  const defaultTestimonials = [
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/KSPG-114x40.png' },
      quote: 'From the initial inquiry to the installation, we are very satisfied. The employees of Cold Jet were very friendly, reliable and supported us throughout implementation. We look forward to future collaboration with them and the potential for future pelletizer purchases.',
      author: 'Werner Fiedler',
      company: 'KS Aluminum-Technologie GmbH',
      link: 'https://www.coldjet.com/resources/ks-aluminum-technologie-gmbh/'
    },
    {
      image: null,
      quote: 'My production team tells me repeatedly that Cold Jet\'s product is user-friendly and that it has the best applicator, nozzle and attachment of all those that we evaluated. Did I mention they are fast? The Aero systems give us everything we asked for in a cleaning solution, and I\'m getting a lot of interest from other plants within our organization because of the efficiency and the production increases we\'ve achieved. Cold Jet has helped us become a better, cleaner manufacturer and the dry ice cleaning system truly adds value to our organization\'s operations.',
      author: 'Tony Tai',
      company: 'Production Supervisor | Global Chocolate Manufacturer',
      link: 'https://www.coldjet.com/resources/chocolate-facility/'
    },
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/Performance-Plastics-e1562875205683-88x40.png' },
      quote: 'Cleaning with Cold Jet will not roll parting lines, change or destroy the metal and best of all, it allows our running time to be extended. We use it every day, on every shift.',
      author: 'Tom Mendel',
      company: 'President and CEO | Performance Plastics',
      link: 'https://www.coldjet.com/resources/performance-plastics/'
    },
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/05/Progress-Casting-Group-143x40.png' },
      quote: 'We estimated that it would pay for itself in six months, but it took only one month. This machine is incredible. Every foundry needs to own a dry ice cleaning system!',
      author: 'Daryl Hesch',
      company: 'Tooling Supervisor | Progress Casting',
      link: 'https://www.coldjet.com/resources/progress-casting-group/'
    },
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/The-Mariners-Museum-1-44x40.png' },
      quote: 'Even when the surface was magnified 350 times, we didn\'t see any pitting. We didn\'t see any signs of abrasion. We didn\'t see any damage.',
      author: 'Will Hoffman',
      company: 'Conservation Project Manager | The Mariners\' Museum and Park',
      link: 'https://www.coldjet.com/resources/uss-monitor/'
    },
    {
      image: { filename: 'https://www.coldjet.com/wp-content/uploads/2019/05/Silgan-sets-stock-split-1-1-80x40.jpg' },
      quote: 'The time savings alone have been phenomenal as we have been able to clean our equipment better and faster while they are still online and we have dramatically reduced the amount of cleansers, degreasers and alcohol that we buy and use for cleaning.',
      author: 'Joe Pond',
      company: 'Setup Supervisor | Silgan Plastics',
      link: 'https://www.coldjet.com/resources/silgan-plastics/'
    }
  ];
  
  const displayTestimonials = items.length > 0 ? items : defaultTestimonials;
  
  // Handle responsive visible cards
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1200) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalSlides = Math.ceil(displayTestimonials.length / visibleCards);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials-slider" data-theme="dark">
      <div className="container container-xxl">
        <div className="testimonials-slider__header">
          <h5 className="testimonials-slider__kicker">OUR CUSTOMERS & WHAT THEY SAY ABOUT US</h5>
          <h2 className="testimonials-slider__title">Thousands of customers around the world rely on Cold Jet</h2>
          <p className="testimonials-slider__subtitle">
            With a global install base of 15,000+ that consists of companies large and small - Cold Jet delivers real value.
          </p>
        </div>
        
        <div className="testimonials-slider__arrows">
          <button 
            className="testimonials-slider__arrow testimonials-slider__arrow--prev" 
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button 
            className="testimonials-slider__arrow testimonials-slider__arrow--next" 
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
        
        <div className="testimonials-slider__slides-wrapper">
          <div 
            className="testimonials-slider__slides" 
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {displayTestimonials.map((testimonial, index) => (
              <article 
                key={index} 
                className="testimonial-card"
                style={{ 
                  flex: `0 0 ${100 / visibleCards}%`,
                  maxWidth: `${100 / visibleCards}%`
                }}
              >
                <div className="testimonial-card__inner">
                  {testimonial.image?.filename && (
                    <div className="testimonial-card__logo">
                      <img 
                        loading="lazy" 
                        src={testimonial.image.filename} 
                        alt={testimonial.company || 'Company logo'} 
                      />
                    </div>
                  )}
                  
                  <blockquote className="testimonial-card__quote">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>

                  <div className="testimonial-card__footer">
                    <cite className="testimonial-card__cite">
                      <strong>{testimonial.author}</strong>
                      <br />
                      <span className="testimonial-card__company">{testimonial.company}</span>
                    </cite>
                    {testimonial.link && (
                      <a 
                        href={testimonial.link} 
                        className="testimonial-card__link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <div className="testimonials-slider__dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`testimonials-slider__dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;