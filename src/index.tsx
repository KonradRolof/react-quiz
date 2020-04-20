import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { makeServer } from "./dev-server";
import './i18n';
import Quiz from './components/Quiz';
import reduce from './reducers';
import './index.css';

const store = createStore(reduce, applyMiddleware(thunk));

if ('development' === process.env.NODE_ENV) {
  makeServer('development');
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Quiz />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
