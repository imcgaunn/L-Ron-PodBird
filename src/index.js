import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './App';
import {searchFocusReducer, searchKeyPressedReducer} from "./Search";
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    searchFocusReducer,
    searchKeyPressedReducer
});

let store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
