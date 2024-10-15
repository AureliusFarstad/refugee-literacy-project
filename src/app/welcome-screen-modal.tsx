import WelcomeVideoAnimation from "assets/videos/welcome";
import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";

import { Text } from "@/ui";

const _WELCOME_AUDIOS = [
  {
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partA.mp3"),
  },
];

interface WelcomeScreenVideoRef {
  play?: () => void;
}

export default function WelcomeScreen() {
  const welcomeVideoRef = useRef<WelcomeScreenVideoRef>(null);

  const [lowerCaseLetterSvgProp, setLowerCaseLetterSvgProp] = useState({
    onAnimationComplete: () => {},
    letter: "welcome_screen_1",
  });

  const handleLowercaseComplete = () => {
    console.log("handleLowercaseComplete");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View className="flex flex-1 items-center justify-center">
        <Pressable
          className="flex items-center justify-center"
          onPress={() => {
            if (welcomeVideoRef?.current?.play) {
              welcomeVideoRef?.current?.play();
            }
          }}
        >
          <Text className="text-4xl font-bold ">Welcome video</Text>
        </Pressable>
        <Pressable
          className="flex items-center justify-center"
          onPress={() => {
            setLowerCaseLetterSvgProp({
              letter: "welcome_screen_2",
              onAnimationComplete: handleLowercaseComplete,
            });
            if (welcomeVideoRef?.current?.play) {
              welcomeVideoRef?.current?.play();
            }
          }}
        >
          <Text className="text-4xl font-bold ">video</Text>
        </Pressable>
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
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
