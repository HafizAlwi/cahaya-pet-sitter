import React from 'react';
import './WhyUs.css';

const WhyUs = ({ t }) => {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="features-grid">
          {t.features.map((feature, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feature-icon">
                {index === 0 && '😌'}
                {index === 1 && '🛡️'}
                {index === 2 && '🥰'}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
