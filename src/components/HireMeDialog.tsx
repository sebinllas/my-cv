import { Dialog } from '@mui/material';
import React from 'react';
import { TbBrandWhatsapp } from 'react-icons/tb';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin-ext'] });

export const HireMeDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Dialog
      className={quicksand.className}
      sx={{
        '.MuiDialog-paper': {
          backgroundColor: 'transparent',
          overflow: 'visible',
          font: 'inherit',
        },
      }}
      open={open}
      onClose={onClose}
    >
      <div className='bg-white relative p-10 flex flex-col items-center gap-16 aspect-video w-full'>
        <h2 className='text-center text-6xl'>
          Thanks for your{' '}
          <span className='text-primary font-semibold'>interest </span>
        </h2>
        <a
          href='https://wa.me/573104719101'
          target='_blank'
          rel='noreferrer'
          className='animate-bounce cursor-pointer z-50 h-12 px-8 py-4 bg-primary rounded justify-center items-center gap-2.5 inline-flex font-semibold'
        >
          <TbBrandWhatsapp size={20} />
          Message me
        </a>
        <video
          autoPlay
          loop
          className='mix-blend-exclusion absolute top-0 left-0'
        >
          <source src='confetti.mp4' type='video/mp4' />
        </video>
      </div>
    </Dialog>
  );
};
