import React from 'react';
import './Header.css';

const Header = ({ lang, setLang, t }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          <span className="logo-icon">🐾</span>
          <span className="logo-text">Cahaya Pet Sitter</span>
        </a>
        
        <nav className="desktop-nav">
          <a href="#services">{t.services}</a>
          <a href="#why-us">{t.whyUs}</a>
          <a href="#pricing">{t.pricing}</a>
          <a href="#testimonials">{t.testimonials}</a>
          <a href="#contact">{t.contact}</a>
        </nav>

        <div className="header-actions">
          <button 
            className="lang-toggle"
            onClick={() => setLang(lang === 'ms' ? 'en' : 'ms')}
            aria-label="Toggle language"
          >
            {lang === 'ms' ? 'BM' : 'EN'}
          </button>
          <a href="https://wa.me/601169304474" className="btn btn-primary book-btn" target="_blank" rel="noopener noreferrer">{t.book}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
