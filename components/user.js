import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const user = ({ user, onPress }) => {
  return (
    <View style={styles.border}>
    <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
      <Image source={user.avatar} style={styles.avatar} />
      <View>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.lastMessage}>{user.lastMessage}</Text>
      </View>
    </TouchableOpacity>
     </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    
    
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
  border:{ 
    borderWidth: 1,
    borderColor: 'gray', 
    borderRadius: 50,
    margin:6,
    marginTop:10
    
    ,}
});

export default user;
