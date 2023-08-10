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
  
  export default function EditProfile() {
    const navigation = useNavigation();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
      navigation.navigate('Login');
    };
    return (
      <View>
        <ScrollView 
        showsVerticalScrollIndicator={false}>
        
        <View style={styles.centerText}>
          <Text
            style={{
              marginTop: "5%",
              color: "#4876BC",
              fontWeight: "bold",
              fontSize: 35,
            }}
          >
            Edit Profile
          </Text>
          
        <Image
          source={require("../assets/profile-photo.jpg")}
          style={styles.profilephoto}
        />

        <Text
            style={{
              color: "#4876BC",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: "2%",
            }}
          >
            Anuj Pandey
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
            placeholder="First Name"
            placeholderTextColor="#647FDE"
            value={fname}
            onChangeText={setFname}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#647FDE"
            value={lname}
            onChangeText={setLname}
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
            <Text style={styles.text}>Clear</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>
        </View>      
        
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    profilephoto: {
      marginTop: "2%",
      height: 150,
      width: 150,
      borderRadius: 500,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    centerText: {
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
      marginTop: 16,
      paddingLeft: 8,
      backgroundColor: "#E9EEFF",
      borderRadius: 10,
      color: "blue",
      fontWeight: "bold",
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    button: {
      backgroundColor: "#9DB2FD",
      padding: 10,
      width: "45%",
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
});
  