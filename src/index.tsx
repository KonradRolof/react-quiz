import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './i18n';
import './dev-server';
import Quiz from './components/Quiz';
import reduce from './reducers';
import './index.css';

const store = createStore(reduce, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Quiz />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
