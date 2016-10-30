import { combineReducers } from 'redux';
import app from './app'
import screen from './screen'
import timer from './timer'

const clock = (state = {}) => state 

const rootReducer = combineReducers({app, screen, timer, clock });
export default rootReducer;
