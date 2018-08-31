// @flow

import * as React from 'react';
import * as enzyme from 'enzyme';
import Hello from './Hello';
import type { HelloState } from '../../types/hello';

it('renders the correct text with an explicit enthusiasm of 1', () => {
  const initialState: HelloState = { languageName: 'Daniel', enthusiasmLevel: 1 };
  const hello = enzyme.shallow(<Hello enthusiasm={initialState} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!');
});

it('renders the correct text with an expicit enthusiasm level of 5', () => {
  const initialState: HelloState = { languageName: 'Daniel', enthusiasmLevel: 5 };
  const hello = enzyme.shallow(<Hello enthusiasm={initialState} />);
  expect(hello.find('.greeting').text()).toEqual('Hello Daniel!!!!!');
});

it('throws when the enthusiasm level is 0', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
  }).toThrow();
});

it('throw when then enthusiasm level is negative', () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});