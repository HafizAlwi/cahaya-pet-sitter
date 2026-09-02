import React from 'react';
import './Hero.css';

const Hero = ({ t }) => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary">{t.cta}</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="image-backdrop"></div>
          <img src="/images/hero_cat.jpg" alt="Cute cat" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
