/* ----------  External Libraries  ---------- */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Tappable from 'react-tappable';
// import { Link } from 'react-router';

/* ----------  Actions  ---------- */
import {
  setPage,
} from '../../actions/ui';

/* ----------  Styles  ---------- */
import './menu.scss';

class Menu extends Component {
  /* ----------  React Configuration  ---------- */
  static propTypes = {
    uiActions: PropTypes.object.isRequired,
    pathname:  PropTypes.string.isRequired
  }
  /* =============================================
    =              React Lifecycle              =
    ============================================= */
  render() {
    return (
      <nav styleName="nav">
        <Tappable
          onTap={() => this.handleNavigation("/")}
          styleName={`${this.props.pathname === '/' ? 'nav-item active' : 'nav-item'}`}>
          Home
        </Tappable>
        <Tappable
          onTap={() => this.handleNavigation("/why")}
          styleName={`${this.props.pathname === "/why" ? 'nav-item active' : 'nav-item'}`}>
          Why Creat
          <b>
            os
          </b>
        </Tappable>
        <Tappable
          onTap={() => this.handleNavigation("/roadmap")}
          styleName={`${this.props.pathname === '/roadmap' ? 'nav-item active' : 'nav-item'}`}>
          Roadmap
        </Tappable>
        <Tappable
          onTap={() => this.handleNavigation("/contact")}
          styleName={`${this.props.pathname === '/contact' ? 'nav-item active' : 'nav-item'}`}>
          get in touch
        </Tappable>
      </nav>
    );
  }

  handleNavigation = (target) => {
    if (this.props.pathname !== target) {
      this.props.uiActions.setPage(target);
    }
  }
}
/* ----------  Action binding  ---------- */
const mapStateToProps = (state) => ({
  content:  state.ui.content,
  pathname: state.router.location.pathname,
})

const mapDispatchToProps = dispatch => ({
  uiActions: bindActionCreators(
    {
      setPage,
    },
    dispatch,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
