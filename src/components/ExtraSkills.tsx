import React from 'react';
import { ListDecoration } from './icons/ListDecoration';

const extraSkills = [
  'HTML5 y CSS3',
  'Tailwind CSS',
  'Styled Components',
  'Git & GitHub',
  'GraphQL',
];

export const ExtraSkills = () => {
  return (
    <ul className='text-sm'>
      {extraSkills.map((skill) => (
        <li className='flex gap-2 items-center' key={skill}>
          <ListDecoration />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
};
