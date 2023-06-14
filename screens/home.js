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
      <View style={styles.topBar}>
      <Image
          source={require("../assets/backButton.png")}
          style={styles.image1}
        />
        <TextInput
          style={styles.search}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search message..."
        />
       

      
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Image
          source={require("../assets/setting-icon.png")}
          style={styles.image}
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
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  search: {
    height: 50,
    width: 300,

    padding: 10,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },

  image: {
    height: 26,
    width: 26,

  },
  image1: {
    width: 30,
    height: 30,

  },
  topBar:{
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center"
  }
});
