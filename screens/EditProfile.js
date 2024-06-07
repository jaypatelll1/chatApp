import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

export default function EditProfile() {
  const navigation = useNavigation();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(require("../assets/profile-photo.jpg"));

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const changeProfilePhoto = async () => {
    // Request media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launch image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePhoto({ uri: result.assets[0].uri });
    }
  };

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.centerText}>
          <Text style={styles.headerText}>Edit Profile</Text>
          <Pressable onPress={changeProfilePhoto}>
            <Image
              source={profilePhoto}
              style={styles.profilephoto}
            />
          </Pressable>
          <Text style={styles.usernameText}>Anuj Pandey</Text>
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
  },
  centerText: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    marginTop: "5%",
    color: "#4876BC",
    fontWeight: "bold",
    fontSize: 35,
  },
  usernameText: {
    color: "#4876BC",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "2%",
  },
  textbox: {
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
