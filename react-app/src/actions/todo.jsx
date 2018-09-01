// @flow

import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../constants/todo';
import type { AddTodo, SetVisibilityFilter, ToggleTodo } from '../types/todo';

export function addTodo(text): AddTodo {
  return { type: ADD_TODO, text };
}

export function toggleTodo(index): ToggleTodo {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter): SetVisibilityFilter {
  return { type: SET_VISIBILITY_FILTER, filter };
}

export type TodoAction = AddTodo | ToggleTodo | SetVisibilityFilter