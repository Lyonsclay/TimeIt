import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import rootReducer from '../reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Clock from '../containers/ClockAnimated';

const initialState = {
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
};

const store = createStore(
  rootReducer,
  initialState
);

const TimerClock = () => {
  return <Provider store={store}><Clock /></Provider>;
};

class TimeIt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TimerClock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#82caff'
  }
});