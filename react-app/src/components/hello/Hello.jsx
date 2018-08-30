// @flow

import * as React from 'react';
import { HelloState } from '../../types/hello';
import './Hello.css';

type Props = {
  enthusiasm: HelloState;
  onIncrement: () => void;
  onDecrement: () => void;
};

// helpers
function getExclamationMarks(numChars) {
  return Array(numChars + 1).join('!');
}

function Hello(props: Props) {
  const {
    enthusiasm, onIncrement, onDecrement,
  } = props;

  if (enthusiasm.enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        Hello
        {' '}
        {enthusiasm.languageName + getExclamationMarks(enthusiasm.enthusiasmLevel)}
      </div>
      <div>
        <button type="button" onClick={onDecrement}>-</button>
        <button type="button" onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;