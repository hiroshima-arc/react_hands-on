// @flow

import { connect } from 'react-redux';
import {
  createTodo, readTodo, updateTodo, deleteTodo,
} from '../../actions/todo';
import Link from '../../components/todo/Link';
import { CRUDActions, TODO_API_URL } from '../../constants/todo';
import type { State, TodoState } from '../../types/todo';

type StateToProps = {
  todos: TodoState[];
  action: boolean;
}

const mapStateToProps = ({ todo }: State, ownProps: any): StateToProps => ({
  todos: todo.todos,
  action: ownProps.action,
});

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  onClick: () => {
    switch (ownProps.action) {
      case CRUDActions.CREATE:
        return dispatch(createTodo(`${TODO_API_URL}/new`, ownProps.todos));
      case CRUDActions.READ:
        return dispatch(readTodo(`${TODO_API_URL}/all`));
      case CRUDActions.UPDATE:
        return dispatch(updateTodo(`${TODO_API_URL}/complete`, ownProps.todos));
      case CRUDActions.DELETE:
        return dispatch(deleteTodo(`${TODO_API_URL}/complete`, ownProps.todos));
      default:
        return {};
    }
  },
});

const CRUDLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default CRUDLink;