import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { launchImageLibrary } from "react-native-image-picker";

export default function Signup() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("Jay");
  const [pickerResponse, setPickerResponse] = useState(null);
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const data = {
          _id: userCredentials?.user.uid,
          fullName: fullName,
          providerData: userCredentials?.user.providerData[0],
        };
        setDoc(doc(db, "users", userCredentials?.user.uid), data).then(() => {
          navigation.navigate("Login");
        });
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../assets/signup.jpg")}
          style={styles.signupimg}
        />
        <TouchableOpacity
          style={{
            width: 80,
            height: 80,
            backgroundColor: "#647FDE",
            borderRadius: 50,
            // marginTop:"40%",
            // position: "absolute",
            // top: 300,
            marginTop:5,
            left: "40%",
          }}
          onPress={async () => {
            const result = await launchCamera(options,setPickerResponse);
            console.log("Image Avatar Pressed");
          }}
        />
        <View style={styles.textbox}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#647FDE"
            value={fullName}
            onChangeText={setFullName}
          />
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
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.text}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.login}>
          <Text style={styles.bottomtext}>Already a user?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.bottombuttontext}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  signupimg: {
    marginTop: 0,
    height: 350,
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
    marginTop: 20,
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
    marginTop: 10,
    borderRadius: 50,
  },
  text: {
    color: "#4876BC",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  login: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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
