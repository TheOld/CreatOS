import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import Tappable from 'react-tappable';

import Anime from 'react-anime';

/* ----------  Actions  ---------- */
import {
  togglePlaying,
} from '../../../../actions/ui';

/* ----------  Icons  ---------- */
import PlayIcon from '../../../../../img/icons/btn-play.svg';

import './content.scss';

class Main extends Component {
  /* ----------  React Configuration  ---------- */
  static propTypes = {
    playing:   PropTypes.bool.isRequired,
    uiActions: PropTypes.object.isRequired,
  }
  render() {
    const { playing } = this.props;
    return (
      <article
        styleName="root"
        className="grid-inner"
        {...this.props} >
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' styleName="video-player" width="100%" height="100%" playing={playing} />
        <Anime opacity={[0, 1]} translateY="1em" delay={220}>
          <Tappable onTap={this.handlePlay} styleName="btn-play">
            <PlayIcon styleName="play-icon" />
          </Tappable>
        </Anime>
      </article>
    );
  }

  handlePlay = () => {
    this.props.uiActions.togglePlaying(!this.props.playing);
  }
}

/* ----------  Action binding  ---------- */
function mapStateToProps(state) {
  return {
    playing: state.ui.playing,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(
      {
        togglePlaying,
      },
      dispatch,
    ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
