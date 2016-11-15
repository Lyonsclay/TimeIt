import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import Clock from '../components/Clock';
import TimerInput from '../components/TimerInput'
import RunTime from '../components/RunDisplay'
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

const Nothing = () => (
  <View style={styles.nothing}/>
)

const Duration = ({duration}) => (
  <Text style={styles.time}>{duration}</Text>
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
      return (<RunTime {...props} />)
    default:
      return (<Duration duration={props.timer.duration} />)
  }
}

const Timer = (props) => (
  <View style={styles.container}>
    <View style={styles.upper}>
      <Upper {...props} />
    </View>
    <View style={styles.clock}>
      <Clock {...props} />
    </View>
    <View style={styles.lower}>
      <Lower {...props}/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#786d5f',
    backgroundColor: '#e5efe3'
  },
  nothing: {
  },
  time: {
    fontSize: 28,
    color: '#493d26',
  },
  upper: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  clock: {
    flex: 2,
    justifyContent: 'flex-end',
  },
  lower: {
    flex: 3,
    justifyContent: 'flex-start',
  }
});

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
