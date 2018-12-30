import React, { Component } from 'react';

import { Link, NavLink } from '../components/Link';

import './Header.scss';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link href="/">worthyux</Link>

        <nav>
          <NavLink href="/about">About</NavLink>
        </nav>
      </header>
    );
  }
}
