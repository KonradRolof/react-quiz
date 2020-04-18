import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './i18n';
import Quiz from './components/Quiz';
import reduce from './reducers';
import './index.css';

const store = createStore(reduce);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Quiz />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
