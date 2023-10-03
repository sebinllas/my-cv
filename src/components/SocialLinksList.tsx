import React from 'react';
import { IconLink } from '@/components/IconLink';
import { socialLinks } from '@/data/socialLinks';

export const SocialLinksList = () => {
  return socialLinks.map((socialLink) => {
    return (
      <IconLink
        key={socialLink.name}
        icon={socialLink.icon}
        href={socialLink.href}
        name={socialLink.name}
      />
    );
  });
};
