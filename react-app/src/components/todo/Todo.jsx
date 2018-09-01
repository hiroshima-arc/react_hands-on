/* eslint-disable indent,max-len */
// @flow

import * as React from 'react';

type OwnProps = {
  onClick: any;
  completed: boolean;
  text: string;
}
const Todo = (props: OwnProps) => {
  const { onClick, completed, text } = props;
  return (
// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <li
      className="ui-state-default"
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
  );
};
export default Todo;