import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import Clock from '../components/Clock';
import TimerInput from '../components/TimerInput'
import TimeDisplay from '../components/TimeDisplay'
import {
  showTimeSet,
  hideTimeSet,
  setDuration
} from '../actions'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#82caff'
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
    showTimeSet: () => dispatch(showTimeSet()),
    hideTimeSet: () => dispatch(hideTimeSet()),
    setDuration: (duration) => dispatch(setDuration(duration))
  }
}
const TimerView = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default TimerView;
