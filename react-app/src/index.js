import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Hello from './containers/Hello';
import { enthusiasm } from './reducers/index';

const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'ES6',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root'),
);