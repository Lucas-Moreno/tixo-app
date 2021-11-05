import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native"

import { __ } from "../../utils/translation"
import { appStyles } from "../../styles"
import Logo from "../../components/logo/logo"
import LinearGradient from "react-native-linear-gradient"
import axios from "axios"
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SCREEN_WIDTH = Dimensions.get("window").width

const Connexion = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [id, setId] = useState("")

  const goToInscription = () => {
    props.navigation.push("Inscription")
  }

  const goToHome = (e) => {
    e.preventDefault()

    let body = {
      mail: email,
      password: password,
    }

    axios.post(`http://localhost:80/auth/login`, body).then((res) => {
      setId(res.data.id)
      setToken(res.data.token)
    })
    // _storeData();
    // if(token.length > 0){
    //   props.navigation.push("Home")
    // }else{
    //   addToast(__('errorGlobal'), TOAST_TYPES.error);
    // }
  }

  // _storeData = async () => {
  //   try {
  //     await AsyncStorage.setItem(token)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  console.log(token)
  return (
    <LinearGradient colors={["#05C6AC", "#119FF1"]} style={styles.containerConnexion}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <View>
        <Text style={styles.textConnexion}>{__("titleConnection")}</Text>
        <Text style={styles.textAccount}>{__("subtitleConnection")}</Text>
      </View>
      <View>
        <Text style={styles.textInput}>{__("inputEmailUser")}</Text>
        <TextInput autoFocus={true} style={styles.input} placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} />
        <Text style={styles.textInput}>{__("inputPassword")}</Text>
        <TextInput
          // secureTextEntry={true}
          autoFocus={true}
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.forgotPassword}>{__("forgotPassword")}</Text>
      </View>
      <TouchableOpacity onPress={goToHome}>
        <View style={styles.containerButton}>
          <Text style={styles.textButton}>Connexion</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.containerCreateAccount}>
        <Text style={styles.noAccount}>{__("noAccountConnexion")}</Text>
        <Text onPress={goToInscription} style={styles.createAccount}>
          {__("goToInscription")}
        </Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  containerConnexion: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: appStyles.variables.colors.lightBlue,
  },
  containerLogo: {
    marginTop: 10,
  },
  textConnexion: {
    fontFamily: appStyles.variables.fontSemiBold,
    fontStyle: "normal",
    fontSize: 36,
    lineHeight: 54,
    textAlign: "center",
    color: "#FBF7F2",
    marginBottom: 5,
  },
  textAccount: {
    fontFamily: appStyles.variables.fontMedium,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    color: "#FBF7F2",
  },
  textInput: {
    fontFamily: appStyles.variables.fontMedium,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 21,
    color: "#FBF7F2",
  },
  input: {
    backgroundColor: "#FBF7F2",
    borderColor: "#119FF1",
    borderWidth: 2,
    borderRadius: 5,
    width: SCREEN_WIDTH - 100,
    height: 45,
    marginBottom: 8,
    paddingLeft: 10,
    color: appStyles.variables.colors.darkBlue,
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
  forgotPassword: {
    fontFamily: appStyles.variables.fontRegular,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    color: "#FBF7F2",
    marginTop: 10,
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
  containerCreateAccount: {
    flexDirection: "column",
    alignItems: "center",
  },
  noAccount: {
    fontFamily: appStyles.variables.fontRegular,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    color: "#FBF7F2",
    marginBottom: 5,
  },
  createAccount: {
    fontFamily: appStyles.variables.fontRegular,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    textAlign: "center",
    color: "#05C6AC",
  },
})

export default Connexion
