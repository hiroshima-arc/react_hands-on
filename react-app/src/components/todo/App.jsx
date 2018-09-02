// @flow

import * as React from 'react';
import AddTodo from '../../containers/todo/AddTodo';
import VisibleTodoList from '../../containers/todo/VisibleTodoList';
import './App.css';
import { ShowFooter } from './Footer';
import CRUDFooterLink from '../../containers/todo/CRUDFooterLink';

const TodoApp = () => (
  <div className="todolist">
    <h1>Todos</h1>
    <AddTodo />
    <VisibleTodoList />
    <ShowFooter />
    <CRUDFooterLink />
  </div>
);

export default TodoApp;