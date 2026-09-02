import React from 'react';
import './Services.css';

const imageMap = [
  '/images/service_cleaning_1788337759895.jpg',
  '/images/service_feeding_1788337790179.jpg',
  '/images/service_playing_1788337818142.jpg',
  '/images/service_recording_1788337828728.jpg'
];

const Services = ({ t }) => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="services-grid">
          {t.items.map((item, index) => (
            <div key={index} className="service-card glass-card">
              <div className="service-image-wrapper">
                <img src={imageMap[index]} alt={item.title} className="service-image" />
              </div>
              <div className="service-content">
                <h3 className="service-title">{item.title}</h3>
                <p className="service-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
