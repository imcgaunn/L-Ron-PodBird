import React from 'react';
import {SearchBar, SearchResult} from "./Search";
import './App.css';

const appTitle = "LronPodManz";

const App = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to {appTitle}</h1>
            </header>
            <SearchBar/>
            <SearchResult/>
        </div>
    );
};

export default App;
export { appTitle };