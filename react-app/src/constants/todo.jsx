// @flow
import { isProd } from './utils';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO: 'TOGGLE_TODO',
  CREATE_TODO: 'CREATE_TODO',
  READ_TODO: 'READ_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  DELETE_TODO: 'DELETE_TODO',
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const CRUDActions = {
  CREATE: 'CREATE',
  READ: 'READ',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
};

export const APICALL_POST_REQUEST = 'APICALL_POST_REQUEST';
export const APICALL_GET_REQUEST = 'APICALL_GET_REQUEST';
export const APICALL_POST_SUCCESS = 'APICALL_POST_SUCCESS';
export const APICALL_GET_SUCCESS = 'APICALL_GET_SUCCESS';
export const APICALL_POST_FAILURE = 'APICALL_POST_FAILURE';
export const APICALL_GET_FAILURE = 'APICALL_GET_FAILURE';

export const TODO_API_URL = isProd ? 'https://oz5g8ny2w6.execute-api.us-east-1.amazonaws.com/Prod/todo' : 'http://localhost:3001/todo';