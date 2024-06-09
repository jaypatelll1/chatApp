import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Dev Pandhi</Text>
        </View>
      </View>

      <DrawerItemList {...props} />

      <TouchableOpacity style={styles.logoutButton} onPress={() => { /* Handle logout logic here */ }}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: '#647FDE',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2b4d99',
  },
  logoutButton: {
    backgroundColor: '#6d86e0',
    padding: 10,
    marginTop: 420,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  logoutText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
