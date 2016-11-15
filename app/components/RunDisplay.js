import React, { Component } from 'react'
import {
  View,
  Text,
  Easing,
  StyleSheet,
  Animated
} from 'react-native'

class RunDisplay extends Component {
  constructor(props) {
    super(props)
    const duration = props.timer.duration

    this.state = {
      spin: duration,
      interval: 960,
    }
  }

  decrement() {
    if (this.state.spin > 0) {
      this.setState({ spin: this.state.spin - 1 })
    }
  }

  componentWillMount() {
    const mode = this.props.app.mode[0]

    if (mode === 'RUN') {
      this.windDown = setInterval(() => {
        this.decrement()
      }, this.state.interval)
    }
  }

  componentWillUnmount() {
    clearInterval(this.windDown)
  }

  render() {
    return (
      <Text style={styles.time}>{this.state.spin}</Text>
    )
  }
}

const styles = StyleSheet.create({
  time: {
    fontSize: 28,
    color: '#493d26',
  },
})

export default RunDisplay
