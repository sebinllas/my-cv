import React from 'react';

interface SectionProps {
  title: string;
  description: string;
  content: React.ReactNode;
}

export const Section = ({ title, description, content }: SectionProps) => {
  return (
    <section className='flex flex-col items-center gap-8'>
      <h2 className='text-3xl font-bold'>{title}</h2>
      <p className='text-neutral-500 max-w-md text-center'>{description}</p>
      <div className='w-full'>{content}</div>
    </section>
  );
};
