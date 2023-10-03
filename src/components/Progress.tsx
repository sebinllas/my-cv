import React from 'react';

export const Progress = ({ percentage }: { percentage: number }) => {
  return (
    <div className='border border-primary rounded-full p-0.5'>
      <div
        className='bg-primary h-2 rounded-full'
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
