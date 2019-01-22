import React from 'react';
import Head from 'next/head';

import { Page } from '../layouts';

import './index.scss';

const Home = () => (
  <Page className="home">
    <Head>
      <title>Worthyux - Worthy ux in your daily life</title>
    </Head>

    <h1>
      In your
      <br />
      daily life
    </h1>
  </Page>
);

export default Home;
