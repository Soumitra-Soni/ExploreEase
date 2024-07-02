import { useFonts } from "expo-font";

const Fonts = () => {
  let [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Orbitron: require("../assets/fonts/Orbitron-Regular.ttf"),
    "Orbitron-Bold": require("../assets/fonts/Orbitron-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
};

export default Fonts;
