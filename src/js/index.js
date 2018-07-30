
import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/Logo/Logo';

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable */
  console.log('DOMContentLoaded');
  /* eslint-disable */

  const logoEl = document.querySelector('.js--logo');
  if(logoEl) {
    ReactDOM.render(
      <Logo />,
      logoEl
    );
  }
});
