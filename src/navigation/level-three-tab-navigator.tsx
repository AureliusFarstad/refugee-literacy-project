import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { LevelTwoBottomTabRoutes } from "./types";
import Alphabet from "@/screens/level-two/alphabet";
import AudiblePicker from "@/screens/level-two/audible-picker";

const Tab = createBottomTabNavigator<LevelTwoBottomTabRoutes>();

const LevelTwoBottomTabNavigator = () => {
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

export default LevelTwoBottomTabNavigator;
