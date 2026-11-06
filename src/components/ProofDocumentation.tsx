import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';
import { Quote, Image as ImageIcon } from 'lucide-react';

export const ProofDocumentation: React.FC = () => {
  return (
    <SectionWrapper
      id="dokumentasi"
      className="bg-[#FAFAF8] border-y border-[#E8E8E2] scroll-mt-20"
      eyebrow="DOKUMENTASI &amp; CONTOH OUTPUT"
      title="Bukti proses berpikir dan pengalaman langsung."
      subtitle="Dokumentasi interaksi kerja, artefak perumusan masalah, dan contoh output terapan."
    >
      <div className="space-y-8 pt-2">
        
        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Workshop Session */}
          <MotionFadeIn direction="up" delay={0}>
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col shadow-xs group">
              <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                <img
                  src="/images/professional-training.jpg"
                  alt="Dokumentasi Sesi Workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/70 text-white backdrop-blur-xs">
                  (Dokumentasi Sesi Placeholder)
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                  Sesi Eksplorasi Masalah Tatap Muka
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Peserta membedah tantangan nyata dari tempat kerja menggunakan kerangka Design Thinking.
                </p>
              </div>
            </div>
          </MotionFadeIn>

          {/* Card 2: Artefak Output */}
          <MotionFadeIn direction="up" delay={0.1}>
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col shadow-xs group">
              <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                <img
                  src="/images/design-process-editorial.webp"
                  alt="Contoh Output Action Plan"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/70 text-white backdrop-blur-xs">
                  (Contoh Artefak Placeholder)
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                  Artefak Action Plan &amp; Opportunity Map
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Rumusan terstruktur yang memetakan prioritas implementasi AI 30-60-90 hari ke depan.
                </p>
              </div>
            </div>
          </MotionFadeIn>

          {/* Card 3: Team Collaboration */}
          <MotionFadeIn direction="up" delay={0.2}>
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col shadow-xs group">
              <div className="aspect-[4/3] overflow-hidden bg-slate-200 relative">
                <img
                  src="/images/professional-workshop-team.jpg"
                  alt="Kolaborasi Tim Eksekutif"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/70 text-white backdrop-blur-xs">
                  (Kolaborasi Tim Placeholder)
                </span>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                  Penyelarasan Visi Antar Pemimpin
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Diskusi mendalam menyelaraskan ekspektasi bisnis, kapabilitas tim, dan batas etis AI.
                </p>
              </div>
            </div>
          </MotionFadeIn>

        </div>

        {/* Testimonial Placeholder Box (Clearly marked) */}
        <MotionFadeIn direction="up" delay={0.25}>
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative">
            <Quote className="w-8 h-8 text-brand-500 shrink-0 opacity-40 mt-1" />
            <div className="space-y-2">
              <p className="text-xs sm:text-sm lg:text-base text-slate-700 italic leading-relaxed">
                &ldquo;Pendekatan Clevio sangat aplikatif. Kami tidak hanya berdiskusi soal hype teknologi, tapi benar-benar membedah mana masalah yang layak diselesaikan dan pulang dengan roadmap awal yang dapat dieksekusi bersama tim internal.&rdquo;
              </p>
              <div className="text-xs text-slate-500 font-semibold">
                &mdash; <span className="font-bold text-slate-800">Eksekutif Peserta Cohort</span> &middot; <span className="text-brand-700 font-medium">(Testimonial Terverifikasi Placeholder &middot; Belum Terpublikasi Resmi)</span>
              </div>
            </div>
          </div>
        </MotionFadeIn>

      </div>
    </SectionWrapper>
  );
};

