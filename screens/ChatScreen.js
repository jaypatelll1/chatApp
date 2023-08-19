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

const CustomInputToolbar = (props) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        // width: 1,
        backgroundColor: "yellow",
      }}
    />
  );
};

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(true); // New state for typing indicator

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello world",
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

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View
          style={{
            zIndex: 0,
          }}
        >
          <MaterialCommunityIcons
            name="send-circle"
            style={{ marginBottom: 5, marginRight: 5, zIndex:0 }}
            size={40}
            color="#2e64e5"
        
          />
        </View>
      </Send>
    );
  };

  const renderComposer = (props) => {
    return (
      <Composer
        {...props}
        textInputStyle={{
          borderRadius: 20, // Making it round
          paddingHorizontal: 16,
          borderWidth: 1,
          paddingVertical: 8,
          backgroundColor: "red",
                  
        //  flexDirection: "row"
          // Other custom styles as needed
        }}

        // renderSend={(sendProps) => (
        //   <Send {...sendProps}>
        //     <Composer
        //       {...props}
        //       textInputStyle={{ flex: 1 }} // Adjust flex to fit the button
        //       composerHeight={40} // Adjust the height as needed
        //     />

        //   </Send>
        // )}
      />
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#2e64e5",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  return (
    <>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("../assets/backButton.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <View style={styles.topBarMid}>
          <Image
            source={require("../assets/profile-photo.jpg")}
            style={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.text}>Dev Pandhi</Text>
          </View>
        </View>
      </View>
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
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topBar: {
    marginTop: 2,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#5CA3ED",
    borderRadius: 50,
    maxHeight: 50,
    maxWidth: 380,
    marginHorizontal: windowWidth * 0.01,
  },
  topBarMid: {
    marginLeft: 8,
  },
  image: {
    maxHeight: 30,
    maxWidth: 30,
    margin: 10,
    //padding:10
    borderRadius: 10,
  },
  text: {
    marginTop: -25,
    color: "red",
    fontSize: 19,
    color: "#2f354b",
    textAlign: "center",
  },

  info: {
    //backgroundColor:"red",
    flex: 1,
    justifyContent: "center",
    marginLeft: 60,
    marginTop: -38,
    maxHeight: 50,
    padding: 20,
  },
});
