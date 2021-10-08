import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, Text, View } from "react-native"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Connexion from "./src/screens/Connexion/Connexion.js"
import Inscription from "./src/screens/Inscription/Inscription.js"
import OnBoarding from "./src/screens/OnBoarding/OnBoarding.js"
import Home from "./src/screens/Home/Home.js"

const { Navigator, Screen } = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Login" component={Connexion} />
        <Screen name="Inscription" component={Inscription} />
        <Screen name="OnBoarding" component={OnBoarding} />
        <Screen name="Home" component={Home}/>
      </Navigator>
    </NavigationContainer>
  )
}
