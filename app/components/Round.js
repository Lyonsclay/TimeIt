import React from 'react';
import {
  View
} from 'react-native';
import Svg, {
  Circle,
  Line
} from 'react-native-svg';

class Round extends React.Component {
  render() {
    const {
      width,
      height,
      radius,
      strokeWidth
    } = this.props;
    const cx = radius + strokeWidth / 2;
    const cy = cx;
    const faceStyle = {
      position: 'absolute'
    };
    return (
        <Svg style={faceStyle} width={width} height={height}>
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
  }
}

export default Round;
