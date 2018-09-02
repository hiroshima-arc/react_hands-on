// @flow

import { TodoActions } from '../../actions/todo';
import { TodoState } from '../../types/todo';
import * as constants from '../../constants/todo';

const todos = (state: TodoState[] = [], action: TodoActions): TodoState[] => {
  switch (action.type) {
    case constants.ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        },
      ];
    case constants.ActionTypes.TOGGLE_TODO:
      return state.map((todo: TodoState) => ((todo.id === action.payload.id)
        ? { ...todo, completed: !todo.completed }
        : todo),
      );
    case constants.APICALL_POST_REQUEST:
      return state;
    case constants.APICALL_POST_SUCCESS:
      return state;
    case constants.APICALL_GET_REQUEST:
      return state.todos = [];
    case constants.APICALL_GET_SUCCESS:
      return [
        ...state,
        ...action.payload,
      ];
    case constants.APICALL_POST_FAILURE:
      return state;
    case constants.APICALL_GET_FAILURE:
      return state;
    default:
      return state;
  }
};
export default todos;