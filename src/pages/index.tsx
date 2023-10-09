import { ConfigColors } from '@/components/ConfigColors';
import { EducationItemsList } from '@/components/EducationItemsList';
import { ExtraSkills } from '@/components/ExtraSkills';
import { Languages } from '@/components/Languages';
import { PersonalInfo } from '@/components/PersonalInfo';
import { PresentationSection } from '@/components/PresentationSection';
import { ProfileHeader } from '@/components/ProfileHeader';
import { ProgrammingLanguages } from '@/components/ProgrammingLanguages';
import { Section } from '@/components/ui/Section';
import { SocialLinksList } from '@/components/SocialLinksList';
import { KnowledgeList } from '@/components/KnowledgeList';
import { ProjectsList } from '@/components/ProjectsList';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className='grid grid-cols-6 lg:grid-cols-12 gap-12 auto-rows-min'>
      <div className=' col-span-6 sm:col-span-2 lg:col-span-3 row-span-full sm:row-end-3'>
        <div
          className='sm:sticky top-0 sm:h-screen overflow-y-auto scrollbar divide-y divide-neutral-200 
          dark:divide-gray-800 p-4 flex flex-col [&>*]:py-4 bg-white dark:bg-gray-900'
        >
          <ProfileHeader />
          <PersonalInfo />
          <Languages />
          <ProgrammingLanguages />
          <ExtraSkills />
        </div>
      </div>
      <div className='col-span-full sm:col-span-4 lg:col-span-9 xl:col-span-8 flex flex-col gap-12 mt-12 sm:mt-0'>
        <PresentationSection />
        <Section
          title='Education'
          description='My education, the courses I have taken and the main achievements in my academic and 
          skill-building journey.'
          content={<EducationItemsList />}
        />
        <Section
          title='My knowledge'
          description='My knowledge and the skills I have gained in web development.'
          content={<KnowledgeList />}
        />
        <Section
          title='Portfolio'
          description='Academic, work and personal projects I have worked on.'
          content={<ProjectsList />}
        />
        <Footer />
      </div>
      <div
        className='col-span-full sm:col-start-3 sm:col-span-4 lg:col-span-9 lg:col-start-4 
        xl:col-span-1 xl:row-start-1 xl:row-end-3 xl:col-end-13'
      >
        <div
          className='xl:sticky top-0 xl:h-screen overflow-y-auto scrollbar bg-white 
        dark:bg-gray-900 p-4 flex xl:flex-col items-center gap-4 justify-center xl:justify-start'
        >
          <ConfigColors />
          <h3 className='font-bold hidden xl:block'>Links</h3>
          <SocialLinksList />
        </div>
      </div>
    </div>
  );
}
