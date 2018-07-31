import React, { Component } from 'react';

import './content.scss';

class Context extends Component {
  render() {
    return (
      <article styleName="root">
        <p styleName="section-label">
          Context
        </p>
        <div styleName="col-offset-4-13">
          <h2 styleName="title">
            The advertising and
            marketing industry
          </h2>
          <h5 styleName="subtitle">
            Like many other industries, advertising and marketing has gone through change and evolution.
            {' '}
            <em>
              Nothing as impactful as the eras of new media and digital.
            </em>
          </h5>
        </div>
      </article>
    );
  }
}

export default Context;
