/* eslint-disable import/no-named-as-default */
// @flow
import { combineReducers } from 'redux';
import enthusiasm from './hello/enthusiasm';
import helloLambda from './hello_lambda/helloLambda';

export default combineReducers({
  enthusiasm,
  helloLambda,
});