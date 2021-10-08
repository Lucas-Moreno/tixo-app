import React from "react"
import { Text, View, StyleSheet } from "react-native"

const Home = () => {
  return (
    <View style={styles.onBoarding}>
      <Text> Home </Text>
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

export default Home
