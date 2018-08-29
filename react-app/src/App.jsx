import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import NavBar from './components/pages/NavBar';
import { enthusiasm } from './reducers';

const store = createStore(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'ES6',
});

const App = () => (
  <div>
    <Provider store={store}>
      <NavBar />
    </Provider>
  </div>
);

export default App;