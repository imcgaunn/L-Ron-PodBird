import React from 'react';
import { connect } from 'react-redux';
import searchIcon from './images/SearchIcon.svg';
import './Search.css'; // webpack needs this.

import {
    SEARCH_FOCUS_CHANGED,
    SEARCH_KEY_PRESSED,
    SEARCH_SUBMITTED
} from "./actions";

// ## Action Creators
const searchFocusChanged = (event) => {
    return {
        type: SEARCH_FOCUS_CHANGED,
        payload: {focused: event}
    };
};

const searchKeyPressed = (event) => {
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

// ## Reducers
const searchFocusReducer = (state = false, action) => {
    switch(action.type) {
        case SEARCH_FOCUS_CHANGED:
            break;
        default:
            break;
    }
    return state;
};

const searchKeyPressedReducer = (state = null, action) => {
    switch(action.type) {
        case SEARCH_KEY_PRESSED:
            break;
        default: break;
    }
    return state;
};

// ## Components
const SearchBar = (props) => {
    const searchActiveString = (active) => {
        return active ? 'searchActive' : 'searchNotActive';
    };
    return (
        <div className="podcastSearchBar">
            <div className="searchIcon">
                <img src={searchIcon} alt='gross'/>
            </div>
            <input type="text"
                   onFocus={props.searchFocusChanged}
                   onKeyDown={props.searchKeyPressed}
                   className={searchActiveString(props.searchActive)}/>
        </div>
    );
};

// ## Redux Glue
const mapDispatchToProps = (dispatch) => {
    return {
        searchFocusChanged: event => dispatch(searchFocusChanged(event)),
        searchKeyPressed: event => dispatch(searchKeyPressed(event))
    };
};

const mapStateToProps = (state) => {
    return {
        searchActive: state.searchActive
    };
};

export {searchFocusReducer, searchKeyPressedReducer};
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);