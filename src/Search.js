import React from 'react';
import './Search.css';
import searchIcon from './images/SearchIcon.svg';

import { connect } from 'react-redux';

const SEARCH_FOCUS_CHANGED = 'SEARCH FOCUS CHANGED';
const SEARCH_SUBMITTED = 'SEARCH SUBMITTED';
const SEARCH_KEY_PRESSED = 'SEARCH KEY PRESSED';

const mapStateToProps = (state) => {
    return {
        searchActive: state.searchActive
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchFocusChanged: searchFocusChanged,
        onSearchSubmitted: searchKeyPressed
    };
};

const searchFocusChanged = (focused) => {
    console.dir('this is being called!!!');
    return {
        type: SEARCH_FOCUS_CHANGED,
        payload: {focused: focused}
    };
};

const searchKeyPressed = (event) => {
    console.dir(event.keyCode);
    switch(event.keyCode) {
        case 13: return {
            type: SEARCH_SUBMITTED,
            payload: {search: event.target}
        };
        default: return {
            type: SEARCH_KEY_PRESSED,
            payload: {search: event.target}
        };
    }
};

const searchFocusReducer = (state = false, action) => {
    console.log('is this log ever seen??');
    switch(action.type) {
        case SEARCH_SUBMITTED:
            break;
        case SEARCH_KEY_PRESSED:
            break;
        case SEARCH_FOCUS_CHANGED:
            break;
    }
    return state;
};

const SearchBar = (props) => {
    const searchActiveString = (active) => {
        return active ? 'searchActive' : 'searchNotActive';
    };
    return (
        <div className="podcastSearchBar">
            <div className="searchDonut">
                <img src={searchIcon} alt='gross'/>
            </div>
            <input type="text"
                   onFocus={props.onSearchFocusChanged}
                   onKeyDown={props.onSearchSubmitted}
                   className={searchActiveString(props.searchActive)}/>
        </div>
    );
};

export {searchFocusReducer};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);