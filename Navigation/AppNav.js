import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, StatusBar } from "react-native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
