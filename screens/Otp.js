import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState, useRef } from "react";

export default function Otp() {
  const [otp, setOtp] = useState("");
  const otpInputRef = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp.join(""));

    if (index < 3 && value) {
      otpInputRef.current[index + 1].focus();
    }
  };
  return (
    <View>
      <View>
        <Image source={require("../assets/otp.jpg")} style={styles.otpimg} />
      </View>
      <View style={styles.centerText}>
        <Text
          style={{
            color: "#4876BC",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: "2%",
          }}
        >
          Enter the verification code we
        </Text>
        <Text
          style={{
            color: "#4876BC",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          just sent you on your email 
        </Text>

        <Text
          style={{
            color: "#4876BC",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          address.
        </Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.otpInput}
          value={otp[0]}
          onChangeText={(value) => handleOtpChange(0, value)}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => (otpInputRef.current[0] = ref)}
        />
        <TextInput
          style={styles.otpInput}
          value={otp[1]}
          onChangeText={(value) => handleOtpChange(1, value)}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => (otpInputRef.current[1] = ref)}
        />
        <TextInput
          style={styles.otpInput}
          value={otp[2]}
          onChangeText={(value) => handleOtpChange(2, value)}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => (otpInputRef.current[2] = ref)}
        />
        <TextInput
          style={styles.otpInput}
          value={otp[3]}
          onChangeText={(value) => handleOtpChange(3, value)}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => (otpInputRef.current[3] = ref)}
        />
      </View>
      <View style={styles.Resend}>
        <Text style={styles.bottomtext}>If you didn't receive a code!</Text>
        <TouchableOpacity>
          <Text style={styles.bottombuttontext}> Resend</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  otpimg: {
    marginTop: 0,
    height: 400,
    width: 400,
  },
  centerText: {
    marginTop: "3%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  otpInput: {
    width: 50,
    height: 60,
    backgroundColor: "#E9EEFF",
    borderWidth: 0,
    fontSize: 24,
    textAlign: "center", 
    color: "#647FDE"
    
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    marginTop: 20,
  },
  Resend: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 50,
  },

  bottomtext: {
    color: "#9DB2FD",
    fontWeight: "bold",
  },

  bottombuttontext: {
    color: "#647FDE",
    fontWeight: "bold",
  },
  buttons: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#9DB2FD",
    padding: 10,
    width: "50%",
    margin: 12,
    marginTop: 10,
    borderRadius: 50,
  },
  text: {
    color: "#4876BC",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
