// @flow

import { ActionTypes, VisibilityFilters } from '../constants/todo';

let nextTodoId: number = 0;

type AddTodoAction = {
  type: ActionTypes.ADD_TODO;
  payload: {
    id: number;
    text: string;
  };
}

// eslint-disable-next-line no-return-assign
export const addTodo = (text: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    id: nextTodoId += 1,
    text,
  },
});


type SetVisibilityFilterAction = {
  type: ActionTypes.SET_VISIBILITY_FILTER;
  payload: {
    filter: VisibilityFilters;
  };
}

export const setVisibilityFilter = (filter: VisibilityFilters): SetVisibilityFilterAction => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  payload: { filter },
});


type IToggleTodoAction = {
  type: ActionTypes.TOGGLE_TODO;
  payload: {
    id: number;
  };
}

export const toggleTodo = (id: number): IToggleTodoAction => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: { id },
});

export type TodoActions = AddTodo | ToggleTodo | SetVisibilityFilter