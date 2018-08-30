/* eslint-disable import/prefer-default-export */
// @flow

import { Dispatch } from 'redux';
import * as constants from '../constants';
import { HelloLambdaState } from '../types/HelloLambda';

export type NodejsApiCall = {
  type: typeof constants.NODEJS_APICALL;
  payload: HelloLambdaState
}

// eslint-disable-next-line no-unused-vars
export const nodejsApiCall: NodejsApiCall = (url: string) => (dispatch: Dispatch): Action => {
  const payload = { name: 'nodejs', message: 'hello' };
  return dispatch({
    type: constants.NODEJS_APICALL,
    payload,
  });
};

export type LambdaApiCallAction = NodejsApiCall;