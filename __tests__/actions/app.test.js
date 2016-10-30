import * as actions from '../../app/actions/app'
import {
 SET_SCREEN_SIZE,
 ADVANCE_APP_MODE,
REVERESE_APP_MODE,
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

  it('advanceAppMode', () => {
    const expectedAction = {
      type: ADVANCE_APP_MODE
    }

    expect(actions.advanceAppMode()).toEqual(expectedAction)
  })
})
