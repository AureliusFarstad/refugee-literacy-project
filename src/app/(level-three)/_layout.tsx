import { Tabs } from "expo-router";
import React from "react";
import type { JSX } from "react/jsx-runtime";

import { SECTION_COLORS } from "@/constants/routes";
import TabIconWrapper from "@/ui/icons/bottom-tab/bottom-tab-wrapper";
import { ConversationIcon } from "@/ui/icons/bottom-tab/conversation-icon";
import { DragIcon } from "@/ui/icons/bottom-tab/drag-and-drop-icon";
import { TeacherIcon } from "@/ui/icons/bottom-tab/teacher-icon";
import { IS_IOS } from "@/utils/layout";

export const sectionColor = SECTION_COLORS.speaking;

type TabType = {
  name: string;
  label: string;
  icon: (props: { lineColor: string }) => JSX.Element;
};

const tabs: TabType[] = [
  {
    name: "listening",
    label: "listening",
    icon: ConversationIcon,
  },
  {
    name: "video-tab",
    label: "video-tab",
    icon: TeacherIcon,
  },
  {
    name: "audio-ordering",
    label: "audio-ordering",
    icon: DragIcon,
  },
];

export default function LevelTwoTabLayout() {
  return (
    <Tabs
      initialRouteName="listening"
      backBehavior="order"
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
