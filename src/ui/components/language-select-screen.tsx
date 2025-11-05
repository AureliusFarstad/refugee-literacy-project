import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

import {
  LANGUAGE_CONFIRMATION_AUDIO,
  LANGUAGE_OPTION_SELECTION_AUDIO,
} from "@/assets/language-select/svg/language-select-audio-sources";
import NoBackgroundSVG from "@/assets/language-select/svg/no-background.svg";
import NoBackgroundGreyscaleSVG from "@/assets/language-select/svg/no-background-greyscale.svg";
import SelectSVG from "@/assets/language-select/svg/select.svg";
import YesBackgroundSVG from "@/assets/language-select/svg/yes-background.svg";
import YesBackgroundGreyscaleSVG from "@/assets/language-select/svg/yes-background-greyscale.svg";
import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";
import useSound from "@/core/hooks/useSoundExtended";
import { SUPPORTED_LANGUAGES, useUser } from "@/core/store/user";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import { globalStyles } from "@/ui/styles";
import { WIDTH } from "@/utils/layout";

import type { ButtonColorProps } from "../icons/circular/color-scheme";
import { NativeButton } from "../icons/circular/native-button";
import { PlayButton } from "../icons/circular/play-button";

// Checkmark SVG Component
const CheckmarkSVG = ({ size = 24, color = "white", strokeWidth = 3 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M20 6L9 17L4 12"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// X SVG Component
const XMarkSVG = ({ size = 24, color = "white", strokeWidth = 3 }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 6L6 18M6 6L18 18"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Type for language codes (assuming this matches your store type)
type LanguageCode = "en" | "fa" | "fa_AF" | "ku" | "ar_SY";

// Step tracking enum for clarity
enum SelectionStep {
  LANGUAGE_SELECTION = "language_selection",
  FINAL_CONFIRMATION = "final_confirmation",
}

// Welcome Video Banner Styling
const SELECT_BANNER_HORIZONTAL_MARGIN = 30;
const SELECT_BANNER_CALC_WIDTH = WIDTH - SELECT_BANNER_HORIZONTAL_MARGIN * 2;
const SELECT_BANNER_MAX_WIDTH = 300;
const SELECT_BANNER_WIDTH = Math.min(
  SELECT_BANNER_CALC_WIDTH,
  SELECT_BANNER_MAX_WIDTH,
);
const SELECT_BANNER_ASPECT_RATIO = 177 / 210; // Original height/width ratio
const SELECT_BANNER_HEIGHT = SELECT_BANNER_WIDTH * SELECT_BANNER_ASPECT_RATIO;

const BACKGROUND_ASPECT_RATIO = 160 / 280; // Original height/width ratio
const BACKGROUND_WIDTH = SELECT_BANNER_WIDTH;
const BACKGROUND_HEIGHT = BACKGROUND_WIDTH * BACKGROUND_ASPECT_RATIO;

const PULSE_BORDER_COLOR = SECTION_COLORS.speaking.primary;
const PULSE_BORDER_WIDTH = 4;
const PULSE_DURATION = 1500;

const defaultButtonColorProps: ButtonColorProps = {
  primaryColor: APP_COLORS.green,
  secondaryColor: APP_COLORS.lightgreen,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const languageAssets = {
  en: {
    selectText: "I speak English",
    selectAudio: LANGUAGE_OPTION_SELECTION_AUDIO.en,
    confirmAudio: LANGUAGE_CONFIRMATION_AUDIO.en,
  },
  fa: {
    selectText: "من فارسی صحبت می‌کنم",
    selectAudio: LANGUAGE_OPTION_SELECTION_AUDIO.fa,
    confirmAudio: LANGUAGE_CONFIRMATION_AUDIO.fa,
  },
  fa_AF: {
    selectText: "من دری صحبت می‌کنم",
    selectAudio: LANGUAGE_OPTION_SELECTION_AUDIO.fa_af,
    confirmAudio: LANGUAGE_CONFIRMATION_AUDIO.fa_af,
  },
  ku: {
    selectText: "Ez bi kurdî diaxivim",
    selectAudio: LANGUAGE_OPTION_SELECTION_AUDIO.ku,
    confirmAudio: LANGUAGE_CONFIRMATION_AUDIO.ku,
  },
  ar_SY: {
    selectText: "Ana atakallam al-lughah al-arabiyah",
    selectAudio: LANGUAGE_OPTION_SELECTION_AUDIO.ar_sy,
    confirmAudio: LANGUAGE_CONFIRMATION_AUDIO.ar_sy,
  },
};

const LanguageSelectionScreen = () => {
  const setLanguage = useUser.use.setLanguage();
  const { playSound, cleanup } = useSound();

  // Core state management
  const [currentStep, setCurrentStep] = useState<SelectionStep>(
    SelectionStep.LANGUAGE_SELECTION,
  );
  const [selectedLanguageCode, setSelectedLanguageCode] =
    useState<LanguageCode | null>(null);
  const [hasPlayedConfirmationAudio, setHasPlayedConfirmationAudio] =
    useState(false);
  const [isInitialPulseActive, setIsInitialPulseActive] = useState(true);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  // Step 1: Handle language row selection
  const handleLanguageRowPress = async (languageCode: LanguageCode) => {
    setSelectedLanguageCode(languageCode);

    // Play select audio for this language
    const assets = languageAssets[languageCode];
    if (assets?.selectAudio) {
      try {
        await playSound(assets.selectAudio);
      } catch (error) {
        console.log(`Error playing select audio for ${languageCode}:`, error);
      }
    }
  };

  // Step 2: Handle bottom tab confirmation (green checkmark)
  const handleProceedToConfirmation = async () => {
    if (!selectedLanguageCode) return;
    // Stop any currently playing audio
    await cleanup();
    setCurrentStep(SelectionStep.FINAL_CONFIRMATION);
  };

  // Step 2: Handle bottom tab cancellation (red X)
  const handleCancelSelection = () => {
    setSelectedLanguageCode(null);
  };

  // Step 3: Handle confirmation audio button
  const handlePlayConfirmationAudio = () => {
    console.log("HERE");
    if (!selectedLanguageCode) return;
    setHasPlayedConfirmationAudio(true);
    setIsInitialPulseActive(false); // Stop pulsing when audio button is pressed
  };

  // Step 3: Handle final cancellation (restart process)
  const handleRestartProcess = async () => {
    // Stop any currently playing audio
    await cleanup();

    // Reset all state
    setCurrentStep(SelectionStep.LANGUAGE_SELECTION);
    setSelectedLanguageCode(null);
    setHasPlayedConfirmationAudio(false);
    setIsInitialPulseActive(true); // Re-enable pulsing if process restarts
  };

  // Step 3: Handle final confirmation (save to store)
  const handleFinalConfirmation = () => {
    if (!selectedLanguageCode || !hasPlayedConfirmationAudio) return;
    setLanguage(selectedLanguageCode);
    console.log(`Language saved to store: ${selectedLanguageCode}`);
  };

  // Render Step 1: Language Selection Screen
  const renderLanguageSelectionScreen = () => (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        {/* Header */}
        <View style={styles.selectSVGContainer}>
          <SelectSVG
            width={SELECT_BANNER_WIDTH}
            height={SELECT_BANNER_HEIGHT}
          />
        </View>

        {/* Language Options List */}
        <ScrollView
          style={styles.languageListContainer}
          contentContainerStyle={styles.languageListContent}
        >
          {SUPPORTED_LANGUAGES.map((language) => {
            const isSelected = selectedLanguageCode === language.code;
            const assets = languageAssets[language.code as LanguageCode];

            return (
              <Pressable
                key={language.code}
                onPress={() =>
                  handleLanguageRowPress(language.code as LanguageCode)
                }
                style={[
                  styles.languageRowBase,
                  isSelected
                    ? styles.languageRowSelected
                    : styles.languageRowUnselected,
                ]}
              >
                <PlayButton
                  {...defaultButtonColorProps}
                  width={50}
                  height={50}
                />
                <Text
                  style={[
                    styles.languageRowTextBase,
                    isSelected
                      ? styles.languageRowTextSelected
                      : styles.languageRowTextUnselected,
                    language.code === "en" && globalStyles.thomasFont,
                  ]}
                >
                  {assets?.selectText || language.label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Bottom Confirmation Tab - Only show when language is selected */}
        {selectedLanguageCode && (
          <View style={styles.bottomTabContainer}>
            <View style={styles.bottomTabButtonsContainer}>
              {/* Red X - Cancel Selection */}
              <Pressable
                onPress={handleCancelSelection}
                style={[
                  styles.bottomTabButtonBase,
                  styles.bottomTabCancelButton,
                ]}
              >
                <XMarkSVG size={36} color="white" strokeWidth={4} />
              </Pressable>

              {/* Green Check - Proceed to Confirmation */}
              <Pressable
                onPress={handleProceedToConfirmation}
                style={[
                  styles.bottomTabButtonBase,
                  styles.bottomTabConfirmButton,
                ]}
              >
                <CheckmarkSVG size={36} color="white" strokeWidth={4} />
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );

  // Render Step 3: Final Confirmation Screen
  const renderFinalConfirmationScreen = () => {
    const assets = selectedLanguageCode
      ? languageAssets[selectedLanguageCode]
      : null;

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: APP_COLORS.offwhite }}>
        <View style={styles.confirmationContainer}>
          <View style={styles.yesRow}>
            <View style={styles.yesBackgroundWrapper}>
              {hasPlayedConfirmationAudio ? (
                <YesBackgroundSVG
                  height={BACKGROUND_HEIGHT}
                  width={BACKGROUND_WIDTH}
                />
              ) : (
                <YesBackgroundGreyscaleSVG
                  height={BACKGROUND_HEIGHT}
                  width={BACKGROUND_WIDTH}
                />
              )}
            </View>

            <Pressable
              onPress={handleFinalConfirmation}
              disabled={!hasPlayedConfirmationAudio}
              style={[
                styles.finalButtonBase,
                hasPlayedConfirmationAudio
                  ? styles.finalConfirmButtonActive
                  : styles.finalButtonDisabled,
              ]}
            >
              <CheckmarkSVG
                size={32}
                color={hasPlayedConfirmationAudio ? "white" : "#9CA3AF"}
                strokeWidth={4}
              />
            </Pressable>
          </View>

          {/* Audio Preview Button */}
          <AnimatedAudioButton
            width={120}
            height={120}
            audioSource={assets?.confirmAudio as string}
            onPress={handlePlayConfirmationAudio} // Add this prop
          >
            <PulsingNativeButtonWrapper
              isActive={isInitialPulseActive}
              width={120}
              height={120}
            >
              <NativeButton
                {...defaultButtonColorProps}
                width={120}
                height={120}
              />
            </PulsingNativeButtonWrapper>
          </AnimatedAudioButton>

          <View style={styles.yesRow}>
            <View style={styles.yesBackgroundWrapper}>
              {hasPlayedConfirmationAudio ? (
                <NoBackgroundSVG
                  height={BACKGROUND_HEIGHT}
                  width={BACKGROUND_WIDTH}
                />
              ) : (
                <NoBackgroundGreyscaleSVG
                  height={BACKGROUND_HEIGHT}
                  width={BACKGROUND_WIDTH}
                />
              )}
            </View>
            <Pressable
              onPress={handleRestartProcess}
              disabled={!hasPlayedConfirmationAudio}
              style={[
                styles.finalButtonBase,
                hasPlayedConfirmationAudio
                  ? styles.finalCancelButtonActive
                  : styles.finalButtonDisabled,
              ]}
            >
              <XMarkSVG
                size={32}
                color={hasPlayedConfirmationAudio ? "white" : "#9CA3AF"}
                strokeWidth={4}
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  // Main render - switch between steps
  return (
    <>
      {currentStep === SelectionStep.LANGUAGE_SELECTION &&
        renderLanguageSelectionScreen()}
      {currentStep === SelectionStep.FINAL_CONFIRMATION &&
        renderFinalConfirmationScreen()}
    </>
  );
};

const PulsingNativeButtonWrapper = ({
  isActive,
  children,
  width,
  height,
}: {
  isActive: boolean;
  children: React.ReactNode;
  width: number;
  height: number;
}) => {
  const pulseOpacity = useSharedValue(0);

  React.useEffect(() => {
    if (isActive) {
      pulseOpacity.value = withRepeat(
        withSequence(
          withTiming(0.7, {
            duration: PULSE_DURATION / 2,
            easing: Easing.inOut(Easing.ease),
          }),
          withTiming(0.2, {
            duration: PULSE_DURATION / 2,
            easing: Easing.inOut(Easing.ease),
          }),
        ),
        -1, // Infinite repeat
        true, // Reverse direction
      );
    } else {
      cancelAnimation(pulseOpacity);
      pulseOpacity.value = withTiming(0, { duration: 300 });
    }
    return () => {
      cancelAnimation(pulseOpacity);
    };
  }, [isActive, pulseOpacity]);

  const animatedBorderStyle = useAnimatedStyle(() => {
    return {
      opacity: pulseOpacity.value,
      width: width + PULSE_BORDER_WIDTH * 4, // Make border visually distinct
      height: height + PULSE_BORDER_WIDTH * 4,
      borderRadius: (width + PULSE_BORDER_WIDTH * 4) / 2,
      borderWidth: PULSE_BORDER_WIDTH,
      borderColor: PULSE_BORDER_COLOR,
    };
  });

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Animated.View style={[{ position: "absolute" }, animatedBorderStyle]} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  // Main Container Styles
  safeAreaView: {
    flex: 1,
    backgroundColor: APP_COLORS.backgroundgrey,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: APP_COLORS.offwhite,
  },
  yesRow: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginVertical: 20,
    height: BACKGROUND_HEIGHT,
    width: "100%", // Take full width
    alignSelf: "center", // Ensure it's centered in parent
  },

  yesBackgroundWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  finalButtonBase: {
    position: "absolute",
    top: 0, // Align to top
    left: "50%", // Center horizontally
    transform: [{ translateX: -32 }], // Offset by half button width (64/2 = 32)
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10, // Ensure button appears above SVG
  },
  // Header Styles
  selectSVGContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
    backgroundColor: APP_COLORS.backgroundgrey,
  },
  selectSVG: {
    width: 100,
    height: 80,
  },
  nativeButtonWrapper: {
    width: 200,
    height: 200,
  },
  // Language List Styles
  // languageListContainer: {
  //   flex: 1,
  // },
  languageListContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  languageListContainer: {
    flex: 1,
    backgroundColor: APP_COLORS.offwhite, // Very subtle tint to connect with character area
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // marginTop: -10, // Slight overlap to create connection
  },

  // Language Row Styles
  languageRowBase: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 20,
    borderRadius: 35,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  languageRowSelected: {
    backgroundColor: "#C9FFD9", // green-500
    borderColor: "#62CC82", // green-600
  },
  languageRowUnselected: {
    backgroundColor: "#F5F5F5", // Slightly warmer than '#EEEEEE'
    borderColor: "#E5E5E5", // Softer border
  },

  // Language Row Text Styles
  languageRowTextBase: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
  },
  languageRowTextSelected: {
    color: APP_COLORS.offblack,
  },
  languageRowTextUnselected: {
    color: APP_COLORS.offblack, // gray-800
  },

  // Bottom Tab Styles
  bottomTabContainer: {
    backgroundColor: APP_COLORS.backgroundgrey,
    borderTopWidth: 2,
    borderColor: "#D9D9D9",
  },
  bottomTabButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
  },
  bottomTabButtonBase: {
    width: 64,
    height: 64,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTabCancelButton: {
    backgroundColor: "#EF4444", // red-500
  },
  bottomTabConfirmButton: {
    backgroundColor: "#22C55E", // green-500
  },
  bottomTabButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  // Confirmation Screen Styles
  confirmationContainer: {
    flex: 1,
    backgroundColor: APP_COLORS.offwhite,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 32,
  },

  // Selected Language Display Styles
  selectedLanguageDisplayContainer: {
    marginBottom: 48,
    alignItems: "center",
  },
  confirmationPromptText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
  },
  selectedLanguageNameText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#16A34A", // green-600
  },
  selectedLanguageNativeText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 8,
    color: "#6B7280", // gray-600
  },

  // Audio Preview Styles
  audioPreviewButton: {
    backgroundColor: "#3B82F6", // blue-500
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  audioPreviewButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },

  // Final Confirmation Buttons Styles
  finalButtonsContainer: {
    flexDirection: "row",
    gap: 32,
  },
  finalCancelButtonActive: {
    backgroundColor: "#EF4444", // red-500
  },
  finalConfirmButtonActive: {
    backgroundColor: "#22C55E", // green-500
  },
  finalButtonDisabled: {
    backgroundColor: "#D1D5DB", // gray-300
  },

  // Final Button Text Styles
  finalButtonTextBase: {
    fontSize: 24,
    fontWeight: "bold",
  },
  finalButtonTextActive: {
    color: "white",
  },
  finalButtonTextDisabled: {
    color: "#9CA3AF", // gray-500
  },

  // Instruction Text Style
  instructionText: {
    fontSize: 14,
    color: "#9CA3AF", // gray-500
    textAlign: "center",
    marginTop: 32,
  },
});

export default LanguageSelectionScreen;
