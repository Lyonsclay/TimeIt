import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Face from './Face';
import MovingHand from './MovingHand'

const TicToc = ({props}) => {
  const {
    diameter,
    strokeWidth
  } = props.clock
  const radius = diameter / 2 + 2.5
  const width = diameter + strokeWidth * 2
  const height = width
  const drawing = {
    style: styles.clock,
    strokeWidth,
    width,
    height,
    radius,
  }

  return (
    <View>
      <Text>{JSON.stringify(props)}</Text>
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

  const MovingHanding = (props) => (
    <TicToc {...props} >
      <MovingHand />
    </TicToc>
  )
  const xxMovingHanding = ({props}) => (
    <View style={{
      width: 100,
    }}>
      <Text style={{
        fontSize: 20,
        color: 'black'
      }}>{JSON.stringify(props)}</Text>
    </View>
  )
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
      <View>
        <MovingHanding props={props} />
      </View>
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
