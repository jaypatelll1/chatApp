import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("../assets/login.jpg")}
          style={styles.loginimg}
        />
      </View>
      <View style={styles.centerText}>
        <Text
          style={{
            color: "#4876BC",
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          ChatApp
        </Text>

        <Text
          style={{
            color: "#4876BC",
            fontSize: 12,
            fontWeight: "bold",
            marginTop: "2%",
          }}
        >
          Connect, Chat, and Share Moments - Your Personal Chat Hub!
        </Text>
      </View>
      <View style={styles.textbox}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#647FDE"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#647FDE"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signup}>
        <Text style={styles.bottomtext}>new here?</Text>
        <TouchableOpacity>
          <Text style={styles.bottombuttontext}> SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loginimg: {
    marginTop: 0,
    height: 400,
    width: 400,
  },
  centerText: {
    // flex:1,
    marginTop: "3%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    // flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 40,
  },
  input: {
    width: "80%",
    height: 40,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: "#E9EEFF",
    borderRadius: 10,
    color: "blue",
    fontWeight: "bold",
  },
  buttons: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
  },
  button: {
    backgroundColor: "#9DB2FD",
    padding: 10,
    width: "50%",
    margin: 12,
    marginTop: 30,
    borderRadius: 50,
  },
  text: {
    color: "#4876BC",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "bold",
  },
  signup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 20,
  },

  bottomtext: {
    color: "#9DB2FD",
    fontWeight: "bold",
  },

  bottombuttontext: {
    color: "#647FDE",
    fontWeight: "bold",
  },
});
