import Alphabet from "@/screens/level-one/alphabet";
import AudiblePicker from "@/screens/level-one/audible-picker";
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
import { LevelOneBottomTabRoutes } from "./types";

const Tab = createBottomTabNavigator<LevelOneBottomTabRoutes>();

type TabType = {
  name: keyof LevelOneBottomTabRoutes;
  component: React.ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof LevelOneBottomTabRoutes]: (props: SvgProps) => JSX.Element;
};

const tabsIcons: TabIconsType = {
  Alphabet: (props: SvgProps) => <SparklesIcon {...props} />,
  AudiblePicker: (props: SvgProps) => <PaintBrushIcon {...props} />,
  ChapterThree: (props: SvgProps) => <GiftIcon {...props} />,
  ChapterFour: (props: SvgProps) => <CalendarIcon {...props} />,
  ChapterFive: (props: SvgProps) => <PuzzlePieceIcon {...props} />,
};

export type TabList<T extends keyof LevelOneBottomTabRoutes> = {
  navigation: NativeStackNavigationProp<LevelOneBottomTabRoutes, T>;
  route: RouteProp<LevelOneBottomTabRoutes, T>;
};

const tabs: TabType[] = [
  {
    name: "Alphabet",
    component: Alphabet,
    label: "Alphabet",
  },
  {
    name: "AudiblePicker",
    component: AudiblePicker,
    label: "Audible Picker",
  },
  {
    name: "ChapterThree",
    component: AudiblePicker,
    label: "Chapter Three",
  },
  {
    name: "ChapterFour",
    component: AudiblePicker,
    label: "Chapter Four",
  },
  {
    name: "ChapterFive",
    component: AudiblePicker,
    label: "Chapter Five",
  },
];

type BarIconType = {
  name: keyof LevelOneBottomTabRoutes;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

const LevelOneBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: "pink",
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
      })}
      initialRouteName="Alphabet"
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

export default LevelOneBottomTabNavigator;
