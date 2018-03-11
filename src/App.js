import React from 'react';
import Search from "./Search";
import './App.css';

const appTitle = "LronPodManz";

const App = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to {appTitle}</h1>
            </header>
            <Search/>
        </div>
    );
};

export default App;
export { appTitle };