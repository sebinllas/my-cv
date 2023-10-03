import { ConfigColors } from '@/components/ConfigColors';
import { EducationItemsList } from '@/components/EducationItemsList';
import { ExtraSkills } from '@/components/ExtraSkills';
import { Languages } from '@/components/Languages';
import { PersonalInfo } from '@/components/PersonalInfo';
import { PresentationSection } from '@/components/PresentationSection';
import { ProfileHeader } from '@/components/ProfileHeader';
import { ProgrammingLanguages } from '@/components/ProgrammingLanguages';
import { Section } from '@/components/Section';
import { SocialLinksList } from '@/components/SocialLinksList';
import { KnowledgeList } from '@/components/KnowledgeList';
import { ProjectsList } from '@/components/ProjectsList';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className='flex flex-wrap gap-10'>
      <div className='shrink-0'>
        <div className='sticky top-0 h-screen overflow-y-auto scrollbar divide-y divide-neutral-200 dark:divide-gray-800 p-4 flex flex-col [&>*]:py-4 bg-white dark:bg-gray-900'>
          <ProfileHeader />
          <PersonalInfo />
          <Languages />
          <ProgrammingLanguages />
          <ExtraSkills />
        </div>
      </div>
      <div className='basis-3/5 grow flex flex-col gap-10'>
        <PresentationSection />
        <Section
          title='Education'
          description='My education, the courses I have taken and the main achievements in my academic and skill-building journey.'
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
      <div className='basis-20 grow-0 shrink-0'>
        <div className='sticky top-0 h-screen overflow-y-auto scrollbar bg-white dark:bg-gray-900 p-4 flex flex-col items-center gap-4'>
          <ConfigColors />
          <h3 className='font-bold'>Links</h3>
          <SocialLinksList />
        </div>
      </div>
    </div>
  );
}
