import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNav from "./Navigation/AppNav";
export default function App() {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
}
