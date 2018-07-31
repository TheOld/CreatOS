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
import './roadmap.scss';

class Roadmap extends Component {
  /* ----------  React Configuration  ---------- */
  static propTypes = {
    // content:  PropTypes.string.isRequired,
    // page:     PropTypes.string.isRequired,
    // pathname: PropTypes.string.isRequired
  }

  /* =============================================
    =              React Lifecycle              =
    ============================================= */
  render() {
    return (
      // <CSSTransition in={this.props.pathname === '/roadmap'} appear classNames="render" >
      <section className="view" styleName="root" >
        <h1>
          Roadmap page
        </h1>
      </section>
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
)(Roadmap));
