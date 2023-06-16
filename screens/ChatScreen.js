import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import Message from "../components/message";
import Chats from "../assets/dummyData";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const getHeader = () => {
  return (
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

      <View style={styles.topIcons}>
        <Image source={require("../assets/video.png")} style={styles.image} />
        <Image source={require("../assets/Phone.png")} style={styles.image} />
      </View>
    </View>
  );
};

const getFooter = () => {

  const [text, setText] = React.useState("");
  const changeText = (text) => {
    // Handle button press here
    setText(text);
  };

  const sendFunc = () => {
    let r = (Math.random() + 1).toString(36).substring(7);
    console.log("random", r);
    const objData = {
      id: r,
      content: text,
      createdAt: "2020-10-03T14:53:00.000Z",
      user: {
        id: "u1",
        name: "Vadim",
      },
    };
    Chats.messages.push(objData);
    setText("");
  };

  return (
    <View style={styles.sendMessage}>
      <TextInput
        style={styles.search}
        onChangeText={changeText}
        value={text}
        placeholder="Type a message..."
      />
      <TouchableOpacity style={styles.sendTouch} onPress={sendFunc}>
        <Image source={require("../assets/send.png")} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
};

export default function home() {


  
  return (
    <>
      <View style={styles.container}>
        <View style={{ marginVertical: 15 }}>
          <FlatList
            data={Chats.messages}
            keyExtractor={(item)=>item.id}
            renderItem={({ item }) => <Message msg={item}/>}
            ListHeaderComponent={getHeader}
            ListFooterComponentStyle={{flex:1, justifyContent: 'flex-end'}}
            ListFooterComponent={getFooter}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: windowHeight * 0.055,
    height: "100%",
    marginHorizontal: windowWidth * 0.01,
    flexGrow: 1,
    paddingBottom: 20,
    // marginBottom: windowWidth * 0.08,
  },
  topBar: {
    marginTop: 2,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#118FFFFF",
    borderRadius: 50,
    maxHeight: 50,
    maxWidth: 380,
    marginHorizontal: windowWidth * 0.01,
  },

  textmessage: {
    textAlign: "left",
    fontSize: 16,
    margin: 15,
  },

  senderMessage: {
    backgroundColor: "#E9EEFF",
    marginHorizontal: 10,
    borderBottomLeftRadius: 45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginVertical: 15,
    position: "absolute",
    width: "70%",
    bottom: 65,
    right: 0,
  },
  receiverMessage: {
    backgroundColor: "#E9EEFF",
    marginHorizontal: 10,
    borderBottomRightRadius: 45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    marginVertical: 15,
    position: "absolute",
    width: "70%",
    bottom: 65,
    left: 0,
  },
  topBarMid: {
    marginLeft: 8,
  },
  dp: {
    height: 50,
    width: 50,
    backgroundColor: "#EEEEEE",
    borderRadius: 50,
  },
  topIcons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  search: {
    height: 50,
    width: windowWidth * 0.97,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#E9E9E9",
    // marginHorizontal: windowWidth * 0.9
  },
  image: {
    maxHeight: 30,
    maxWidth: 30,
    margin: 10,
    //padding:10
    borderRadius: 10,
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
  text: {
    marginTop: -25,
    color: "blue",
    fontSize: 19,
    color: "#2f354b",
    textAlign: "center",
  },

  sendMessage: {
    // flex:1,
    // flexDirection: "column-reverse",
    // justifyContent: "flex-end",
    // alignItems: "center",
    // marginTop: windowHeight * 0.19,
    paddingBottom: windowHeight * 0.01,
    // position:"absolute",
  },
  send: {
    maxHeight: 20,
    maxWidth: 20,
    position: "absolute",
    right: 23,
    bottom: 23,
  },
  sendTouch: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 40,
    width: 40,
  },
});
