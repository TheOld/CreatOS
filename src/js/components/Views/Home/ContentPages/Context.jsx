import React, { Component } from 'react';

import './content.scss';

class Context extends Component {
  render() {
    return (
      <article styleName="root root-inner">
        <p styleName="section-label" className="col-start-2 col-end-3 row-2">
          Context
        </p>

        <section styleName="content-wrapper" className="col-start-3 col-end-14 row-3">
          <h2 styleName="title">
            The advertising and marketing industry
            {' '}
            <em>
              new era
            </em>
          </h2>

          <h5 styleName="subtitle">
            <span styleName="highlight">
              This is a new era of fast-paced creative collaboration.
            </span>
            <br />
            creat
            <b>
              os
            </b>
            {' '}
            brings a decentralised platform to connect buyers and sellers across the complete advertising and marketing spectrum.
        </h5>
        </section>
      </article>
    );
  }
}

export default Context;
