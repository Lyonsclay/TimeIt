import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  connect
} from 'react-redux';
import Svg, {
  Circle,
  Line
} from 'react-native-svg';

const Hand = (props) => {
  const {
    width,
    height,
    radius
  } = props;
  const strokeWidth = props.clock.strokeWidth;

  return (
    <Svg width={width} height={height}>
    <Line
    x1={radius}
        y1={0.20 * radius}
        x2={radius}
        y2={radius}
        stroke='brown'
        strokeWidth={2 * strokeWidth}
        strokeLinecap='round'
      />
    </Svg>
  );
};

const Face = (props) => {
  const {
    width,
    height,
    radius,
    diameter
  } = props;
  const strokeWidth = props.clock.strokeWidth;
  const cx = radius + strokeWidth / 2;
  const cy = cx;
  const faceStyle = {
    position: 'absolute'
  };

  return (
    <Svg
      style={faceStyle}
      width={width}
      height={height}
    >
      <Circle
        cx={cx}
        cy={cy}
        r={radius}
        fill='#a0cfec'
        fillOpacity='1'
        stroke='#728c00'
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

let Clock = (props) => {
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

  const strokeWidth = clock.strokeWidth;

  return (
    <View style={styles.container}>
      <Face
        clock={props.clock}
        width={width}
        height={height}
        radius={radius}
      />
      <View style={clockStyle} >
        <Hand
          style={clockStyle}
          clock={props.clock}
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

const mapStateToProps = (state) => {
  return {
    clock: state.clock,
    screen: state.screen
  };
};

Clock = connect(mapStateToProps)(Clock);

export default Clock;
