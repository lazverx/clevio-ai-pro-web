import React from 'react';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Globe, 
  BookOpen, 
  Layers, 
  Briefcase, 
  FileText, 
  CreditCard, 
  CheckCircle2 
} from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';

const details = [
  {
    label: 'Program',
    value: 'AI Thinking & Innovation Workshop',
    icon: BookOpen,
  },
  {
    label: 'Metode',
    value: 'Flipped Learning (materi pengantar mandiri + diskusi & eksplorasi tatap muka)',
    icon: Layers,
  },
  {
    label: 'Peserta',
    value: 'Pemimpin dan profesional pengambil keputusan (C-Level, Director, GM, Manager)',
    icon: Users,
  },
  {
    label: 'Persiapan',
    value: 'Membawa satu tantangan nyata organisasi sebagai bahan kerja utama workshop',
    icon: Briefcase,
  },
  {
    label: 'Durasi',
    value: '1 hari penuh (± 8 jam intensif)',
    icon: Calendar,
  },
  {
    label: 'Format',
    value: 'Tatap muka (In-person)',
    icon: CheckCircle2,
  },
  {
    label: 'Lokasi',
    value: 'Jakarta (venue resmi diumumkan saat konfirmasi pendaftaran)',
    icon: MapPin,
  },
  {
    label: 'Bahasa',
    value: 'Indonesia & Inggris',
    icon: Globe,
  },
  {
    label: 'Investasi',
    value: 'Hubungi tim kami untuk jadwal cohort publik terdekat atau paket corporate',
    icon: CreditCard,
  },
  {
    label: 'Administrasi',
    value: 'Invoice resmi PT Clevio Inovasi Indonesia, kelengkapan vendor, dan faktur pajak',
    icon: FileText,
  },
];

export const InformasiWorkshop: React.FC = () => {
  return (
    <SectionWrapper
      id="informasi-detail"
      className="bg-[#FAFAF8] border-y border-[#E8E8E2] scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        
        {/* Left Column: Heading & Executive Narrative */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
          <MotionFadeIn direction="up">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-display">
              INFORMASI WORKSHOP
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-950 tracking-tight leading-tight font-display mt-2">
              Praktis. Intensif. Berbasis tantangan nyata.
            </h2>
            <div className="w-10 sm:w-12 h-1 bg-slate-900 rounded-full mt-3"></div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-2">
              Dirancang khusus untuk para pengambil keputusan yang membutuhkan kerangka kerja implementatif, bukan ceramah teori konseptual. Setiap jam dirancang untuk menghasilkan output yang teruji dan siap dibawa pulang ke tempat kerja.
            </p>
          </MotionFadeIn>
        </div>

        {/* Right Column: Comprehensive Detail Panel */}
        <div className="lg:col-span-7">
          <MotionFadeIn direction="up" delay={0.1}>
            <div className="rounded-2xl border border-[#E8E8E2] bg-white p-5 sm:p-7 space-y-3.5 divide-y divide-[#E8E8E2] shadow-xs">
              {details.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`grid grid-cols-1 sm:grid-cols-12 gap-1.5 sm:gap-4 items-start ${
                      idx !== 0 ? 'pt-3.5' : ''
                    }`}
                  >
                    <div className="sm:col-span-4 flex items-center gap-2 text-slate-700">
                      <Icon className="w-4 h-4 text-slate-800 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900 font-display">
                        {item.label}
                      </span>
                    </div>
                    <div className="sm:col-span-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </MotionFadeIn>
        </div>

      </div>
    </SectionWrapper>
  );
};
