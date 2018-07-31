import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../modules';

export const history = createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

// if (process.env.NODE_ENV === 'development') {
/* eslint-disable */
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
/* eslint-disable */

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}
// }

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

export default store;
