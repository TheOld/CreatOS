/* ----------  External Libraries  ---------- */
import React, { Component } from 'react';
import Tappable from 'react-tappable';

import LogoIcon from '../../../img/logo.svg';
/* ----------  Styles  ---------- */
import './logo.scss';

class Logo extends Component {
  /* ----------  React Configuration  ---------- */

  /* =============================================
    =              React Lifecycle              =
    ============================================= */
  render() {
    return (
      <Tappable styleName="container" onTap={this.handleLogoTap}>
        <LogoIcon width="160px" />
      </Tappable>
    );
  }

  handleLogoTap = () => {

  }
}

export default Logo;
