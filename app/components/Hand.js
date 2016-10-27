import React from 'react';
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

const Hand = (props) => {
  const {
    width,
    height,
    radius,
    strokeWidth,
  } = props;
  const wind = new Animated.Value(0)

  const motionStyle = {
    transform: [{
      rotate: wind.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    }]
  }

  const _finish = () => {
    props.toggleTimer()
    props.toggleAlarm()
    props.end()
  }

  if (props.app.timerMode[0] === 'START') {
    Animated.timing(
      wind,
      {
        toValue: 1,
        duration: props.clock.duration * 10000,
        easing: Easing.none
      },
    ).start(_finish)
  }

  return (
    <Animated.View style={motionStyle}>
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
    </Animated.View>
  );
};

export default Hand;
