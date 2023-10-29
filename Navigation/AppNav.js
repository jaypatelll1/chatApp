import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, StatusBar,ActivityIndicator } from "react-native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          color: "#00ff00",
        }}
      >
        <ActivityIndicator size={"large"} />
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
        
        {/* <AuthStack/> */}
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
