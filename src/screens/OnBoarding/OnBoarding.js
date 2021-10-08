import React from "react"
import { Text, View, StyleSheet } from "react-native"

const OnBoarding = () => {
  return (
    <View style={styles.onBoarding}>
      <Text> OnBoarding </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  onBoarding:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})

export default OnBoarding
