import Image from 'next/image';
import React, { useState } from 'react';
import { TbArrowRight } from 'react-icons/tb';
import { HireMeDialog } from './HireMeDialog';

export const PresentationSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='px-14 pb-0 bg-white flex items-center gap-6'>
      <div className='flex flex-col gap-6 items-start '>
        <h1 className='text-4xl font-bold'>
          I&rsquo;m Sebastián Suárez{' '}
          <span className='text-primary'>Front-end</span> Developer
        </h1>
        <p className='text-neutral-500'>
          I am a software engineering student specialized in web development.
          Throughout my career as a student and working at my university as a
          programming assistant, I have gained experience developing personal,
          academic and work projects, which has allowed me to strengthen my
          skills in frontend technologies.
        </p>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className='h-12 px-8 py-4 bg-primary rounded justify-center items-center gap-2.5 inline-flex font-semibold'
        >
          HIRE ME
          <TbArrowRight size={20} />
        </button>
      </div>
      <Image
        src={'/images/presentation-image.png'}
        width={326}
        height={459}
        alt={'Sebastián Suárez'}
      />
      <HireMeDialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
