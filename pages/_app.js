import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'mobx-react';

import '../styles/main.scss';

const stores = {};

export default class AppRoot extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Provider {...stores}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}
