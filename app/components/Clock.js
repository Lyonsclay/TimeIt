import React, {Component
} from 'react'
import {
  cnonnect
} from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Svg, {
  Line,
  G,
} from 'react-native-svg';
import Face from './Face';
import MovingHand from './MovingHand'
import StaticHand from './StaticHand'

const Draw = ({props, children}) => {
  const {
    diameter,
    strokeWidth
  } = props.clock
  const radius = diameter / 2 + 2.5
  const width = diameter + strokeWidth * 2
  const height = width
  const drawing = {
    style: styles.clock,
    strokeWidth,
    width,
    height,
    radius,
  }
  return React.createElement(children, props)
}

const NotMovingHand = ({width, radius, height, strokeWidth}) => (
  <Svg width={width} height={height}>
    <Line
      x1={radius}
      y1={0.20 * radius}
      x2={radius}
      y2={radius}
      stroke='brown'
      strokeWidth={2 * strokeWidth}
      strokeLinecap='round'
    /returreturnn>
  </Svg>
)

const Hand = (props) => (
  <Draw props={props} children={NotMovingHand} />
)


const Clock = (props) => {
  const {
    clock,
    screen
  } = props
  const {
    diameter,
    strokeWidth
  } = clock
  const radius = diameter / 2 + 2.5
  const width = diameter + strokeWidth * 2
  const height = width

return <Hand {...props} />
  /* return (
   *   <TouchableOpacity
   *     onPress={props.advanceAppMode}
   *     style={[styles.container, { height: width + strokeWidth }]}
   *   >
   *     <Face
   *       strokeWidth={strokeWidth}
   *       width={width + strokeWidth}
   *       height={height + strokeWidth}
   *       radius={radius}
   *       {...props}
   *     />
   *     <Hand {...props} />
   *   </TouchableOpacity>
   * )*/
}

const styles = StyleSheet.create({
  container: {

  },
  clock: {

  }
});

export default Clock;
