import React from "react";
import { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/AntDesign";
import UserItem from "../components/UserItem";
import { getRoomId } from "../utils/common";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [Uid, setUid] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      const currentUser = JSON.parse(await AsyncStorage.getItem("userInfo"));
      setUid(currentUser.providerData.uid);
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersArray = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const userData = doc.data();
          const roomId = getRoomId(currentUser.providerData.uid, userData.providerData.uid);
          const lastMessageQuery = query(
            collection(db, "rooms", roomId, "messages"),
            orderBy("createdAt", "desc"),
            limit(1)
          );
          const lastMessageSnapshot = await getDocs(lastMessageQuery);
          const lastMessage = lastMessageSnapshot.docs.length > 0
            ? lastMessageSnapshot.docs[0].data().text
            : "";

          return {
            id: doc.id,
            username: userData.fullName,
            avatar: userData.providerData.photoURL,
            lastMessage,
            uid: userData.providerData.uid,
          };
        })
      );
      setUsers(usersArray);
    };

    fetchUsers();
  }, []);

  const handleUserPress = (user) => {
    navigation.navigate("ChatScreen", { user });
  };

  const handleSettingsPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
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
        <TouchableOpacity style={styles.settingicon} onPress={handleSettingsPress}>
          <Icon name="setting" color="black" size={30} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        renderItem={({ item }) => (
          <UserItem
            item={item}
            handleUserPress={handleUserPress}
            currentUserUid={Uid}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topbar: {
    flexDirection: "row",
    width: "100%",
    marginBottom: "3%",
    marginTop: "6%",
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
});

export default Home;
