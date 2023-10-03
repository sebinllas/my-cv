import { type Project } from '@/types/Project';
import { ModalImage } from './ModalImage';
import { Modal } from './Modal';
import { Tooltip } from '@mui/material';

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project;
}

export const ProjectModal = ({ open, onClose, project }: ProjectModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='bg-white dark:bg-gray-900 p-10 flex flex-col gap-5 text-center'>
        <h2 className='text-primary text-xl font-bold'>{project.title}</h2>
        <p className='text-neutral-500 dark:text-neutral-300'>
          {project.description}
        </p>
        <div className='flex gap-3 justify-center text-3xl dark:text-neutral-100'>
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
    </Modal>
  );
};
