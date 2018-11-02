// @flow
import { isProd } from './utils';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export const APICALL_GET_REQUEST = 'APICALL_GET_REQUEST';
export const APICALL_GET_SUCCESS = 'APICALL_GET_SUCCESS';
export const APICALL_GET_FAILURE = 'APICALL_GET_FAILURE';

export const FIZZ_BUZZ_API_URL = isProd ? 'https://oz5g8ny2w6.execute-api.us-east-1.amazonaws.com/Prod/fizz_buzz/generate' : 'http://localhost:3001/fizz_buzz/generate';
