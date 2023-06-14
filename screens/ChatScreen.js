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
       <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Image source={require('../assets/backButton.png')} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.topBarMid}>
            <Image source={require('../assets/profile-photo.jpg')} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.text}>Dev Pandhi</Text>
            </View>
          </View>

          <View style={styles.topIcons}>
            <Image source={require('../assets/video.png')} style={styles.image} />
            <Image source={require('../assets/Phone.png')} style={styles.image} />
          </View>
       </View>

       <View style={styles.message}>
          <Text style={styles.textmessage}>
            Magna amet irure mollit est excepteur irure dolor eiusmod non tempor aute deserunt.
          </Text>
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
    marginTop: 40,
    flex:1,
    flexDirection:'row',
    backgroundColor: "#E9EEFF",
    borderRadius: 50,
    maxHeight: 100,
    maxWidth: 380,
    marginLeft: 5
  },

  textmessage:{
    fontSize:18,
  },

  message:{
    backgroundColor: "#E9EEFF",
    marginLeft: 10,
    borderBottomLeftRadius:45,
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    marginRight: 10,
    marginBottom: 50,
    marginTop: "150%"
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
    borderRadius:10
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
    fontSize: 19,
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
