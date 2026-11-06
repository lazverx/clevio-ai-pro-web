'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#E8E8E2] shadow-xs'
          : 'bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-[#E8E8E2]/60'
      }`}
    >
      <div className="container-executive h-16 sm:h-20 flex items-center justify-between">
        
        {/* Authentic Brand Wordmark with transparent alpha channel */}
        <a href="#program" className="flex items-center gap-2 focus:outline-none" onClick={closeMenu}>
          <img
            src="/images/clevio-ai-pro-wordmark.png"
            alt="Clevio AI Pro"
            className="h-7 sm:h-8 lg:h-9 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation Links: Tentang · Metode · Kompetensi · Fasilitator · Jadwal & Biaya · FAQ */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
          {siteConfig.navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-brand-600 transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Header Action Button: [Daftar Workshop] */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            href={siteConfig.links.konsultasiTim}
            external
          >
            Konsultasi Tim
          </Button>
          <Button
            variant="primary"
            size="sm"
            href={siteConfig.links.daftarWorkshop}
            external
          >
            Daftar Workshop
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
          aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Accessible Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E8E2] bg-[#FAFAF8] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            {siteConfig.navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="px-3 py-2.5 rounded-lg hover:bg-[#F3F3EE] hover:text-brand-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#E8E8E2] flex flex-col gap-2.5">
            <Button
              variant="primary"
              size="md"
              href={siteConfig.links.daftarWorkshop}
              external
              onClick={closeMenu}
              className="w-full text-center"
            >
              Daftar Workshop
            </Button>
            <Button
              variant="secondary"
              size="md"
              href={siteConfig.links.konsultasiTim}
              external
              onClick={closeMenu}
              className="w-full text-center"
            >
              Konsultasi untuk Tim
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
