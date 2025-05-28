// TODO: REPLACE WITH CORRECT AUDIO
import { requireEnglishConversationAudio } from "@/assets/conversation/";
import ALPHABET from "@/assets/home/svg/alphabet.svg";
import BLENDING from "@/assets/home/svg/blending.svg";
import CONVERSATION from "@/assets/home/svg/conversation.svg";
import LITTLE_AND_OFTEN from "@/assets/home/svg/little-and-often.svg";
import VOCABULARY from "@/assets/home/svg/vocabulary.svg";

const defaultGuidanceAudio = requireEnglishConversationAudio("part3", "female");

export const LESSONS = [
  {
    id: "teacher-tip",
    title: "Teacher tip",
    description: "Section 1 Introduction to the alphabet",
    path: "/(videos)/little-and-often",
    isFinished: true,
    svg: LITTLE_AND_OFTEN,
    guidanceAudio: defaultGuidanceAudio,
  },
  {
    id: "lesson-1",
    title: "Lesson 1",
    description: "Section 2 Introduction to the alphabet",
    path: "/(level-one)/letter-introduction",
    isFinished: false,
    svg: ALPHABET,
    guidanceAudio: defaultGuidanceAudio,
  },
  {
    id: "lesson-2",
    title: "Lesson 2",
    description: "Section 3 Introduction to the alphabet",
    path: "/(level-two)/spelling",
    isFinished: false,
    svg: BLENDING,
    guidanceAudio: defaultGuidanceAudio,
  },
  {
    id: "lesson-3",
    title: "Lesson 3",
    description: "Section 4",
    path: "/(level-three)/listening",
    isFinished: false,
    svg: CONVERSATION,
    guidanceAudio: defaultGuidanceAudio,
  },
  {
    id: "lesson-4",
    title: "Lesson 4",
    description: "Section 3",
    path: "/(level-four)/flashcard",
    isFinished: false,
    svg: VOCABULARY,
    guidanceAudio: defaultGuidanceAudio,
  },
];

export const APP_COLORS = {
  green: "#62CC82",
  lightgreen: "#C9FFD9",
  darkgreen: "#00803C",
  red: "#FF5A5F",
  offblack: "#2F2F38",
  offwhite: "#FAFAFA",
  grey: "#D4D4D8",
  backgroundgrey: "#F2EFF0",
};

// Color theme definition
export interface SectionColorTheme {
  appBackgroundColor: string;
  appWhiteColor: string;
  appBlackColor: string;
  appGreyColor: string;
  appGreenColor: string;
  appRedColor: string;
  sectionPrimaryColor: string;
  sectionSecondaryColor: string;
}

export type AppColorScheme = (typeof APP_COLORS)[keyof typeof APP_COLORS];

export const SECTION_COLORS = {
  alphabet: {
    // Purples
    primary: "#C385F8",
    light: "#EFE3FA",
    dark: "#9C28DD",
  },
  blending: {
    // Blues
    primary: "#62A0EC",
    light: "#D7E9FF",
    dark: "#006BB4",
  },
  vocabulary: {
    // Oranges
    primary: "#F69F4E",
    light: "#FAE7D6",
    dark: "#9A5B00",
  },
  speaking: {
    // Yellows
    primary: "#FBD65B",
    light: "#FAE8AB",
    dark: "#7D6700",
  },
};

export type SectionColorScheme =
  (typeof SECTION_COLORS)[keyof typeof SECTION_COLORS];
