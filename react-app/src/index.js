import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

ReactDOM.render(
  <Hello name="ES6" enthusiasmLevel={10} />,
  document.getElementById('root'),
);
