import React from "react";
import { StyleSheet, View } from "react-native";
import type { SvgProps } from "react-native-svg";

import { ALPHABET_AUDIO_SOURCES } from "@/assets/alphabet/alphabet_sounds";
import {
  requireEnglishAudioForWord,
  requireNativeAudioForWord,
} from "@/assets/blending/index";
import { APP_COLORS } from "@/constants/routes";
import { Text } from "@/ui";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import { EnglishButton } from "@/ui/icons/circular/english-button";
import { NativeButton } from "@/ui/icons/circular/native-button";

type FlashCardProps = {
  content: {
    id: string;
    letters: string[];
    word: string;
    svg: React.FC<SvgProps>;
  };
  colors: {
    background_color: string;
    primary_color: string;
    secondary_color: string;
    off_white_color: string;
    off_black_color: string;
  };
};

// TODO: PLUG IN NATIVE AUDIO SOURCES...

export const BlendingFlashCard = ({ content, colors }: FlashCardProps) => {
  // Shared button props for consistency
  const iconButtonProps = {
    primaryColor: colors.primary_color,
    secondaryColor: colors.secondary_color,
    offwhiteColor: colors.off_white_color,
    offblackColor: colors.off_black_color,
    backgroundColor: colors.background_color,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    card: {
      backgroundColor: colors.off_white_color,
      padding: 20,
      width: "100%",
      maxWidth: 400,
      borderRadius: 15,
      borderColor: colors.primary_color,
      borderWidth: 2,
    },
    imageContainer: {
      width: "100%",
      height: 200,
      backgroundColor: colors.background_color,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      position: "relative",
    },
    image: {
      width: "100%",
      height: 200,
      borderRadius: 8,
    },
    iconButton: {
      position: "absolute",
      width: 50,
      height: 50,
    },
    nativeButtonOverlay: {
      position: "absolute",
      top: -5,
      right: -5,
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: colors.off_white_color,
    },
    wordContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: 180,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.primary_color,
      // alignSelf: "center",
    },
    word: {
      fontFamily: "Thomas",
      fontSize: 42,
      lineHeight: 48,
      color: APP_COLORS.offblack,
    },
    lettersContainer: {
      paddingTop: 18,
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 25,
    },
    letterButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: colors.primary_color,
      justifyContent: "center",
      alignItems: "center",
    },
    letter: {
      fontFamily: "Thomas",
      fontSize: 42,
      lineHeight: 48,
      color: APP_COLORS.offblack,
    },
  });

  const { isLowercase } = useLetterCase();

  return (
    <View style={styles.container}>
      {/* Background^ and Card */}
      <View style={styles.card}>
        {/* Image  */}
        <View style={styles.imageContainer}>
          <content.svg style={styles.image} />

          {/* Native Button */}
          <View style={styles.nativeButtonOverlay} />
          <View style={[styles.iconButton, { top: 0, right: 0 }]}>
            <AnimatedAudioButton
              audioSource={requireNativeAudioForWord(content.word)}
              width={50}
              height={50}
            >
              <NativeButton {...iconButtonProps} />
            </AnimatedAudioButton>
          </View>
        </View>

        {/* English Word Rectangular Button */}
        <AnimatedAudioButton
          audioSource={requireEnglishAudioForWord(content.word)}
          width={180}
          height={50}
        >
          <View style={styles.wordContainer}>
            <View style={[styles.iconButton, { left: 0 }]}>
              <EnglishButton {...iconButtonProps} />
            </View>
            <Text style={[styles.word]}>
              {isLowercase
                ? content.word.toLowerCase()
                : content.word.toUpperCase()}
            </Text>
          </View>
        </AnimatedAudioButton>

        {/* Letter Buttons */}
        <View style={styles.lettersContainer}>
          {content.letters.map((letter) => (
            <AnimatedAudioButton
              key={letter} // TODO: do we need this?
              audioSource={ALPHABET_AUDIO_SOURCES[letter].sound}
              width={50}
              height={50}
            >
              <View style={styles.letterButton}>
                <Text style={[styles.letter]}>
                  {isLowercase ? letter.toLowerCase() : letter.toUpperCase()}
                </Text>
              </View>
            </AnimatedAudioButton>
          ))}
        </View>
      </View>
    </View>
  );
};
