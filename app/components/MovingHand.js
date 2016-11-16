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
    const remainder = props.timer.remainder
    const duration = props.timer.duration
    const start =  duration - remainder
    this.state = {
      wind: new Animated.Value(start),
      mode: props.app.mode[0],
    }
  }
  _finish = (status) => {
    if (status.finished) {
      this.props.advanceAppMode()
      this.props.setRemainder(0)
    }
  }
  componentDidMount () {
    this.setState({
      motionStyle: {
        transform: [{
          rotate: this.state.wind.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
          })
        }]
      }
    })
  }

  componentDidUpdate() {
    if (this.props.app.mode[0] === 'RUN') {
      Animated.timing(
        this.state.wind,
        {
          toValue: 1,
          duration: this.props.timer.duration * 1000,
          easing: Easing.none
        }
      ).start(this._finish)
    }
  }

  componentWillUnmount() {
    /* this.state.wind.stopAnimation(this.props.setRemainder)*/
  }

  render() {
    const {
      width,
      height,
      radius,
      strokeWidth,
    } = this.props;

    return (
      <Animated.View style={this.state.motionStyle}>
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
