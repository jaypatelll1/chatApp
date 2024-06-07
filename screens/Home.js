import React from "react";
import { useEffect, useState } from "react";
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
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/AntDesign";
import defaultImage from "../assets/profile-photo.jpg"
const Home = () => {
  const [search, onSearchText] = useState();
  const [users, setUsers] = useState([]);
  const [Uid, setUid] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      const currentUser = JSON.parse(await AsyncStorage.getItem("userInfo"));
      setUid(currentUser.providerData.uid);
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        username: doc.data().fullName,
        avatar: doc.data().providerData.photoURL,
        lastMessage: "", // You need to define where the lastMessage is coming from
        uid: doc.data().providerData.uid,
      }));
      setUsers(usersArray);
    };

    fetchUsers();
  }, []);

  const handleUserPress = (user) => {
    // Handle user press and navigate to chat screen
    navigation.navigate("ChatScreen", { user });
  };

  const renderItem = ({ item }) => {
    console.log(item);

    if (item.uid !== Uid) {
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
      return null; // Do not render current user's information
    }
  };
  
  return (
    <View>
      <View style={styles.topbar}>
      <TouchableOpacity style={styles.searchicon}>
          <Icon name="search1" color="black" size={30} />
        </TouchableOpacity>
        <View>
          <Text style={styles.topText}>Chats</Text>
        </View>

        <TouchableOpacity style={styles.settingicon}>
          <Icon name="setting" color="black" size={30} />
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
  topbar: {
    flexDirection: "row",
    width: "100%",
    marginBottom: "3%",
    justifyContent: "space-between",
  },
  searchicon: {
    marginTop: 23,
    marginLeft: 20,
  },
  topText: {
    marginTop: 23,
    fontSize: 18,
    fontWeight: "bold",
  },
  settingicon: {
    marginTop: 23,
    marginRight: 20,
  },
  settingimg: {
    height: 25,
    width: 25,
    right: 4,
  },
});

export default Home;
