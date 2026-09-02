import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { translations } from './data/translations';
import './App.css';

function App() {
  const [lang, setLang] = useState('ms'); // Default to Malay
  const t = translations[lang];

  return (
    <div className="app-container">
      <Header lang={lang} setLang={setLang} t={t.nav} />
      <main>
        <Hero t={t.hero} />
        <WhyUs t={t.whyUs} />
        <Services t={t.services} />
        <Pricing t={t.pricing} />
        <Testimonials t={t.testimonials} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
