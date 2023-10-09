import { type Skill } from '@/types/Skill';
import React from 'react';
import { Progress } from './Progress';

interface SkillSetProps {
  skills: Skill[];
  title: string;
}

export const SkillSet = ({ skills, title }: SkillSetProps) => {
  return (
    <div>
      <h3 className='font-bold mb-1'>{title}</h3>
      {skills.map((skill) => (
        <div className='mb-1' key={skill.name}>
          <Progress name={skill.name} percentage={skill.percentage} />
        </div>
      ))}
    </div>
  );
};
