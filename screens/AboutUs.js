import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function AboutUs() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            source={require("../assets/Aboutus.png")}
          />
        </View>
        <View style={styles.centerText}>
          <Text
            style={{
              color: "#4876BC",
              fontWeight: "bold",
              fontSize: 40,
            }}
          >
            About Us
          </Text>

          <Text
            style={{
              color: "#4876BC",
              fontSize: 12,
              fontWeight: "bold",
              margin: "4%",
              alignContent: "space-around"
            }}
          >
            About Us Jay, Mihir, and Dev joined forces to create a chat app on
            React Native. Our mission is simple yet profound: to bring people
            closer, no matter the distance. Through genuine conversations and
            heartfelt connections, we aim to inspire bonds that transcend
            boundaries. Join us on this journey of shared moments and endless
            possibilities. Welcome to our chat app. With love, Jay, Mihir, and
            Dev
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  centerText: {
    // flex:1,
    marginTop: "2%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
