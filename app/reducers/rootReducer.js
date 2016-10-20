import { combineReducers } from 'redux';
import screen from './screen';
import clock from './clock';
import app from './app'

const rootReducer = combineReducers({screen, clock, app});
export default rootReducer;
