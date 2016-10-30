import {
  SET_SCREEN_SIZE
} from '../actions/screen'

function screen(state = {}, action) {
  switch(action.type) {
    case SET_SCREEN_SIZE:
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}

export default screen
