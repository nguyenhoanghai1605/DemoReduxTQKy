
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './Home/HomeReducer';
import detailReducer from './Detail/DetailReducer';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    homeReducer,
    detailReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
