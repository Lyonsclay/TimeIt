import React, {
  Component
} from 'react';
import {
  View,
  Text
} from 'react-native';
import Svg, {
  Circle,
  Line
} from 'react-native-svg';

const Hand = (radius, strokeWidth) => {
  return (
    <Line
      x1={radius}
      y1={.20 * radius}
      x2={radius}
      y2={radius}
      opacity='0.5'
      stroke='cyan'
      strokeWidth={strokeWidth}
    />
  );
};

const Face = (diameter, strokeWidth) => {
  const radius = diameter / 2;
  const width = diameter + strokeWidth;
  const height = width;
  const cx = radius + strokeWidth / 2;
  const cy = cx;

  return (
    <Svg width={width} height={height}>
      <Circle
        cx={cx}
        cy={cy}
        r={radius}
        fillOpacity='0'
        stroke='cyan'
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

class Clock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props to you  --  ', this.props);
    const diameter = this.props.clock.diameter;
    const radius = diameter / 2;
    const xMid = this.props.screen.xMid;
    const yMid = this.props.screen.yMid;
    const strokeWidth = this.props.clock.strokeWidth;

    const clockStyle = {
      width: diameter,
      heigth: diameter,
      position: 'absolute',
      top: yMid - radius,
      left: xMid - radius
    };

    return (
      <View>
      <Face diameter={diameter} strokeWidth={strokeWidth} />
      <Hand radius={radius} strokewidth={strokeWidth} />
    </View>
    );
  };
};

export default Clock;
