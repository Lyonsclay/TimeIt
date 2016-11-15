import React, { Component } from 'react'
import { Picker, View, Text, StyleSheet } from 'react-native'

const DurationPicker = (props) => {
  const Item = Picker.Item
  const minutes = [...Array(60)].map((t, i) => i.toString())

  return (
    <Picker
      selectedValue={props.timer.duration.toString()}
      style={styles.picker}
      onValueChange={(duration) => props.setDuration(duration)}
      itemStyle={styles.number}
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

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    width: 100,
  },
  number: {
    fontSize: 28,
    color: '#493d26'
  }
})

export default DurationPicker 
