import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ShowTime = ({duration}) => {
  return (
      <Text style={styles.time}>
        {duration.toString()}
      </Text>
  )
}

const styles = StyleSheet.create({
  time: {
    fontSize: 28,
    color: 'green'
  },
  view: {
    height: 100
  }
})

const TimeDisplay = (props) => {
  return (
    <View style={styles.view}>
    {(props.app.showTimeSet) ? <ShowTime {...props.clock} /> : []}
    </View>
  )
}

export default TimeDisplay
