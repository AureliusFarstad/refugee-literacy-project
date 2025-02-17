import { Tabs } from "expo-router";
import React, { Children } from "react";
import type { SvgProps } from "react-native-svg";
import { View, StyleSheet } from "react-native";

import TabIconWrapper from '@/ui/icons/bottom-tab/bottom-tab-wrapper';
import { TeacherIcon } from '@/ui/icons/bottom-tab/teacher-icon';
import { EarIcon } from '@/ui/icons/bottom-tab/ear-icon';
import { DragIcon } from '@/ui/icons/bottom-tab/drag-and-drop-icon'

import { SECTION_COLORS, APP_COLORS } from "@/constants/routes";
import { IS_IOS } from "@/utils/layout";

const sectionColor = SECTION_COLORS.blending;

type TabType = {
  name: string;
  label: string;
  icon: (props: { lineColor: string }) => JSX.Element;
};

const tabs: TabType[] = [
  {
    name: "blending-flashcard",
    label: "blending-flashcard",
    icon: TeacherIcon,
  },
  {
    name: "multiple-choice",
    label: "multiple-choice",
    icon: EarIcon,
  },
  {
    name: "spelling",
    label: "spelling",
    icon: DragIcon,
  },
];

export default function LevelTwoTabLayout() {
  return (
    <Tabs
      initialRouteName="blending-flashcard"
      screenOptions={({}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: sectionColor.primary,
          paddingTop: IS_IOS ? 16 : 4,
          height: IS_IOS ? 108 : 80,
          paddingHorizontal: 12,
        },
        // tabBarInactiveTintColor: "white",
        // tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}
    >
      {tabs.map(({ name, label, icon }) => {
        return (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              title: label,
              // eslint-disable-next-line react/no-unstable-nested-components
              tabBarIcon: ({ focused }) => (
                <TabIconWrapper focused={focused} sectionColor={sectionColor} icon={icon}/>
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}
