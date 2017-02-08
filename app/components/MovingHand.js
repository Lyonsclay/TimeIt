import React, { Component } from 'react';
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

class MovingHand extends Component {
  constructor(props){
    super(props)
    const { remainder, duration } = props.timer
    const start =  duration - remainder
    this.state = {
      wind: new Animated.Value(start),
      duration,
      start
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.wind,
      {
        toValue: 1,
        duration: this.state.start * 1000,
        easing: Easing.none,
      }
    ).start()
  }

  render() {
    const {
      width,
      height,
      radius,
      strokeWidth,
    } = this.props;
    const { start, duration } = this.state 
    const motionStyle = {
      transform: [{
        rotate: this.state.wind.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
      }]
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
    )
  }
}

export default MovingHand;
