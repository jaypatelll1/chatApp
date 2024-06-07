import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { setUserToken, setUserInfo } from '../redux/authSlice';

export default function AppNav() {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.auth.userToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const userInfo = await AsyncStorage.getItem('userInfo');
        if (token) {
          dispatch(setUserToken(token));
          if (userInfo) {
            dispatch(setUserInfo(JSON.parse(userInfo)));
          }
        }
      } catch (error) {
        console.error("Failed to fetch the token from storage", error);
      } finally {
        setLoading(false);
      }
    };

    fetchToken();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4876BC" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userToken ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
