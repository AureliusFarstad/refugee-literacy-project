import Alphabet from "@/screens/level-one/alphabet";
import AudiblePicker from "@/screens/level-one/audible-picker";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { LevelOneBottomTabRoutes } from "./types";

const Tab = createBottomTabNavigator<LevelOneBottomTabRoutes>();

const LevelOneBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Alphabet"
    >
      <Tab.Group screenOptions={{}}>
        <Tab.Screen name="Alphabet" component={Alphabet} />
        <Tab.Screen name="AudiblePicker" component={AudiblePicker} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default LevelOneBottomTabNavigator;
