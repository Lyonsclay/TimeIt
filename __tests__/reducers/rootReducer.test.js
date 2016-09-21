import { createStore } from 'redux';
import rootReducer from '../../app/reducers/rootReducer';
import { start, stop, setDuration, setScreenSize } from '../../app/actions';

describe('clock reducer', () => {
  const initialState = {
    clock: {
      running: false, 
      duration: 0.0
    }
  };
  const store = createStore(rootReducer, initialState);

  it('starts the clock', () => {
    store.dispatch(start());

    const stateAfter = store.getState();

    expect(stateAfter.clock.running).toBe(true);
  });

  it('stops the clock', () => {
    store.dispatch(start());
    store.dispatch(stop());

    const stateAfter = store.getState();

    expect(stateAfter.clock.running).toBe(false);
  });

  it('sets the duration', () => {
    store.dispatch(setDuration(30.0));

    const stateAfter = store.getState();

    expect(stateAfter.clock.duration).toBe(30.0);
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
