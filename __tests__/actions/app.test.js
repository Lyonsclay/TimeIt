import * as actions from '../../app/actions/app'
import {
 SET_SCREEN_SIZE,
 ADVANCE_TIMER_MODE,
 REVERSE_TIMER_MODE,
} from '../../app/actions/app'

const types = actions.types

describe('app', () => {
  it('setScreenSize', () => {
    const expectedAction = {
      type: SET_SCREEN_SIZE,
      payload: { width: 0, height: 0 },
    } 

    expect(actions.setScreenSize(0, 0)).toEqual(expectedAction)
  })

  it('advanceTimerMode', () => {
    const expectedAction = {
      type: ADVANCE_TIMER_MODE
    }

    expect(actions.advanceTimerMode()).toEqual(advanceTimerMode)
  })
})
