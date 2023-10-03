import Image from 'next/image';
import { TbChevronRight } from 'react-icons/tb';

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
  actionText?: string;
  onActionClick?: () => void;
}

export const ImageCard = ({
  image,
  title,
  description,
  className,
  actionText,
  onActionClick,
}: ImageCardProps) => {
  return (
    <div className={`bg-white dark:bg-gray-900 ${className}`}>
      <Image src={image} alt={title} width={310} height={310} />
      <div className='p-6 flex flex-col gap-2 items-start'>
        <h3 className='font-bold text-lg'>{title}</h3>
        <p className='text-neutral-500 dark:text-neutral-300 line-clamp-3 text-ellipsis'>
          {description}
        </p>
        {actionText != null ? (
          <button
            onClick={onActionClick}
            type='button'
            className='text-primary font-bold flex items-center justify-center'
          >
            {actionText} <TbChevronRight />
          </button>
        ) : null}
      </div>
    </div>
  );
};
