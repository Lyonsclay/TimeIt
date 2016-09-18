import React, { Component } from 'react';
import { View, Text } from 'react-native';
/* import Svg, { Circle, Line } from 'react-native-svg';*/

const Hand = () => {
  return (
    <Line
      x1='100'
      y1='20'
      x2='100'
      y2='100'
      opacity='0.5'
      stroke='cyan'
      strokeWidth='2.5'
    />
  );
};

const Face = () => {
  return (
    <Svg width='200' height='200'>
      <Circle
        cx='100'
        cy='100'
        r='99'
        fillOpacity='0'
        stroke='cyan'
        strokeWidth='2.5'
      />
    </Svg>
  );
};

const Clock = () => {
  render () {
    return (
      <View>
        <Text>Hello Gurl </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  clock: {
    width: diameter,
    height: diameter,
    position: 'absolute',
    top: yMid - radius,
    left: xMid - radius
  },
  face: {
    position: 'absolute'
  }
});

