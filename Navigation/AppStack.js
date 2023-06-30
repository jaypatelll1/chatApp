import React from "react";
import Home from "../screens/Home";
import ChatScreen from "../screens/ChatScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function AppStack() {
  const Stack = createNativeStackNavigator();

  return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
  );
}

