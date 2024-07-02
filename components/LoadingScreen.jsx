import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Bounce } from "react-native-animated-spinkit";
import React, { useState } from "react";

const LoadingScreen = () => {
  const loadingTexts = [
    "Loading...",
    "Discovering amazing places...",
    "Brewing your perfect trip...",
    "Planning unforgettable moments...",
    "Compiling must-see sights...",
    "Preparing your dream itinerary...",
    "Tailoring your perfect journey...",
    "Arranging delightful surprises...",
    "Unlocking hidden treasures...",
    "Mapping out your adventure...",
    "Gathering travel gems...",
    "Curating your travel experience...",
    "Almost there!...",
    "Finalizing your dream vacation...",
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
    <View style={styles.container}>
      <Bounce color="#45b6fe" size={100} />
      <Text style={styles.text}>{loadingText}</Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  text: {
    fontSize: 16,
    letterSpacing: 3,
    fontWeight: "thin",
    textAlign: "center",
  },
});
