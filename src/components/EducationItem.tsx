import { type EducationItem as EducationItemType } from '@/types/EducationItem';

interface EducationItemProps extends EducationItemType {}
export const EducationItem = ({
  name,
  institution,
  aptitude,
  date,
  details,
}: EducationItemProps) => {
  return (
    <div className='flex gap-4 py-6'>
      <div className='min-w-[200px] flex flex-col justify-center items-start gap-4 grow'>
        <h3 className='font-semibold text-xl'>{institution}</h3>
        <div className='flex gap-3 items-center'>
          {aptitude != null && (
            <span className='grow-0 max-w-min'>{aptitude}</span>
          )}
          <span className='bg-primary text-xs text-white px-2 grow-0'>
            {date}
          </span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-start gap-4 basis-3/5 grow-0 shrink'>
        <h2 className='font-semibold text-xl'>{name}</h2>
        <div className='text-neutral-500'>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};
