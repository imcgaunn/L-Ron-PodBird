import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import './index.css';
import App from './App';
import {searchFocusReducer} from "./Search";
import registerServiceWorker from './registerServiceWorker';

const initialState = {searchActive: false}
const rootReducer = combineReducers({searchActive: searchFocusReducer});

let store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
