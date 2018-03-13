import React from 'react';
import { connect } from 'react-redux';
import searchIcon from './images/SearchIcon.svg';
import './Search.css'; // webpack needs this.

import {
    SEARCH_INPUT_FOCUSED,
    SEARCH_INPUT_BLURRED,
    SEARCH_KEY_PRESSED,
    SEARCH_SUBMITTED
} from "./actions";

// ## Action Creators
const searchInputFocused = () => {
    return {
        type: SEARCH_INPUT_FOCUSED,
        payload: {focused: true}
    };
};

const searchInputBlurred = () => {
    return {
        type: SEARCH_INPUT_BLURRED,
        payload: {focused: false}
    };
};

const searchKeyDown = (event) => {
    switch(event.keyCode) {
        case 13:
            return {
                type: SEARCH_SUBMITTED,
                payload: {search: event.target.value}
            };
        default:
            return {
                type: SEARCH_KEY_PRESSED,
                payload: {search: event.target.value}
            };
    }
};

// ## Reducers
const handleFocusChanged = (state = {searchActive: true}, action) => {
    switch(action.type) {
        case SEARCH_INPUT_FOCUSED:
            return {...state, searchActive: true};
        case SEARCH_INPUT_BLURRED:
            return {...state, searchActive: false};
        default:
            break;
    }
    return state;
};

const handleKeyDown = (state = {searchString: ""}, action) => {
    switch(action.type) {
        case SEARCH_KEY_PRESSED:
            break;
        case SEARCH_SUBMITTED:
            return {...state, searchString: action.payload.search};
        default:
            break;
    }
    return state;
};

const searchReducer = (state = {searchString: '', searchActive: true}, action) => {
    switch(action.type) {
        case SEARCH_KEY_PRESSED:
        case SEARCH_SUBMITTED:
            return handleKeyDown(state, action);
        case SEARCH_INPUT_BLURRED:
        case SEARCH_INPUT_FOCUSED:
            return handleFocusChanged(state, action);
        default:
            return state
    }
};

// ## Components
const searchClassName = active => {
    return active ? 'searchActive' : 'searchNotActive';
};
const SearchBar = (props) => {
    return (
        <div className="podcastSearchBar">
            <div className="searchIcon">
                <img src={searchIcon} alt='gross'/>
            </div>
            <input type="text"
                   onFocus={props.searchInputFocused}
                   onBlur={props.searchInputBlurred}
                   onKeyDown={props.searchKeyDown}
                   className={searchClassName(props.searchActive)}
            />
            <h1> {props.searchActive} </h1>
            <p> {props.searchString} </p>
        </div>
    );
};

// ## Redux Glue
const mapDispatchToProps = (dispatch) => {
    return {
        searchInputBlurred: event => dispatch(searchInputBlurred(event)),
        searchInputFocused: event => dispatch(searchInputFocused(event)),
        searchKeyDown: event => dispatch(searchKeyDown(event))
    };
};

const mapStateToProps = (state) => {
    return {
        searchActive: state.search.searchActive,
        searchString: state.search.searchString
    };
};

export {searchReducer}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);