import {createStore, combineReducers} from 'redux';
import userReducer from '../reducers/userReducer';

let initialState = {};

if(typeof window !== 'undefined' && window.__INITIAL_STATE__){
  initialState = window.__INITIAL_STATE__;
}

const store = createStore(combineReducers({userState: userReducer}), initialState);

export default store;
