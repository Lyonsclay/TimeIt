import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  toggleSetTime
} from '../actions'
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import Svg, {
  Circle,
  Line
} from 'react-native-svg';
import Face from './Face';
import Hand from './Hand';

const Clock = (props) => {
  const {
    clock,
    screen
  } = props
  const diameter = clock.diameter;
  const radius = diameter / 2;
  const {
    xMid,
    yMid
  } = screen;
  const top = yMid - radius;
  const left = xMid - radius;
  const width = diameter + clock.strokeWidth;
  const height = width;
  const clockStyle = {}
  
  /* 
   *   if (props.app.timerView === 'START') {
   *     props.start()
   *   } else if (props.app.timerView === 'PAUSE') {
   *     props.stop()
   *   }
   * */
  return (
    <TouchableOpacity onPress={props.toggleTimer}>
      <View style={styles.container}>
        <Face
          strokeWidth={clock.strokeWidth}
          width={width}
          height={height}
          radius={radius}
          {...props}
        />
        <View style={clockStyle} >
          <Hand
            style={clockStyle}
            strokeWidth={clock.strokeWidth}
            width={width}
            height={height}
            radius={radius}
            {...props}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2
  }
});

/* 
 * const mapStateToProps = (state) => {
 *   return state
 * }
 * const mapDispatchToProps = (dispatch) => {
 *   return {
 *     hideTimeSet: () => dispatch(hideTimeSet())
 *   }
 * }*/

export default Clock;
