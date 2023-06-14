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
       <View style={styles.topBar}>
          <Image source={require('../assets/backButton.png')} style={styles.image} />
          <Image source={require('../assets/video.png')} style={styles.image} />
          <Image source={require('../assets/Phone.png')} style={styles.image} />
       </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //marginTop: 50,
  },
  topBar:{
    marginTop: 30,
    flex:1,
    flexDirection:'row',
  },
  search: {
    height: 50,
    width: 300,
    marginLeft: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  image:{
    height:30,
    width:30,
    marginLeft:10,

  }

});
