import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Keyboard,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = () => {
    console.log("Logged in with:", "Email:", email, "Password:", password);
  };

  const navigateToRegister = () => {
    navigation.navigate("RegistrationScreen");
  };

  return (
    <SafeAreaView
      style={styles.container}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
        return false;
      }}
    >
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require("../assets/background_alps.jpeg")}
        style={styles.absoluteFill}
      >
        <View style={styles.whitePanel}>
          <Text style={styles.title}>Увійти</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={showPassword}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.showPasswordText}>
                {showPassword ? "Показати" : "Сховати"}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Увійти</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Немає акаунту?</Text>
            <Text
              style={[styles.registerText, styles.registerLink]}
              onPress={navigateToRegister}
            >
              Зареєструватися
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteFill: {
    flex: 1,
    resizeMode: "cover",
  },
  whitePanel: {
    position: "absolute",
    top: "40%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    color: "#212121",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 30,
  },
  inputContainer: {
    width: "90%",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: "#BDBDBD",
  },
  showPasswordButton: {
    paddingRight: 15,
  },
  showPasswordText: {
    color: "#1B4371",
    fontSize: 16,
  },
  button: {
    width: "90%",
    backgroundColor: "#FF6C00",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 43,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  registerText: {
    color: "#1B4371",
    fontSize: 16,
  },
  registerLink: {
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
