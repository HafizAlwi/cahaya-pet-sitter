import React from 'react';
import './Contact.css';

const Contact = ({ t }) => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="contact-grid">
          <div className="contact-info glass-card">
            <h3>{t.contactInfo}</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>PPR Kerinchi Blok D,<br/>59200 Kuala Lumpur,<br/>Wilayah Persekutuan Kuala Lumpur</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📱</span>
              <p>+60 11-6930 4474</p>
            </div>
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <p>8:00 AM - 8:00 PM</p>
            </div>
          </div>
          
          <div className="contact-map">
            <iframe 
              src="https://maps.google.com/maps?q=PPR%20Kerinchi%20Blok%20D,%20KL&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
