import React, { type SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

export const WebApiIcon = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    viewBox='0 0 122.88 91.26'
    width='68px'
    aria-labelledby={titleId}
    {...props}
  >
    {title !== null ? <title id={titleId}>{title}</title> : null}
    <path
      className='fill-primary'
      d='M8.32 0h106.24c4.58 0 8.32 3.74 8.32 8.32v74.62c0 4.57-3.74 8.32-8.32 8.32H8.32C3.74 91.26 0 87.51 0 82.94V8.32C0 3.74 3.74 0 8.32 0zM43.7 64.74H32.8l-1.57 5.14H21.4l11.73-31.16h10.54l11.68 31.16H45.26l-1.56-5.14zM41.67 58l-3.4-11.2L34.85 58h6.82zm17.48-19.28h16.02c3.49 0 6.1.83 7.84 2.49 1.73 1.66 2.6 4.03 2.6 7.09 0 3.15-.95 5.61-2.84 7.38-1.89 1.78-4.79 2.66-8.68 2.66h-5.28v11.53h-9.66V38.72zm9.66 13.31h2.37c1.87 0 3.18-.33 3.94-.97.75-.65 1.13-1.47 1.13-2.48 0-.98-.33-1.81-.99-2.49-.65-.68-1.89-1.02-3.7-1.02H68.8v6.96h.01zm23.01-13.31h9.66v31.16h-9.66V38.72zm26.15-15.43H5.29v60.46c0 .64.25 1.2.67 1.63.42.42.99.67 1.63.67h108.04c.64 0 1.2-.25 1.63-.67.43-.43.67-.99.67-1.63V23.29h.04zM106.64 9.35a4.11 4.11 0 1 1-4.11 4.11c.01-2.27 1.85-4.11 4.11-4.11zm-27.84 0a4.11 4.11 0 1 1 0 8.22 4.11 4.11 0 0 1 0-8.22zm13.92 0a4.11 4.11 0 1 1 0 8.22 4.11 4.11 0 0 1 0-8.22z'
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </svg>
);
