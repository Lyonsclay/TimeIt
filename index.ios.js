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
import Clock from './app/components/clock';

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

const Timer = () => {
  console.log('store age us *****************************', store.getState())
  return <Provider store={store}><Clock /></Provider>;
};

class TimeIt extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer />
        <Text style={styles.welcome}>
          Welcome to this Appitude...* 
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TimeIt', () => TimeIt);
