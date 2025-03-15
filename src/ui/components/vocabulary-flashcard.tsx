import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";

import { ALPHABET_AUDIO_SOURCES } from "@/assets/alphabet_sounds";
import { BLENDING_AUDIO_SOURCES } from "@/assets/blending/index";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import { EnglishButton } from "@/ui/icons/circular/english-button";
import { NativeButton } from "@/ui/icons/circular/native-button";
import { SnailButton } from "@/ui/icons/circular/snail-button";

type VocabularyFlashCardProps = {
  content: {
    id: string;
    word: string;
    image: string;
  };
  colors: {
    background_color: string;
    primary_color: string;
    secondary_color: string;
    off_white_color: string;
    off_black_color: string;
  };
};

export const VocabularyFlashCard = ({
  content,
  colors,
}: VocabularyFlashCardProps) => {
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
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    englishButtonOverlay: {
      // top: -10,
      // right: -10,
      width: 40,
      height: 40,
      backgroundColor: colors.off_white_color,
    },
    snailButtonOverlay: {
      // top: -10,
      // left: -10,
      width: 40,
      height: 40,
      backgroundColor: colors.off_white_color,
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
  });

  return (
    <View style={styles.container}>
      {/* Background^ and Card */}
      <View style={styles.card}>
        {/* Image  */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: content.image }} style={styles.image} />

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

        {/* Audio Button Rows */}
        <View style={styles.buttonRow}>
          {/* English Button */}
          <View style={styles.englishButtonOverlay}>
            <AnimatedAudioButton
              audioSource={BLENDING_AUDIO_SOURCES[content.word].file}
              width={40}
              height={40}
            >
              <EnglishButton {...iconButtonProps} />
            </AnimatedAudioButton>
          </View>

          {/* Snail Buttons */}
          <View style={styles.snailButtonOverlay}>
            <AnimatedAudioButton
              audioSource={BLENDING_AUDIO_SOURCES[content.word].file}
              width={40}
              height={40}
            >
              <SnailButton {...iconButtonProps} />
            </AnimatedAudioButton>
          </View>
        </View>
      </View>
    </View>
  );
};
