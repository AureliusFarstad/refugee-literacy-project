import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";

import { ALPHABET_LETTER_LIST_BY_LEVEL } from "@/assets/alphabet";
import { ALPHABET_AUDIO_SOURCES } from "@/assets/alphabet/alphabet_sounds";
import { APP_COLORS } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { Pressable, SafeAreaView, Text, TouchableOpacity, View } from "@/ui";
import OverlayLetterAnimation from "@/ui/components/letter-formation/overlay-letter-animation";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EarButton } from "@/ui/icons/circular/ear-button";
import { NameButton } from "@/ui/icons/circular/name-button";
import { PencilButton } from "@/ui/icons/circular/pencil-button";
import { globalStyles } from "@/ui/styles";
import { HEIGHT } from "@/utils/layout";

import { SECTION_COLOR } from "./_layout";

const SCREEN_HEIGHT_CUTOFF = 732; // Pixel 2 viewport height

// TODO: Move to _layout?
const buttonColors: ButtonColorProps = {
  primaryColor: SECTION_COLOR.primary,
  secondaryColor: SECTION_COLOR.light,
  offblackColor: APP_COLORS.offblack,
  offwhiteColor: APP_COLORS.offwhite,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const letters = ALPHABET_LETTER_LIST_BY_LEVEL.LEVEL_1;

type AnimatedLetterComponentRef = {
  animateLowercase: () => void;
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: APP_COLORS.backgroundgrey,
  },
  button: {
    width: 60,
    height: 60,
  },
  pencilButtonWrapper: {
    width: 140,
    height: 140,
    position: "absolute",
    top: 16,
    left: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
    gap: 20,
    marginVertical: 16,
    marginRight: 24,
  },
  card: {
    position: "relative",
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    backgroundColor: APP_COLORS.offwhite,
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: SECTION_COLOR.primary,
  },
  letterOffset: {
    position: "absolute", // Change from "relative" to "absolute"
    width: "100%", // Take full parent width
    top: 0,
    left: 0, // Ensure it's aligned with parent
    alignItems: "center",
    justifyContent: "center",
  },
});

const LetterFormation = () => {
  const { isLowercase } = useLetterCase();

  const [activeLetter, setActiveLetter] = useState(letters[0]);

  const [animationLetter, setAnimationLetter] = useState(
    isLowercase ? activeLetter.toLowerCase() : activeLetter.toUpperCase(),
  );

  // Add this useEffect to update animationLetter when dependencies change
  useEffect(() => {
    setAnimationLetter(
      isLowercase ? activeLetter.toLowerCase() : activeLetter.toUpperCase(),
    );
  }, [activeLetter, isLowercase]);

  const [isAnimating, setIsAnimating] = useState(false);
  const [isOverlayAnimation, setIsOverlayAnimation] = useState(true);
  const onAnimationStart = () => {
    setIsAnimating(true);
  };

  const { playGuideAudio, isPlaying: isPlayingGuidanceAudio } = useGuideAudio({
    screenName: "letter-formation",
    module: "alphabet-module",
  });

  const animatedLetterRef = useRef<AnimatedLetterComponentRef | null>(null);

  const onAnimationComplete = (letter: string) => {
    console.log(letter);
    setIsAnimating(false);
    setIsOverlayAnimation(false);
    console.log("animation completed");
  };

  // Conditional styles based on screen height
  const isSmallScreen = HEIGHT < SCREEN_HEIGHT_CUTOFF;

  const cardStyle = [
    styles.card,
    isSmallScreen ? { height: 250 } : { height: 360 },
  ];

  const letterOffsetStyle = [
    styles.letterOffset,

    isSmallScreen
      ? { transform: [{ scale: 0.6 }] }
      : { transform: [{ translateY: -25 }] }, // No transform for larger screens
  ];

  return (
    <SafeAreaView
      style={globalStyles.safeAreaView}
      edges={["top", "left", "right"]}
    >
      <GuidanceAudioHeader
        title="Formation"
        onPressGuide={playGuideAudio}
        isPlaying={isPlayingGuidanceAudio}
        showLetterCaseSwitch={true}
      />
      <View
        style={[
          { flex: 1, justifyContent: "center", alignItems: "center" },
          styles.background,
        ]}
      >
        <View
          style={{ flex: 1, justifyContent: "center", paddingHorizontal: 10 }}
        >
          <View style={[styles.buttonRow]}>
            <AnimatedAudioButton
              audioSource={
                ALPHABET_AUDIO_SOURCES[
                  activeLetter as keyof typeof ALPHABET_AUDIO_SOURCES
                ].name
              }
              width={60}
              height={60}
            >
              <View style={[styles.button]}>
                <NameButton {...buttonColors} />
              </View>
            </AnimatedAudioButton>
            <AnimatedAudioButton
              audioSource={
                ALPHABET_AUDIO_SOURCES[
                  activeLetter as keyof typeof ALPHABET_AUDIO_SOURCES
                ].sound
              }
              width={60}
              height={60}
            >
              <View style={[styles.button]}>
                <EarButton {...buttonColors} />
              </View>
            </AnimatedAudioButton>
          </View>
          <View style={cardStyle}>
            <View style={letterOffsetStyle}>
              <OverlayLetterAnimation
                ref={animatedLetterRef}
                name={animationLetter}
                key={animationLetter}
                onAnimationComplete={onAnimationComplete}
                onAnimationStart={onAnimationStart}
                isAnimating={isAnimating}
                isOverlayAnimation={isOverlayAnimation}
              />
            </View>
            <View style={[styles.pencilButtonWrapper]}>
              <TouchableOpacity
                onPress={() => {
                  setIsOverlayAnimation(true);
                  setTimeout(() => {
                    animatedLetterRef.current?.animateLowercase();
                  }, 0);
                }}
              >
                <PencilButton {...buttonColors} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="mt-auto flex w-full flex-col justify-between px-4 pb-4">
          <View />
          <View className="flex w-full flex-row items-center justify-around">
            {letters.map((bottomBarLetter, index) => (
              <Pressable
                className={clsx("flex size-[60] justify-center rounded-md", {
                  "bg-colors-gray-300": bottomBarLetter !== activeLetter,
                  "bg-colors-purple-500": bottomBarLetter === activeLetter,
                })}
                onPress={() => {
                  setActiveLetter(bottomBarLetter);
                }}
                key={index}
              >
                <View className="flex flex-row items-center justify-center">
                  <Text style={globalStyles.thomasFont}>
                    {/* lowercase if isLowercase, otherwise uppercase */}
                    {isLowercase
                      ? bottomBarLetter.toLowerCase()
                      : bottomBarLetter.toUpperCase()}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LetterFormation;
