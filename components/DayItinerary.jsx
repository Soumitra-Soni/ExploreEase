import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const DayItinerary = ({ day, details }) => {
  return (
    <View style={styles.outerContainer}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <View style={styles.dayTextContainer}>
          <Text style={styles.dayText}>{day}</Text>
        </View>
        {details}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000",
    opacity: 0.8,
    padding: 20,
    margin: 20,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
  },
  innerContainer: {
    flexGrow: 1,
    width: "100%",
    alignItems: "justify",
  },
  dayTextContainer: {
    padding: 10,
    borderRadius: 25,
  },
  dayText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "justify",
    color: "#fff",
  },
});

export default DayItinerary;
