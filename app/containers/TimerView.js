import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import Clock from '../components/Clock';
import TimerInput from '../components/TimerInput'
import TimeDisplay from '../components/TimeDisplay'
import {
  toggleTimer,
  setDuration,
  toggleAlarm,
  start,
  stop
} from '../actions'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#82caff',
    backgroundColor: '#786d5f',
    backgroundColor: '#e5efe3'
  }
});

const Timer = (props) => {
  return (
    <View style={styles.container}>
      <TimeDisplay {...props} />
      <Clock {...props} />
      <TimerInput {...props} />
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    screen: state.screen,
    clock: state.clock
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTimer: () => dispatch(toggleTimer()),
    setDuration: (duration) => dispatch(setDuration(duration)),
    toggleAlarm: () => dispatch(toggleAlarm()),
    start: () => dispatch(start()),
    stop: () => dispatch(stop())
  }
}
const TimerView = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default TimerView;
