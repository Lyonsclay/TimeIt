import React from 'react';
import {
  StyleSheet,
  View
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
  } = props;
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
  const clockStyle = {
    top: 0,
    left: 0,
    width,
    height,
    position: 'absolute'
  };

  const faceStyle = {
    position: 'absolute'
  };

  return (
    <View style={styles.container}>
      <Face
        strokeWidth={clock.strokeWidth}
        width={width}
        height={height}
        radius={radius}
      />
      <View style={clockStyle} >
        <Hand
          style={clockStyle}
          strokeWidth={clock.strokeWidth}
          width={width}
          height={height}
          radius={radius}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 100
  }
});

export default Clock;

