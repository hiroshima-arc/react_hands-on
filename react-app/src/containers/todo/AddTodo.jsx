// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo } from '../../actions/todo';

type OwnProps = {
  dispatch: Dispatch;
}
const AddTodo = (props: OwnProps) => {
  const { dispatch } = props;
  let input: HTMLInputElement;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          type="text"
          className="form-control add-todo"
          placeholder="Add todo"
          ref={(node: HTMLInputElement) => {
            input = node;
          }}
        />
        <button type="submit" className="btn btn-success btn-add-todo">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);