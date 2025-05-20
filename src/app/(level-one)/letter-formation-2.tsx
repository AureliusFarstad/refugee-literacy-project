import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";

import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { Pressable, SafeAreaView, Text, TouchableOpacity, View } from "@/ui";
import OverlayLetterAnimation from "@/ui/components/letter-formation/overlay-letter-animation";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { HEIGHT, IS_IOS } from "@/utils/layout";

import { EarButton } from "@/ui/icons/circular/ear-button";
import { NameButton } from "@/ui/icons/circular/name-button";
import { PencilButton } from "@/ui/icons/circular/pencil-button";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";

import { ALPHABET_LETTER_LIST_BY_LEVEL } from "@/assets/alphabet";
import { ALPHABET_AUDIO_SOURCES } from "@/assets/alphabet_sounds";

import { SECTION_COLOR } from "./_layout";
import { APP_COLORS } from "@/constants/routes";

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
    alignItems: "center",
    gap: 20,
    marginVertical: 16,
    marginRight: 20,
  },
  card: {
    position: "relative",
    height: 360,
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
    position: "absolute",  // Change from "relative" to "absolute"
    width: "100%",         // Take full parent width
    height: 356,
    top: -30,              // Move up 20px
    left: 0,               // Ensure it's aligned with parent
    alignItems: "center",
    justifyContent: "center",
  },
});

const LetterFormation = () => {
  const insets = useSafeAreaInsets();

  const { isLowercase } = useLetterCase();

  const [activeLetter, setActiveLetter] = useState(letters[0]);

  const [animationLetter, setAnimationLetter] = useState(
    isLowercase ? activeLetter.toLowerCase() : activeLetter.toUpperCase()
  );
  
  // Add this useEffect to update animationLetter when dependencies change
  useEffect(() => {
    setAnimationLetter(
      isLowercase ? activeLetter.toLowerCase() : activeLetter.toUpperCase()
    );
  }, [activeLetter, isLowercase]);


  const [isAnimating, setIsAnimating] = useState(false);
  const [isOverlayAnimation, setIsOverlayAnimation] = useState(true);
  const onAnimationStart = () => {
    setIsAnimating(true);
  };

  const { playGuideAudio, isPlaying: isPlayingGuidanceAudio } = useGuideAudio({
    screenName: "letter-formation",
  });

  const animatedLetterRef = useRef<AnimatedLetterComponentRef | null>(null);

  const onAnimationComplete = (letter: string) => {
    console.log(letter);
    setIsAnimating(false);
    setIsOverlayAnimation(false);
    console.log("animation completed");
  };

  return (
    <SafeAreaView>
      <GuidanceAudioHeader
        title="Formation"
        onPressGuide={playGuideAudio}
        isPlaying={isPlayingGuidanceAudio}
        colorType="NATIVE_BUTTON_COLOR"
      />
      <View
        style={[{
          height:
            HEIGHT - (insets.bottom + insets.top + 90 + (IS_IOS ? 96 : 112)),
        }, styles.background]}
      >
        <View style={[styles.buttonRow]}>
          <AnimatedAudioButton 
            audioSource={ALPHABET_AUDIO_SOURCES[activeLetter as keyof typeof ALPHABET_AUDIO_SOURCES].name}
            width={60}
            height={60}
          >
            <View style={[styles.button]}>
              <NameButton
                {...buttonColors}
              />
            </View>
          </AnimatedAudioButton>
          <AnimatedAudioButton 
            audioSource={ALPHABET_AUDIO_SOURCES[activeLetter as keyof typeof ALPHABET_AUDIO_SOURCES].sound}
            width={60}
            height={60}
          >
            <View style={[styles.button]}>
              <EarButton
                {...buttonColors}
              />
            </View>
          </AnimatedAudioButton>
        </View>
            {/* <TouchableOpacity
              onPress={() => {
                setIsOverlayAnimation(true);
                setTimeout(() => {
                  animatedLetterRef.current?.animateLowercase();
                }, 2000);
              }}
              className=" ml-2 flex size-[80] items-center justify-center  rounded-full bg-colors-purple-500"
            >
              <CustomPencilIcon size={44} />
            </TouchableOpacity> */}
        <View style={styles.card}>
          <View style={styles.letterOffset}>
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
                    }, 2000);
                  }}
              >
                <PencilButton
                  {...buttonColors}
                />
              </TouchableOpacity>
            </View>
        </View>
        <View className="mt-auto ">
          <View />
          <View className=" flex flex-row justify-between ">
            <View className="mt-16 flex w-full flex-row items-center justify-around px-[10px]">
              {letters.map((bottomBarLetter, index) => (
                <Pressable
                  className={clsx(
                    "flex size-[60] items-center justify-center rounded-md ",
                    {
                      "bg-colors-gray-300": bottomBarLetter !== activeLetter,
                      "bg-colors-purple-500": bottomBarLetter === activeLetter,
                    },
                  )}
                  onPress={() => {
                    setActiveLetter(bottomBarLetter);
                  }}
                  key={index}
                >
                  <View className="flex flex-row  items-center justify-center ">
                    <Text className="text-3xl font-medium">
                      {/* lowercase if isLowercase, otherwise uppercase */}
                      {isLowercase
                        ? bottomBarLetter.toLowerCase()
                        : bottomBarLetter.toUpperCase()
                      }
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LetterFormation;
