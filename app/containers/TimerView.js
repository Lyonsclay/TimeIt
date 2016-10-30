import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import Clock from '../components/Clock';
import TimerInput from '../components/TimerInput'
import TimeDisplay from '../components/TimeDisplay'
import {
  advanceAppMode,
  reverseAppMode,
} from '../actions/app'
import {
  setDuration,
  setCurentTime,
  setRemainder,
} from '../actions/timer'
import {
  setScreen
} from '../actions/screen'

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
    timer: state.timer,
    clock: state.clock
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDuration: (duration) => dispatch(setDuration(duration)),
    setScreenSize: () => dispatch(setScreenSize()),
    advanceAppMode: () => dispatch(advanceAppMode()),
    reverseAppMode: () => dispatc(reverseAppMode())
  }
}
const TimerView = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default TimerView;
