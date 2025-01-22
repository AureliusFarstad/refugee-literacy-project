import { Tabs } from "expo-router";
import React from "react";
import type { SvgProps } from "react-native-svg";

import { LEVEL_COLORS } from "@/constants/routes";
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
      primaryColor={LEVEL_COLORS.levelThree.primary}
      secondaryColor={LEVEL_COLORS.levelThree.secondary}
    />
  ),
  "audio-ordering": (props: SvgProps) => (
    <TeacherTipsIcon
      {...props}
      primaryColor={LEVEL_COLORS.levelThree.primary}
      secondaryColor={LEVEL_COLORS.levelThree.secondary}
    />
  ),
  "video-explanation": (props: SvgProps) => (
    <TeacherTipsIcon
      {...props}
      primaryColor={LEVEL_COLORS.levelThree.primary}
      secondaryColor={LEVEL_COLORS.levelThree.secondary}
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
  {
    name: "audio-ordering",
    label: "Audio",
  },
  {
    name: "video-explanation",
    label: "Video",
  },
];

export default function LevelThreeTabLayout() {
  return (
    <Tabs
      screenOptions={({}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: LEVEL_COLORS.levelThree.primary,
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
