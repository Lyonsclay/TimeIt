import { combineReducers } from 'redux';
import app from './app'
import timer from './timer'
import screen from './screen';
import clock from './clock';

const rootReducer = combineReducers({app, timer, screen, clock});
export default rootReducer;
