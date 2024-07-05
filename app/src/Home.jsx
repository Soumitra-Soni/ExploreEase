import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import BgAnimation from "../../components/BgAnimation";
import Fonts from "../../components/Fonts";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("TravelData");
  };

  return (
    <View style={styles.container}>
      <Fonts />
      <BgAnimation />
      <StatusBar
        translucent={true}
        backgroundColor="#000"
        barStyle="light-content"
      />
      <View style={styles.blurContainer}>
        <Text style={styles.heading}>Welcome to</Text>
        <Text style={styles.heading}>ExploreEase!</Text>
        <Text style={styles.text}>
          Your Personal AI Based Travel Itinerary Generator
        </Text>

        <View style={styles.socials}>
          <Ionicons name="logo-github" size={30} color="#fff" />
          <Ionicons name="logo-linkedin" size={30} color="#fff" />
          <Ionicons name="logo-twitter" size={30} color="#fff" />
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Ionicons name="arrow-forward" size={60} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 30,
  },

  blurContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    fontFamily: "Orbitron-Bold",
  },
  text: {
    fontSize: 20,
    color: "#fff",
    textAlign: "left",
    fontFamily: "Orbitron-Regular",
    marginVertical: 20,
  },
  socials: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    width: "100%",
    marginTop: 100,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#fff",
    padding: 30,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Home;
