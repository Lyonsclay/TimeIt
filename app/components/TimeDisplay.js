import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RunDisplay from './RunDisplay'

const ShowTime = ({duration}) => {
  return (
    <Text style={styles.time}>
      {duration}
    </Text>
  )
}

const styles = StyleSheet.create({
  time: {
    fontSize: 28,
    color: '#493d26',
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 100,
    marginBottom: 40
  }
})

const TimeDisplay = (props) => {
  return (
    <View flexShrink={0} style={styles.view}>
    {(props.app.mode[0] === 'RUN') ? <RunDisplay {...props} /> : <ShowTime {...props.timer} />}
    </View>
  )
}

export default TimeDisplay
