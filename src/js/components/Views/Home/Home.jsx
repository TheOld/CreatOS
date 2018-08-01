/* ----------  External Libraries  ---------- */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import loadableVisibility from 'react-loadable-visibility/loadable-components'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

// import Fader from '../../../interactions/Fader';

/* ----------  Actions  ---------- */
import {
  setContent,
} from '../../../actions/ui';


/* ----------  Styles  ---------- */
import './home.scss';


const Loading = () => <div>
  Loading...
</div>;

/* eslint-disable */
const ErrorDisplay = ({ error }) => <div>
  Oups!
{' '}
  {error.message}
</div>;
/* eslint-disable */

/* ----------  Content  ---------- */
const Main = loadableVisibility(() => import('./ContentPages/Main'), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorDisplay
})
const Communities = loadableVisibility(() => import('./ContentPages/Communities'), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorDisplay
})
const Context = loadableVisibility(() => import('./ContentPages/Context'), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorDisplay
})
const Eosio = loadableVisibility(() => import('./ContentPages/Eosio'), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorDisplay
})
const ProductFocus = loadableVisibility(() => import('./ContentPages/ProductFocus'), {
  LoadingComponent: Loading,
  ErrorComponent: ErrorDisplay
})



class Home extends Component {
  /* ----------  React Configuration  ---------- */
  constructor(props) {
    super(props);

    // this.fader = new Fader();
  }

  static propTypes = {
    content: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired
  }
  /* =============================================
    =              React Lifecycle              =
    ============================================= */
  componentDidMount() {

  }

  render() {
    return (
      <section styleName="root" className="col-start-3 col-end-19 view">
        {this.renderContent()}
      </section>
    );
  }

  renderContent() {
    return (
      <Fragment>
        <Main />
        <Context />
        <ProductFocus />
        <Communities />
        <Eosio />
      </Fragment>
    )
  }
}

/* ----------  Action binding  ---------- */
const mapStateToProps = (state) => ({
  content: state.ui.content,
  page: state.ui.page,
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Home));
