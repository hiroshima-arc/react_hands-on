// @flow

import createAction from 'redux-actions/es/createAction';
import { Dispatch } from 'redux';
import * as constants from '../constants/todo';

let nextTodoId: number = 0;

type AddTodoAction = {
  type: constants.ActionTypes.ADD_TODO;
  payload: {
    id: number;
    text: string;
  };
}

// eslint-disable-next-line no-return-assign
export const addTodo = (text: string): AddTodoAction => ({
  type: constants.ActionTypes.ADD_TODO,
  payload: {
    id: nextTodoId += 1,
    text,
  },
});


type SetVisibilityFilterAction = {
  type: constants.ActionTypes.SET_VISIBILITY_FILTER;
  payload: {
    filter: VisibilityFilters;
  };
}

export const setVisibilityFilter = (filter: VisibilityFilters): SetVisibilityFilterAction => ({
  type: constants.ActionTypes.SET_VISIBILITY_FILTER,
  payload: { filter },
});


type ToggleTodoAction = {
  type: constants.ActionTypes.TOGGLE_TODO;
  payload: {
    id: number;
  };
}

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: constants.ActionTypes.TOGGLE_TODO,
  payload: { id },
});

type CreateTodoAction = {
  type: constants.ActionTypes.CREATE_TODO;
  payload: {
    todo_id: number;
    active: boolean;
    description: string;
  }
}

export const createTodoPostRequest = createAction(constants.APICALL_POST_REQUEST);
export const createTodoPostFailure = createAction(constants.APICALL_POST_FAILURE);
export const createTodoGetRequest = createAction(constants.APICALL_GET_REQUEST);
export const createTodoGetFailure = createAction(constants.APICALL_GET_FAILURE);

const todoApiCallGet: any = async (url: string) => {
  const res = await fetch(url, { method: 'GET' });

  let json = [];
  if (res.status === 200) {
    json = await res.json();
  } else {
    throw new Error(`illegal status code: ${res.status}`);
  }

  const newJson = [];
  for (const item in json) {
    const id = json[item].todo_id;
    const completed = json[item].active;
    const text = json[item].description;
    const addData = { id, completed, text };
    newJson.push(addData);
  }
  return newJson;
};


const todoApiCallPost: any = async (url: string, data: {}) => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      id: data.id,
      todo_id: data.id.toString(),
      active: data.completed,
      description: data.text,
    }),
  });
};

export const createTodo: CreateTodoAction = (url: string, todos: []) => async (dispatch: Dispatch): Promise => {
  try {
    dispatch(createTodoPostRequest());
    return dispatch({
      type: constants.APICALL_POST_SUCCESS,
      payload: await todos.forEach((todo) => { todoApiCallPost(url, todo); }),
    });
  } catch (e) {
    return dispatch(createTodoPostFailure(e));
  }
};

export const readTodo: CreateTodoAction = (url: string) => async (dispatch: Dispatch): Promise => {
  try {
    dispatch(createTodoGetRequest());
    return dispatch({
      type: constants.APICALL_GET_SUCCESS,
      payload: await todoApiCallGet(url),
    });
  } catch (e) {
    return dispatch(createTodoGetFailure(e));
  }
};

export type TodoActions = AddTodo | ToggleTodo | SetVisibilityFilter