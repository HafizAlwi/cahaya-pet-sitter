import React from 'react';
import './Testimonials.css';

const Testimonials = ({ t }) => {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="testimonials-grid">
          {/* Placeholder for Video Testimonial */}
          <div className="testimonial-card video-card glass-card">
            <div className="video-placeholder">
              <span className="play-icon">▶️</span>
              <p>Video Placeholder</p>
            </div>
            <p className="testimonial-text">"{t.placeholderText}"</p>
            <div className="client-info">
              <div className="client-avatar"></div>
              <div>
                <h4>Kucing Happy</h4>
                <p>Klang Valley</p>
              </div>
            </div>
          </div>

          {/* Placeholder for Image Testimonial */}
          <div className="testimonial-card glass-card">
            <div className="image-placeholder">
              <span>📷</span>
              <p>Image Placeholder</p>
            </div>
            <p className="testimonial-text">"{t.placeholderText}"</p>
            <div className="client-info">
              <div className="client-avatar"></div>
              <div>
                <h4>Si Comel</h4>
                <p>Shah Alam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
