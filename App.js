import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet,StatusBar } from "react-native";
import AuthStack from "./Navigation/AuthStack";
import AppStack from "./Navigation/AppStack";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AuthStack/>
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