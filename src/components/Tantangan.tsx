import React from 'react';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';
import { Target, Users, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    num: '01',
    title: 'Kebutuhan Manusia & Alur Kerja',
    desc: 'Memetakan friksi kerja riil organisasi sebelum terburu-buru memilih teknologi AI.',
  },
  {
    icon: TrendingUp,
    num: '02',
    title: 'Relevansi & Dampak Nyata',
    desc: 'Menyeleksi peluang yang membawa nilai bisnis terukur, bukan sekadar mencoba alat baru.',
  },
  {
    icon: Users,
    num: '03',
    title: 'Rencana Aksi Tim yang Realistis',
    desc: 'Menghubungkan eksplorasi dengan roadmap implementasi teruji yang siap dieksekusi tim.',
  },
];

export const Tantangan: React.FC = () => {
  return (
    <section
      id="why-clevio"
      className="snap-section relative min-h-screen flex flex-col justify-center bg-[#FAFAF8] py-14 sm:py-20 lg:py-0 border-y border-[#E8E8E2] scroll-mt-20 overflow-hidden"
    >
      <div className="container-executive">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Headline, Supporting Copy, and Value Pillars */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <MotionFadeIn direction="up">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 sm:w-6 h-0.5 bg-slate-900 inline-block"></span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 font-display">
                  MENGAPA CLEVIO AI PRO
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold text-slate-950 tracking-tight leading-[1.2] font-display">
                Masalahnya bukan kekurangan AI tools.<br className="hidden sm:inline" />{' '}
                <span className="text-brand-600 font-bold">
                  Masalahnya menentukan apa yang layak diselesaikan dengan AI.
                </span>
              </h2>
            </MotionFadeIn>

            <MotionFadeIn direction="up" delay={0.1}>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Banyak organisasi mulai mengadopsi AI sebelum memahami masalah yang ingin diselesaikan. Clevio AI Pro membantu pemimpin menilai kebutuhan manusia, relevansi teknologi, dan prioritas bisnis sebelum menentukan langkah implementasi.
              </p>
            </MotionFadeIn>

            {/* 3 Executive Pillars so the section is rich and meaningful */}
            <MotionFadeIn direction="up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8E8E2]">
                {pillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.num} className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-zinc-500 font-display">
                          {item.num}
                        </span>
                        <Icon className="w-4 h-4 text-slate-800" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </MotionFadeIn>
          </div>

          {/* Right Column: 1 Executive Editorial Placeholder Image */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <MotionFadeIn direction="up" delay={0.25}>
              <div className="relative group">
                {/* Subtle Warm Bronze Glow Backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-brand-500/15 to-brand-700/15 rounded-3xl blur-lg opacity-60"></div>
                
                {/* Image Container with Editorial Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E8E2] bg-white shadow-md">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                    <img
                      src="/images/workplace-change-editorial.webp"
                      alt="[Placeholder Foto: Diskusi Strategis Bisnis & AI]"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Placeholder Badge Indicator */}
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                      <span className="text-[10px] font-semibold text-white tracking-wide">
                        Placeholder Foto &middot; Diskusi Strategis
                      </span>
                    </div>
                  </div>
                  
                  {/* Photo Caption */}
                  <div className="p-3.5 sm:p-4 bg-white border-t border-[#E8E8E2]">
                    <p className="text-xs text-slate-600 leading-snug">
                      <strong className="font-semibold text-slate-900 font-display">Sesi Berbasis Masalah:</strong> Peserta membawa satu tantangan nyata untuk dibedah kelayakan solusinya bersama AI.
                    </p>
                  </div>
                </div>
              </div>
            </MotionFadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
