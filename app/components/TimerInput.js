import React, { Component } from 'react'
import { Picker, View, Text, StyleSheet } from 'react-native'

const DurationPicker = ({props}) => {
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
  const label = 'Time It'

  return (
    <Picker
      selectedValue={props.clock.duration}
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

const styles = StyleSheet.create({
  view: {
    flex: 2,
    height: 100,
    marginTop: 50,
    justifyContent: 'space-between'
  }
})

const SetTime = (props) => {
  return (
    <View style={styles.view}>
      {(props.app.timerMode[0] === 'SELECT') ? <DurationPicker props={props} /> : []}
    </View>
  )
}

export default SetTime
