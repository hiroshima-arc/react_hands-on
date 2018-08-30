import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import NavBar from './components/pages/NavBar';
import reducers from './reducers';

const store = createStore(reducers);

const App = () => (
  <div>
    <Provider store={store}>
      <NavBar />
    </Provider>
  </div>
);

export default App;