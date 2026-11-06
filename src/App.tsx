import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Tantangan } from './components/Tantangan';
import { MetodeWorkshop } from './components/MetodeWorkshop';
import { LimaKompetensi } from './components/LimaKompetensi';
import { Fasilitator } from './components/Fasilitator';
import { InformasiWorkshop } from './components/InformasiWorkshop';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    // Subtle entrance animation on initial mount
    const timer = setTimeout(() => {
      document.body.classList.add('app-loaded');
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-brand-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Tantangan />
        <MetodeWorkshop />
        <LimaKompetensi />
        <Fasilitator />
        <InformasiWorkshop />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

