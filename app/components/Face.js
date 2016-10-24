import React from 'react';
import {
  View,
  Animated,
  Easing
} from 'react-native';
import Svg, {
  Circle, G
} from 'react-native-svg';

const Face = (props) => {
  const {
    width,
    height,
    radius,
    strokeWidth
  } = props;
  const cx = radius + strokeWidth / 2;
  const cy = cx;
  const faceStyle = {
    position: 'absolute',
  };
  const pulse = new Animated.Value(0)

  const visualAlarm = () => {
    Animated.sequence([
      Animated.timing(
        pulse,
        {
          toValue: 1,
          duration: 250,
          easing: Easing.linear
        }),
      Animated.timing(
        pulse,
        {
          toValue: 0,
          duration: 250,
          easing: Easing.ease
        })
    ]
    ).start(visualAlarm)
  }

  if (props.clock.alarm && (props.app.timerView[0] === 'PAUSE')) {visualAlarm()
  }

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
        fillOpacity='1'
        fill='orange'
        stroke='#728c00'
        strokeWidth={strokeWidth}
      />
      <Animated.View style={{opacity: pulse}}>
        <Svg
          style={faceStyle}
          width={width}
          height={height}
        >
          <Circle
            cx={cx}
            cy={cy}
            r={radius}
            fill='red'
            fillOpacity='1'
            stroke='#728c00'
            strokeWidth={strokeWidth}
          />
        </Svg>
      </Animated.View>
    </Svg>
  );
};

export default Face;
//
