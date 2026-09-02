import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '40px 24px',
      backgroundColor: 'var(--text-main)',
      color: 'white'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontFamily: 'var(--font-heading)',
          fontWeight: '700',
          fontSize: '1.25rem',
          marginBottom: '16px'
        }}>
          <span>🐾</span> Cahaya Pet Sitter
        </div>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Cahaya Pet Sitter. {t.rights}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
