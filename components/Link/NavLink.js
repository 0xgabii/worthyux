import React, { Component } from 'react';
import { withRouter } from 'next/router';
import classNames from 'classnames';

import { Link } from './Link';

import './NavLink.scss';

@withRouter
export class NavLink extends Component {
  render() {
    const { className, href, router } = this.props;

    return (
      <Link
        className={classNames('nav-link', href === router.asPath && 'active', className)}
        {...this.props}
      />
    );
  }
}
