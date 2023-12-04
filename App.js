import React from "react";
// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          // options={{ title: "Register" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
