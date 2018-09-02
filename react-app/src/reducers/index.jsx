/* eslint-disable import/no-named-as-default */
// @flow
import { combineReducers } from 'redux';
import enthusiasm from './hello/enthusiasm';
import helloLambda from './hello_lambda/helloLambda';
import todo from './todo';

const appReducer = combineReducers({
  enthusiasm,
  helloLambda,
  todo,
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STATE') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;