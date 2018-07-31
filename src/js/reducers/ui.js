/* ----------  Constants  ---------- */
import * as UITypes from '../types/ui';
import * as Pages from '../types/pages';
import * as Content from '../types/homeContent';

const initialState = {
  page:    Pages.HOME,
  content: Content.MAIN,
  playing: false,
}

export default function UI(state = initialState, action) {
  switch (action.type) {
    case UITypes.SET_PAGE:
      return {
        ...state,
        page: action.page
      }
    case UITypes.SET_CONTENT:
      return {
        ...state,
        content: action.content
      }
    case UITypes.TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.playing
      }
    default:
      return state;
  }
}
