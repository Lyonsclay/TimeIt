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
import Hand from './Hand';

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

  return (
      <TouchableOpacity onPress={props.advanceAppMode}>
        <Face
          strokeWidth={strokeWidth}
          width={width + strokeWidth}
          height={height + strokeWidth}
          radius={radius}
          {...props}
        />
        <View style={styles.clock} >
          <Hand
            style={styles.clock}
            strokeWidth={strokeWidth}
            width={width}
            height={height}
            radius={radius}
            {...props}
          />
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
