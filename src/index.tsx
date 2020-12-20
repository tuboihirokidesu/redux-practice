import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../style/main.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { counterReducer, initialState } from './reducer';

const store = createStore(counterReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
