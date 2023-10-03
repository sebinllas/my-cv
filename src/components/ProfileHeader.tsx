import Image from 'next/image';
import React from 'react';

export const ProfileHeader = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-3.5'>
      <div className='relative w-fit'>
        <Image
          src={'/images/profile.png'}
          width={380}
          height={380}
          alt={'Sebastián Suárez Ramírez'}
          className='w-40 h-40 rounded-full mb-3 bg-gray-100'
        />
        <span className='w-4 h-4 bg-emerald-500 absolute bottom-5 right-5 rounded-full' />
      </div>
      <h3 className='font-bold text-lg'>Sebastián Suárez Ramírez</h3>
      <p className='text-neutral-500 dark:text-neutral-300'>Frontend developer</p>
    </div>
  );
};
