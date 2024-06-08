import React from "react";
import { TouchableOpacity, Image, View, Text, StyleSheet } from "react-native";
import defaultImage from "../assets/profile-photo.jpg";

const UserItem = ({ item, handleUserPress, currentUserUid }) => {
  if (item.uid !== currentUserUid) {
    return (
      <TouchableOpacity
        onPress={() => handleUserPress(item)}
        style={styles.itemContainer}
      >
        <Image
          source={item.avatar ? { uri: item.avatar } : defaultImage}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginHorizontal: "3%",
    marginBottom: "1%",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: "500",
  },
  lastMessage: {
    color: "gray",
  },
});

export default UserItem;
