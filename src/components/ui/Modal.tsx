import { Dialog } from '@mui/material';
import { type ReactNode } from 'react';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ['latin-ext'] });

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ children, open, onClose }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={quicksand.className}
      sx={{
        '.MuiDialog-paper': {
          backgroundColor: 'transparent',
          overflow: 'visible',
        },
      }}
    >
      {children}
    </Dialog>
  );
};
