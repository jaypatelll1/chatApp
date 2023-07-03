import React from "react";
import Main from "../screens/Main";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Otp from "../screens/Otp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";




export default function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
   
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Otp" component={Otp}/>
    </Stack.Navigator>
   
  );
}
