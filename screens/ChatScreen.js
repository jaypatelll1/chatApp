<<<<<<< HEAD
import { View, Text, StyleSheet, TextInput,TouchableOpacity,Image, TouchableWithoutFeedback, FlatList,SafeAreaView } from "react-native";
=======
import { View, Text, StyleSheet, TextInput,TouchableOpacity,Image, TouchableWithoutFeedback } from "react-native";
>>>>>>> 8f8ba5077104bbc3da558cc0d2899512f3e6fa41
import React from "react";
import Message from "../components/message";

export default function home() {
  const [text, onChangeText] = React.useState("");
  const handlePress = () => {
    // Handle button press here
    console.log('Button pressed');
  };
  return (
    <>
    <SafeAreaView style={styles.container}>
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

      <Message/>
      <Message/>
      
       <View style={styles.sendMessage}>
        <TextInput
          style={styles.search}
          onChangeText={onChangeText}
          value={text}
          placeholder="Type a message..."
        />
       <Image source={require('../assets/send.png')} style={styles.send}/>
      </View>

      
       
    </SafeAreaView>
</>
    
  );
}
const styles = StyleSheet.create({
  container: {
    //marginTop: 50,
    height:"100%"
  },
  topBar:{
    flex:1,
    flexDirection:'row',
<<<<<<< HEAD
    backgroundColor: "#118FFFFF",
  
=======
    backgroundColor: "#E9EEFF",
>>>>>>> 8f8ba5077104bbc3da558cc0d2899512f3e6fa41
    borderRadius: 50,
    maxHeight: 50,
    maxWidth: 380,
    marginLeft: 15,
  },

  textmessage:{
    textAlign:"left",
    fontSize:16,
    margin:15
  },

  senderMessage:{
    backgroundColor: "#E9EEFF",
    marginHorizontal:10,
    borderBottomLeftRadius:45,
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    marginVertical:15,
    position:"absolute",
    width:"70%",
    bottom:65,
    right:0,

  },
  receiverMessage:{
    backgroundColor: "#E9EEFF",
    marginHorizontal:10,
    borderBottomRightRadius:45,
    borderTopLeftRadius:45,
    borderTopRightRadius:45,
    marginVertical:15,
    position:"absolute",
    width:"70%",
    bottom:65,
    left:0,
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
