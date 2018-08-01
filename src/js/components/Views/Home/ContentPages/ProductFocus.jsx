import React, { Component } from 'react';

import './content.scss';

class ProductFocus extends Component {
  render() {
    return (
      <article styleName="root root-inner" >
        <p styleName="section-label" className="col-start-3 col-end-3 row-2">
          product focus
        </p>
      </article>
    );
  }
}

export default ProductFocus;
