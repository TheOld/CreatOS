import { push } from 'connected-react-router'
import * as types from '../types/ui';

/**
 * Will update the page value, which in turn renders the content in the main View.
 *
 * @param {string} page - The page constant.
 * @returns {Function} Dispatch.
 */
export const setPage = page => dispatch => {

  // dispatch({
  //   type: types.SET_PAGE,
  //   page
  // });

  dispatch(push(page))
}

/**
 * Toggles playing state for the vide player.
 *
 * @param {bool} playing - The play state.
 * @returns {Function} Dispatch.
 */
export function togglePlaying(playing) {
  return (dispatch) => {
    dispatch({
      type: types.TOGGLE_PLAYING,
      playing
    });
  };
}

export function setContent(content) {
  return (dispatch) => {
    dispatch({
      type: types.SET_CONTENT,
      content
    });
  };
}
