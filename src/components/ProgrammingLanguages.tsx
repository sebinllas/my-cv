import { SkillSet } from '@/components/ui/SkillSet';
import React from 'react';

const programmingLanguages = [
  {
    name: 'JavaScript / TypeScript',
    percentage: 85,
  },
  {
    name: 'Python',
    percentage: 70,
  },
  {
    name: 'Java',
    percentage: 60,
  },
];

export const ProgrammingLanguages = () => {
  return (
    <SkillSet title='Programming languages' skills={programmingLanguages} />
  );
};
