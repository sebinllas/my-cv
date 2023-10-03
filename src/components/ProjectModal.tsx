import { type Project } from '@/types/Project';
import { Dialog, Tooltip } from '@mui/material';
import { Quicksand } from 'next/font/google';
import { ModalImage } from './ModalImage';

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project;
}

const quicksand = Quicksand({ subsets: ['latin-ext'] });

export const ProjectModal = ({ open, onClose, project }: ProjectModalProps) => {
  return (
    <Dialog
      className={quicksand.className}
      sx={{
        '.MuiDialog-paper': {
          backgroundColor: 'transparent',
          overflow: 'visible',
        },
      }}
      open={open}
      onClose={onClose}
    >
      <div className='bg-white p-10 flex flex-col gap-5 text-center'>
        <h2 className='text-primary text-xl font-bold'>{project.title}</h2>
        <p className='text-neutral-500'>{project.description}</p>
        <div className='flex gap-3 justify-center text-3xl'>
          {project.technologies.map((technology) => (
            <Tooltip key={technology.name} title={technology.name} arrow>
              <div>
                <technology.icon />
              </div>
            </Tooltip>
          ))}
        </div>
        <div className='flex gap-4 overflow-x-auto scrollbar snap-x'>
          {project.images.map((image) => (
            <ModalImage
              className='snap-center mx-auto'
              key={image}
              src={image}
              width={200}
              height={200}
              alt={''}
            />
          ))}
        </div>
        <div className='flex gap-3 justify-center font-bold mt-5'>
          {project.links.map((link) => (
            <span
              key={link.title}
              className='flex gap-2 items-center bg-primary text-white px-2'
            >
              <link.icon />
              <a href={link.url} target='_blank' rel='noreferrer'>
                {link.title}
              </a>
            </span>
          ))}
        </div>
      </div>
    </Dialog>
  );
};
