/* ----------  External Libraries  ---------- */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* ----------  Views  ---------- */
import Contact from '../Views/Contact/Contact';
import Home from '../Views/Home/Home';
import Roadmap from '../Views/Roadmap/Roadmap';
import Why from '../Views/Why/Why';
import Header from '../Header/Header';

class App extends Component {
  /* =============================================
  =              React Lifecycle              =
  ============================================= */
  render() {
    /* eslint-disable no-restricted-globals */
    const currentKey = location.pathname.split('/')[1] || '/'
    const timeout = { enter: 300, exit: 200 }
    return (
      <Fragment>
        <Header />
        <TransitionGroup component="section" className="container">
          <CSSTransition key={currentKey} timeout={timeout} classNames="render" appear>
            <Switch >
              <Route exact path="/" component={Home} />
              <Route exact path="/why" component={Why} />
              <Route exact path="/roadmap" component={Roadmap} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
    /* eslint-disable no-restricted-globals */
  }
}

/* ----------  Action binding  ---------- */
const mapStateToProps = (state) => ({
  content:  state.ui.content,
  page:     state.ui.page,
  pathname: state.router.location.pathname,
})

// const mapDispatchToProps = dispatch => ({
//   uiActions: bindActionCreators(
//     {
//       setContent,
//     },
//     dispatch,
//   ),
// })

export default withRouter(connect(
  mapStateToProps,
  // mapDispatchToProps,
)(App));
