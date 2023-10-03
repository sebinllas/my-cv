import React, { useState } from 'react';
import { ColorPicker } from '@/components/ColorPicker';
import { IconCircle } from '@/components/IconCircle';
import { TbPalette, TbSunMoon } from 'react-icons/tb';
import { Modal } from './Modal';

export const ConfigColors = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <IconCircle icon={TbPalette} />
      </button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className='flex flex-col justify-center items-center p-10 gap-5 bg-white dark:bg-gray-900 dark:text-neutral-100'>
          <h2 className='font-bold text-center'>
            Select the accent
            <span className='text-primary'> color</span>
          </h2>
          <div className='flex gap-2'>
            <ColorPicker
              onChange={(color) => {
                document.documentElement.style.setProperty(
                  '--primary-color',
                  color
                );
              }}
            />
          </div>
          <h2 className='font-bold text-center'>Select theme</h2>
          <button
            onClick={() => {
              document.documentElement.classList.toggle('dark');
            }}
          >
            <span>
              <IconCircle icon={TbSunMoon} />
            </span>
          </button>
        </div>
      </Modal>
    </div>
  );
};
