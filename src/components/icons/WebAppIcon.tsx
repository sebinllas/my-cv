import { type SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

export const WebAppIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    data-name='Layer 1'
    viewBox='0 0 122.88 70.51'
    width='68px'
    aria-labelledby={titleId}
    {...props}
  >
    {title === undefined ? (
      <title id={titleId}>{'web-app'}</title>
    ) : title !== null ? (
      <title id={titleId}>{title}</title>
    ) : null}
    <path
      className='fill-primary'
      d='M15.67 0h91a2.18 2.18 0 0 1 2.17 2.17v61.17a2.18 2.18 0 0 1-1.63 2.1h13.16a2.54 2.54 0 0 1 2.51 2.56 2.54 2.54 0 0 1-2.54 2.53H2.54A2.54 2.54 0 0 1 0 68a2.54 2.54 0 0 1 2.54-2.54h12.59a2.18 2.18 0 0 1-1.63-2.1V2.17A2.18 2.18 0 0 1 15.67 0Zm42.2 66.39H65a1.22 1.22 0 0 1 1.22 1.21A1.22 1.22 0 0 1 65 68.82h-7.13a1.22 1.22 0 0 1-1.22-1.22 1.22 1.22 0 0 1 1.22-1.21Zm25.31-17.27a1.72 1.72 0 0 1-.46.25 1.57 1.57 0 0 1-.52.08 1.63 1.63 0 0 1-.58-.13 1.66 1.66 0 0 1-.52-.32l-3.9-4.11-1.86 3.46a4.41 4.41 0 0 1-.52.78 3.14 3.14 0 0 1-.63.59 1.77 1.77 0 0 1-2.74-.6 2.69 2.69 0 0 1-.28-.64c-1.86-6.74-4.62-13.56-6.51-20.31a1.16 1.16 0 0 1 1.45-1.43c6.08 1.82 13.83 5.31 20 7.66 1.9.73 2 2.5.44 3.68a4.56 4.56 0 0 1-.81.48c-1.18.51-2.38 1.12-3.56 1.66L86 44.33a1.39 1.39 0 0 1 .31.5 1.35 1.35 0 0 1 .09.56 1.58 1.58 0 0 1-.44 1 34.54 34.54 0 0 1-2.81 2.64Zm-1-1.54 2.33-2.2c-.83-.88-4.38-4.33-4.72-5.1a.89.89 0 0 1 .44-1.17c1.43-.6 3.28-1.46 4.66-2.18a3.17 3.17 0 0 0 .49-.28 2.2 2.2 0 0 0 .31-.29l.07-.11-.11-.08-.27-.12-18.62-7.18 6.11 19.05a1.26 1.26 0 0 0 .11.28l.07.11.11-.06a1.44 1.44 0 0 0 .31-.3 3.33 3.33 0 0 0 .3-.46c.76-1.42 1.67-3.37 2.52-4.66l.1-.11a.89.89 0 0 1 1.26 0l4.58 4.82ZM26.73 13.15H44A2.8 2.8 0 0 1 46.79 16v11A2.81 2.81 0 0 1 44 29.75H26.73a2.81 2.81 0 0 1-2.8-2.8V16a2.81 2.81 0 0 1 2.8-2.8Zm25.83 0h17.27a2.81 2.81 0 0 1 2.8 2.8v7.62c-1.78-.66-3.49-1.25-5.07-1.72h-.1a6.21 6.21 0 0 0-3.31 0 6.28 6.28 0 0 0-2.78 1.6 6.43 6.43 0 0 0-1.43 2.21 4.72 4.72 0 0 0-.18.53 6.33 6.33 0 0 0 0 3.32l.07.25h-7.27A2.81 2.81 0 0 1 49.77 27V16a2.8 2.8 0 0 1 2.79-2.8Zm25.83 0h17.27a2.81 2.81 0 0 1 2.8 2.8V27a2.81 2.81 0 0 1-2.8 2.8h-7.48l-.3-.12c-1.92-.75-4-1.61-6.22-2.5-2-.82-4-1.66-6.05-2.44V16a2.81 2.81 0 0 1 2.79-2.8ZM36.92 45.67c-.94 0-.94-3.46 0-3.46h27c.4 1.17.79 2.33 1.15 3.46Zm53.78-3.46h7.51c.93 0 .93 3.46 0 3.46H91.5v-.11a6.18 6.18 0 0 0-.07-1.2c0-.17-.06-.34-.11-.52a5.38 5.38 0 0 0-.21-.76 5.23 5.23 0 0 0-.41-.87Zm-65.84 3.46c-.92 0-.92-3.46 0-3.46h8.75c.93 0 .93 3.46 0 3.46Zm-.3-7.24c-.93 0-.93-3.47 0-3.47h8.75c.93 0 .93 3.47 0 3.47Zm12.36 0c-.94 0-.94-3.47 0-3.47h24.51c.38 1.17.77 2.32 1.17 3.47ZM92.57 35h5.64c.93 0 .93 3.47 0 3.47h-5.88a6.57 6.57 0 0 0 .3-3c0-.14 0-.28-.06-.42ZM105.4 9H17.21v53.2h88.19V9ZM27.92 3.5a1.31 1.31 0 1 1-1.31 1.31 1.31 1.31 0 0 1 1.31-1.31Zm-4.57 0A1.31 1.31 0 1 1 22 4.81a1.31 1.31 0 0 1 1.35-1.31Zm-4.58 0a1.31 1.31 0 1 1-1.31 1.31 1.31 1.31 0 0 1 1.31-1.31Z'
      style={{
        fillRule: 'evenodd',
      }}
    />
  </svg>
);
