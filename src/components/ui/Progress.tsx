import { ProgressBar } from './ProgressBar';

interface ProgressProps {
  name: string;
  percentage: number;
}

export const Progress = ({ name, percentage }: ProgressProps) => (
  <>
    <div className='flex justify-between text-sm'>
      <span>{name}</span>
      <span>{percentage}%</span>
    </div>
    <ProgressBar percentage={percentage} />
  </>
);
