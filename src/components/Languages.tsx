import React from 'react';
import { SkillSet } from './SkillSet';
import { languages } from '@/data/languages';

export const Languages = () => {
  return <SkillSet title='Languages' skills={languages} />;
};
