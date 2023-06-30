import React from 'react';
import { View,FlatList, TouchableOpacity, Image, Text, StyleSheet,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const users = [
    {
      id: 1,
      username: 'User1',
      avatar: require('../assets/avatar1.png'),
      lastMessage: 'Hello there!',
    },
    {
      id: 2,
      username: 'User2',
      avatar: require('../assets/avatar2.png'),
      lastMessage: 'How are you doing?',
    },
    // Add more users as needed
  ];

  const handleUserPress = (user) => {
    // Handle user press and navigate to chat screen
    navigation.navigate('ChatScreen', { user });
  };

  const renderItem = ({ item }) => {
    return (
     
      <TouchableOpacity onPress={() => handleUserPress(item)} style={styles.itemContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        <View>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        </View>
      </TouchableOpacity>
     
    );
  };

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'gray',
  },
});

export default Home;
