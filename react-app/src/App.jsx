import * as React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './App.css';
import NavBar from './components/pages/NavBar';
import reducers from './reducers';
import { isProd } from './constants/utils';

const store = createStore(
  reducers,
  isProd ? applyMiddleware(thunk) : applyMiddleware(thunk, logger),
);

const App = () => (
  <div>
    <Provider store={store}>
      <NavBar />
    </Provider>
  </div>
);

export default App;