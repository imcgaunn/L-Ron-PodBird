import React from 'react';
import {connect} from 'react-redux';
import Search from "./Search";
import './App.css';

const App = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to {props.appTitle}</h1>
            </header>
            <Search/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        appTitle: state.app.title
    };
};

export default connect(mapStateToProps)(App);
