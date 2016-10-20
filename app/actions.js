export const SET_SCREEN_SIZE = 'SCREEN_SIZE';
export const SET_DURATION = 'SET_DURATION';
export const START = 'START';
export const STOP = 'STOP'; 
export const SHOW_TIME_SET = 'SHOW_TIME_SET'
export const HIDE_TIME_SET = 'HIDE_TIME_SET'

export function setScreenSize(width, height) {
  return { type: SET_SCREEN_SIZE, payload: { width, height } };
}

export function setDuration(duration) {
  return { type: SET_DURATION, payload: { duration } };
}

export function start() {
  return { type: START };
}

export function stop() {
  return { type: STOP };
}

export function showTimeSet() {
  return { type: SHOW_TIME_SET }
}

export function hideTimeSet() {
  return { type: HIDE_TIME_SET }
}
