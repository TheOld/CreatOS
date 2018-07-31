/* ----------  External Libraries  ---------- */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router';

// import { CSSTransition } from 'react-transition-group';

/* ----------  Actions  ---------- */
import {
  setContent,
} from '../../../actions/ui';

/* ----------  Styles  ---------- */
import './why.scss';

class Why extends Component {
  /* ----------  React Configuration  ---------- */
  static propTypes = {
    // pathname: PropTypes.string.isRequired
  }

  /* =============================================
    =              React Lifecycle              =
    ============================================= */
  render() {
    return (
      // <CSSTransition in={this.props.pathname === '/why'} classNames="render">
      <article className="view">
        <h1>
          Why page
          </h1>
      </article>
      // </CSSTransition>
    );
  }
}
/* ----------  Action binding  ---------- */
const mapStateToProps = (state) => ({
  content:  state.ui.content,
  page:     state.ui.page,
  pathname: state.router.location.pathname,
})

const mapDispatchToProps = dispatch => ({
  uiActions: bindActionCreators(
    {
      setContent,
    },
    dispatch,
  ),
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Why));
