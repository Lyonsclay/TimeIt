/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import rootReducer from './app/reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TimerView from './app/containers/TimerView'

const initialState = {
  app: {
    showSetTime: false,
    timerView: ['CLOCK', 'SELECT', 'START', 'PAUSE']
  },
  screen: {
    width: 0,
    height: 0
  },
  clock: {
    diameter: 99,
    strokeWidth: 2.5,
    duration: 0.0,
    running: false,
    alarm: false
  }
};

const store = createStore(
  rootReducer,
  initialState
);


const TimeIt = () => {
  return <Provider store={store}><TimerView /></Provider>;
};

AppRegistry.registerComponent('TimeIt', () => TimeIt);
