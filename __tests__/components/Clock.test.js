import { Text } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../app/reducers/rootReducer';
import Clock from '../../app/components/clock.react';

describe('Clock', () => {

  initialState = {
    screen: {
      width: 0,
      height: 0,
      xMid: 0,
      yMid: 0
    },

    clock: {
      diameter: 99,
      strokeWidth: 2.5,
      duration: 0.0,
      moving: false
    }
  }

  const store = createStore(
    rootReducer,
    initialState
  );

  const clock = renderer.create(
    <Provider store={store}>
    <Clock />
    </Provider>
  ).toJSON();

  it('has a <Circle />', ()  => {
    expect(clock).toMatchSnapshot();


  });
});
