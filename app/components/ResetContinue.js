import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native'

const glow = () => {
  alert('glow')
}

const ResetContinue = (props) => (
  <View style={styles.view}>
    <Button
      onHover={glow}
      onPress={props.advanceAppMode}
      title="RESET"
      color="red"
      />
    <Button
      onPress={props.reverseAppMode}
      title="CONTINUE"
      color="green"
      />
  </View>
)

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'pink',

  }
})

export default ResetContinue
