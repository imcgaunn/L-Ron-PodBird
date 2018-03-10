import React from 'react';
import './Search.css';
import {appTitle} from './App.js';
import cover from './images/HollywoodHandbookCover.jpg';

const SearchBar = (props) => {
    return (
        <div className="podcastSearchBar">
            <div className="searchDonut">
            </div>
            <input type="text"/>
        </div>
    );
};

const SearchResult = (props) => {
    return (
        <div className="podcastSearchResult">
            <img src={cover} alt='this is a great image'/>
        </div>
    );
};

export {SearchBar, SearchResult};