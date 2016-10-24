import {
  TOGGLE_TIMER,
  ALERT
} from '../actions'

const rotate = (array) => {
  return array.slice(1).concat(array[0])
}

function app(state = {}, action) {
  switch(action.type) {
    case TOGGLE_TIMER:
      return Object.assign({}, state, { timerView: rotate(state.timerView) })
    default:
      return state
  }
}

export default app
