import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Swing } from "react-native-animated-spinkit";
import BgAnimation from "../components/BgAnimation";
import React, { useState } from "react";

const LoadingScreen = () => {
  const loadingTexts = [
    "Loading your travel data",
    "Discovering amazing places",
    "Brewing your perfect trip",
    "Planning unforgettable moments",
    "Compiling must-see sights",
    "Preparing your dream itinerary",
    "Tailoring your perfect journey",
    "Arranging delightful surprises",
    "Unlocking hidden treasures",
    "Mapping out your adventure",
    "Gathering travel gems",
    "Curating your travel experience",
    "Almost there!",
    "Finalizing your dream vacation",
  ];
  const [loadingText, setLoadingText] = React.useState(loadingTexts[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
        const currentIndex = loadingTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BgAnimation />
      <View style={styles.container}>
        <View style={styles.loaderWrapper}>
          <Swing size={0} color="#fff" />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{loadingText}</Text>
        </View>
      </View>
    </>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 20,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textWrapper: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  text: {
    fontSize: 16,
    letterSpacing: 3,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});
