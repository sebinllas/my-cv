import React from 'react';

export const PersonalInfo = () => {
  return (
    <ul className='text-sm'>
      <li className='flex justify-between'>
        <span>Age:</span> <span>22</span>
      </li>
      <li className='flex justify-between'>
        <span>City:</span> <span>Medellín</span>
      </li>
      <li className='flex justify-between'>
        <span>Freelance:</span> <span className='text-primary'>Available</span>
      </li>
    </ul>
  );
};
