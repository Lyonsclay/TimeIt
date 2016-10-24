export const SET_SCREEN_SIZE = 'SCREEN_SIZE';
export const SET_DURATION = 'SET_DURATION';
export const START = 'START';
export const STOP = 'STOP';
export const TOGGLE_TIMER = 'TOGGLE_TIMER'
export const TOGGLE_ALARM = 'TOGGLE_ALARM'

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

export function toggleTimer() {
  return { type: TOGGLE_TIMER }
}

export function toggleAlarm() {
  return { type: TOGGLE_ALARM }
}
