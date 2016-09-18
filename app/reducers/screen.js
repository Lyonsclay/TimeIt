import { SCREEN_SIZE } from '../actions';

function screen(state = {}, action) {
  switch(action.type) {
    case SCREEN_SIZE:
      const width = action.payload.width;
      const height = action.payload.height;

      return { width, height };
    default:
      return state;
  }
}

export default screen;
