import type { RefObject } from "react";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { ALPHABET_AUDIO_SOURCES } from "@/assets/alphabet/alphabet_sounds";
import {
  BLENDING_WORD_LIST_BY_LEVEL,
  requireEnglishAudioForWord,
} from "@/assets/blending";
import { SECTION_COLORS } from "@/constants/routes";
import { APP_COLORS } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import type {
  DestinationComponentType,
  GameSet,
} from "@/ui/components/audio-multiple-choice-component";
import SpellingMultipleChoice from "@/ui/components/spelling-multiple-choice-component";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EarButton } from "@/ui/icons/circular/ear-button";
import { globalStyles } from "@/ui/styles";
import { HEIGHT, IS_IOS } from "@/utils/layout";

import { sectionColor } from "./_layout";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    margin: 20,
    marginBottom: 32,
    padding: 24,
    gap: 24,
    height: 200,
    backgroundColor: APP_COLORS.offwhite,
    borderColor: sectionColor.primary,
    borderWidth: 2,
    borderRadius: 12,
  },
  cardActive: {
    backgroundColor: sectionColor.light,
  },
  earButtonWrapper: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  buttonRow: {
    flexDirection: "row",
    alignSelf: "center",
  },
  smallbuttonWrapper: {},
  smallEarButton: {
    width: 80,
    height: 80,
    borderColor: "#D4D4D8",
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 40,
  },
  dropSmallEarButton: {
    width: 80,
    height: 80,
    borderColor: sectionColor.primary,
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 40,
  },
  letterCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: APP_COLORS.green,
    alignContent: "center",
    justifyContent: "center",
  },
  letterStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: APP_COLORS.offblack,
    textAlign: "center",
  },
});

interface DestinationCardFactoryProps {
  word: string;
  index: number;
}

type DestinationFunction<T> = (
  props: T,
) => (
  isCardActive: boolean,
) => [DestinationComponentType, RefObject<View | null>, RefObject<View | null>];

