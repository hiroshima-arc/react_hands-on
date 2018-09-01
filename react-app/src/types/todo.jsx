// @flow

import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../constants/todo';

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