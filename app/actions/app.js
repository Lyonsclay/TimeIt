export const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE';
export const ADVANCE_MODE = 'ADVANCE_MODE'
export const REVERSE_MODE = 'REVERSE_MODE'

export function setScreenSize(width, height) {
  return { type: SET_SCREEN_SIZE, payload: { width, height } };
}

export function advanceTimerMode() {
  return { type: ADVANCE_MODE }
}

export function reverseTimerMode() {
  return { type: REVERSE_MODE }
}

