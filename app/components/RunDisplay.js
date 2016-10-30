import React from 'react'
import { View, Picker, Animated, Easing, StyleSheet } from 'react-native'

const RunDisplay = ({props}) => {
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
  const countDown = new Animated.Value(0)
  Animated.timing(
    countDown,
    {
      toValue: 0,
      duration:  3000
    }) 
  return (
    <Picker
      selectedValue={30}
      style={scrollStyle}
      itemStyle={numberStyle}
    >
      {minutes.map((n, i) =>
        <Item
          key={i}
          value={countDown}
          label={countDown.toString()}
        />
       )}
    </Picker>
  )
}

export default RunDisplay
