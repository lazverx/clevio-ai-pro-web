import React from 'react';
import { Calendar, MapPin, Users, Building, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/Button';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';

export const JadwalInvestasi: React.FC = () => {
  return (
    <SectionWrapper
      id="jadwal"
      className="bg-[#F3F3EE] border-y border-[#E8E8E2] scroll-mt-20"
      eyebrow="JADWAL &amp; INVESTASI"
      title="Pilihan jalur partisipasi sesuai kebutuhan Anda."
      subtitle="Pilih cohort publik untuk partisipasi individual atau rancang program in-house eksklusif untuk tim pengambil keputusan di organisasi Anda."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch pt-2">
        
        {/* Panel 1: Public Workshop */}
        <MotionFadeIn direction="up">
          <div className="h-full rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F3F3EE] text-slate-800 border border-[#E8E8E2] font-display">
                  <Users className="w-3.5 h-3.5 text-slate-800" />
                  Public Workshop
                </span>
                <span className="text-xs text-slate-500 font-semibold">Partisipasi Individu</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
                  Cohort Terbuka Eksekutif
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Ideal bagi Founder, C-Level, Director, dan Manager yang ingin membangun kerangka pikir AI bersama rekan lintas industri.
                </p>
              </div>

              {/* Detail Points */}
              <div className="space-y-3 pt-2 border-t border-[#E8E8E2] text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <Calendar className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Jadwal:</span>
                    <span className="text-slate-600">Jadwal cohort berikutnya akan segera diumumkan.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Clock className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Durasi:</span>
                    <span className="text-slate-600">1 Hari Penuh (&plusmn; 8 jam intensif tatap muka).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Lokasi:</span>
                    <span className="text-slate-600">Jakarta Selatan (Venue hotel/meeting center diumumkan saat konfirmasi pendaftaran).</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Investasi:</span>
                    <span className="text-slate-900 font-semibold">Harga cohort resmi akan diumumkan (Early bird tersedia).</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-[#E8E8E2]">
              <Button
                variant="primary"
                size="md"
                href={siteConfig.links.daftarWorkshop}
                external
                className="w-full text-center"
              >
                <span>Daftar Workshop</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </MotionFadeIn>

        {/* Panel 2: Corporate In-house */}
        <MotionFadeIn direction="up" delay={0.15}>
          <div className="h-full rounded-2xl bg-white border border-[#E8E8E2] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F3F3EE] text-slate-800 border border-[#E8E8E2] font-display">
                  <Building className="w-3.5 h-3.5 text-slate-800" />
                  Corporate In-house
                </span>
                <span className="text-xs text-slate-500 font-semibold">Eksklusif Organisasi</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 font-display">
                  Program Khusus Tim Perusahaan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Disesuaikan dengan tantangan spesifik unit bisnis dan peta jalan transformasi AI internal organisasi Anda.
                </p>
              </div>

              {/* Detail Points */}
              <div className="space-y-3 pt-2 border-t border-[#E8E8E2] text-xs sm:text-sm">
                <div className="flex items-start gap-3 text-slate-700">
                  <Calendar className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Jadwal:</span>
                    <span className="text-slate-600">Jadwal fleksibel disepakati bersama manajemen perusahaan Anda.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <Clock className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Format:</span>
                    <span className="text-slate-600">1-2 hari intensif disesuaikan dengan lingkup studi kasus tim.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Lokasi:</span>
                    <span className="text-slate-600">In-house di kantor Anda atau venue khusus di Jakarta / kota pilihan.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-slate-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Investasi &amp; Administrasi:</span>
                    <span className="text-slate-900 font-semibold">Proposal dan penawaran resmi disesuaikan (mendukung invoice korporat).</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-6 border-t border-[#E8E8E2]">
              <Button
                variant="secondary"
                size="md"
                href={siteConfig.links.konsultasiTim}
                external
                className="w-full text-center"
              >
                Konsultasikan untuk Tim
              </Button>
            </div>
          </div>
        </MotionFadeIn>

      </div>
    </SectionWrapper>
  );
};
