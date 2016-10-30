import {
  SET_DURATION,
  SET_START_TIME,
  SET_REMAINDER,
} from '../actions/timer'

function timer(state = {}, action) {
  switch(action.type) {
    case SET_DURATION:
      const { duration } = action.payload
      return Object.assign({}, state, {
        duration,
        remainder: duration
      })
    case SET_START_TIME:
      return Object.assign({}, state, { startTime: new Date() })
    case SET_REMAINDER:
      
      return Object.assign({}, state, { remainder: action.payload.remainder })
    default:
      return state
  }
}

export default timer
