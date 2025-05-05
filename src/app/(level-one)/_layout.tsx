import { Tabs } from "expo-router";
import React from "react";

import { SECTION_COLORS } from "@/constants/routes";
import TabIconWrapper from "@/ui/icons/bottom-tab/bottom-tab-wrapper";
import { ConnectIcon } from "@/ui/icons/bottom-tab/connect-icon";
import { EarIcon } from "@/ui/icons/bottom-tab/ear-icon";
import { NameIcon } from "@/ui/icons/bottom-tab/name-icon";
import { PencilIcon } from "@/ui/icons/bottom-tab/pencil-icon";
import { TeacherIcon } from "@/ui/icons/bottom-tab/teacher-icon";
import { IS_IOS } from "@/utils/layout";

const sectionColor = SECTION_COLORS.alphabet;

type TabType = {
  name: string;
  label: string;
  icon: (props: { lineColor: string }) => JSX.Element;
};

const tabs: TabType[] = [
  {
    name: "letter-introduction",
    label: "letter-introduction",
    icon: TeacherIcon,
  },
  {
    name: "letter-formation",
    label: "letter-formation",
    icon: PencilIcon,
  },
  {
    name: "letter-sound",
    label: "letter-sound",
    icon: EarIcon,
  },
  {
    name: "letter-name",
    label: "letter-name",
    icon: NameIcon,
  },
  {
    name: "letter-matching",
    label: "letter-matching",
    icon: ConnectIcon,
  },
];

export default function LevelTwoTabLayout() {
  return (
    <Tabs
      initialRouteName="letter-introduction"
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
