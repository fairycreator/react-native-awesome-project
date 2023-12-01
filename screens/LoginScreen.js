import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  const navigateToRegister = () => {};

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.absoluteFill}
        source={require("../assets/background_alps.jpeg")}
      >
        {/* White panel with rounded top corners */}
        <View style={styles.whitePanel} />
        {/* The header bar, which could be a status bar */}
        <View style={styles.headerBar}>
          {/* Simulate the notch design */}
          <View style={styles.notch} />
        </View>
        {/* Title "Увійти" */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Увійти</Text>
        </View>
        {/* Email input field */}
        <TextInput style={styles.emailInputContainer}>
          <Text style={styles.emailPlaceholder}>Адреса електронної пошти</Text>
        </TextInput>
        {/* Password input field with "Показати" text */}
        <TextInput style={styles.passwordInputContainer}>
          <Text style={styles.passwordDots}>••••••••••••</Text>
          <Text style={styles.showText}>Показати</Text>
        </TextInput>
        {/* Login button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Увійти</Text>
        </TouchableOpacity>
        {/* Registration prompt */}
        <View style={styles.registrationPrompt}>
          <Text style={styles.registrationText}>Немає акаунту? </Text>
          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={[styles.registrationText, styles.registrationLink]}>
              Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
        {/* Bottom swipe-up bar */}
        <View style={styles.bottomBar}>
          <View style={styles.swipeIndicator} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
  },
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "white",
  },
  // absoluteFill: {
  //   width: 375,
  //   height: 812,
  //   position: "absolute",
  // },
  whitePanel: {
    position: "absolute",
    top: "50%",
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "white",
  },
  headerBar: {
    width: 375,
    height: 44,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notch: {
    width: 219,
    height: 30,
    backgroundColor: "black",
    position: "absolute",
    top: 0,
    left: 78,
  },
  titleContainer: {
    position: "absolute",
    width: 343,
    top: 355,
    left: 16,
    alignItems: "center",
  },
  titleText: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "500",
    marginTop: 60,
  },
  emailInputContainer: {
    position: "absolute",
    width: 343,
    height: 50,
    top: 423,
    left: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    paddingLeft: 16,
  },
  emailPlaceholder: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  passwordInputContainer: {
    position: "absolute",
    width: 343,
    height: 50,
    top: 489,
    left: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    paddingLeft: 16,
  },
  passwordDots: {
    color: "#212121",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  showText: {
    position: "absolute",
    right: 16,
    top: 16,
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  loginButton: {
    position: "absolute",
    left: 16,
    top: 582,
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  registrationPrompt: {
    position: "absolute",
    top: 649,
    left: 62,
    flexDirection: "row",
  },
  registrationText: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  registrationLink: {
    textDecorationLine: "underline",
  },
  bottomBar: {
    position: "absolute",
    width: "100%",
    top: 779,
    alignItems: "center",
    justifyContent: "center",
  },
  swipeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    borderRadius: 100,
  },
});

export default LoginScreen;
