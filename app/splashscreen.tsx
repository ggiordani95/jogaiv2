import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function CustomSplashScreen() {
  return (
    <LinearGradient
      colors={["#1a1a1a", "#0e0e0e", "#000000"]}
      style={styles.container}
    >
      <Text style={styles.text}>Carregando...</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
