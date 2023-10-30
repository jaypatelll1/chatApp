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
import { useNavigation } from '@react-navigation/native';
import { auth,db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
export default function Signup() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName,setFullName]=useState("Jay");
  
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  const handleSignUp=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(userCredentials=>{
      const data={
        _id: userCredentials?.user.uid,
        fullName: fullName,
        providerData: userCredentials?.user.providerData[0]
      }
      setDoc(doc(db,'users',userCredentials?.user.uid),data)
      .then(()=>{navigation.navigate('Login')})
      const user=userCredentials.user;
      console.log(user);
    })
    .catch(error=>{
      alert(error.message);
      console.log(error.message);
    })
  }
  return (
    <View>
      <ScrollView 
      showsVerticalScrollIndicator={false}>
      <Image
        source={require("../assets/signup.jpg")}
        style={styles.signupimg}
      />
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