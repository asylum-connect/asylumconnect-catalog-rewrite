import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import thunk from 'redux-thunk';

import account from './account';

export const rootReducer = combineReducers({
  account,
});

export function initializeStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, logger)),
  );

  return store;
}
