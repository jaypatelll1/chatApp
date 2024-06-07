import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";

const ChatHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <TouchableOpacity>
          <Icon name="chevron-left" color="black" size={40} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={require("../assets/profile-photo.jpg")}
          style={styles.profilephoto}
        />
      </View>
      <View style={styles.headerText}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Anuj Pandey</Text>
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
    marginLeft: 10,
    marginRight: 20,
  },
  headerText: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  icon: {
    marginLeft: 5,
  },
});
