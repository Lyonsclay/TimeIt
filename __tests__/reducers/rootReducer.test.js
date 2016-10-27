import { createStore } from 'redux';
import rootReducer from '../../app/reducers/rootReducer';
import {
  advanceTimerMode,
  reverseTimerMode,
  end,
  setDuration,
  setRemainder,
  setScreenSize
} from '../../app/actions';
const initialState = {
  app: {
    state_machine: ['INIT', 'SELECT', 'RUN', 'FREEZE']
  },
  timer: {
    duration: 0,
    current_time: 0,
  },
  screen: {
    width: 0,
    height: 0,
  },
  clock: {
    alarm: false,
  },

};

describe('clock reducer', () => {
  const store = createStore(rootReducer, initialState);

  it('sets the duration', () => {
    store.dispatch(setDuration(3000));

    const stateAfter = store.getState();

    expect(stateAfter.timer.duration).toBe(3000);
  });
});

describe('screen reducer', () => {
  const initialState = {
    screen: {
      width: 0,
      height: 0
    }
  };
  const store = createStore(rootReducer, initialState);

  it('sets the screen dimensions', () => {
    store.dispatch(setScreenSize(800, 300));

    stateAfter = store.getState();

    expect(stateAfter.screen).toEqual({ width: 800, height: 300 });
  });
});
