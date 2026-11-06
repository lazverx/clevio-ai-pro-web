'use client';

import React from 'react';
import { Calendar, Zap, Users, ArrowRight, Target, Compass, CheckSquare } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
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

export const Hero: React.FC = () => {
  return (
    <section
      id="program"
      className="snap-section relative min-h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-20 pb-0 overflow-hidden bg-[#FAFAF8] scroll-mt-20"
    >
      {/* Main Upper Hero Content */}
      <div className="container-executive flex-1 flex items-center py-4 sm:py-6 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Pure Typography & Dual CTAs */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 lg:space-y-5 hero-content">
            <MotionFadeIn direction="up">
              {/* Label tepat di atas headline: Cukup terbaca, bukan ornamen */}
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 sm:w-6 h-0.5 bg-slate-900 inline-block"></span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 font-display">
                  AI THINKING &amp; INNOVATION WORKSHOP &middot; 1 HARI
                </span>
              </div>

              {/* Headline Hero: Deep Bronze Accent */}
              <h1 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-slate-950 tracking-tight leading-[1.18] sm:leading-[1.14] font-display">
                Bawa masalah bisnis.<br />
                Pulang dengan<br />
                <span className="text-brand-600 font-extrabold">rencana AI.</span>
              </h1>
            </MotionFadeIn>

            <MotionFadeIn direction="up" delay={0.1}>
              {/* Subheading / Supporting Copy */}
              <p className="text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                Workshop intensif satu hari untuk pemimpin dan profesional. Temukan peluang AI yang relevan dan rancang langkah nyata untuk organisasi Anda.
              </p>
            </MotionFadeIn>

            <MotionFadeIn direction="up" delay={0.2}>
              {/* Dual Action Buttons: Daftar Workshop & Konsultasi untuk Tim */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-0.5">
                <Button
                  variant="primary"
                  size="md"
                  href={siteConfig.links.daftarWorkshop}
                  external
                >
                  <span>Daftar Workshop</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={siteConfig.links.konsultasiTim}
                  external
                >
                  Konsultasi untuk Tim
                </Button>
              </div>
            </MotionFadeIn>

            <MotionFadeIn direction="up" delay={0.25}>
              {/* Metadata Strip */}
              <div className="pt-2 sm:pt-3 border-t border-[#E8E8E2] flex flex-wrap items-center gap-y-1.5 gap-x-3 sm:gap-x-6 text-[10px] sm:text-xs lg:text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-800" />
                  <span>1 Hari</span>
                </div>
                <span className="text-[#D8D8D0]">|</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Zap className="w-3.5 h-3.5 text-slate-800" />
                  <span>Praktik Langsung</span>
                </div>
                <span className="text-[#D8D8D0]">|</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <Users className="w-3.5 h-3.5 text-slate-800" />
                  <span>Untuk Pemimpin &amp; Profesional</span>
                </div>
              </div>
            </MotionFadeIn>

          </div>

          {/* Right Column: Visual Arched Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end hero-visual">
            <MotionFadeIn direction="up" delay={0.2}>
              <div className="relative w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[320px]">
                <div className="absolute -inset-2 bg-gradient-to-tr from-brand-300/30 to-brand-500/20 rounded-[190px] blur-xl opacity-70"></div>
                
                <div className="relative hero-arch-mask overflow-hidden border-2 sm:border-4 border-white shadow-xl bg-slate-100 aspect-[4/4.5]">
                  <img
                    src="/images/leadership-editorial.webp"
                    alt="Clevio AI Pro Leadership Workshop"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </MotionFadeIn>
          </div>

        </div>
      </div>

      {/* Grounding Strip: Output Workshop / Yang Anda Bawa Pulang United at Hero Base */}
      <div className="w-full border-t border-[#E8E8E2] bg-[#F3F3EE] py-3 sm:py-3.5 relative z-10 shrink-0">
        <div className="container-executive">
          <MotionFadeIn direction="up" delay={0.3}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 sm:gap-4 lg:gap-8">
              
              {/* Left Header / Eyebrow Badge */}
              <div className="lg:w-1/4 shrink-0 space-y-0.5">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 font-display">
                  OUTPUT WORKSHOP
                </span>
                <h3 className="text-xs sm:text-base font-extrabold text-slate-950 font-display">
                  Yang Anda Bawa Pulang
                </h3>
              </div>

              {/* 3 Horizontal Deliverable Items */}
              <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#E8E8E2] pt-1 lg:pt-0">
                {deliverables.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.num}
                      className={`space-y-0.5 ${idx !== 0 ? 'pt-2 md:pt-0 md:pl-5' : ''}`}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-xs font-extrabold text-zinc-500 font-display">
                          {item.num}
                        </span>
                        <Icon className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                        <span className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
};
