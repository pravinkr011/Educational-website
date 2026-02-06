
import { Notice, ServiceCard, Statistics } from './types';

export const COLORS = {
  govNavy: '#0a1f3a',
  govIvory: '#f8f9fa',
  govSaffron: '#ff9933',
  govGreen: '#138808',
  govSteel: '#6c757d',
};

export const NOTICES: Notice[] = [
  {
    id: '1',
    title: 'Revised Schedule for Board Examinations 2024',
    category: 'Examination',
    date: '28 Feb 2024',
    description: 'The examination schedule for Class X and XII has been updated due to local administrative requests.',
    url: '#'
  },
  {
    id: '2',
    title: 'Scholarship Applications for AY 2024-25 Open',
    category: 'Scholarship',
    date: '15 Feb 2024',
    description: 'Students from marginalized communities can now apply for the National Merit Scholarship.',
    url: '#'
  },
  {
    id: '3',
    title: 'Recruitment of 5000+ Primary School Teachers',
    category: 'Recruitment',
    date: '10 Feb 2024',
    description: 'Online applications are invited from eligible candidates for teaching positions across rural clusters.',
    url: '#'
  },
  {
    id: '4',
    title: 'National Curriculum Framework (NCF) 2024 Release',
    category: 'General',
    date: '05 Feb 2024',
    description: 'The updated NCF for school education is now available for public download and review.',
    url: '#'
  }
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'apply',
    title: 'Apply Online',
    description: 'Scholarships, Admissions, & Certifications',
    icon: 'FilePlus',
    actionText: 'Access →',
    accent: 'saffron'
  },
  {
    id: 'track',
    title: 'Track Status',
    description: 'Real-time application tracking system',
    icon: 'Activity',
    actionText: 'Track →',
    accent: 'green'
  },
  {
    id: 'admit',
    title: 'Download Admit Card',
    description: 'Examination hall tickets and schedules',
    icon: 'Download',
    actionText: 'Download →',
    accent: 'saffron'
  },
  {
    id: 'results',
    title: 'Results Portal',
    description: 'Check examination results and certificates',
    icon: 'Award',
    actionText: 'Check →',
    accent: 'green'
  }
];

export const STATS: Statistics[] = [
  { label: 'Registered Schools', value: '1,543,287' },
  { label: 'Student Enrollment', value: '264.3M' },
  { label: 'Applications Today', value: '18,472' },
  { label: 'Teacher Vacancies', value: '127,594' }
];
