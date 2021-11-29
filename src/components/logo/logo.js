import React from "react"
import { Text, View, StyleSheet, Image } from "react-native"
import { logoBlue } from "../../assets"
import { __ } from "../../utils/translation"
import { appStyles } from "../../styles"

const Logo = () => {
  return (
    <View style={styles.containerLogo}>
      <View>
        <Image source={logoBlue} style={styles.logo} />
      </View>
      <Text style={styles.textLogo}>{__("nameApp")}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    height: 80,
    width: 80,
    marginRight: 10,
  },
  textLogo: {
    color: appStyles.variables.colors.darkBlue,
    fontFamily: appStyles.variables.fontMedium,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 42,
    lineHeight: 48,
    paddingTop:7
  },
})

export default Logo
