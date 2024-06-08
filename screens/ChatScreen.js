import React, { useState, useEffect, useCallback } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Bubble, GiftedChat, Send, InputToolbar, Composer } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { getRoomId } from "../utils/common";
import { Timestamp, setDoc, doc, collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import ChatHeader from "../components/ChatHeader"; 

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ChatScreen = ({ route, navigation }) => {
  const userInfo = useSelector((state) => state.auth.userInfo.providerData.uid);
  const userAvatar = useSelector((state) => state.auth.userInfo.providerData.avatar); // Assuming you have avatar URL in Redux
  const { user } = route.params;
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const createRoomIfNotExists = async () => {
    let roomId = getRoomId(userInfo, user.uid);
    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      createdAt: Timestamp.fromDate(new Date()),
    });
  };

  useEffect(() => {
    createRoomIfNotExists();
    let roomId = getRoomId(userInfo, user.uid);
    const docRef = doc(db, "rooms", roomId);
    const messagesRef = collection(docRef, "messages");
    const q = query(messagesRef, orderBy("createdAt", "desc"));
    let unsub = onSnapshot(q, (querySnapshot) => {
      let allMessages = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        return {
          _id: doc.id,
          text: data.text,
          createdAt: data.createdAt.toDate(),
          user: {
            _id: data.userId,
            avatar: data.userId === userInfo ? userAvatar : user.avatar, // Assuming `user.avatar` contains the URL of the receiver's image
          },
        };
      });
      setMessages(allMessages);
    });
    return unsub;
  }, []);

  const handleInputTextChanged = (text) => {
    if (text.length > 0 && !isTyping) {
      setIsTyping(true);
    } else if (text.length === 0 && isTyping) {
      setIsTyping(false);
    }
  };

  const send = async (messages) => {
    let message = messages[0].text.trim();
    if (!message) return;
    try {
      let roomId = getRoomId(userInfo, user.uid);
      const docRef = doc(db, "rooms", roomId);
      const messagesRef = collection(docRef, "messages");
      const newDoc = await addDoc(messagesRef, {
        userId: userInfo,
        text: message,
        createdAt: Timestamp.fromDate(new Date()),
      });
      console.log("Document written with ID: ", newDoc.id);
    } catch (err) {
      console.log(err);
    }
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    send(messages);
  }, []);

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View
          style={{
            zIndex: 0,
          }}
        >
          <MaterialCommunityIcons
            name="send"
            style={{ marginLeft: 10, marginTop: 6 }}
            size={30}
            color="#9DB2FD"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#9DB2FD",
            borderRadius: 20,
            marginBottom: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 4,
            marginBottom: 5,
          },
          left: {
            backgroundColor: "#E0E7FD",
            borderRadius: 20,
            marginBottom: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 4,
          },
        }}
        textStyle={{
          right: {
            color: "#000",
            padding: "3%",
            marginBottom: -5,
          },
          left: {
            color: "#000",
            padding: "3%",
            marginBottom: -5,
          },
        }}
        timeTextStyle={{
          right: {
            color: "#000",
            paddingHorizontal: "8%",
          },
          left: {
            color: "#000",
            paddingHorizontal: "8%",
          },
        }}
      />
    );
  };

  const CustomInputToolbar = (props) => {
    return (
      <InputToolbar {...props} containerStyle={styles.customInputToolbar} />
    );
  };

  const renderComposer = (props) => {
    return <Composer {...props} textInputStyle={styles.customComposer} />;
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <ChatHeader user={user} onBackPress={handleBackPress} /> 
      <GiftedChat
        renderComposer={renderComposer}
        messages={messages}
        onInputTextChanged={handleInputTextChanged}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: userInfo,
          avatar: userAvatar, 
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        renderInputToolbar={CustomInputToolbar}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customInputToolbar: {
    flex: 1,
    width: "160%",
    paddingHorizontal: 0,
    borderTopWidth: 0,
    backgroundColor: "transparent",
    marginBottom: 7,
    
  },
  customComposer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    borderWidth: 0.1,
    borderRadius: 3,
    backgroundColor: "#ffffff",
  },
});
