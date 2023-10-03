import React from 'react';
import { SkillSet } from './ui/SkillSet';

const languages = [
  {
    name: 'Spanish',
    percentage: 100,
  },
  {
    name: 'English',
    percentage: 40,
  },
];

export const Languages = () => {
  return <SkillSet title='Languages' skills={languages} />;
};
