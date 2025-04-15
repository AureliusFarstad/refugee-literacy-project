import { Tabs } from "expo-router";
import React from "react";

import type { SectionColorTheme } from "@/constants/routes";
import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";
import TabIconWrapper from "@/ui/icons/bottom-tab/bottom-tab-wrapper";
import { DragIcon } from "@/ui/icons/bottom-tab/drag-and-drop-icon";
import { EarIcon } from "@/ui/icons/bottom-tab/ear-icon";
import { FlashcardIcon } from "@/ui/icons/bottom-tab/flashcard-icon";
import { TeacherIcon } from "@/ui/icons/bottom-tab/teacher-icon";
import { IS_IOS } from "@/utils/layout";

const sectionColor = SECTION_COLORS.vocabulary;

// Default color theme
export const SECTION_COLOR: SectionColorTheme = {
  appBackgroundColor: APP_COLORS.backgroundgrey,
  appWhiteColor: APP_COLORS.offwhite,
  appBlackColor: APP_COLORS.offblack,
  appGreyColor: APP_COLORS.grey,
  appGreenColor: APP_COLORS.green,
  appRedColor: APP_COLORS.red,
  sectionPrimaryColor: sectionColor.primary,
  sectionSecondaryColor: sectionColor.light,
};

type TabType = {
  name: string;
  label: string;
  icon: (props: { lineColor: string }) => JSX.Element;
};

const tabs: TabType[] = [
  {
    name: "flashcard",
    label: "flashcard",
    icon: FlashcardIcon,
  },
  {
    name: "video-explanation",
    label: "video-explanation",
    icon: TeacherIcon,
  },
  {
    name: "picture-multiple-choice",
    label: "picture-multiple-choice",
    icon: EarIcon,
  },
  {
    name: "audio-multiple-choice",
    label: "audio-multiple-choice",
    icon: DragIcon,
  },
];

export default function LevelTwoTabLayout() {
  return (
    <Tabs
      initialRouteName="flashcard"
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
