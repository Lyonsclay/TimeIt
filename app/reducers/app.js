import {
  TOGGLE_SET_TIME,
  TOGGLE_TIMER
} from '../actions'

const rotate = (array) => {
  return array.slice(1).concat(array[0])
}

function app(state = {}, action) {
  switch(action.type) {
    case TOGGLE_SET_TIME:
      return Object.assign({}, state, { showSetTime: !state.showSetTime })
    case TOGGLE_TIMER:
      return Object.assign({}, state, { timerView: rotate(state.timerView) })
    default:
      return state
  }
}

export default app
