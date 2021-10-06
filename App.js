import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Connexion from './src/screens/Connexion/Connexion.js'


export default function App() {
  return (
    <View style={styles.container}>
      <Connexion />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
