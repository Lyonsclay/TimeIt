import { combineReducers } from 'redux';
import screen from './screen';
import clock from './clock';
const rootReducer = combineReducers({screen, clock});
export default rootReducer;
