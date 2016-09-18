import { SET_DURATION, START, STOP } from '../actions';

function clock(state = {}, action) {
  switch(action.type) {
    case SET_DURATION:
      const duration = action.payload.duration;

      return Object.assign({}, state, { duration });
    case START:
      return Object.assign({}, state, {
        running: true
      });
    case STOP:
      return Object.assign({}, state, {
        running: false
      });
    default:
      return state;
  }
}

export default clock;
