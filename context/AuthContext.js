import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = () => {
    setisLoading(true);
    axios
      .post(`${BASE_URL}/`, {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        let userInfo = res.data;
        setUserInfo(userInfo);

        setUserToken(""); //after mihir is done with base url (json object))
        AsyncStorage.setItem("userToken", ""); //token from backend goes here
        AsyncStorage.setItem("userInfo"); //object goes here
      })
      .catch((e) => {
        console.log(e);
      });
    setUserToken("2");

    setisLoading(false);
  };

  const logout = () => {
    setisLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userInfo");
    setisLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setisLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userToken);
      }
      setUserToken(userToken);
      setisLoading(false);
    } catch (e) {
      console.log(`pandhi noob ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoading, userToken, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};
