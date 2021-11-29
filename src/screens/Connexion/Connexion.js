import React, { useState, useEffect, useContext } from "react"
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native"
import { __ } from "../../utils/translation"
import { appStyles } from "../../styles"
import Logo from "../../components/logo/logo"
import LinearGradient from "react-native-linear-gradient"
import { AuthContext } from "../../context/AuthContext"
import { login } from "../../api/routes"

const SCREEN_WIDTH = Dimensions.get("window").width

const Connexion = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [id, setId] = useState("")
  const [parameters, setParameters] = useState(false)

  const { signIn } = useContext(AuthContext)

  const goToInscription = () => {
    props.navigation.push("Inscription")
  }

  const goToHome = async (e) => {
    e.preventDefault()

    let body = {
      mail: email,
      password: password,
    }

    let response = await login(body)
    if (response === null) {
      setParameters(true)
    } else {
      setId(response.id)
      setToken(response.token)
      signIn(token)
    }
  }

  return (
    <LinearGradient colors={["#05C6AC", "#119FF1"]} style={styles.containerConnexion}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <View>
        <Text style={styles.textConnexion}>{__("titleConnection")}</Text>
        <Text style={styles.textAccount}>{__("subtitleConnection")}</Text>
      </View>
      {parameters ? (
        <View>
          <Text style={styles.textInput}>{__("inputEmailUser")}</Text>
          <TextInput autoFocus={true} style={styles.input} placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} />
          <Text style={styles.invalidParameters}>Votre email n'est pas correcte</Text>
          <Text style={styles.textInput}>{__("inputPassword")}</Text>
          <TextInput
            // secureTextEntry={true}
            autoFocus={true}
            style={styles.input}
            placeholder="Mot de passe"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={styles.invalidParameters}>Votre mot de passe n'est pas correcte</Text>
          <Text style={styles.forgotPassword}>{__("forgotPassword")}</Text>
        </View>
      ) : (
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
      )}
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
  invalidParameters: {
    color: appStyles.variables.colors.red,
    fontFamily: appStyles.variables.fontRegular,
    marginBottom: 5,
    marginLeft: 2,
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
