import * as actions from '../../app/actions/timer'
import {
 SET_DURATION,
 SET_START_TIME,
 SET_REMAINDER,
} from '../../app/actions/timer'

describe('timer', () => {
  it('setDuration', () => {
    const expectedAction = {
      type: SET_DURATION, payload: { duration: 30000 },
    } 

    expect(actions.setDuration(30000)).toEqual(expectedAction)
  })

  it('setStartTime', () => {
    const expectedAction = {
      type: SET_START_TIME,
      payload: { time: 20081212 }
    }

    expect(actions.setStartTime(20081212)).toEqual(expectedAction)
  })

  it('setRemainder', () => {
    const expectedAction = {
      type: SET_REMAINDER,
      payload: { remainder: 15000 }
    }

    expect(actions.setRemainder(15000)).toEqual(expectedAction)
  })
})
