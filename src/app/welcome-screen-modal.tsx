import WelcomeVideoAnimation from "assets/videos/welcome";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { MS_300 } from "@/constants/timing";
import useSound from "@/core/hooks/useSound";

interface WelcomeScreenVideoRef {
  play?: () => void;
}

const SLIDES = [
  "welcome_screen_1",
  "welcome_screen_2",
  "welcome_screen_3",
  "welcome_screen_4",
  "welcome_screen_5",
  "welcome_screen_6",
  "welcome_screen_7",
] as const;

const _WELCOME_AUDIOS = [
  {
    id: SLIDES[0],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partA.mp3"),
  },
  {
    id: SLIDES[1],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partB.mp3"),
  },
  {
    id: SLIDES[2],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partC.mp3"),
  },
  {
    id: SLIDES[3],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partD.mp3"),
  },
  {
    id: SLIDES[4],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partE.mp3"),
  },
  {
    id: SLIDES[5],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partF.mp3"),
  },
  {
    id: SLIDES[6],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partG.mp3"),
  },
];

export default function WelcomeScreen() {
  const welcomeVideoRef = useRef<WelcomeScreenVideoRef>(null);
  const [slideName, setSlideName] = useState<
    | "welcome_screen_1"
    | "welcome_screen_2"
    | "welcome_screen_3"
    | "welcome_screen_4"
    | "welcome_screen_5"
    | "welcome_screen_6"
    | "welcome_screen_7"
  >("welcome_screen_1");

  const [lowerCaseLetterSvgProp, setLowerCaseLetterSvgProp] = useState({
    onAnimationComplete: () => {},
    letter: slideName,
  });

  const handleLowercaseComplete = useCallback(() => {
    console.log("handleLowercaseComplete");
  }, []);

  const { playSound } = useSound();

  const animateScreen = useCallback((slide: string) => {
    setTimeout(() => {
      if (welcomeVideoRef.current && welcomeVideoRef.current.play) {
        welcomeVideoRef.current?.play();
        const audio = _WELCOME_AUDIOS.find((_audio) => _audio.id === slide);
        if (audio) {
          playSound(audio.source);
        }
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initAnimation = useCallback(async () => {
    try {
      SLIDES.forEach((slide, index) => {
        setTimeout(() => {
          setSlideName(slide);
          setLowerCaseLetterSvgProp({
            letter: slide,
            onAnimationComplete: handleLowercaseComplete,
          });
          animateScreen(slide);
          if (welcomeVideoRef?.current?.play) {
            welcomeVideoRef?.current?.play();
            welcomeVideoRef?.current?.play();
            welcomeVideoRef?.current?.play();
          }
        }, index * 10000);
      });
    } catch (error) {
      console.log("error in initAnimation", error);
      throw error;
    }
  }, [handleLowercaseComplete, welcomeVideoRef, animateScreen]);

  useEffect(() => {
    setTimeout(() => {
      initAnimation();
    }, MS_300);
  }, [initAnimation]);

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-1 items-center justify-center">
        <WelcomeVideoAnimation
          ref={welcomeVideoRef}
          {...lowerCaseLetterSvgProp}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
