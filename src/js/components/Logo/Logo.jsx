import React, { Component } from 'react';

import './styles.scss';

class Logo extends Component {
  render() {
    return (
      <div styleName="container">
        <img src="http://placekitten.com/200" alt="" />
      </div>
    );
  }
}

export default Logo;
