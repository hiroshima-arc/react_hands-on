// @flow

import {
  INCREMENT, DECREMENT,
} from '../constants/fizzBuzz';

export type Increment = {
  type: INCREMENT;
  text: string;
}

export type Decrement = {
  type: DECREMENT;
  text: string;
}

export type FizzBuzzState = {
  number: number;
  value: string;
}

export type State = {
  values: FizzBuzzState[];
}