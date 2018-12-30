import React from 'react';
import NextLink from 'next/link';

export const Link = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <a {...props}>{children}</a>
  </NextLink>
);
