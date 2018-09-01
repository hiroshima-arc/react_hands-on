// @flow

import {
  ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters,
} from '../constants/todo';

export type AddTodo = {
    type: ADD_TODO;
    text: string;
}

export type ToggleTodo = {
    type: TOGGLE_TODO;
    text: number;
}

export type SetVisibilityFilter = {
    type: SET_VISIBILITY_FILTER;
    filter: any;
}

export type TodoState = {
  id: number;
  text: string;
  completed: boolean;
}

export type State = {
  visibilityFilter: VisibilityFilters;
  todos: TodoState[];
}
