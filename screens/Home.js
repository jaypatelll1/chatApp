import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [search, onSearchText] = React.useState();
  const navigation = useNavigation();
  const users = [
    {
      id: 1, 
      username: "User1",
      avatar: require("../assets/avatar1.png"),
      lastMessage: "Hello there!",
    },
    {
      id: 2,
      username: "User2",
      avatar: require("../assets/avatar2.png"),
      lastMessage: "How are you doing?",
    },
    // Add more users as needed
  ];

  const handleUserPress = (user) => {
    // Handle user press and navigate to chat screen
    navigation.navigate("ChatScreen", { user });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => handleUserPress(item)}
        style={styles.itemContainer}
      >
        <Image source={item.avatar} style={styles.avatar} />
        <View>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.topbar}>
        <TouchableOpacity
          style={{ position: "absolute", right: "16%", top: 25, zIndex: 10 }}
        >
          <Image
            source={require("../assets/search.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.searchBar}
          onChangeText={onSearchText}
          value={search}
          placeholder="Search message..."
        />

        <TouchableOpacity style={styles.setting}>
          <Image
            source={require("../assets/setting-icon.png")} 
            style={styles.settingimg}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius:35,
    backgroundColor:"#E9EEFF",
    marginHorizontal:"3%",
    marginBottom:"5%"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    color: "gray",
  },
  topbar: {
    flexDirection: "row",
    width:"100%",
    marginBottom:"3%"
  },
  searchBar: {
    height: 50,
    width: "85%",
    margin: 12,
    backgroundColor: "#E9EEFF",
    padding: 10,
    borderRadius: 25,
  },
  setting: {
    marginTop: 23,
  },
  settingimg: {
    height: 25,
    width: 25,
    right:4
  },
});

export default Home;
