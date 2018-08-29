// @flow

import * as React from 'react';
import './Hello.css';

type Props = {
    name: string;
    enthusiasmLevel: number;
    onIncrement: () => void;
    onDecrement: () => void;
};

// helpers
function getExclamationMarks(numChars) {
  return Array(numChars + 1).join('!');
}

function Hello(props: Props) {
  const {
    name, enthusiasmLevel = 1, onIncrement, onDecrement,
  } = props;

  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello
        {' '}
        {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button type="button" onClick={onDecrement}>-</button>
        <button type="button" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;