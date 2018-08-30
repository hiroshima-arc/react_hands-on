/* eslint-disable max-len */

// @flow

import { Dispatch } from 'redux';
import { createAction } from 'redux-actions';
import * as constants from '../constants';
import { HelloLambdaState } from '../types/HelloLambda';

export type NodejsApiCall = {
  type: typeof constants.NODEJS_APICALL;
  payload: HelloLambdaState
}

const apiCall: any = async (url: string) => {
  const res = await fetch(url, { method: 'GET' });

  let json = [];
  if (res.status === 200) {
    json = await res.json();
  } else {
    throw new Error(`illegal status code: ${res.status}`);
  }
  return json;
};

export const nodejsApiCall: NodejsApiCall = () => (dispatch: Dispatch) => {
  const payload = { name: 'nodejs', message: 'hello' };
  return dispatch({
    type: constants.NODEJS_APICALL,
    payload,
  });
};

export const asyncNodeJsApiCallRequest = createAction(constants.NODEJS_APICALL_REQUEST);
export const asyncNodeJsApiCallFailure = createAction(constants.NODEJS_APICALL_FAILURE);
export const asyncNodeJsApiCall: NodejsApiCall = (url: string) => async (dispatch: Dispatch): Promise => {
  try {
    dispatch(asyncNodeJsApiCallRequest());
    return dispatch({
      type: constants.NODEJS_APICALL_SUCCESS,
      payload: await apiCall(url),
    });
  } catch (e) {
    return dispatch(asyncNodeJsApiCallFailure(e));
  }
};

export type LambdaApiCallAction = NodejsApiCall;