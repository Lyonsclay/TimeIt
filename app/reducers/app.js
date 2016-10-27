import {
  ADVANCE_MODE,
  REVERSE_MODE,
} from '../actions'

const advance = (array) => {
  return array.slice(1).concat(array[0])
}

const reverse = (array) => {
  return array.slice(-1).concat(array.slice(0, -1))
}

function app(state = {}, action) {
  switch(action.type) {
    case ADVANCE_MODE:
      return Object.assign({}, state, { timerMode: advance(state.timerMode) })
    case REVERSE_MODE:
      return Object.assign({}, state, { timerMode: reverse(state.timerMode) })
    default:
      return state
  }
}

export default app
