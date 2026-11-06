export interface NavItem {
  label: string;
  href: string;
}

export interface WorkshopStage {
  step: number;
  title: string;
  description?: string;
}

export interface CompetencyItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkshopMetric {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

