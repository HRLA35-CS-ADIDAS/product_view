import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './redux/reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    allReducers,
    composeWithDevTools(
        applyMiddleware(thunk),
      ));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));