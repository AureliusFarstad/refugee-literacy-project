import React from "react";
import { StyleSheet, View } from "react-native";
import type { SvgProps } from "react-native-svg";

import { ALPHABET_AUDIO_SOURCES } from "@/assets/alphabet_sounds";
import { BLENDING_AUDIO_SOURCES } from "@/assets/blending/index";
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
      width: 40,
      height: 40,
    },
    nativeButtonOverlay: {
      position: "absolute",
      top: -10,
      right: -10,
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
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.primary_color,
      // alignSelf: "center",
    },
    text: {
      color: colors.off_black_color,
      fontWeight: "bold",
      textAlign: "center",
    },
    word: {
      fontSize: 24,
      height: 40, // TODO: might change with font.
      lineHeight: 40,
    },
    lettersContainer: {
      paddingTop: 18,
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: 25,
    },
    letterButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.primary_color,
      justifyContent: "center",
      alignItems: "center",
    },
    letter: {
      fontSize: 20,
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
              audioSource={ALPHABET_AUDIO_SOURCES.a.sound} // TODO: Plug in the right native audio here...
              width={40}
              height={40}
            >
              <NativeButton {...iconButtonProps} />
            </AnimatedAudioButton>
          </View>
        </View>

        {/* English Word Rectangular Button */}
        <AnimatedAudioButton
          audioSource={BLENDING_AUDIO_SOURCES[content.word].file}
          width={180}
          height={40}
        >
          <View style={styles.wordContainer}>
            <View style={[styles.iconButton, { left: 0 }]}>
              <EnglishButton {...iconButtonProps} />
            </View>
            <Text style={[styles.text, styles.word]}>
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
              width={40}
              height={40}
            >
              <View style={styles.letterButton}>
                <Text style={[styles.text, styles.letter]}>
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
