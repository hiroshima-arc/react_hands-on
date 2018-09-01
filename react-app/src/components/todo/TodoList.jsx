// @flow
/* eslint-disable react/no-array-index-key */

import * as React from 'react';
import { TodoState } from '../../types/todo';
import Todo from './Todo';

type OwnProps = {
  todos: TodoState[];
  toggleTodo: (id: number) => any;
}
function handleClick(toggleTodo: (id: number) => void, id: number) {
  return () => toggleTodo(id);
}
const TodoList = (props: OwnProps) => {
  const { todos, toggleTodo } = props;
  return (
    <ul className="list-unstyled">
      {todos.map(todo => <Todo
        key={todo.id}
        {...todo}
        onClick={handleClick(toggleTodo, todo.id)}
      />,
      )}
    </ul>
  );
};
export default TodoList;