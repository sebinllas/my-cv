import React, { useState } from 'react';
import { ColorPicker } from '@/components/ColorPicker';
import { IconCircle } from '@/components/IconCircle';
import { TbPalette } from 'react-icons/tb';

export const ConfigAccentColor = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`rounded-full ${
        isOpen ? 'ring-2' : 'ring-0'
      } ring-gray-200 ring-offset-4`}
    >
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <IconCircle icon={TbPalette} />
      </button>
      <div
        className={`${
          isOpen ? 'visible' : 'hidden'
        } flex flex-col items-center gap-4 mt-4`}
      >
        {/* <h3 className='font-bold whitespace-break-spaces'>Choose a color:</h3> */}
        <ColorPicker
          onChange={(color) => {
            document.documentElement.style.setProperty(
              '--primary-color',
              color
            );
            setIsOpen(false);
          }}
        />
      </div>
    </div>
  );
};
