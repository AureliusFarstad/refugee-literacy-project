import { Tabs } from "expo-router";
import React from "react";

import { LevelOneBottomTabRoutes } from "@/types/navigation-types";
import {
  EarIcon,
  LetterMatchIcon,
  NameIcon,
  PencilIcon,
  TeacherIcon,
} from "@/ui/icons";
import { SvgProps } from "react-native-svg";

type BarIconType = {
  name: keyof LevelOneBottomTabRoutes;
  color: string;
};

type TabIconsType = {
  [key in keyof LevelOneBottomTabRoutes]: (props: SvgProps) => JSX.Element;
};

const tabsIcons: TabIconsType = {
  "letter-introduction": (props: SvgProps) => <TeacherIcon {...props} />,
  "letter-formation": (props: SvgProps) => <PencilIcon {...props} />,
  "letter-sound": (props: SvgProps) => <EarIcon {...props} />,
  "letter-name": (props: SvgProps) => <NameIcon {...props} />,
  "letter-matching": (props: SvgProps) => <LetterMatchIcon {...props} />,
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

type TabType = {
  name: keyof LevelOneBottomTabRoutes;
  label: string;
};

const tabs: TabType[] = [
  {
    name: "letter-introduction",
    label: "Introduction",
  },
  {
    name: "letter-formation",
    label: "Formation",
  },
  {
    name: "letter-sound",
    label: "Sound",
  },
  {
    name: "letter-name",
    label: "Name",
  },
  {
    name: "letter-matching",
    label: "Matching",
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#55B8A0",
        },
        tabBarIconStyle: {
          marginVertical: 4,
        },
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      {tabs.map(({ name, label }) => {
        return (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title: label,
              tabBarIcon: ({ color }) => <BarIcon name={name} color={color} />,
            }}
          />
        );
      })}
    </Tabs>
  );
}
