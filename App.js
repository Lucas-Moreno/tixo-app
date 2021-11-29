import React, { useState, useEffect, useMemo } from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Connexion from "./src/screens/Connexion/Connexion.js"
import Inscription from "./src/screens/Inscription/Inscription.js"
import OnBoarding from "./src/screens/OnBoarding/OnBoarding.js"
import Home from "./src/screens/Home/Home.js"
import { AuthContext } from "./src/context/AuthContext"

const { Navigator, Screen } = createStackNavigator()

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)

  const authContext = useMemo(() => ({
    signIn: (token) => {
      setUserToken("token")
      setIsLoading(false)
    },
    signOut: () => {
      setUserToken(null)
      setIsLoading(false)
    },
  }), [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken === "token" ? (
          <Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Screen name="Home" component={Home} />
          </Navigator>
        ) : (
          <Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Screen name="Login" component={Connexion} />
            <Screen name="Inscription" component={Inscription} />
            <Screen name="OnBoarding" component={OnBoarding} />
          </Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
