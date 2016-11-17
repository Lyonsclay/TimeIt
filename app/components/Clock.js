import React, {Component
} from 'react'
import {
  cnonnect
} from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Face from './Face';
import MovingHand from './MovingHand'
import StaticHand from './StaticHand'

const Hand = (props) => {
  const hand = (props.app.mode[0] === 'RUN') ? MovingHand : StaticHand
  return (
    <View>
      {React.createElement(hand, props)}
    </View>
  )
}

const Clock = (props) => {
  const {
    clock,
    screen
  } = props
  const {
    diameter,
    strokeWidth
  } = clock
  const radius = diameter / 2 + 2.5
  const width = diameter + strokeWidth * 2
  const height = width
  const newProps = Object.assign({}, props, { radius, width, height, strokeWidth })

  return (
    <TouchableOpacity
      onPress={props.advanceAppMode}
      style={[styles.container, { height: width + strokeWidth }]}
    >
      <Face
        strokeWidth={strokeWidth}
        width={width + strokeWidth}
        height={height + strokeWidth}
        radius={radius}
        {...props}
      />
      <Hand {...newProps} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  clock: {

  }
});

export default Clock;
