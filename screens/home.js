import { View, Text, StyleSheet, TextInput,TouchableOpacity,Image } from "react-native";
import React from "react";

export default function home() {
  const [text, onChangeText] = React.useState("");
  const handlePress = () => {
    // Handle button press here
    console.log('Button pressed');
  };
  return (
    <View style={styles.container}>
    
      <TextInput
        style={styles.search}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search message..." 
      />
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Image source={require('../assets/setting-icon.png')} style={styles.image} />
    </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  search: {
    height: 50,
    width: 300,
    marginLeft: 35,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  image:{
    height:30,
    width:30,
    marginLeft:350,
    marginTop:-38

  }

});
