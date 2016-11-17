import React from 'react'
import {
  View,
  Animated,
  Easing
} from 'react-native';
import Svg, {
  Line,
  G,
  Text
} from 'react-native-svg';

const StaticHand = (props) => {
  const {
    width,
    height,
    radius,
    strokeWidth,
  } = props;

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
  )
}

export default StaticHand
