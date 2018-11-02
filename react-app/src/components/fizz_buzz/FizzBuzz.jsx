// @flow

import * as React from 'react';
import { FizzBuzzState } from '../../types/fizzBuzz';
import FizzBuzzButton from '../../containers/FizzBuzzButton';
import './FizzBuzz.css';

type Props = {
  fizzBuzz: FizzBuzzState;
};

function FizzBuzz(props: Props) {
  const {
    fizzBuzzValue,
  } = props;

  if (fizzBuzzValue.number < 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }
  return (
    <div className="hello">
      <div className="greeting">
        {fizzBuzzValue.value}
      </div>
      <FizzBuzzButton number={fizzBuzzValue.number} />
    </div>
  );
}

export default FizzBuzz;