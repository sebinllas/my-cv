import Link from 'next/link';
import React from 'react';
import { type IconLink as IconLinkType } from '@/types/IconLink';
import { IconCircle } from '@/components/ui/IconCircle';

type IconLinkProps = Exclude<IconLinkType, 'name'>;

export const IconLink = ({ icon, href }: IconLinkProps) => {
  return (
    <Link href={href} target='_blank'>
      <IconCircle icon={icon} />
    </Link>
  );
};
