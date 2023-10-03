import React from 'react';
import { ListDecoration } from './ListDecoration';
import { extraSkills } from '@/data/extraSkills';

export const ExtraSkills = () => {
  return (
    <ul className=''>
      {extraSkills.map((skill) => (
        <li className='flex gap-2 items-center' key={skill}>
          <ListDecoration />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
};
