export const SET_SCREEN_SIZE = 'SET_SCREEN_SIZE'

export function setScreenSize(width, height) {
  return { type: SET_SCREEN_SIZE, payload: { width, height} }
}
