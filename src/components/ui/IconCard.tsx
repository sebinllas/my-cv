import { type ReactNode } from 'react';

interface IconCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const IconCard = ({ title, description, icon }: IconCardProps) => {
  return (
    <div className='flex flex-col items-center bg-white dark:bg-gray-900 grow shrink-0 basis-72 p-7 gap-4'>
      {icon}
      <h3 className='font-bold text-lg mt-3'>{title}</h3>
      <p className='text-neutral-500 dark:text-neutral-300 text-center'>
        {description}
      </p>
    </div>
  );
};
