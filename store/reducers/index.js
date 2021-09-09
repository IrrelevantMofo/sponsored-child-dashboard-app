import { combineReducers } from 'redux';
import { siteReducer } from './children';

export default combineReducers(
    {
        siteData:siteReducer
    }
);
