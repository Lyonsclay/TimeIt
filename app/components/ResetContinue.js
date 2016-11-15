import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native'

const ResetContinue = (props) => {
  const width = 2.5 * props.clock.diameter
  const height = props.clock.diameter
  return (
    <View style={[styles.view, { width, height }]}>
      <Button
        onPress={props.advanceAppMode}
        title="RESET"
        color="brown"
      />
      <Button
        onPress={props.reverseAppMode}
        title="RESUME"
        color="green"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export default ResetContinue
