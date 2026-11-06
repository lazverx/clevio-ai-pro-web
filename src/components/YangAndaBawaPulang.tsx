import React from 'react';
import { Target, Compass, CheckSquare } from 'lucide-react';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';

const deliverables = [
  {
    num: '01',
    title: 'Problem Framing',
    description: 'Rumusan masalah bisnis yang jelas dan terdefinisi.',
    icon: Target,
  },
  {
    num: '02',
    title: 'AI Opportunity Map',
    description: 'Peta peluang AI yang diprioritaskan berdasarkan nilai bisnis.',
    icon: Compass,
  },
  {
    num: '03',
    title: 'Action Plan Awal',
    description: 'Langkah awal realistis yang siap ditindaklanjuti tim internal.',
    icon: CheckSquare,
  },
];

export const YangAndaBawaPulang: React.FC = () => {
  return (
    <section id="deliverables" className="border-y border-slate-200/80 bg-slate-50/70 py-6 sm:py-7 lg:py-6 relative z-10 scroll-mt-20">
      <div className="container-executive">
        <MotionFadeIn direction="up">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            
            {/* Left Header / Eyebrow Badge */}
            <div className="lg:w-1/4 shrink-0 space-y-1">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-700 font-display">
                OUTPUT WORKSHOP
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-slate-950 font-display">
                Yang Anda Bawa Pulang
              </h3>
            </div>

            {/* 3 Horizontal Deliverable Items */}
            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 pt-2 lg:pt-0">
              {deliverables.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className={`space-y-1.5 ${idx !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-brand-600 font-display">
                        {item.num}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-brand-600" />
                      <span className="text-sm font-bold text-slate-900 font-display">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
};

