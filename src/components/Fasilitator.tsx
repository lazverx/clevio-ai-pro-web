import React from 'react';
import { Award, Briefcase, GraduationCap, ArrowDown } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';

const credentials = [
  {
    category: 'Founder & Leadership Experience',
    description: 'Membangun dan memimpin Clevio sejak 2013, mendampingi pengembangan talenta inovasi dan kapabilitas digital di Indonesia.',
    icon: Briefcase,
  },
  {
    category: 'Innovation & Human-Centered Technology',
    description: 'Praktisi Design Thinking dan peneliti pemanfaatan kecerdasan buatan (AI) yang berpusat pada empati dan kebutuhan manusia.',
    icon: Award,
  },
  {
    category: 'Workshop & Facilitation Experience',
    description: 'Lebih dari 13 tahun memfasilitasi profesional, pendidik, dan pemimpin eksekutif dalam transformasi metode kerja dan adopsi teknologi.',
    icon: GraduationCap,
  },
];

export const Fasilitator: React.FC = () => {
  return (
    <SectionWrapper
      id="fasilitator"
      className="bg-[#FAFAF8] scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Left Column: ~35% Portrait (Photo enlarged) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <MotionFadeIn direction="up">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-[#F5EAE1] rounded-2xl scale-105 pointer-events-none -rotate-2"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm flex items-center justify-center bg-slate-100 border border-slate-200/80">
                <img
                  src="/images/aranggi-soemardjan.jpg"
                  alt="Aranggi Soemardjan - Founder Clevio"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </MotionFadeIn>
        </div>

        {/* Right Column: ~65% Information */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <MotionFadeIn direction="up" delay={0.1}>
            
            {/* Header Structure: FASILITATOR -> Aranggi Soemardjan -> Founder Clevio */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
                  FASILITATOR
                </span>
                <span className="w-5 sm:w-6 h-0.5 bg-slate-300"></span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display tracking-tight">
                Aranggi Soemardjan
              </h2>

              <p className="text-sm sm:text-base font-bold text-brand-700 font-display">
                Founder Clevio &middot; Praktisi inovasi dan teknologi
              </p>
            </div>

            {/* Narrative Bio */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              Praktisi, fasilitator, dan peneliti di bidang inovasi, kreativitas, Design Thinking, dan pemanfaatan AI untuk organisasi. Berpengalaman lebih dari 13 tahun mendampingi profesional dan pemimpin perusahaan dalam mengintegrasikan teknologi secara bijak, etis, dan berdampak nyata.
            </p>

            {/* 3 Credential Statements by Category */}
            <div className="space-y-3 pt-2">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div key={cred.category} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-200/60">
                    <Icon className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="text-xs font-bold text-slate-900 font-display block">
                        {cred.category}
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cred.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Link Anchor: Lihat detail workshop ↓ */}
            <div className="pt-2">
              <a
                href="#informasi-detail"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-700 hover:text-brand-900 transition-colors group"
              >
                <span>Lihat detail workshop</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

          </MotionFadeIn>
        </div>

      </div>
    </SectionWrapper>
  );
};
