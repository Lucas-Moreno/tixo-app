import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, Dimensions, TextInput, Image } from "react-native"
import Logo from "../../components/logo/logo"
import LinearGradient from "react-native-linear-gradient"
import { appStyles } from "../../styles"
// import { loup } from "../../assets/index"
import axios from "axios"

const SCREEN_WIDTH = Dimensions.get("window").width

const OnBoarding = () => {
  const [name, setName] = useState("")
  const [displayName, setDisplayName] = useState([])

  const search = (text) => {
    setName(text)
    axios
      .get(`http://localhost:80/api/artist?name=${name}`)
      .then((response) => setDisplayName(response.data))
      .catch((e) => console.log(e))
  }

  return (
    <LinearGradient colors={["#05C6AC", "#119FF1"]} style={styles.containerOnBoarding}>
      <View style={styles.containerTopOnBoarding}>
        <View style={styles.containerLogo}>
          <Logo />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.textOnBoarding}>Quels sont vos artistes préférés ?</Text>
          <View style={styles.searchSection}>
            <TextInput onChangeText={(text) => search(text)} autoFocus={true} style={styles.input} placeholder="Rechercher un artiste" />
            {/* <Image style={styles.searchIcon} source={loup} /> */}
          </View>
        </View>
        <View>
          {displayName.map((element) => {
            return (
              <View key={element.key} style={{ margin: 10 }}>
                <Text>{element.name}</Text>
              </View>
            )
          })}
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  containerOnBoarding: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: "center",
    backgroundColor: appStyles.variables.colors.lightBlue,
  },
  containerTopOnBoarding: {
    marginTop: 80,
    flex: 0.35,
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerLogo:{
    marginBottom:50,
  },
  containerInput: {
    alignItems: "center",
  },
  textOnBoarding: {
    fontFamily: appStyles.variables.fontMedium,
    fontStyle: "normal",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    color: "#FBF7F2",
    width: SCREEN_WIDTH - 70,
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#FBF7F2",
    borderColor: "#119FF1",
    borderWidth: 2,
    borderRadius: 5,
    height: 45,
    marginBottom: 8,
    paddingLeft: 10,
    color: appStyles.variables.colors.darkBlue,
    flex: 1,
    marginHorizontal:30
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchIcon: {
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    position:'absolute',
    right:40,
    top:78,
  },
})

export default OnBoarding
