import { IconCard } from '@/components/IconCard';
import { WebDevelopmentIcon } from '@/components/icons/WebDevelopmentIcon';
import { WebApiIcon } from '@/components/icons/WebApiIcon';
import { DesktopPhoneIcon } from '@/components/icons/DesktopPhoneIcon';
import { WebAppIcon } from '@/components/icons/WebAppIcon';
import { InteractiveWebIcon } from './icons/InteractiveWebIcon';

export const KnowledgeList = () => {
  return (
    <div className='flex flex-wrap gap-5 justify-center'>
      <IconCard
        title='Web development'
        description='Development of modern, fast and secure web applications.'
        icon={<WebDevelopmentIcon />}
      />
      <IconCard
        title='APIs'
        description='Asynchronous requests for consuming data from REST and graphQL APIs.'
        icon={<WebApiIcon />}
      />
      <IconCard
        title='Interactivity'
        description='Interactive elements in the web to improve user experience.'
        icon={<InteractiveWebIcon />}
      />
      <IconCard
        title='Responsive Design'
        description='Websites adaptable to any screen sizes and devices.'
        icon={<DesktopPhoneIcon />}
      />
      <IconCard
        title='Web Standards and Best Practices'
        description='Up-to-date with web standards and best practices to ensure the best user experience.'
        icon={<WebAppIcon />}
      />
    </div>
  );
};
