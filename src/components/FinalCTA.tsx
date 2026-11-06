import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';

export const FinalCTA: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#FAFAF8]">
      <MotionFadeIn direction="up">
        <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-[#111110] text-white rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl border border-slate-800">
          
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Headline Left */}
            <div className="lg:col-span-7 space-y-2 sm:space-y-3">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug font-display text-white">
                Bawa satu tantangan nyata. Mulai susun arah AI untuk organisasi Anda.
              </h2>
              <p className="text-xs sm:text-base text-slate-300 font-normal">
                Daftar pada workshop publik atau diskusikan program khusus untuk tim perusahaan Anda.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center">
              <div className="w-px h-20 bg-white/20 mx-auto"></div>
            </div>

            {/* Actions Right: Daftar Workshop & Konsultasikan untuk Tim */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                href={siteConfig.links.daftarWorkshop}
                external
                className="bg-white text-slate-950 hover:bg-slate-100 shadow-lg justify-center border-0 font-extrabold"
              >
                <span>Daftar Workshop</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={siteConfig.links.konsultasiTim}
                external
                className="justify-center border-white/40 hover:bg-white/10 text-white"
              >
                Konsultasikan untuk Tim
              </Button>
            </div>

          </div>

        </div>
      </MotionFadeIn>
    </SectionWrapper>
  );
};
