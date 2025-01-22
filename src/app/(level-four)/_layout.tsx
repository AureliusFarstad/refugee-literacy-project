import { Tabs } from "expo-router";
import React from "react";
import type { SvgProps } from "react-native-svg";

import { LEVEL_COLORS } from "@/constants/routes";
import type { LevelFourBottomTabRoutes } from "@/types/navigation-types";
import { TeacherTipsIcon } from "@/ui/icons";
import { IS_IOS } from "@/utils/layout";

type BarIconType = {
  name: keyof LevelFourBottomTabRoutes;
  color: string;
  focused: boolean;
};

type TabIconsType = {
  [key in keyof LevelFourBottomTabRoutes]: (props: SvgProps) => JSX.Element;
};

const tabsIcons: TabIconsType = {
  flashcard: (props: SvgProps) => (
    <TeacherTipsIcon
      {...props}
      primaryColor={LEVEL_COLORS.levelFour.primary}
      secondaryColor="#FFF6D7"
    />
  ),
  "video-explanation": (props: SvgProps) => (
    <TeacherTipsIcon
      {...props}
      primaryColor={LEVEL_COLORS.levelFour.primary}
      secondaryColor="#FFF6D7"
    />
  ),
  "picture-multiple-choice": (props: SvgProps) => (
    <TeacherTipsIcon
      {...props}
      primaryColor={LEVEL_COLORS.levelFour.primary}
      secondaryColor="#FFF6D7"
    />
  ),
  "audio-multiple-choice": (props: SvgProps) => (
    <TeacherTipsIcon
      {...props}
      primaryColor={LEVEL_COLORS.levelFour.primary}
      secondaryColor="#FFF6D7"
    />
  ),
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

type TabType = {
  name: keyof LevelFourBottomTabRoutes;
  label: string;
};

const tabs: TabType[] = [
  {
    name: "flashcard",
    label: "Introduction",
  },
  {
    name: "video-explanation",
    label: "Video",
  },
  {
    name: "picture-multiple-choice",
    label: "Audio",
  },
  {
    name: "audio-multiple-choice",
    label: "Audio",
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: LEVEL_COLORS.levelFour.primary,
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
