// @flow

import * as React from 'react';
import './FizzBuzz.css';

type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
};

function FizzBuzzButton(props: Props) {
  const {
    onIncrement, onDecrement,
  } = props;

  return (
    <div>
      <button type="button" onClick={onDecrement}>-</button>
      <button type="button" onClick={onIncrement}>+</button>
    </div>
  );
}

export default FizzBuzzButton;