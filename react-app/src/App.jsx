import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Nav from './components/pages/Nav';
import { enthusiasm } from './reducers';

const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'ES6',
});

const App = () => (
  <div>
    <Provider store={store}>
      <Nav />
    </Provider>
  </div>
);

export default App;