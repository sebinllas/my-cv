import React from 'react';
import { type IconType } from 'react-icons';

export const IconCircle = ({ icon }: { icon: IconType }) => {
  return (
    <div className='rounded-full w-12 h-12 bg-primary flex justify-center items-center'>
      {icon({ size: 28 })}
    </div>
  );
};
