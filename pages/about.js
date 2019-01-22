import React from 'react';
import Head from 'next/head';

import { Page } from '../layouts';

import './about.scss';

const About = () => (
  <Page className="about">
    <Head>
      <title>Worthyux - About</title>
    </Head>

    <h1>About</h1>
  </Page>
);

export default About;
