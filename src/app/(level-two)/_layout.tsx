import { Tabs } from "expo-router";
import React from "react";

import { SECTION_COLORS } from "@/constants/routes";
import TabIconWrapper from "@/ui/icons/bottom-tab/bottom-tab-wrapper";
import { DragIcon } from "@/ui/icons/bottom-tab/drag-and-drop-icon";
import { EarIcon } from "@/ui/icons/bottom-tab/ear-icon";
import { TeacherIcon } from "@/ui/icons/bottom-tab/teacher-icon";
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
                <TabIconWrapper
                  focused={focused}
                  sectionColor={sectionColor}
                  icon={icon}
                />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}
