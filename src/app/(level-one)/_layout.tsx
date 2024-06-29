import { Tabs } from "expo-router";
import React from "react";
import type { SvgProps } from "react-native-svg";

import type { LevelOneBottomTabRoutes } from "@/types/navigation-types";
import {
  EarTabBarIcon,
  LetterFormationIcon,
  LetterMatchingIcon,
  LetterNameIcon,
  TeacherTipsIcon,
} from "@/ui/icons";
import { isIos } from "@/utils/layout";

type BarIconType = {
  name: keyof LevelOneBottomTabRoutes;
  color: string;
  focused: boolean;
};

type TabIconsType = {
  [key in keyof LevelOneBottomTabRoutes]: (props: SvgProps) => JSX.Element;
};

const tabsIcons: TabIconsType = {
  "letter-introduction": (props: SvgProps) => <TeacherTipsIcon {...props} />,
  "letter-formation": (props: SvgProps) => <LetterFormationIcon {...props} />,
  "letter-sound": (props: SvgProps) => <EarTabBarIcon {...props} />,
  "letter-name": (props: SvgProps) => <LetterNameIcon {...props} />,
  "letter-matching": (props: SvgProps) => <LetterMatchingIcon {...props} />,
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
      screenOptions={({}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#C385F8",
          paddingTop: isIos ? 16 : 4,
          height: isIos ? 108 : 80,
          paddingHorizontal: 12,
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
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({ color, focused }) => (
                <BarIcon name={name} color={color} focused={focused} />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}
