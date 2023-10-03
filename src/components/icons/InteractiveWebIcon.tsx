import * as React from 'react';
import { type SVGProps } from 'react';
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width='68px'
    viewBox='0 0 122.88 98.32'
    {...props}
  >
    <path
      className='fill-primary'
      d='M23.63 58.35v-.01c0-4.02 2.92-7.28 6.52-7.28 1.28 0 2.48.42 3.49 1.14v-.05c3.49 3.2 6.35 2.86 7.35-.53V40.39c0-1.26 1.03-2.3 2.3-2.3h10.36c1.57.54 2.12 1.23 2.14 2.04.01.37-.09.76-.27 1.18-.49 1.18-1.51 2.55-2.09 4.06-2.23 5.79 3.4 10.75 9.19 10.42 1.29-.07 2.56-.59 3.74-1.37 4.52-2.95 4.94-7.33 2.37-11.54-1.32-2.15-2.31-3.86.79-4.84l9.79.05c1.26.01 2.3 1.03 2.3 2.3v9.84c.59 4.64 3.71 5.52 7.64 1.93v.05c1.01-.72 2.21-1.14 3.49-1.14 3.6 0 6.52 3.26 6.52 7.28v.01c0 4.01-2.92 7.28-6.52 7.28-1.28 0-2.48-.42-3.49-1.14v.05c-3.93-3.6-7.06-2.72-7.64 1.93v9.84c0 1.26-1.03 2.3-2.3 2.3H69.06c-4.22-.74-4.91-3.78-1.44-7.56h-.05c.72-1.01 1.14-2.21 1.14-3.49 0-3.6-3.26-6.52-7.27-6.52s-7.28 2.92-7.28 6.52c0 1.28.42 2.48 1.14 3.49h-.2c3.47 3.79 2.77 6.83-1.45 7.56H43.3c-1.26 0-2.3-1.03-2.3-2.3V65.07c-1-3.39-3.86-3.72-7.35-.53v-.05c-1.01.72-2.21 1.14-3.49 1.14-3.61 0-6.53-3.26-6.53-7.28zM8.32 0h106.24c4.58 0 8.32 3.74 8.32 8.32V90c0 4.57-3.74 8.32-8.32 8.32H8.32C3.74 98.31 0 94.57 0 89.99V8.32C0 3.74 3.74 0 8.32 0zm108.99 23.29H5.95v66.85c0 .64.25 1.2.67 1.63.42.43.99.67 1.63.67h106.72c.64 0 1.2-.25 1.63-.67.43-.43.67-.99.67-1.63V23.29h.04zM106.64 9.35a4.11 4.11 0 1 1-4.11 4.11c.01-2.27 1.85-4.11 4.11-4.11zm-27.84 0a4.11 4.11 0 1 1 0 8.22 4.11 4.11 0 0 1 0-8.22zm13.92 0a4.11 4.11 0 1 1 0 8.22 4.11 4.11 0 0 1 0-8.22z'
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
      }}
    />
  </svg>
);
export { SvgComponent as InteractiveWebIcon };