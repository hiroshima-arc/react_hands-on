// @flow

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleTodo } from '../../actions/todo';
import TodoList from '../../components/todo/TodoList';
import { VisibilityFilters } from '../../constants/todo';
import { State, TodoState } from '../../types/todo';

type StateToProps = {
  todos: TodoState[];
}
type DispatchToProps = {
  toggleTodo: (id: number) => any;
}
const getVisibleTodo = (todos: TodoState[], filter: VisibilityFilters): TodoState[] => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};
const mapStateToProps = ({ todo }: State): StateToProps => ({
  todos: getVisibleTodo(todo.todos, todo.visibilityFilter),
});
const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);