/* eslint-disable max-len */
// @flow

import { NODEJS_APICALL } from '../../constants';
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
    default:
      return state;
  }
}

export default helloLambda;