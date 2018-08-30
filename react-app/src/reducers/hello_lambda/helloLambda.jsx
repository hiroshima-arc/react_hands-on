/* eslint-disable max-len */
// @flow

import {
  APICALL_REQUEST, APICALL_SUCCESS, APICALL_FAILURE,
} from '../../constants';
import { HelloLambdaState } from '../../types/HelloLambda';
import type { LambdaApiCallAction } from '../../actions';

const initialState = {
  name: '',
  message: 'Click Button Lambda Function Name.',
};

export function helloLambda(state: HelloLambdaState = initialState, action: LambdaApiCallAction): HelloLambdaState {
  switch (action.type) {
    case APICALL_REQUEST:
      return { ...state, message: 'Now Loading...' };
    case APICALL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case APICALL_FAILURE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
}

export default helloLambda;