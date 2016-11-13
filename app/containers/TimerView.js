import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import Clock from '../components/Clock';
import TimerInput from '../components/TimerInput'
import RunDisplay from '../components/RunDisplay'
import ResetContinue from '../components/ResetContinue'
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
    backgroundColor: '#786d5f',
    backgroundColor: '#e5efe3'
  },
  nothing: {
    flex: 1,
    backgroundColor: '#82caff',
  }
});

const Nothing = () => (
  <View style={styles.nothing}/>
)

const Lower = (props) => {
  switch(props.app.mode[0]) {
    case 'FREEZE':
      return (<ResetContinue {...props} />)
    case 'SELECT':
      return (<TimerInput {...props} />)
    default:
      return (<Nothing />)
  }
}

const Upper = (props) => {
  switch(props.app.mode[0]) {
    case 'RUN':
      return (<RunDisplay {...props} />)
    default:
      /* return (<ShowTime {...props} />)*/
      return (<Nothing />)
  }
}

const Timer = (props) => (
  <View style={styles.container}>
    <Upper {...props} />
    <Clock {...props} />
    <Lower {...props}/>
  </View>
)

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
    setRemainder: (remainder) => dispatch(setRemainder(remainder)),
    setScreenSize: () => dispatch(setScreenSize()),
    advanceAppMode: () => dispatch(advanceAppMode()),
    reverseAppMode: () => dispatch(reverseAppMode())
  }
}

const TimerView = connect(mapStateToProps, mapDispatchToProps)(Timer);

export default TimerView;
