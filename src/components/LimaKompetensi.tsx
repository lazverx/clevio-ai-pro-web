import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';

const competencies = [
  {
    num: '01',
    title: 'Berpikir Kritis & Strategis',
    description: 'Menilai peluang AI berdasarkan masalah riil, nilai bisnis terukur, dan mitigasi risiko.',
  },
  {
    num: '02',
    title: 'Empati & Kebutuhan Manusia',
    description: 'Memahami kebutuhan pengguna dan tim secara empatik sebelum menentukan solusi teknologi.',
  },
  {
    num: '03',
    title: 'Literasi AI',
    description: 'Mengevaluasi kapabilitas, batasan, etika, dan potensi penerapan AI secara realistis.',
  },
  {
    num: '04',
    title: 'Kepemimpinan',
    description: 'Menghubungkan keputusan teknologi dengan visi jangka panjang dan arah strategis organisasi.',
  },
  {
    num: '05',
    title: 'Adaptabilitas',
    description: 'Menguji pendekatan baru secara lincah dan menyesuaikan keputusan berdasarkan pembelajaran.',
  },
];

export const LimaKompetensi: React.FC = () => {
  return (
    <SectionWrapper
      id="kompetensi"
      dark
      className="bg-[#0F0D0B] scroll-mt-20"
    >
      {/* Background Concentric Arcs */}
      <div className="wave-arcs"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        
        {/* Left Column: Title */}
        <div className="lg:col-span-5 space-y-3 sm:space-y-4">
          <MotionFadeIn direction="up">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-400 font-display">
              HASIL PEMBELAJARAN
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-tight font-display text-white mt-2">
              Lima kompetensi untuk memimpin di era AI.
            </h2>
            <div className="w-10 sm:w-12 h-1 bg-brand-500 rounded-full mt-3"></div>
            <p className="text-xs sm:text-sm lg:text-base text-stone-300 leading-relaxed pt-1 sm:pt-2">
              Kombinasi pola pikir kritis dan keterampilan inovasi terapan yang dibutuhkan setiap pengambil keputusan modern.
            </p>
          </MotionFadeIn>
        </div>

        {/* Vertical Dividing Rule */}
        <div className="hidden lg:block lg:col-span-1 flex justify-center">
          <div className="w-px h-80 bg-[#27211C]"></div>
        </div>

        {/* Right Column: Editorial List with Number, Title, Description, Divider & Subtle Hover */}
        <div className="lg:col-span-6 space-y-1">
          {competencies.map((comp, idx) => (
            <MotionFadeIn key={comp.num} direction="up" delay={idx * 0.08}>
              <div
                className={`group py-3.5 sm:py-4 px-3 sm:px-4 rounded-xl hover:bg-white/[0.04] transition-all duration-200 ${
                  idx < competencies.length - 1 ? 'border-b border-[#27211C]' : ''
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Number */}
                  <span className="text-sm sm:text-base font-extrabold text-brand-400 font-display shrink-0 mt-0.5 group-hover:text-brand-300 transition-colors">
                    {comp.num}
                  </span>

                  {/* Title & Description */}
                  <div className="space-y-1 flex-1">
                    <h3 className="text-sm sm:text-base font-bold text-white font-display group-hover:text-brand-200 transition-colors leading-snug">
                      {comp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                      {comp.description}
                    </p>
                  </div>
                </div>
              </div>
            </MotionFadeIn>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
};
