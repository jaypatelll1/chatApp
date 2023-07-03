import { AuthProvider } from "./context/AuthContext";
import AppNav from "./Navigation/AppNav";
import React from "react";
import Otp from "./screens/Otp";
export default function App() {
  return (
    <AuthProvider>
      <Otp/>
      {/* <AppNav /> */}
    </AuthProvider>
  );
}
