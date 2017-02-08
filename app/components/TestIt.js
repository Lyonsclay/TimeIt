var ReactART = require('ReactNativeART');
const {
  Surface,
  Shape,
  Path,
  Text,
} = ReactART;

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Animated,
  Easing,
} from 'react-native'

var MetricsPath = require('art/metrics/path');

var SVG_PATH = 'M30,30L200,200L202,200L150,200L300,500L305,550';
var gaph = 'M40,300C90,350C140,300'

var pathMetrics = new MetricsPath(SVG_PATH);
/* alert(JSON.stringify(pathMetrics))*/

var circlePath = new Path()
  .moveTo(100, 300)
  .arc(200, 0, 100, 100)
  .arc(-200, 0, 100, 100)
  .close()

class SampleApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      change: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.change,
      {
        toValue: 1,
        duration: 3000,
        }
      )
  }

  render() {
    var fill = this.state.change.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(34, 112, 164)', 'rgb(12, 120, 148)'],
    })
    var elf = fill ? {fill: fill} : {a: 200}

    return (
      <Surface width={320} height={600}>
        {/* <Text>{JSON.stringify(elf)}</Text> */}
        <Shape
          d={circlePath}
          fill="rgba(34, 112, 164, 1)"
          stroke="orange"
        />
      </Surface>
    );
  }
}

export default SampleApp
