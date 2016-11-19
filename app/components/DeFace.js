var ReactART = require('ReactNativeART');
var {
  Surface,
  Path,
  Group,
  Transform,
  Shape,
} = ReactART;
import React from 'react';
import {
  View,
  Animated,
  Easing,
} from 'react-native';
import Svg, {
  Circle,
} from 'react-native-svg';

const Face = (props) => {
  const {
    width,
    height,
    radius,
    strokeWidth
  } = props;
  const cx = radius + strokeWidth / 2
  const cy = cx;
  const faceStyle = {
    position: 'absolute',
  }
  let pulse = new Animated.Value(0)

  const visualAlarm = () => {
    Animated.sequence([
      Animated.timing(
        pulse,
        {
          toValue: 1,
          duration: 250,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        pulse,
        {
          toValue: 0,
          duration: 250,
          easing: Easing.ease
        }
      )
    ]).start(visualAlarm)
  }
  const activateAlarm = ((props.timer.remainder === 0) && (props.app.mode[0] === 'FREEZE'))
  const alarmStyle = (activateAlarm) ? { opacity: pulse } : {}

  if (activateAlarm) {
    visualAlarm()
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
      <Animated.View style={alarmStyle}>
        <Svg
          style={faceStyle}
          width={width}
          height={height}
        >
          <Circle
            cx={cx}
            cy={cy}
            r={radius}
            fill='#e5efe3'
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
