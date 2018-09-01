// @flow

import * as React from 'react';
import AddTodo from '../../containers/todo/AddTodo';
import VisibleTodoList from '../../containers/todo/VisibleTodoList';
import Footer from './Footer';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;