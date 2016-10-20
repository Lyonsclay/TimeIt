import React, { Component } from 'react'
import { PickerIOS, View, Text } from 'react-native'

const DurationPicker = (props) => {
  const scrollStyle = {
    flex: 0,
    width: 100,
  }
  const numberStyle = {
    fontSize: 28,
    color: 'orange'
  }
  const Item = PickerIOS.Item
  const minutes = [...Array(60)].map((t, i) => i.toString())
  let time = '0'
  const label = 'Time It'

  return (
      <PickerIOS
        selectedValue={props.clock.duration}
        style={scrollStyle}
        onValueChange={props.setDuration}
      >
        {minutes.map((n, i) =>
          <Item
            key={i}
            value={i}
            label={n}
          />
         )}
      </PickerIOS>
  )
}

const SetTimer = (props) => {
  return (
    <View>
  {(props.app.showTimeSet) ? <DurationPicker props={props} /> : []}
  </View>
)
}

export default DurationPicker
