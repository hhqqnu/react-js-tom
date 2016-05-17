import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reduces';
import App from './components/App';

let store = createStore(todoApp);



const rootApp = document.querySelector('#app');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootApp
)
