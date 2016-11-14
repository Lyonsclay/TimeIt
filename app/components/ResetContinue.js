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
      color="brown"
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
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'beige'
  }
})

export default ResetContinue
