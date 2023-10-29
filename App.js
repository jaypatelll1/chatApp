import { AuthProvider } from "./context/AuthContext";
import AppNav from "./Navigation/AppNav";
import React from "react";
import "react-native-gesture-handler";


export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
 
  );
}
