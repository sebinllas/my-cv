import { type ReactNode } from 'react';

export interface EducationItem {
  name: string;
  institution: string;
  aptitude: string;
  date: string;
  details: ReactNode;
}
