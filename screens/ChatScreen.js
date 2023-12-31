import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  Bubble,
  GiftedChat,
  Send,
  InputToolbar,
  Composer,
} from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(true); // New state for typing indicator

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const handleInputTextChanged = (text) => {
    if (text.length > 0 && !isTyping) {
      setIsTyping(true);
    } else if (text.length === 0 && isTyping) {
      setIsTyping(false);
    }
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
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
            style={{ marginLeft: -40, marginTop: 6 }}
            size={30}
            color="#000"
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
            borderRadius: 50,
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
            borderRadius: 50,
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
            padding: "3%",marginBottom:-5
          },
          left: {
            color: "#000",
            padding: "3%",
            marginBottom:-5
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

  return (
    <>
      <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
        <GiftedChat
          renderComposer={renderComposer}
          messages={messages}
          onInputTextChanged={handleInputTextChanged} // Attach the event handler
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
          renderInputToolbar={CustomInputToolbar}
        />
      </View>
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  customInputToolbar: {
    flex: 1,
    width: "183%",
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
    borderRadius: 20,
    backgroundColor: "#ffffff",
  },
});
