import React, { Component } from 'react';

import { Link, NavLink } from '../components/Link';

import './Header.scss';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link id="logo" href="/">
          WORTHY
          <small>ux</small>
        </Link>

        <nav>
          <NavLink href="/about">about</NavLink>
        </nav>
      </header>
    );
  }
}
