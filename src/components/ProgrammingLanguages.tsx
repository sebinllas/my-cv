import { SkillSet } from '@/components/ui/SkillSet';
import React from 'react';

const programmingLanguages = [
  {
    name: 'JavaScript',
    percentage: 90,
  },
  {
    name: 'TypeScript',
    percentage: 80,
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
