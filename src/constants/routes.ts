import {
  LESSON_FOUR_IMAGE,
  LESSON_ONE_IMAGE,
  LESSON_THREE_IMAGE,
  LESSON_TWO_IMAGE,
  TEACHER_TIP_IMAGE,
} from "@/ui/components/illustrations/home";

export const LESSONS = [
  {
    id: "teacher-tip",
    image: TEACHER_TIP_IMAGE,
    title: "Teacher tip",
    description: "Section 1 Introduction to the alphabet",
    path: "teacher-tip-modal",
    isFinished: true,
    progressBarColor: "bg-[#2B4AB0]",
  },
  {
    id: "lesson-1",
    image: LESSON_ONE_IMAGE,
    title: "Lesson 1",
    description: "Section 2 Introduction to the alphabet",
    path: "/(level-one)/letter-introduction",
    isFinished: false,
    progressBarColor: "bg-[#6D28D9]",
  },
  {
    id: "lesson-2",
    image: LESSON_TWO_IMAGE,
    title: "Lesson 2",
    description: "Section 3 Introduction to the alphabet",
    path: "/(level-two)/spelling",
    isFinished: false,
    progressBarColor: "bg-[#B43855]",
  },
  {
    id: "lesson-3",
    image: LESSON_THREE_IMAGE,
    title: "Lesson 3",
    description: "Section 4",
    path: "/(level-three)/listening",
    isFinished: false,
    progressBarColor: "bg-[#CA8A04]",
  },
  {
    id: "lesson-4",
    image: LESSON_FOUR_IMAGE,
    title: "Lesson 4",
    description: "Section 3",
    path: "/(level-four)/flashcard",
    isFinished: false,
    progressBarColor: "bg-[#C07027]",
  },
];

export const LEVEL_COLORS = {
  levelFour: {
    primary: "#F69F4E",
    secondary: "#FFF6D7",
  },
  levelOne: {
    primary: "#6D28D9",
    secondary: "#D6BCFA",
  },
  levelThree: {
    primary: "#FBD65B",
    secondary: "#FFF6D7",
  },
  levelTwo: {
    primary: "#F36889",
    secondary: "#E39AAB",
  },
} as const;

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

export type AppColorScheme = (typeof APP_COLORS)[keyof typeof APP_COLORS];

export const SECTION_COLORS = {
  blending: {
    // Blues
    primary: "#62A0EC",
    light: "#D7E9FF",
    dark: "#006BB4",
  },
  vocabulary: {
    // Greens
    primary: '#F69F4E',
    light: '#FAE7D6',
    dark: '#9A5B00',
  }
};

export type SectionColorScheme =
  (typeof SECTION_COLORS)[keyof typeof SECTION_COLORS];

export type LevelColorScheme = (typeof LEVEL_COLORS)[keyof typeof LEVEL_COLORS];
