import React from 'react';
import { ListDecoration } from './icons/ListDecoration';

const extraSkills = [
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Styled Components',
  'Material UI',
  'Git & GitHub',
  'GraphQL',
  'Figma',
];

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
