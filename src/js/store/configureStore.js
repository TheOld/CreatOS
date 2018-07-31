import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middlewaresList = [thunk];
  if (typeof DEBUG !== 'undefined') middlewaresList.push(logger);
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewaresList)));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
