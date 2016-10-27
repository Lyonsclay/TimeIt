import {
  SET_DURATION,
  SET_START_TIME,
  SET_REMAINDER,
} from '../actions'

function timer(state = {}, action) {
  switch(action.type) {
    case SET_DURATION:
      return Object.assign({}, state, { duration: action.payload.duration })
    case SET_START_TIME:
      return Object.assign({}, state, { startTime: action.payload.time })
    case SET_REMAINDER:
      return Object.assign({}, state, { remainder: action.payload.remainder })
    default:
      return state
  }
}

export default timer
