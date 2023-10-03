import { programmingLanguages } from '@/data/programmingLanguages';
import { SkillSet } from '@/components/SkillSet';
import React from 'react';

export const ProgrammingLanguages = () => {
  return (
    <SkillSet title='Programming languages' skills={programmingLanguages} />
  );
};
