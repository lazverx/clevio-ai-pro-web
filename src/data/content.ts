import { NavItem, WorkshopStage, CompetencyItem, WorkshopMetric, FAQItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Program', href: '#program' },
  { label: 'Metode', href: '#metode' },
  { label: 'Kompetensi', href: '#kompetensi' },
  { label: 'Fasilitator', href: '#fasilitator' },
  { label: 'FAQ', href: '#faq' },
];

export const WORKSHOP_STAGES: WorkshopStage[] = [
  {
    step: 1,
    title: 'Pahami\nkonteks bisnis',
  },
  {
    step: 2,
    title: 'Rancang solusi dengan\nDesign Thinking + AI',
  },
  {
    step: 3,
    title: 'Validasi &\nsempurnakan rencana',
  },
];

export const COMPETENCIES: CompetencyItem[] = [
  {
    id: 'hots',
    title: 'HOTS',
    description: 'Berpikir kritis dan strategis.',
    icon: 'brain',
  },
  {
    id: 'design-thinking',
    title: 'Design Thinking',
    description: 'Merancang solusi yang relevan.',
    icon: 'layers',
  },
  {
    id: 'ai-literacy',
    title: 'Literasi AI',
    description: 'Memahami potensi, batasan, dan penerapan AI.',
    icon: 'bot',
  },
  {
    id: 'leadership',
    title: 'Kepemimpinan',
    description: 'Menggerakkan inovasi di tim.',
    icon: 'users',
  },
  {
    id: 'adaptability',
    title: 'Adaptabilitas',
    description: 'Lincah merespons perubahan.',
    icon: 'refresh',
  },
];

export const WORKSHOP_METRICS: WorkshopMetric[] = [
  {
    label: 'Durasi',
    value: '1 hari penuh',
    subtext: '(± 8 jam)',
    icon: 'calendar',
  },
  {
    label: 'Format',
    value: 'Tatap muka',
    subtext: '(In-person)',
    icon: 'users',
  },
  {
    label: 'Lokasi',
    value: 'Jakarta',
    subtext: '(konfirmasi jadwal)',
    icon: 'map-pin',
  },
  {
    label: 'Bahasa',
    value: 'Indonesia',
    subtext: '& Inggris',
    icon: 'globe',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Siapa yang paling cocok mengikuti workshop ini?',
    answer: 'Program ini dirancang khusus untuk C-Level, Director, Founder, General Manager, Head of Department, dan para profesional pengambil keputusan yang ingin mengadopsi AI secara strategis di organisasinya tanpa terjebak hype semata.',
  },
  {
    id: 'faq-2',
    question: 'Apakah peserta harus memiliki latar belakang teknis atau coding?',
    answer: 'Tidak sama sekali. Workshop difokuskan pada problem framing, pemahaman kapabilitas AI, identifikasi prioritas bisnis, dan penyusunan action plan implementasi nyata. Anda tidak perlu menulis kode program.',
  },
  {
    id: 'faq-3',
    question: 'Apa deliverables konkret yang dibawa pulang oleh peserta?',
    answer: 'Setiap peserta pulang dengan 3 output nyata: (1) Problem Statement terdefinisi, (2) AI Opportunity Map terprioritas untuk organisasinya, dan (3) Action Plan awal 30-60-90 hari yang realistis dan siap dieksekusi bersama tim internal.',
  },
  {
    id: 'faq-4',
    question: 'Bisakah Clevio menyelenggarakan in-house training khusus untuk korporasi kami?',
    answer: 'Tentu bisa. Kami menyediakan sesi In-House Corporate Workshop yang kurikulum dan studi kasusnya disesuaikan 100% dengan tantangan industri dan proses bisnis spesifik perusahaan Anda.',
  },
];

export const LINKS = {
  daftarWorkshop: 'https://docs.google.com/forms/d/e/1FAIpQLScTLClxHJTqTis0Rq7f8cRhor9hGSKAzsU7TSB0c7sIQeqo9Q/viewform',
  diskusiTim: 'https://wa.me/6281234567890?text=Halo%20tim%20Clevio,%20saya%20ingin%20berdiskusi%20mengenai%20program%20Clevio%20AI%20Pro%20untuk%20tim%20organisasi%20saya',
  whatsappDirect: 'https://wa.me/6281234567890',
  email: 'pro@clevio.co',
};

