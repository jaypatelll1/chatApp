import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
      <Image source={require('../assets/login.jpg')} style={styles.loginimg} />
      
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
loginimg:{
    marginTop:20,
    height:400,
    width: 400,
}
})