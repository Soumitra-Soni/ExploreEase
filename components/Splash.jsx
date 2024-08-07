import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/Animations/splash.json")}
        autoPlay
        loop={false}
        speed={1}
        resizeMode="cover"
        onAnimationFinish={() => {
          console.log("Animation Finished");
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Splash;
