// @flow

import createAction from 'redux-actions/es/createAction';
import { Dispatch } from 'redux';
import * as constants from '../constants/fizzBuzz';

export type IncrementAction = {
  type: constants.ActionTypes.INCREMENT;
  payload: {
    number: number;
    value: string;
  }
}

export type DecrementAction = {
  type: constants.ActionTypes.DECREMENT;
  payload: {
    number: number;
    value: string;
  }
}

export const createFizzBuzzGetRequest = createAction(constants.APICALL_GET_REQUEST);
export const createFizzBuzzGetFailure = createAction(constants.APICALL_GET_FAILURE);

const fizzBuzzApiCallGet: any = async (url: string) => {
  const res = await fetch(url, { method: 'GET' });
  if (res.status === 200) {
    const text = await res.text();
    return { value: text };
  }
  throw new Error(`illegal status code: ${res.status}`);
};

// eslint-disable-next-line max-len
export const increamen: FizzBuzzAction = (url: string, number: number) => async (dispatch: Dispatch): Promise => {
  try {
    dispatch(createFizzBuzzGetRequest());
    return dispatch({
      type: constants.INCREMENT,
      payload: await fizzBuzzApiCallGet(`${url}?number=${number}`),
    });
  } catch (e) {
    return dispatch(createFizzBuzzGetFailure(e));
  }
};

// eslint-disable-next-line max-len
export const decreamen: FizzBuzzAction = (url: string, number: number) => async (dispatch: Dispatch): Promise => {
  try {
    dispatch(createFizzBuzzGetRequest());
    return dispatch({
      type: constants.DECREMENT,
      payload: await fizzBuzzApiCallGet(`${url}?number=${number}`),
    });
  } catch (e) {
    return dispatch(createFizzBuzzGetFailure(e));
  }
};

export type FizzBuzzActions = Increment | Decrement