import { StyleSheet, Text, View,StatusBar } from "react-native";
import Home from "./screens/Home";
import ChatScreen from "./screens/ChatScreen";
import MainScreen from "./screens/Main";
import Login from "./screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native/Libraries/NewAppScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop:StatusBar.currentHeight
  } });