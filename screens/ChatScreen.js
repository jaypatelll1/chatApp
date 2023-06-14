import { View, Text, StyleSheet, TextInput,TouchableOpacity,Image, TouchableWithoutFeedback } from "react-native";
import React from "react";

export default function home() {
  const [text, onChangeText] = React.useState("");
  const handlePress = () => {
    // Handle button press here
    console.log('Button pressed');
  };
  return (
    <>
    <View style={styles.container}>
       <View style={styles.topBar}>
          <Image source={require('../assets/backButton.png')} style={styles.image} />
          <View style={styles.topBarMid}>
            <View style={styles.dp}></View>
            <View style={styles.info}>
              <Text style={styles.text}>Dev Pandhi</Text>
            </View>
          </View>

          <View style={styles.topIcons}>
            <Image source={require('../assets/video.png')} style={styles.image} />
            <Image source={require('../assets/Phone.png')} style={styles.image} />
          </View>
       </View>

      
      
       <View style={styles.sendMessage}>
        <TextInput
          style={styles.search}
          onChangeText={onChangeText}
          value={text}
          placeholder="Type a message..."
        />
       <Image source={require('../assets/send.png')} style={styles.send}/>
      </View>
       
    </View>



</>
    
  );
}
const styles = StyleSheet.create({
  container: {
    //marginTop: 50,
    height:"100%"
  },
  topBar:{
    marginTop: 30,
    flex:1,
    flexDirection:'row',
  },
  topBarMid:{
    marginLeft: 8
  },
  dp:{
    height:50,
    width:50,
    backgroundColor:"#EEEEEE",
    borderRadius: 50
  },
  topIcons:{
    flex:1,
    flexDirection:"row",
    justifyContent:"flex-end",
  },
  search: {
    height: 50,
    width: 380,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#E9E9E9",
  },
  image:{
    maxHeight:30,
    maxWidth:30,
    margin:10,
    //padding:10
  },
  info:{
    //backgroundColor:"red",
    flex:1,
    justifyContent:"center",
    marginLeft:60,
    marginTop:-38,
    maxHeight:50,
    padding:20,
  },
  text:{
    marginTop:-25,
    color:"blue",
    fontSize: 20,
    color: '#2f354b',
    textAlign: 'center'
  },

  sendMessage:{
    flex:1,
    flexDirection:"column-reverse",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:10
  },
  send:{
    maxHeight:20,
    maxWidth:20,
    position:"absolute",
    right:30,
    bottom:15
  }

});
