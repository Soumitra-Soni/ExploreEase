import { View, Text } from "react-native";
import React from "react";

const renderItinerary = (text) => {
  const formatText = text.replace(/\*\*/g, "").replace(/\*/g, "-");
  const dayWiseItinerary = [];
  const lines = formatText.split("\n\n");

  let currentDayDetails = [];
  let currentDayTitle = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("Day")) {
      if (currentDayDetails.length > 0) {
        dayWiseItinerary.push({
          day: currentDayTitle,
          details: currentDayDetails,
        });
      }
      currentDayTitle = line;
      currentDayDetails = [];
    } else {
      currentDayDetails.push(
        <Text key={i} style={styles.itinerary}>
          {line}
        </Text>
      );
    }
  }
  if (currentDayDetails.length > 0) {
    dayWiseItinerary.push({
      day: currentDayTitle,
      details: currentDayDetails,
    });
  }
  return dayWiseItinerary;
};

export default renderItinerary;

const styles = {
  itinerary: {
    fontSize: 14,
    margin: 10,
    lineHeight: 30,
    textAlign: "justify",
    color: "#fff",
  },
};
