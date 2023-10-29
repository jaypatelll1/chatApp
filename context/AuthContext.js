import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  

  const logout = () => {
    setisLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("userToken");
    setisLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      let userToken = await AsyncStorage.getItem("userToken");
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }
    } catch (e) {
      console.log(`pandhi noob ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{logout, userToken, userInfo, setUserToken, setUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
