// @flow

import { FizzBuzzActions } from '../../actions/FizzBuzz';
import { FizzBuzzState } from '../../types/fizzBuzz';
import * as constants from '../../constants/fizzBuzz';

const initialState = {
  number: 0,
  value: 'Ready...',
};

const fizzBuzzValue = (state: FizzBuzzState = initialState, action: FizzBuzzActions): FizzBuzzState => {
  switch (action.type) {
    case constants.APICALL_GET_REQUEST:
      return { ...state, value: 'Now Loading...' };
    case constants.ActionTypes.INCREMENT:
      return { ...state, number: state.number + 1, ...action.payload };
    case constants.ActionTypes.DECREMENT:
      return { ...state, number: Math.max(1, state.number - 2), ...action.payload };
    default:
      return state;
  }
};

export default fizzBuzzValue;