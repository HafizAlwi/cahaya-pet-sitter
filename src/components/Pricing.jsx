import React from 'react';
import './Pricing.css';

const Pricing = ({ t }) => {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-subtitle">{t.subtitle}</p>
        
        <div className="pricing-card glass-card">
          <div className="pricing-header">
            <h3 className="pricing-tier">Pakej Basic Sitter</h3>
            <div className="price-container">
              <span className="price">{t.basePrice}</span>
              <span className="price-period">{t.perDay}</span>
            </div>
          </div>
          
          <ul className="pricing-features">
            <li>✅ Termasuk lawatan ke rumah anda</li>
            <li>✅ Cuci Litter Box</li>
            <li>✅ Beri Makan & Minum</li>
            <li>✅ Bermanja & Bermain (Value Added)</li>
            <li>✅ Rakaman Video & Gambar (Value Added)</li>
          </ul>
          
          <p className="pricing-note">{t.note}</p>
          
          <div className="pricing-action">
            <a href="https://wa.me/601169304474?text=Hai%20saya%20berminat%20untuk%20servis%20Cahaya%20Pet%20Sitter" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-book">
              Book Now via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
