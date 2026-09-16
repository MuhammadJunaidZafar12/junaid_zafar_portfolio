import React, { useEffect, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Testimonials = () => {
  const testimonials = portfolioData?.testimonials || [];
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (!testimonials.length) return null;

  return (
    <section id="testimonials" ref={sectionRef} className={`testimonials-section ${isVisible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="testimonials-layout">
          <div className="testimonials-heading">
            <div className="section-label">
              <span className="section-label-dot" />
              Testimonials
            </div>
            <h2 className="section-title">What People Say</h2>
            <div className="section-divider">
              <div className="section-divider-fill" />
            </div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((test, index) => (
              <div
                key={test.id}
                className="testimonial-card"
                style={{ '--testimonial-delay': `${index * 120}ms` }}
              >
                <div className="testimonial-topline">
                  <Quote className="testimonial-quote-icon" size={24} strokeWidth={1.6} />
                  <div className="testimonial-stars" aria-label={`${test.rating} out of 5 stars`}>
                  {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" strokeWidth={1.5} />
                  ))}
                  </div>
                </div>

                <p className="testimonial-quote">
                  "{test.quote}"
                </p>

                <div className="testimonial-profile">
                  <div className="testimonial-avatar">
                    {test.initials}
                  </div>
                  <div>
                    <span className="testimonial-name">{test.name}</span>
                    <span className="testimonial-location">{test.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
