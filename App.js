import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ListenChooseSccreen from "./app/screens/ListenChooseSccreen";

import MainMenu from "./app/screens/MainMenu";
import LevelOneAlphabet from "./app/screens/levelOne/Alphabet";
import Home from "./app/assets/icons/Home";
import Title from "./app/components/header/Title";
import BackButton from "./app/components/header/BackButton";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ 
          headerStyle: {
            backgroundColor: "#C48A58",
            height: 100,
          },
          headerMode: "screen" 
        }}
      > 
        {/* TODO: Do we need react-native-gesture-handler? 
        https://reactnavigation.org/docs/stack-navigator */}
        {/* Register Class Routes Here */}
        <Stack.Screen 
          name="Home" 
          component={MainMenu} 
          options={{ headerShown: false }}
        />
        {/* Level One Routes */}
        <Stack.Screen 
          name="LevelOneAlphabet" 
          component={LevelOneAlphabet} 
          options={({ navigation }) => { 
            return {
              headerTitle: () => (<Title headerTitle={"s, a, t, p, i, n"} />),
              headerLeft: () => (<BackButton navigation={navigation} />),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
