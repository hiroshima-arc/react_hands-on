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

export const asyncNodeJsApiCallRequest = createAction(constants.APICALL_REQUEST);
export const asyncNodeJsApiCallFailure = createAction(constants.APICALL_FAILURE);
export const asyncNodeJsApiCall: NodejsApiCall = (url: string) => async (dispatch: Dispatch): Promise => {
  try {
    dispatch(asyncNodeJsApiCallRequest());
    return dispatch({
      type: constants.APICALL_SUCCESS,
      payload: await apiCall(url),
    });
  } catch (e) {
    return dispatch(asyncNodeJsApiCallFailure(e));
  }
};

export const asyncJavaApiCallRequest = createAction(constants.APICALL_REQUEST);
export const asyncJavaApiCallFailure = createAction(constants.APICALL_FAILURE);
export const asyncJavaApiCall: NodejsApiCall = (url: string) => async (dispatch: Dispatch): Promise => {
  try {
    dispatch(asyncJavaApiCallRequest());
    return dispatch({
      type: constants.APICALL_SUCCESS,
      payload: await apiCall(url),
    });
  } catch (e) {
    return dispatch(asyncJavaApiCallFailure(e));
  }
};

export const asyncPythonApiCallRequest = createAction(constants.APICALL_REQUEST);
export const asyncPythonApiCallFailure = createAction(constants.APICALL_FAILURE);
export const asyncPythonApiCall: NodejsApiCall = (url: string) => async (dispatch: Dispatch): Promise => {
  try {
    dispatch(asyncPythonApiCallRequest());
    return dispatch({
      type: constants.APICALL_SUCCESS,
      payload: await apiCall(url),
    });
  } catch (e) {
    return dispatch(asyncPythonApiCallFailure(e));
  }
};

export const asyncDotNetApiCallRequest = createAction(constants.APICALL_REQUEST);
export const asyncDotNetApiCallFailure = createAction(constants.APICALL_FAILURE);
export const asyncDotNetApiCall: NodejsApiCall = (url: string) => async (dispatch: Dispatch): Promise => {
  try {
    dispatch(asyncDotNetApiCallRequest());
    return dispatch({
      type: constants.APICALL_SUCCESS,
      payload: await apiCall(url),
    });
  } catch (e) {
    return dispatch(asyncDotNetApiCallFailure(e));
  }
};

export type LambdaApiCallAction = NodejsApiCall;