import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

const FloatingAnimation = () => {
  return (
    <View style={styles.animationContainer}>
      <LottieView
        source={require("../assets/Animations/HomeAnimated.json")}
        autoPlay
        loop
        resizeMode="cover"
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  animation: {
    width: "100%",
    height: "100%",
  },
});

export default FloatingAnimation;
