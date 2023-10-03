import { type Skill } from '@/types/Skill';
import React from 'react';
import { Progress } from '@/components/Progress';

interface SkillSetProps {
  skills: Skill[];
  title: string;
}

export const SkillSet = ({ skills, title }: SkillSetProps) => {
  return (
    <div>
      <h3 className='font-bold text-lg mb-3'>{title}</h3>
      {skills.map((skill) => (
        <div className='mb-2' key={skill.name}>
          <div className='flex justify-between'>
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
          </div>
          <Progress percentage={skill.percentage} />
        </div>
      ))}
    </div>
  );
};
