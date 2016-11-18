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

/* const MovingHand = (this.props) => {*/
class MovingHand extends Component {
  constructor(props){
    super(props)
    const { remainder, duration } = props.timer
    const start =  duration - remainder
    this.state = {
      wind: new Animated.Value(start),
      mode: props.app.mode[0],
      duration,
      remainder,
      start
    }
  }

  _start = () => {
    Animated.timing(
      this.state.wind,
      {
        toValue: 1,
        duration: this.state.start * 1000,
        easing: Easing.none,
      }
    ).start(this._finish)
  }

  _stop = (status) => {
    this.state.wind.stopAnimation((elapse) => this.props.setRemainder(this.state.duration * elapse))
    alert(JSON.stringify(this.props.timer.remainder))
  }

  _finish = (status) => {
    if (status.finished) {
      this.props.advanceAppMode()
      this.props.setRemainder(0)
    }
  }

  componentWillMount () {

  }

  componentWillReceiveProps() {
    const { duration, start } = this.state
    const remainder = this.props.timer.remainder
    console.log('remainder    ::     duration    ::      start  ')
    console.log(remainder, duration, start)
    switch (this.props.app.mode[0]) {
      case 'RUN':
        return this._start()
      case 'FREEZE':
        if (start === 0) {
          return this._stop()
        }
    }
  }

  render() {
    const {
      width,
      height,
      radius,
      strokeWidth,
    } = this.props;
    const { start, duration } = this.state 
    const angle = ((start / duration) * 360).toString() + 'deg' 
    const motionStyle = {
      transform: [{
        rotate: this.state.wind.interpolate({
          inputRange: [0, 1],
          outputRange: [angle, '360deg']
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
