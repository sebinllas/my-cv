import React from 'react';
import { IconLink } from '@/components/ui/IconLink';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Github',
    icon: FaGithub,
    href: 'https://github.com/sebinllas',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedinIn,
    href: 'https://linkedin.com/in/sebinllas',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://instagram.com/sebinllas',
  },
];

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
