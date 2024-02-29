import LetterIntroduction from "@/screens/level-two/alphabet";
import LetterFormation from "@/screens/level-two/audible-picker";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import {
  CalendarIcon,
  GiftIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  SparklesIcon,
} from "react-native-heroicons/solid";
import type { SvgProps } from "react-native-svg";
import { LevelTwoBottomTabRoutes } from "./types";

const Tab = createBottomTabNavigator<LevelTwoBottomTabRoutes>();

type TabType = {
  name: keyof LevelTwoBottomTabRoutes;
  component: React.ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof LevelTwoBottomTabRoutes]: (props: SvgProps) => JSX.Element;
};

const tabsIcons: TabIconsType = {
  LetterIntroduction: (props: SvgProps) => <SparklesIcon {...props} />,
  LetterFormation: (props: SvgProps) => <PaintBrushIcon {...props} />,
  LetterSound: (props: SvgProps) => <GiftIcon {...props} />,
  LetterName: (props: SvgProps) => <CalendarIcon {...props} />,
  LetterMatching: (props: SvgProps) => <PuzzlePieceIcon {...props} />,
};

export type TabList<T extends keyof LevelTwoBottomTabRoutes> = {
  navigation: NativeStackNavigationProp<LevelTwoBottomTabRoutes, T>;
  route: RouteProp<LevelTwoBottomTabRoutes, T>;
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
  {
    name: "LetterSound",
    component: LetterFormation,
    label: "Chapter Three",
  },
  {
    name: "LetterName",
    component: LetterFormation,
    label: "Chapter Four",
  },
  {
    name: "LetterMatching",
    component: LetterFormation,
    label: "Chapter Five",
  },
];

type BarIconType = {
  name: keyof LevelTwoBottomTabRoutes;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

const LevelTwoBottomTabNavigator = () => {
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

export default LevelTwoBottomTabNavigator;
