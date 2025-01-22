import { Tabs } from "expo-router";
import React from "react";
import type { SvgProps } from "react-native-svg";

import { LEVEL_COLORS } from "@/constants/routes";
import type { LevelTwoBottomTabRoutes } from "@/types/navigation-types";
import {
  EarTabBarIcon,
  LetterFormationIcon,
  TeacherTipsIcon,
} from "@/ui/icons";
import { IS_IOS } from "@/utils/layout";

type BarIconType = {
  name: keyof LevelTwoBottomTabRoutes;
  color: string;
  focused: boolean;
};

type TabIconsType = {
  [key in keyof LevelTwoBottomTabRoutes]: (props: SvgProps) => JSX.Element;
};

const tabsIcons: TabIconsType = {
  spelling: (props: SvgProps) => (
    <TeacherTipsIcon
      {...props}
      primaryColor={LEVEL_COLORS.levelTwo.primary}
      secondaryColor={LEVEL_COLORS.levelTwo.secondary}
    />
  ),
  "multiple-choice": (props: SvgProps) => (
    <LetterFormationIcon
      {...props}
      primaryColor={LEVEL_COLORS.levelTwo.primary}
      secondaryColor={LEVEL_COLORS.levelTwo.secondary}
    />
  ),
  flashcard: (props: SvgProps) => (
    <EarTabBarIcon
      {...props}
      primaryColor={LEVEL_COLORS.levelTwo.primary}
      secondaryColor={LEVEL_COLORS.levelTwo.secondary}
    />
  ),
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

type TabType = {
  name: keyof LevelTwoBottomTabRoutes;
  label: string;
};

const tabs: TabType[] = [
  {
    name: "spelling",
    label: "Spelling",
  },
  {
    name: "multiple-choice",
    label: "Multiple Choice",
  },
  {
    name: "flashcard",
    label: "Flashcard",
  },
];

export default function LevelTwoTabLayout() {
  return (
    <Tabs
      screenOptions={({}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: LEVEL_COLORS.levelTwo.primary,
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
