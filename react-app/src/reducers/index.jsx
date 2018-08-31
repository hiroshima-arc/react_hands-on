/* eslint-disable import/prefer-default-export,import/no-named-as-default */
// @flow
import { combineReducers } from 'redux';
import enthusiasm from './hello/enthusiasm';

export default combineReducers({
  enthusiasm,
});