import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Tantangan } from '@/components/Tantangan';
import { MetodeWorkshop } from '@/components/MetodeWorkshop';
import { LimaKompetensi } from '@/components/LimaKompetensi';
import { Fasilitator } from '@/components/Fasilitator';
import { InformasiWorkshop } from '@/components/InformasiWorkshop';
import { ProofDocumentation } from '@/components/ProofDocumentation';
import { JadwalInvestasi } from '@/components/JadwalInvestasi';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111110] selection:bg-brand-600 selection:text-white">
      <Navbar />
      <main>
        {/* 1. Hero (includes united Output Workshop strip at the base) */}
        <Hero />

        {/* 2. Why Clevio AI Pro (Full 1-screen section with strategic photo placeholder) */}
        <Tantangan />

        {/* 3. Metode Workshop (Editorial Timeline) */}
        <MetodeWorkshop />

        {/* 4. Lima Kompetensi (Dark Section) */}
        <LimaKompetensi />

        {/* 5. Fasilitator (Aranggi Soemardjan) */}
        <Fasilitator />

        {/* 6. Informasi Workshop Detail (2 Kolom) */}
        <InformasiWorkshop />

        {/* 7. Proof & Documentation (Photo Grid & Testimonial Placeholder) */}
        <ProofDocumentation />

        {/* 8. Jadwal & Investasi (Public & Corporate Panels) */}
        <JadwalInvestasi />

        {/* 9. FAQ (7 Pertanyaan Terstruktur) */}
        <FAQ />

        {/* 10. Final CTA Banner */}
        <FinalCTA />
      </main>
      
      {/* 11. Executive Footer */}
      <Footer />
    </div>
  );
}
