import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const ChatHeader = ({ user, onBackPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="chevron-left" color="black" size={40} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{ uri: user.avatar }} 
          style={styles.profilephoto}
        />
      </View>
      <View style={styles.headerText}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{user.username}</Text>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  profilephoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
    backgroundColor: "gray",
  },
  headerText: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  icon: {
    marginLeft: 5,
  },
});
