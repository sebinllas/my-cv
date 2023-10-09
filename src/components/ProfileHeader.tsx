import React from 'react';
import Image from 'next/image';

export const ProfileHeader = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-1'>
      <div className='relative w-fit'>
        <Image
          src={'/images/profile.png'}
          width={380}
          height={380}
          alt={'Sebastián Suárez Ramírez'}
          className='sm:w-28 sm:h-28 w-32 h-32 rounded-full mb-1 bg-gray-100'
        />
      </div>
      <h3 className='font-bold'>Sebastián Suárez Ramírez</h3>
      <p className='text-neutral-500 dark:text-neutral-300 text-sm'>
        Frontend developer
      </p>
    </div>
  );
};
