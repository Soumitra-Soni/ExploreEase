// Detail.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import LoadingScreen from "../../components/LoadingScreen";
import DayItinerary from "../../components/DayItinerary";
import renderItinerary from "../../components/RenderItinerary";
import { Home } from "../src/Home";

const Detail = ({ route }) => {
  const navigation = useNavigation();
  const { itinerary, isLoading } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const days = renderItinerary(itinerary);
  const [colorAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: currentIndex,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < days.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const colors = [
    "#F8BBD0",
    "#FFECB3",
    "#C5E1A5",
    "#B3E5FC",
    "#FFAB91",
    "#CE93D8",
    "#DCEDC8",
    "#B2EBF2",
  ];

  const validColors = colors.slice(0, Math.max(2, days.length));

  const interpolateColor = colorAnim.interpolate({
    inputRange: [...Array(validColors.length).keys()],
    outputRange: validColors,
  });

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <LoadingScreen style={styles.loading} />
      ) : (
        <Animated.View
          style={[
            styles.detailContainer,
            { backgroundColor: interpolateColor },
          ]}
        >
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Ionicons name="arrow-back" size={35} color="black" />
            </TouchableOpacity>
            <Text style={styles.heading}>Your Travel Itinerary</Text>
          </View>
          <DayItinerary
            day={days[currentIndex].day}
            details={days[currentIndex].details}
          />
          <View style={styles.navigationButtons}>
            {currentIndex > 0 && (
              <TouchableOpacity
                style={styles.navButton}
                onPress={handlePrevious}
              >
                <Ionicons name="arrow-back" size={35} color="#fff" />
              </TouchableOpacity>
            )}
            {currentIndex < days.length - 1 && (
              <TouchableOpacity style={styles.navButton} onPress={handleNext}>
                <Ionicons name="arrow-forward" size={35} color="#fff" />
              </TouchableOpacity>
            )}
          </View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  detailContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    width: "100%",
    margin: 20,
    backgroundColor: "transparent",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 20,
  },
  navButton: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 25,
  },
});

export default Detail;
