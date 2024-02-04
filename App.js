import { SafeAreaView } from "react-native";
import Navbar from "./Components/Common/Navbar";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Components/Screens/HomeScreen";
import DetailsScreen from "./Components/Screens/DetailsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <>
      <Navbar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
