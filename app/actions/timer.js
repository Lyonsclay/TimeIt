export const SET_DURATION = 'SET_DURATION';
export const SET_START_TIME = 'SET_START_TIME'
export const SET_REMAINDER = 'SET_REMAINDER'

export function setDuration(duration) {
  return { type: SET_DURATION, payload: { duration } }
}

export function setStartTime(time) {
  return { type: SET_START_TIME, payload: { time } }
}

export function setRemainder(remainder) {
  return { type: SET_REMAINDER, payload: { remainder } }
}

