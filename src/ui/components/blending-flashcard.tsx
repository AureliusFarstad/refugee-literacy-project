import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

import { ALPHABET_AUDIO_SOURCES } from "@/core/store/alphabet_sounds";
import { Text } from "@/ui";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import { EnglishButton } from "@/ui/icons/circular/english-button";
import { NativeButton } from "@/ui/icons/circular/native-button";

export type FlashCardColors = {
  background_color: string;
  primary_color: string;
  secondary_color: string;
  off_white_color: string;
  off_black_color: string;
};

export type FlashCardContent = {
  id: string;
  letters: string[];
  word: string;
  image: string;
};

export type FlashCardProps = {
  content: FlashCardContent;
  colors: FlashCardColors;
};

export const BlendingFlashCard = ({ content, colors }: FlashCardProps) => {
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
      position: "relative", // Ensures absolute positioning works inside
    },
    image: {
      width: "80%",
      height: "80%",
    },
    nativeButtonContainer: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 40,
      height: 40,
    },
    nativeButtonBackground: {
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
      alignSelf: "center",
    },
    englishButtonContainer: {
      position: "absolute",
      width: 40,
      height: 40,
      left: 0,
    },
    word: {
      fontSize: 24,
      fontWeight: "bold",
      color: colors.off_black_color,
      textAlign: "center",
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
    letterText: {
      color: colors.off_black_color,
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      {/* Card */}
      <View style={styles.card}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: content.image }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 8,
            }}
          />

          <View style={styles.nativeButtonBackground} />

          <View style={styles.nativeButtonContainer}>
            <AnimatedAudioButton
              audioSource={ALPHABET_AUDIO_SOURCES.a.sound}
              width={40}
              height={40}
            >
              <NativeButton
                primaryColor={colors.primary_color}
                secondaryColor={colors.secondary_color}
                offwhiteColor={colors.off_white_color}
                offblackColor={colors.off_black_color}
                backgroundColor={colors.background_color}
              />
            </AnimatedAudioButton>
          </View>
        </View>

        {/* Word Display */}
        <AnimatedAudioButton
          audioSource={ALPHABET_AUDIO_SOURCES.a.sound}
          width={180}
          height={40}
        >
          <View style={styles.wordContainer}>
            <View style={styles.englishButtonContainer}>
              <EnglishButton
                primaryColor={colors.primary_color}
                secondaryColor={colors.secondary_color}
                offwhiteColor={colors.off_white_color}
                offblackColor={colors.off_black_color}
                backgroundColor={colors.background_color}
              />
            </View>
            <Text style={styles.word}>{content.word}</Text>
          </View>
        </AnimatedAudioButton>

        {/* Letter Options */}
        <View style={styles.lettersContainer}>
          {content.letters.map((letter: string) => (
            <AnimatedAudioButton
              audioSource={ALPHABET_AUDIO_SOURCES[letter].sound}
              width={40}
              height={40}
            >
              <View style={styles.letterButton}>
                <Text style={styles.letterText}>{letter}</Text>
              </View>
            </AnimatedAudioButton>
          ))}
        </View>
      </View>
    </View>
  );
};
