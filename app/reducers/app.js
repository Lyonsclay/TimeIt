import {
  ADVANCE_APP_MODE,
  REVERSE_APP_MODE,
} from '../actions/app'

const advance = (array) => {
  return array.slice(1).concat(array[0])
}

const reverse = (array) => {
  return array.slice(-1).concat(array.slice(0, -1))
}

function app(state = {}, action) {
  switch(action.type) {
    case ADVANCE_APP_MODE:
      return Object.assign({}, state, { mode: advance(state.mode) })
    case REVERSE_APP_MODE:
      return Object.assign({}, state, { mode: reverse(state.mode) })
    default:
      return state
  }
}

export default app
