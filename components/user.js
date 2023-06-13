import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const user = ({ user, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <Image source={user.avatar} style={styles.avatar} />
      <View>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.lastMessage}>{user.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginTop:10
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

export default user;
