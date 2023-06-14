import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const message = () => {

    const isMe = true;

  return (
    <View style={styles.senderMessage}>
          <Text style={styles.textmessage}>
            Magna amet irure mollit est excepteur irure dolor eiusmod non tempor aute deserunt.
          </Text>
      </View>
  );
};

const styles = StyleSheet.create({
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
})

export default message;


