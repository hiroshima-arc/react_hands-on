// @flow

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CRUDFooter } from '../../components/todo/Footer';
import { State, TodoState } from '../../types/todo';

type StateToProps = {
  todos: TodoState[];
}
type DispatchToProps = {
}

const mapStateToProps = ({ todo }: State): StateToProps => ({
  todos: todo.todos,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchToProps => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CRUDFooter);