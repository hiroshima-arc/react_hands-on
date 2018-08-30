/* eslint-disable max-len */
// @flow

import { EnthusiasmAction } from '../../actions';
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from '../../constants';
import { HelloState } from '../../types/hello';

const initialState = {
  enthusiasmLevel: 1,
  languageName: 'ES6',
};

export function enthusiasm(state: HelloState = initialState, action: EnthusiasmAction): HelloState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}

export default enthusiasm;