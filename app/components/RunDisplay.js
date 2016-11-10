import React, { Component } from 'react'
import { View, Text, Picker, Animated, Easing, StyleSheet } from 'react-native'

class RunDisplay extends Component {
  constructor(props) {
    super(props)
    let countDown
    this.state = {
      countDown: new Animated.Value(30),
      spin: 30
    }
  }
  componentDidMount() {
    this.state.countDown.setValue(0)
    Animated.timing(
      this.state.countDown,
      {
        toValue: 30,
        duration: 3000
      }
    ).start()
  }

  spinner(n) {
    setTimeout(
      () => { console.log('I do not leak!'); },
      500
    );
   this.setState({ spin: n }) 
  }

  render() {
    const scrollStyle = {
      flex: 4,
      width: 100,
    }
    const numberStyle = {
      fontSize: 28,
      color: '#493d26',
    }
    const Item = Picker.Item
    const minutes = [...Array(60)].map((t, i) => i.toString())
    const AnimatedPicker = Animated.createAnimatedComponent(Picker)

    return (
      <Animated.View>
        <AnimatedPicker
          selectedValue={this.state.spin}
          onValueChange={(n) => this.spinner(n)}
          style={scrollStyle}
          itemStyle={[numberStyle]}
        >
          {minutes.map((n, i) =>
            <Item
              key={i}
              value={i}
              label={n}
            />
           )}
        </AnimatedPicker>
        <Text>{this.state.spin}</Text>
      </Animated.View>
    )
  }
}

export default RunDisplay
