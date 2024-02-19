import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LevelOneBottomTabNavigator from "./level-one-tab-navigator";
import { RootStackRoutes } from "./types";
import Home from "@/screens/home";
import { NavigationContainer } from "./navigation-container";
import LevelTwoBottomTabNavigator from "./level-two-tab-navigator";

const Stack = createNativeStackNavigator<RootStackRoutes>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="LevelOneTabNavigator"
          component={LevelOneBottomTabNavigator}
        />
        <Stack.Screen
          name="LevelTwoTabNavigator"
          component={LevelTwoBottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
