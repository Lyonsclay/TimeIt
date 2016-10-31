import React from 'react'
import { View, Text, Picker, Animated, Easing, StyleSheet } from 'react-native'

const RunDisplay = (props) => {
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
      toValue: 1,
      duration:  3000
    }).start()

  const value = () => countDown.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30]
  })

  const AnimatedPicker = Animated.createAnimatedComponent(Picker)

  return (
    <Animated.View>
      <AnimatedPicker
        selectedValue={props.timer.duration}
        onValueChange={props.setRemainder}
        style={scrollStyle}
        itemStyle={[numberStyle, { opacity: countDown._value }]}
      >
        {minutes.map((n, i) =>
          <Item
            key={i}
            value={n}
            label={n}
          />
         )}
      </AnimatedPicker>
      <Text>{JSON.stringify(value)}</Text>
    </Animated.View>
  )
}

export default RunDisplay
