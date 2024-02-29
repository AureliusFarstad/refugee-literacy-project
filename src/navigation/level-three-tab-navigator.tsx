import LetterIntroduction from "@/screens/level-three/alphabet";
import LetterFormation from "@/screens/level-three/audible-picker";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { PaintBrushIcon, SparklesIcon } from "react-native-heroicons/solid";
import type { SvgProps } from "react-native-svg";
import { LevelThreeBottomTabRoutes } from "./types";

const Tab = createBottomTabNavigator<LevelThreeBottomTabRoutes>();

type TabType = {
  name: keyof LevelThreeBottomTabRoutes;
  component: React.ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof LevelThreeBottomTabRoutes]: (props: SvgProps) => JSX.Element;
};

const tabsIcons: TabIconsType = {
  LetterIntroduction: (props: SvgProps) => <SparklesIcon {...props} />,
  LetterFormation: (props: SvgProps) => <PaintBrushIcon {...props} />,
};

export type TabList<T extends keyof LevelThreeBottomTabRoutes> = {
  navigation: NativeStackNavigationProp<LevelThreeBottomTabRoutes, T>;
  route: RouteProp<LevelThreeBottomTabRoutes, T>;
};

const tabs: TabType[] = [
  {
    name: "LetterIntroduction",
    component: LetterIntroduction,
    label: "LetterIntroduction",
  },
  {
    name: "LetterFormation",
    component: LetterFormation,
    label: "Audible Picker",
  },
];

type BarIconType = {
  name: keyof LevelThreeBottomTabRoutes;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

const LevelThreeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: "pink",
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
      })}
      initialRouteName="LetterIntroduction"
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        {tabs.map(({ name, component, label }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: label,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default LevelThreeBottomTabNavigator;
