import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native"

import { __ } from "../../utils/translation"
import { appStyles } from "../../styles"
import Logo from "../../components/logo/logo"
import LinearGradient from "react-native-linear-gradient"
import axios from "axios"

const SCREEN_WIDTH = Dimensions.get("window").width

const Inscription = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const goToConnexion = () => {
    props.navigation.goBack()
  }

  const goToOnBoarding = (e) => {
    e.preventDefault()

    let body = {
      mail: email,
      pseudo: name,
      password: password,
    }

    axios.post(`http://localhost:80/auth/register`, body)
    .then((res) => {
      props.navigation.push('OnBoarding')
    })
    .catch((e) =>{
      console.log(e.message)
    })
  }

  return (
    <LinearGradient colors={["#05C6AC", "#119FF1"]} style={styles.containerConnexion}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <View>
        <Text style={styles.textConnexion}>{__("titleInscription")}</Text>
        <Text style={styles.textAccount}>{__("subtitleInscription")}</Text>
      </View>
      <View>
        <Text style={styles.textInput}>{__("inputEmailUser")}</Text>
        <TextInput autoFocus={true} style={styles.input} placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} />
        <Text style={styles.textInput}>{__("inputNameUser")}</Text>
        <TextInput
          autoFocus={true}
          style={styles.input}
          placeholder="Nom d’utilisateur"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.textInput}>{__("inputPassword")}</Text>
        <TextInput
          secureTextEntry={true}
          autoFocus={true}
          style={styles.input}
          placeholder="Mot de passe"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity onPress={goToOnBoarding}>
        <View style={styles.containerButton}>
          <Text style={styles.textButton}>Créer un compte</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.containerCreateAccount}>
        <Text style={styles.noAccount}>{__("noAccountInscription")}</Text>
        <Text onPress={goToConnexion} style={styles.createAccount}>
          {__("goToConnexion")}
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
    height: 40,
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

export default Inscription
