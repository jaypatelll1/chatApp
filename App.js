import { AuthProvider } from "./context/AuthContext";
import AppNav from "./Navigation/AppNav";
import React from "react";
import "react-native-gesture-handler";
import EditProfile from "./screens/EditProfile";
import { View } from 'react-native'
import Login from "./screens/Login";
import Otp from "./screens/Otp";
import DrawerNav from "./Navigation/DrawerNav";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
 
  );
}
