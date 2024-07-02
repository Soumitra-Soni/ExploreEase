import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import Home from "@/app/src/Home";
import Detail from "@/app/src/Detail";
import Splash from "../components/Splash";
import TravelData from "@/app/src/TravelData";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Page() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarHidden: true,
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TravelData" component={TravelData} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
