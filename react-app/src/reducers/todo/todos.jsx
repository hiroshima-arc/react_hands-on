// @flow

import { TodoActions } from '../../actions/todo';
import { ActionTypes } from '../../constants/todo';
import { TodoState } from '../../types/todo';

const todos = (state: TodoState[] = [], action: TodoActions): TodoState[] => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case ActionTypes.TOGGLE_TODO:
      return state.map((todo: ITodoState) => ((todo.id === action.payload.id)
        ? { ...todo, completed: !todo.completed }
        : todo),
      );
    default:
      return state;
  }
};
export default todos;