const buttonColorProps: ButtonColorProps = {
  primaryColor: SECTION_COLORS.blending.primary,
  secondaryColor: SECTION_COLORS.blending.light,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const smallButtonColorProps: ButtonColorProps = {
  primaryColor: APP_COLORS.backgroundgrey,
  secondaryColor: APP_COLORS.backgroundgrey,
  offwhiteColor: APP_COLORS.backgroundgrey,
  offblackColor: "#D4D4D8",
  backgroundColor: APP_COLORS.backgroundgrey,
};

const activeSmallButtonColorProps: ButtonColorProps = {
  primaryColor: sectionColor.light,
  secondaryColor: APP_COLORS.backgroundgrey,
  offwhiteColor: APP_COLORS.backgroundgrey,
  offblackColor: sectionColor.primary,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const Screen = () => {
  // Create persistent refs for each button and the container
  const firstButtonRef = useRef<View>(null);
  const secondButtonRef = useRef<View>(null);
  const thirdButtonRef = useRef<View>(null);
  const destinationContainerRef = useRef<View>(null);

  // const insets = useSafeAreaInsets();
  // Add a default empty array as fallback if undefined
  const wordCollection = BLENDING_WORD_LIST_BY_LEVEL.LEVEL_1;

  // Check if wordCollection has items before using it
  const initialWord = wordCollection[0]; // Default fallback

  // Convert dialogueCounter to state so it persists between renders
  const [wordIndex, setWordIndex] = useState(0);
  const [word, setWord] = useState<string>(initialWord);

  // Add this effect to update word when wordIndex changes
  useEffect(() => {
    if (wordCollection && wordCollection[wordIndex]) {
      setWord(wordCollection[wordIndex]);
    }
  }, [wordIndex, wordCollection]);

  const [letterIndex, setLetterIndex] = useState(0);
  const maxIndex = 3;

  /**
   * Handles progression after a correct answer:
   * - First advances to the next letter in current word
   * - When all letters in word are completed, advances to next word
   * - Cycles back to beginning when all words are completed
   */
  const onCorrectAnswer = useCallback(() => {
    // Update the current letter index within the word
    setLetterIndex((prevIndex) => {
      let newIndex = prevIndex + 1;

      // Check if we've completed all letters in the current word
      if (newIndex >= maxIndex) {
        newIndex = prevIndex;
        // Move to the next word since we finished all letters
        setWordIndex((prevWordIndex) => {
          let newWordIndex = prevWordIndex + 1;

          // Check if we've completed all words in the collection
          if (newWordIndex >= wordCollection.length) {
            // Reset to the first word when we've gone through the entire collection
            newWordIndex = 0;
          }

          setTimeout(() => {
            // Reset letter index to 0 after a delay
            setLetterIndex(0);
            setWordIndex(newWordIndex);
          });

          return prevWordIndex;
        });
      }

      // Continue with the next letter in the current word
      return newIndex;
    });
  }, [maxIndex, wordCollection.length]);

  // Keep the original structure but use useCallback for stability
  const createSpellingDestinationComponent = useCallback<
    DestinationFunction<DestinationCardFactoryProps>
  >(({ word, index }: DestinationCardFactoryProps) => {
    // This returns a function that matches the original signature expected by AudioMultipleChoice
    return (
      isCardActive: boolean,
    ): [
      DestinationComponentType,
      RefObject<View | null>,
      RefObject<View | null>,
    ] => {
      const DestinationCard = () => (
        <View
          style={[styles.card, isCardActive && styles.cardActive]}
          ref={destinationContainerRef}
        >
          <View style={styles.earButtonWrapper}>
            <AnimatedAudioButton
              audioSource={requireEnglishAudioForWord(word)}
              width={120}
              height={120}
            >
              <EarButton {...buttonColorProps} />
            </AnimatedAudioButton>
          </View>
          <View style={styles.buttonRow}>
            {/* FIRST BUTTON - Always use firstButtonRef */}
            <View
              style={[
                index === 0 && styles.dropSmallEarButton,
                index > 0 && styles.smallbuttonWrapper,
              ]}
              ref={firstButtonRef}
            >
              <AnimatedAudioButton
                audioSource={ALPHABET_AUDIO_SOURCES[(word as string)[0]].sound}
                width={80}
                height={80}
              >
                {index > 0 ? (
                  <View style={styles.letterCircle}>
                    <Text style={styles.letterStyle}>
                      {(word as string)[0]}
                    </Text>
                  </View>
                ) : (
                  <EarButton
                    {...(index === 0
                      ? activeSmallButtonColorProps
                      : smallButtonColorProps)}
                  />
                )}
              </AnimatedAudioButton>
            </View>
            {/* SECOND BUTTON - Always use secondButtonRef */}
            <View
              style={[
                index === 1 && styles.dropSmallEarButton,
                index < 1 && styles.smallEarButton,
                index > 1 && styles.smallbuttonWrapper,
              ]}
              ref={secondButtonRef}
            >
              <AnimatedAudioButton
                audioSource={ALPHABET_AUDIO_SOURCES[(word as string)[1]].sound}
                width={80}
                height={80}
              >
                {index > 1 ? (
                  <View style={styles.letterCircle}>
                    <Text style={styles.letterStyle}>
                      {(word as string)[1]}
                    </Text>
                  </View>
                ) : (
                  <EarButton
                    {...(index === 1
                      ? activeSmallButtonColorProps
                      : smallButtonColorProps)}
                  />
                )}
              </AnimatedAudioButton>
            </View>
            {/* THIRD BUTTON - Always use thirdButtonRef */}
            <View
              style={[
                index === 2 && styles.dropSmallEarButton,
                index < 2 && styles.smallEarButton,
                index > 2 && styles.smallbuttonWrapper,
              ]}
              ref={thirdButtonRef}
            >
              <AnimatedAudioButton
                audioSource={ALPHABET_AUDIO_SOURCES[(word as string)[2]].sound}
                width={80}
                height={80}
              >
                {index > 2 ? (
                  <View style={styles.letterCircle}>
                    <Text style={styles.letterStyle}>
                      {(word as string)[2]}
                    </Text>
                  </View>
                ) : (
                  <EarButton
                    {...(index === 2
                      ? activeSmallButtonColorProps
                      : smallButtonColorProps)}
                  />
                )}
              </AnimatedAudioButton>
            </View>
          </View>
        </View>
      );

      // Select the appropriate ref to return based on the current index
      let activeDropRef: RefObject<View | null>;
      if (index === 0) {
        activeDropRef = firstButtonRef;
      } else if (index === 1) {
        activeDropRef = secondButtonRef;
      } else {
        activeDropRef = thirdButtonRef;
      }

      return [DestinationCard, activeDropRef, destinationContainerRef];
    };
  }, []);

  // Helper function to render the appropriate content based on dialogueCounter
  // Use useMemo to only recalculate when dependencies change
  const spellingContent = useMemo(() => {
    // Create destination component with current word and letter index
    const DestinationComponent = createSpellingDestinationComponent({
      word: word,
      index: letterIndex,
    });

    // Get the current letter that should be the correct answer
    const currentLetter = word[letterIndex];

    const gameSet: GameSet = {
      correctAnswerId: currentLetter,
      options: [
        { id: "p", audioFile: ALPHABET_AUDIO_SOURCES.p.sound },
        { id: "a", audioFile: ALPHABET_AUDIO_SOURCES.a.sound },
        { id: "n", audioFile: ALPHABET_AUDIO_SOURCES.n.sound },
        { id: "i", audioFile: ALPHABET_AUDIO_SOURCES.i.sound },
        { id: "t", audioFile: ALPHABET_AUDIO_SOURCES.t.sound },
      ],
    };

    // Create a unique key combining word and letter index
    const componentKey = `${word}-${letterIndex}`;

    return (
      <SpellingMultipleChoice
        key={componentKey} // Add this key prop
        useDestinationComponent={DestinationComponent}
        gameSet={gameSet}
        onCorrectAnswer={onCorrectAnswer}
        sectionColorTheme={sectionColor}
      />
    );
  }, [word, letterIndex, onCorrectAnswer, createSpellingDestinationComponent]);

  const { playGuideAudio, isPlaying: isPlayingGuidanceAudio } = useGuideAudio({
    screenName: "spelling-drag-and-drop",
    module: "blending-module",
  });

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <View
        style={{
          height:
            HEIGHT - (insets.bottom + insets.top + 90 + (IS_IOS ? 96 : 112)),
          flex: 1,
        }}
      >
        <GuidanceAudioHeader
          title="Sound"
          isPlaying={isPlayingGuidanceAudio}
          onPressGuide={playGuideAudio}
          showLetterCaseSwitch={true}
        />
        {spellingContent}
      </View>
    </SafeAreaView>
  );
};

export default Screen;
