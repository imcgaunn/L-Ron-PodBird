import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import './index.css';
import App from './App';
import {searchReducer} from "./Search";
import registerServiceWorker from './registerServiceWorker';

const initialState = {
    search: {},
    app: {title: 'L Ron PodBird'}
};

const titleReducer = (state = {title: initialState.app.title}, action) => {
    return state;
};

const rootReducer = combineReducers({
    search: searchReducer,
    app: titleReducer
});

let store = createStore(rootReducer, initialState, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
