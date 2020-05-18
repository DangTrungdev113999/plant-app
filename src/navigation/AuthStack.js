import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "../screens/SignUp";
import LoginScreen from "../screens/Login";
import ForgotScreen from "../screens/Forgot";
import WelcomeScreen from "../screens/Welcome";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="welcome_screen" headerMode="none">
    <Stack.Screen name="welcome_screen" component={WelcomeScreen} />
    <Stack.Screen name="signUp_screen" component={SignUpScreen} />
    <Stack.Screen name="login_screen" component={LoginScreen} />
    <Stack.Screen name="forgot_screen" component={ForgotScreen} />
  </Stack.Navigator>
);

export default HomeStack;
