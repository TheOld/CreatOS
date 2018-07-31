/* ----------  External Libraries  ---------- */
import React, { Component } from 'react';

/* ----------  Components  ---------- */
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

/* ----------  Styles  ---------- */
import './header.scss';

class Header extends Component {
  /* =============================================
    =              React Lifecycle              =
    ============================================= */
  render() {
    return (
      <header styleName="root">
        <Logo />
        <Menu />
      </header>
    );
  }
}

export default Header;
