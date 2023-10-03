import { type IconType } from 'react-icons';

export interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: Array<{
    name: string;
    icon: IconType;
  }>;
  links: Array<{
    title: string;
    url: string;
    icon: IconType;
  }>;
}
