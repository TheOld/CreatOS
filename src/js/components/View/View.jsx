import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Switch,
  Route,
  withRouter
} from 'react-router';

/* ----------  Actions  ---------- */
import {
  setPage,
} from '../../actions/ui';

/* ----------  Constants  ---------- */
// import * as Pages from '../../types/pages';

/* ----------  Views  ---------- */
import Contact from '../Views/Contact/Contact';
import Home from '../Views/Home/Home';
import Roadmap from '../Views/Roadmap/Roadmap';
import Why from '../Views/Why/Why';

/* ----------  Styles  ---------- */
import './view.scss';

class View extends Component {
  /* =============================================
  =              React Lifecycle              =
  ============================================= */
  render() {
    return (
      <section styleName="container" >

        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/why" component={Why} />
          <Route exact path="/roadmap" component={Roadmap} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </section>
    );
  }
}

/* ----------  Action binding  ---------- */
const mapStateToProps = state => ({
  page: state.ui.page,
});

const mapDispatchToProps = dispatch => ({
  UIActions: bindActionCreators(
    {
      setPage,
    },
    dispatch,
  ),
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(View));

