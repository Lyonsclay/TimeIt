export const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE';
export const ADVANCE_APP_MODE = 'ADVANCE_APP_MODE'
export const REVERESE_APP_MODE = 'REVERSE_TIMER_MODE'

export function setScreenSize(width, height) {
  return { type: SET_SCREEN_SIZE, payload: { width, height } };
}

export function advanceAppMode() {
  return { type: ADVANCE_APP_MODE }
}

export function reverseAppMode() {
  return { type: REVERESE_APP_MODE }
}

