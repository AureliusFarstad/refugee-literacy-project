import LetterIntroduction from "@/screens/level-one/letter-introduction";
import LetterMatching from "@/screens/level-one/letter-matching";
import LetterName from "@/screens/level-one/letter-name";
import LetterSound from "@/screens/level-one/letter-sound";
import {
  EarIcon,
  LetterMatchIcon,
  NameIcon,
  PencilIcon,
  TeacherIcon,
} from "@/ui/icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import type { SvgProps } from "react-native-svg";
import { LevelOneBottomTabRoutes } from "./types";
import LetterFormation from "@/screens/level-one/letter-formation";

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
  LetterIntroduction: (props: SvgProps) => <TeacherIcon {...props} />,
  LetterFormation: (props: SvgProps) => <PencilIcon {...props} />,
  LetterSound: (props: SvgProps) => <EarIcon {...props} />,
  LetterName: (props: SvgProps) => <NameIcon {...props} />,
  LetterMatching: (props: SvgProps) => <LetterMatchIcon {...props} />,
};

export type TabList<T extends keyof LevelOneBottomTabRoutes> = {
  navigation: NativeStackNavigationProp<LevelOneBottomTabRoutes, T>;
  route: RouteProp<LevelOneBottomTabRoutes, T>;
};

const tabs: TabType[] = [
  {
    name: "LetterIntroduction",
    component: LetterIntroduction,
    label: "Introduction",
  },
  {
    name: "LetterFormation",
    component: LetterFormation,
    label: "Formation",
  },
  {
    name: "LetterSound",
    component: LetterSound,
    label: "Sound",
  },
  {
    name: "LetterName",
    component: LetterName,
    label: "Name",
  },
  {
    name: "LetterMatching",
    component: LetterMatching,
    label: "Matching",
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
        tabBarStyle: {
          backgroundColor: "#55B8A0",
          paddingTop: 8,
        },
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "black",
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
        tabBarShowLabel: false,
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

export default LevelOneBottomTabNavigator;
