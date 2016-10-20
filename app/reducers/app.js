import {
  SHOW_TIME_SET,
  HIDE_TIME_SET
} from '../actions'

function app(state = {}, action) {
  switch(action.type) {
    case SHOW_TIME_SET:
      return Object.assign({}, state, { showTimeSet: true })
    case HIDE_TIME_SET:
      return Object.assign({}, state, { showTimeSet: false })
    default:
      return state
  }
}

export default app
