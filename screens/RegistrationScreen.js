import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background_alps.jpeg")}
        style={styles.absoluteFill}
      >
        <View style={styles.whitePanel}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLogin}
            value={login}
            placeholder="Логін"
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Адреса електронної пошти"
            keyboardType="email-address"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Пароль"
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Register")}
          >
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Navigate to Login")}>
            <Text style={styles.loginText}>Вже є аккаунт? Увійти</Text>
          </TouchableOpacity>
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
    top: "50%",
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
  input: {
    height: 50,
    width: "90%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontSize: 16,
    color: "#BDBDBD",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  showPasswordButton: {
    position: "absolute",
    right: 15,
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
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  loginText: {
    color: "#1B4371",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});

export default RegistrationScreen;
