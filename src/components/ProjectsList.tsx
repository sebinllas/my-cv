import React, { useState } from 'react';
import { ImageCard } from './ImageCard';
import {
  SiApollographql,
  SiGraphql,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';
import { TbBrandGithub, TbBrandVercel, TbWorldWww } from 'react-icons/tb';
import { ProjectModal } from './ProjectModal';
import { type Project } from '@/types/Project';

export const ProjectsList = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number>(0);
  return (
    <div className='flex gap-12 [&>*]:mx-auto max-h-screen overflow-x-scroll scrollbar max-w-full'>
      {projects.map((project, index) => (
        <ImageCard
          key={project.title}
          title={project.title}
          description={project.description}
          actionText='learn more'
          onActionClick={() => {
            setSelectedProject(index);
            setOpen(true);
          }}
          image={project.images[0]}
          className='grow-0 basis-72 shrink-0'
        />
      ))}
      <ProjectModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        project={projects[selectedProject]}
      />
    </div>
  );
};

const projects: Project[] = [
  {
    title: 'Tailwind generator',
    description:
      'A tool to generate tailwind classes for shadows and gradients.',
    images: [
      '/images/projects/tailwind-generator-1.png',
      '/images/projects/tailwind-generator-2.png',
      '/images/projects/tailwind-generator-3.png',
    ],
    technologies: [
      { icon: SiReact, name: 'React' },
      { icon: SiVite, name: 'Vite' },
      { icon: SiTypescript, name: 'Typescript' },
      { icon: SiTailwindcss, name: 'TailwindCSS' },
    ],
    links: [
      {
        title: 'Github',
        url: 'https://github.com/sebinllas/tailwind-generator',
        icon: TbBrandGithub,
      },
      {
        title: 'Deployed version',
        url: 'https://tailwind-generator-theta.vercel.app/',
        icon: TbBrandVercel,
      },
    ],
  },
  {
    title: 'Posts app',
    description:
      'A next.js app that show a list of posts from JSONPlaceholder.',
    images: [
      '/images/projects/posts-app-1.png',
      '/images/projects/posts-app-2.png',
      '/images/projects/posts-app-3.png',
    ],
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
    ],
    links: [
      {
        title: 'Deployed version',
        url: 'https://auco-technical-test.vercel.app/posts',
        icon: TbBrandVercel,
      },
      {
        title: 'Github',
        url: 'https://github.com/sebinllas/auco-technical-test',
        icon: TbBrandGithub,
      },
    ],
  },
  {
    title: 'Rick & Morty App',
    description: 'React app consuming the Rick & Morty GraphQL API.',
    technologies: [
      { icon: SiReact, name: 'React' },
      { icon: SiVite, name: 'Vite' },
      { icon: SiTypescript, name: 'Typescript' },
      { icon: SiGraphql, name: 'GraphQL' },
      { icon: SiApollographql, name: 'Apollo Client' },
      { icon: SiStyledcomponents, name: 'Styled components' },
      { icon: SiReactrouter, name: 'React Router' },
    ],
    images: [
      '/images/projects/rick-and-morty-1.png',
      '/images/projects/rick-and-morty-2.png',
      '/images/projects/rick-and-morty-3.png',
    ],
    links: [
      {
        title: 'Deployed version',
        url: 'https://rick-and-morty-app-two-flax.vercel.app/',
        icon: TbBrandVercel,
      },
      {
        title: 'Github',
        url: 'https://github.com/sebinllas/rick-and-morty-app',
        icon: TbBrandGithub,
      },
    ],
  },
  {
    title: 'Sistemas UdeA website',
    description:
      'Web site of the Software Engineering career of the Universidad de Antioquia, where I actively collaborated from my position as a programming assistant.',
    technologies: [
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'Typescript' },
      { icon: SiMui, name: 'Material UI' },
      { icon: SiTailwindcss, name: 'TailwindCSS' },
    ],
    images: [
      '/images/projects/sistemas-1.png',
      '/images/projects/sistemas-2.png',
      '/images/projects/sistemas-3.png',
    ],
    links: [
      {
        title: 'Deployed version',
        url: 'https://sistemas.udea.edu.co/',
        icon: TbWorldWww,
      },
    ],
  },
];
