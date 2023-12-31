import React from "react";
import { View, Text, StyleSheet } from "react-native";
const myId = "u1";

export default message = ({ msg }) => {
  const isMe = msg.user.id === myId;

  return (
    <View style={isMe ? styles.senderMessage : styles.receiverMessage}>
      <Text style={styles.textmessage}>{msg.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textmessage: {
    textAlign: "left",
    fontSize: 16,
    margin: 15,
  },

  senderMessage: {
    backgroundColor: "#118FFFFF",
    marginHorizontal: 10,
    borderBottomLeftRadius: 45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginVertical: 3,
    marginLeft: "auto",
    maxWidth: "70%",
  },
  receiverMessage: {
    backgroundColor: "#DD99FF",
    marginHorizontal: 10,
    borderBottomRightRadius: 45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginVertical: 3,
    marginRight: "auto",
    maxWidth: "70%",
  },
});