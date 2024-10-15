import { Tabs } from "expo-router";
import React from "react";
import type { SvgProps } from "react-native-svg";

import type { LevelThreeBottomTabRoutes } from "@/types/navigation-types";
import { TeacherTipsIcon } from "@/ui/icons";
import { IS_IOS } from "@/utils/layout";

type BarIconType = {
  name: keyof LevelThreeBottomTabRoutes;
  color: string;
  focused: boolean;
};

type TabIconsType = {
  [key in keyof LevelThreeBottomTabRoutes]: (props: SvgProps) => JSX.Element;
};

const tabsIcons: TabIconsType = {
  listening: (props: SvgProps) => (
    <TeacherTipsIcon
      {...props}
      primaryColor="#F36889"
      secondaryColor="#E39AAB"
    />
  ),
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

type TabType = {
  name: keyof LevelThreeBottomTabRoutes;
  label: string;
};

const tabs: TabType[] = [
  {
    name: "listening",
    label: "Listening",
  },
];

export default function LevelThreeTabLayout() {
  return (
    <Tabs
      screenOptions={({}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F36889",
          paddingTop: IS_IOS ? 16 : 4,
          height: IS_IOS ? 108 : 80,
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
              headerShown: false,
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
