
export interface Notice {
  id: string;
  title: string;
  category: 'Examination' | 'Scholarship' | 'Recruitment' | 'General';
  date: string;
  description: string;
  url: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  actionText: string;
  accent: 'saffron' | 'green' | 'navy';
}

export interface Statistics {
  label: string;
  value: string;
  subValue?: string;
}

export type AccessibilityConfig = {
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
};
