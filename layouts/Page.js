import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { DefaultMeta } from './DefaultMeta';

export const Page = ({ className, children }) => (
  <div id="app">
    <DefaultMeta />
    <Header />
    <main id="main">
      <div className={className}>{children}</div>
    </main>
    <Footer />
  </div>
);
