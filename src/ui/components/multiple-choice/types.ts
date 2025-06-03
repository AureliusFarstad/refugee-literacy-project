import type { ReactNode } from "react";
import type { Animated } from "react-native";

// Color theme definition
export interface ColorTheme {
  appBackgroundColor: string;
  appWhiteColor: string;
  appBlackColor: string;
  appGreyColor: string;
  appGreenColor: string;
  appRedColor: string;
  sectionPrimaryColor: string;
  sectionSecondaryColor: string;
}

// Word set definition
export interface WordSet {
  correctAnswer: string;
  options: string[];
}

// Display types
export type OptionDisplayType = "text" | "image";
export type CardDisplayType = "audio" | "image" | "text" | "custom";

// Component props
export interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  colors: ColorTheme;
  // Animation values
  flipValue: Animated.AnimatedInterpolation<number>;
  backFlipValue: Animated.AnimatedInterpolation<number>;
  frontOpacity: Animated.AnimatedInterpolation<number>;
  backOpacity: Animated.AnimatedInterpolation<number>;
}

// TODO: Nest this type in types below.
export type RenderChoiceOptionProps = {
  word: string;
  isSelected: boolean;
  isDisabled: boolean;
  isError: boolean;
  isSuccess: boolean;
  isCorrect: boolean;
  colors: ColorTheme;
};

export interface ChoiceOptionProps {
  word: string;
  isSelected: boolean;
  isDisabled: boolean;
  isError: boolean;
  isSuccess: boolean;
  isCorrect: boolean;
  colors: ColorTheme;
  shakeAnimation?: any;
  renderOption: (
    word: string,
    isSelected: boolean,
    isDisabled: boolean,
    isError: boolean,
    isSuccess: boolean,
    isCorrect: boolean,
    colors: ColorTheme,
  ) => ReactNode;
}

export interface ChoiceOptionsProps {
  words: string[];
  correctAnswer: string;
  selectedWord: string | null;
  disabledWords: string[];
  isError: boolean;
  isSuccess: boolean;
  colors: ColorTheme;
  onSelect: (word: string) => void;
  shakeAnimation: Animated.Value;
  renderOption: (
    word: string,
    isSelected: boolean,
    isDisabled: boolean,
    isError: boolean,
    isSuccess: boolean,
    isCorrect: boolean,
    colors: ColorTheme,
  ) => ReactNode;
  isInteractionLocked?: boolean;
}

export interface ProgressTrackerProps {
  current: number;
  total: number;
  colors: ColorTheme;
}

// Game state hook return type
export interface WordGameState {
  currentSetIndex: number;
  selectedWord: string | null;
  disabledWords: string[];
  isError: boolean;
  isSuccess: boolean;
  isInteractionLocked: boolean;
  moveToNextSet: () => void;
  resetGame: () => void;
  handleWordSelect: (word: string) => void;
  startShake: () => void;
  startFlip: () => void;
  shakeAnimation: Animated.Value;
  flipAnimation: Animated.Value;
  flipValue: Animated.AnimatedInterpolation<number>;
  backFlipValue: Animated.AnimatedInterpolation<number>;
  frontOpacity: Animated.AnimatedInterpolation<number>;
  backOpacity: Animated.AnimatedInterpolation<number>;
}

// Main component props
export interface WordChoiceScreenProps {
  wordSets: WordSet[];
  colors: ColorTheme;
  onGameComplete?: () => void;
  renderFrontCard: (word: string, theme: ColorTheme) => ReactNode;
  renderBackCard: (word: string, theme: ColorTheme) => ReactNode;
  renderOption: (
    word: string,
    isSelected: boolean,
    isDisabled: boolean,
    isError: boolean,
    isSuccess: boolean,
    isCorrect: boolean,
    theme: ColorTheme,
  ) => ReactNode;
}
