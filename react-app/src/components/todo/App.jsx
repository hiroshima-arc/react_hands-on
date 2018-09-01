// @flow

import * as React from 'react';
import AddTodo from '../../containers/todo/AddTodo';
import VisibleTodoList from '../../containers/todo/VisibleTodoList';
import Footer from './Footer';
import './App.css';

const TodoApp = () => (
  <div className="todolist">
    <h1>Todos</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoApp;