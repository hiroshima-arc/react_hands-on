// @flow

import * as React from 'react';
import { VisibilityFilters, CRUDActions } from '../../constants/todo';
import FilterLink from '../../containers/todo/FilterLink';
import CRUDLink from '../../containers/todo/CRUDLink';


type OwnProps = {
  todos: todo[]
}

export const ShowFooter = () => (
  <p className="todo-footer">
    Show:
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {' '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export const CRUDFooter = (props: OwnProps) => {
  const { todos } = props;
  return (
    <p className="todo-footer">
      CRUD:
      {' '}
      <CRUDLink action={CRUDActions.CREATE} todos={todos}>
        Create
      </CRUDLink>
      {' '}
      <CRUDLink action={CRUDActions.READ}>
        Read
      </CRUDLink>
      {' '}
      <CRUDLink action={CRUDActions.UPDATE} todos={todos}>
        Update
      </CRUDLink>
      {' '}
      <CRUDLink action={CRUDActions.DELETE}>
        Delete
      </CRUDLink>
    </p>
  );
};