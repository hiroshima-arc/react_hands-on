/* eslint-disable max-len */
// @flow

import {
  NODEJS_APICALL, NODEJS_APICALL_REQUEST, NODEJS_APICALL_SUCCESS, NODEJS_APICALL_FAILURE,
  JAVA_APICALL_REQUEST, JAVA_APICALL_SUCCESS, JAVA_APICALL_FAILURE,
} from '../../constants';
import { HelloLambdaState } from '../../types/HelloLambda';
import type { LambdaApiCallAction } from '../../actions';

const initialState = {
  name: '',
  message: 'Click Button Lambda Function Name.',
};

export function helloLambda(state: HelloLambdaState = initialState, action: LambdaApiCallAction): HelloLambdaState {
  switch (action.type) {
    case NODEJS_APICALL:
      return {
        ...state,
        ...action.payload,
      };
    case NODEJS_APICALL_REQUEST:
      return { ...state, message: 'Now Loading...' };
    case NODEJS_APICALL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case NODEJS_APICALL_FAILURE:
      return { ...state, message: action.payload };
    case JAVA_APICALL_REQUEST:
      return { ...state, message: 'Now Loading...' };
    case JAVA_APICALL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case JAVA_APICALL_FAILURE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

export default helloLambda;