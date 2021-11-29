import React, { useContext } from "react"
import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { appStyles } from "../../styles"
import { AuthContext } from "../../context/AuthContext"
const Home = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <View style={styles.onBoarding}>
      <Text> Home </Text>
      <TouchableOpacity
        onPress={() => {
          signOut()
        }}
      >
        <View style={styles.containerButton}>
          <Text style={styles.textButton}>Déconnexion</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  onBoarding: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    backgroundColor: appStyles.variables.colors.green,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 200,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: appStyles.variables.colors.whiteGray,
    fontFamily: appStyles.variables.fontRegular,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    textAlign: "center",
    color: "#FBF7F2",
  },
})

export default Home
