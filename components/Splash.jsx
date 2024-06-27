import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/Animations/splash.json")}
        autoPlay
        loop={false}
        speed={1}
        onAnimationFinish={() => {
          console.log("Animation Finished");
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
