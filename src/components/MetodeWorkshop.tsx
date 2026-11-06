import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';
import { BookOpen } from 'lucide-react';

const timelineSteps = [
  {
    step: '01',
    title: 'Pahami Konteks Bisnis',
    description: 'Identifikasi masalah, kebutuhan pengguna, dan tujuan bisnis organisasi secara mendalam.',
    output: 'Problem Statement',
  },
  {
    step: '02',
    title: 'Design Thinking + AI',
    description: 'Eksplorasi alternatif solusi berdasarkan kebutuhan manusia dan kemampuan terapan AI.',
    output: 'Opportunity Map',
  },
  {
    step: '03',
    title: 'Validasi & Rencana Aksi',
    description: 'Uji asumsi, tentukan prioritas implementasi, dan susun langkah kerja awal yang terukur.',
    output: 'Action Plan',
  },
];

export const MetodeWorkshop: React.FC = () => {
  return (
    <SectionWrapper
      id="metode"
      className="bg-[#F3F3EE] border-y border-[#E8E8E2] scroll-mt-20"
      eyebrow="METODE WORKSHOP"
      title="Dari konteks ke rencana aksi."
      subtitle="Pendekatan terstruktur memadukan empati manusia dan kapabilitas kecerdasan buatan untuk merumuskan inisiatif bernilai nyata."
    >
      <div className="pt-4 sm:pt-6 space-y-12">
        
        {/* Editorial Timeline: Desktop Horizontal / Mobile Vertical */}
        <div className="relative">
          
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-slate-200/90 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative z-10">
            {timelineSteps.map((item, idx) => (
              <MotionFadeIn key={item.step} direction="up" delay={idx * 0.1}>
                {/* Mobile: Vertical timeline with left indicator; Desktop: Clean column */}
                <div className="relative pl-6 md:pl-0 border-l-2 md:border-l-0 border-brand-500/80 md:border-transparent space-y-3">
                  
                  {/* Step Indicator */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-brand-700 text-brand-700 flex items-center justify-center font-extrabold text-base sm:text-lg font-display shadow-xs shrink-0 md:mb-2">
                      {item.step}
                    </div>
                    <span className="md:hidden text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                      Tahap {item.step}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 font-display leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* Output Chip */}
                  <div className="pt-1">
                    <span className="inline-flex items-center text-[11px] sm:text-xs font-bold px-3 py-1 rounded-md bg-white border border-[#E8E8E2] text-slate-800 shadow-2xs font-display">
                      Output: {item.output}
                    </span>
                  </div>

                </div>
              </MotionFadeIn>
            ))}
          </div>

        </div>

        {/* Flipped Learning Learning Format Notice */}
        <MotionFadeIn direction="up" delay={0.25}>
          <div className="rounded-xl border border-[#E8E8E2] bg-white p-5 sm:p-6 flex items-start gap-3.5 sm:gap-4 shadow-xs">
            <BookOpen className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs sm:text-sm leading-relaxed text-slate-700">
              <span className="font-extrabold text-slate-900 block font-display tracking-tight uppercase text-[11px] sm:text-xs text-slate-800">
                FORMAT PEMBELAJARAN: Flipped Learning &middot; 1 Hari Intensif
              </span>
              <p className="text-slate-600 font-normal">
                Materi pengantar dipelajari sebelum workshop. Waktu tatap muka difokuskan pada diskusi, eksplorasi, dan penerapan terhadap tantangan nyata.
              </p>
            </div>
          </div>
        </MotionFadeIn>

      </div>
    </SectionWrapper>
  );
};
