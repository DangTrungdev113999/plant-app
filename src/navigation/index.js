import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="auth_stack" headerMode="none">
          <Stack.Screen name="home_stack" component={HomeStack} />
          <Stack.Screen name="auth_stack" component={AuthStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
