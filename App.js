import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import Home from './screens/Home';
import ChatScreen from './screens/ChatScreen';
import MainScreen from "./screens/Main";
import Login from './screens/Login';

export default function App() {
  const users = [
    {
      id: 1,
      username: 'User1',
      avatar: require('./assets/avatar1.png'),
      lastMessage: 'Hello there!',
    },
    {
      id: 2,
      username: 'User2',
      avatar: require('./assets/avatar2.png'),
      lastMessage: 'How are you doing?',
    },
    
    
    // Add more users as needed
  ];

  const handleUserPress = (user) => {
    // Handle user press here
    console.log('User pressed:', user);
  };

  return (
    <View>
      <NavigationContainer></NavigationContainer>
      {/* <Home users={users} onUserPress={handleUserPress}/> */}
      {/* <ChatScreen/> */}
      {/* <Login/> */}
    </View>
  );
}


 