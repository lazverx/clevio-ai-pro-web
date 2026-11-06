import React from 'react';
import { Mail, MessageCircle, MapPin, Instagram, Linkedin, Shield } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-10 sm:py-14 border-t border-slate-900">
      <div className="container-executive">
        
        {/* 4 Rich Columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-8 pb-8 sm:pb-10 border-b border-slate-900">
          
          {/* Column 1: Brand Wordmark & Identity */}
          <div className="col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/clevio-ai-pro-wordmark.png"
                alt={siteConfig.name}
                className="h-7 sm:h-9 w-auto brightness-0 invert opacity-95"
              />
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Program eksekutif terdepan untuk membekali para pemimpin dan profesional dengan kerangka berpikir kritis, pemetaan peluang AI, dan rencana aksi nyata.
            </p>
            <div className="pt-1 flex items-center gap-3 text-[11px] sm:text-xs font-semibold text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Membangun Clevio sejak {siteConfig.foundingYear}
              </span>
            </div>
          </div>

          {/* Column 2: Program & Kurikulum */}
          <div className="col-span-1 lg:col-span-3 space-y-2 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white font-display">
              Program
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#program" className="hover:text-white transition-colors">AI Thinking &amp; Innovation</a></li>
              <li><a href="#metode" className="hover:text-white transition-colors">Problem Framing Bisnis</a></li>
              <li><a href="#metode" className="hover:text-white transition-colors">Design Thinking + AI</a></li>
              <li><a href="#kompetensi" className="hover:text-white transition-colors">5 Kompetensi Inti</a></li>
            </ul>
          </div>

          {/* Column 3: Format Pelatihan */}
          <div className="col-span-1 lg:col-span-2 space-y-2 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white font-display">
              Format
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-400">
              <li><a href="#informasi" className="hover:text-white transition-colors">Public Workshop</a></li>
              <li><a href={siteConfig.links.whatsappChat} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">In-House Corporate</a></li>
              <li><a href="#fasilitator" className="hover:text-white transition-colors">Executive Mentoring</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Kontak & Lokasi */}
          <div className="col-span-2 lg:col-span-3 space-y-2 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white font-display">
              Kontak &amp; Lokasi
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <a href={siteConfig.links.emailClient} className="hover:text-white transition-colors">
                  {siteConfig.emailAlt}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <a href={siteConfig.links.whatsappChat} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {siteConfig.whatsappDisplay} (WhatsApp)
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{siteConfig.locationShort}</span>
              </div>
              {/* Dummy Address & Phone */}
              <div className="pt-1 text-[11px] text-slate-500 space-y-0.5">
                <div>Alamat: {siteConfig.addressFull}</div>
                <div>Telepon: {siteConfig.phone}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-500">
          <p>&copy; 2026 {siteConfig.companyName}. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#program" className="hover:text-slate-400 transition-colors">Tentang Clevio</a>
            <a href={siteConfig.links.konsultasiTim} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors">Kontak</a>
            <a href={siteConfig.links.privacyPolicy} className="hover:text-slate-400 transition-colors inline-flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>Kebijakan Privasi (dummy)</span>
            </a>
            <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors inline-flex items-center gap-1">
              <Instagram className="w-3 h-3" />
              <span>Instagram (dummy)</span>
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-400 transition-colors inline-flex items-center gap-1">
              <Linkedin className="w-3 h-3" />
              <span>LinkedIn (dummy)</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
