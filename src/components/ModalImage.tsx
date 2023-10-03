import { Dialog } from '@mui/material';
import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';

export const ModalImage = ({
  src,
  alt,
  width,
  height,
  ...rest
}: ImageProps) => {
  const [open, setOpen] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...rest}
        onClick={() => {
          setOpen(true);
        }}
        className='cursor-zoom-in'
      />
      <Dialog
        sx={{
          '.MuiDialog-paper': {
            backgroundColor: 'transparent',
            overflow: 'visible',
          },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className='max-w-5xl flex justify-center items-center bg-black/80'>
          {loadingImage && (
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div
                className='animate-spin rounded-full h-32 w-32 border-8 border-solid border-t-transparent 
                border-primary'
              />
            </div>
          )}
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            className='grow'
            onLoad={() => {
              setLoadingImage(false);
            }}
          />
        </div>
      </Dialog>
    </div>
  );
};
