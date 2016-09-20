import { createStore } from 'redux';
import rootReducer from '../../app/reducers/rootReducer';
import { start, stop, set_duration } from '../../app/actions';

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
});
