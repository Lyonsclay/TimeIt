import {
  SET_DURATION,
  START,
  STOP,
  TOGGLE_ALARM
} from '../actions';

function clock(state = {}, action) {
  switch(action.type) {
    case SET_DURATION:
      return Object.assign({}, state, {
        duration: action.payload.duration
      });
    case START:
      return Object.assign({}, state, {
        running: true
      });
    case STOP:
      return Object.assign({}, state, {
        running: false
      });
    case TOGGLE_ALARM:
      return Object.assign({}, state, {
        alarm: !state.alarm
      })
    default:
      return state;
  }
}

export default clock;
