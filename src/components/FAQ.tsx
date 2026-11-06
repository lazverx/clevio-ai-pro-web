'use client';

import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion';
import { MotionFadeIn } from '@/components/ui/MotionFadeIn';

const faqItems = [
  {
    id: 'faq-1',
    question: '1. Apakah peserta perlu memahami AI secara teknis?',
    answer: 'Tidak sama sekali. Workshop difokuskan pada problem framing, pemahaman kapabilitas AI, identifikasi prioritas bisnis, dan penyusunan action plan implementasi nyata. Anda tidak perlu menulis kode atau memiliki latar belakang teknis informatika.',
  },
  {
    id: 'faq-2',
    question: '2. Siapa yang paling cocok mengikuti workshop?',
    answer: 'Program ini dirancang khusus untuk C-Level, Director, Founder, General Manager, Head of Department, dan para profesional pengambil keputusan yang ingin mengadopsi AI secara strategis di organisasinya tanpa terjebak hype semata.',
  },
  {
    id: 'faq-3',
    question: '3. Apa yang perlu dipersiapkan peserta?',
    answer: 'Peserta hanya perlu membawa satu tantangan nyata dari tempat kerja/organisasi sebagai studi kasus langsung selama sesi, serta mempelajari materi pengantar singkat (Flipped Learning) yang diberikan sebelum hari workshop.',
  },
  {
    id: 'faq-4',
    question: '4. Apa hasil konkret yang dibawa pulang?',
    answer: 'Setiap peserta pulang dengan 3 output nyata: (1) Problem Statement terdefinisi, (2) AI Opportunity Map terprioritas untuk organisasinya, dan (3) Action Plan awal 30-60-90 hari yang realistis dan siap dieksekusi bersama tim internal.',
  },
  {
    id: 'faq-5',
    question: '5. Apakah program tersedia untuk tim perusahaan?',
    answer: 'Ya, tentu. Kami menyediakan sesi In-House Corporate Workshop yang kurikulum, jadwal, dan studi kasusnya disesuaikan 100% dengan tantangan industri dan proses bisnis spesifik perusahaan Anda.',
  },
  {
    id: 'faq-6',
    question: '6. Bagaimana jadwal, biaya, dan proses pendaftaran?',
    answer: 'Jadwal cohort publik berikutnya diumumkan secara berkala melalui situs ini. Pendaftaran individu dilakukan via formulir registrasi online. Untuk sesi in-house corporate, jadwal dan penawaran investasi dapat dikonsultasikan langsung melalui WhatsApp kemitraan kami.',
  },
  {
    id: 'faq-7',
    question: '7. Bagaimana kerahasiaan tantangan bisnis yang dibawa peserta dijaga?',
    answer: 'Semua materi, data, dan diskusi studi kasus peserta dilindungi oleh prinsip kerahasiaan profesional dalam ruang workshop. Peserta dipersilakan melakukan penyamaran nama atau generalisasi data sensitif selama sesi berlangsung.',
  },
];

export const FAQ: React.FC = () => {
  return (
    <SectionWrapper
      id="faq"
      className="bg-[#FAFAF8] scroll-mt-20"
      eyebrow="FAQ"
      title="Pertanyaan yang sering diajukan."
      subtitle="Penjelasan langsung dan transparan mengenai pelaksanaan workshop Clevio AI Pro."
    >
      <div className="max-w-4xl mx-auto w-full pt-2">
        <MotionFadeIn direction="up">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map(item => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionFadeIn>
      </div>
    </SectionWrapper>
  );
};
