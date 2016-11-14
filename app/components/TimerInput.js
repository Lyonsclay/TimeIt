import React, { Component } from 'react'
import { Picker, View, Text, StyleSheet } from 'react-native'

const DurationPicker = (props) => {
  const scrollStyle = {
    flex: 1,
    width: 100,
  }
  const numberStyle = {
    fontSize: 28,
    color: '#493d26',
  }
  const Item = Picker.Item
  const minutes = [...Array(60)].map((t, i) => i.toString())

  return (
    <Picker
      selectedValue={props.timer.duration}
      style={scrollStyle}
      onValueChange={(duration) => props.setDuration(duration)}
      itemStyle={numberStyle}
    >
      {minutes.map((n, i) =>
        <Item
          key={i}
          value={n}
          label={n}
        />
       )}
    </Picker>
  )
}
const SetTime = (props) => {
  return (
    <View style={styles.view}>
       <DurationPicker {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 2,
    justifyContent: 'flex-start',
    height: 100,
  }
})

export default SetTime
