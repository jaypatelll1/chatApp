import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList 
} from "react-native";
import React from "react";
import User from '../components/user';


export default function home({ users, onUserPress }) {
  const [text, onChangeText] = React.useState("");
  const handlePress = () => {
    // Handle button press here
    console.log("Button pressed");
  };
  const renderItem = ({ item }) => {
    return (
      <User user={item} onPress={() => onUserPress(item)} />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          style={styles.search}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search message..."
        />
       
      </View>
      
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Image
          source={require("../assets/setting-icon.png")}
          style={styles.image}
        />
      </TouchableOpacity>
       <Image
          source={require("../assets/backButton.png")}
          style={styles.image1}
        />
        <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  search: {
    height: 50,
    width: 300,
    marginLeft: 35,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  searchbar: {

  },
  image: {
    height: 26,
    width: 26,
    marginLeft: 350,
    marginTop: -35,
  },
  image1: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: -38,
  },
});
