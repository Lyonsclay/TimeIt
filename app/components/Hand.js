import React from 'react';
import {
  View
} from 'react-native';
import Svg, {
  Circle,
  Line
} from 'react-native-svg';

const Hand = (props) => {
  const {
    width,
    height,
    radius,
    strokeWidth
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
  );
};

export default Hand;
