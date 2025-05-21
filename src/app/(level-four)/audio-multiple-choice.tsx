import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import type { SharedValue } from "react-native-reanimated";
import Reanimated, {
  cancelAnimation,
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ENGLISH_VOCABULARY_AUDIO_SOURCES,
  NATIVE_VOCABULARY_AUDIO_SOURCES,
  VOCABULARY_IMAGE_SOURCES,
  VOCABULARY_WORD_LIST_BY_LEVEL,
} from "@/assets/vocabulary";
import { APP_COLORS } from "@/constants/routes";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { AnimatedAudioButton } from "@/ui/icons/animated-audio-button-wrapper";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EnglishButton } from "@/ui/icons/circular/english-button";
import { NativeButton } from "@/ui/icons/circular/native-button";
import {
  BOTTOM_TAB_HEIGHT,
  HEADER_HEIGHT,
  HEIGHT,
  WIDTH,
} from "@/utils/layout";

import { SECTION_COLOR } from "./_layout";
import { globalStyles } from "@/ui/styles";

// ------------------------------------------------------------
// TYPE DEFINITIONS
// ------------------------------------------------------------

type ButtonItem = {
  // Used for draggable buttons
  id: string;
  word: string;
};

type Position = {
  x: number;
  y: number;
  width?: number;
  height?: number;
};

// COLORS: Maybe move to icons folder were ButtonColorProps is from.

// Button color configurations # TODO: Refactor out colors to constants
const BUTTON_COLORS: ButtonColorProps[] = [
  {
    // Pink
    primaryColor: "#FFABDE",
    offwhiteColor: "#FAFAFA",
    offblackColor: "#3F3F46",
    secondaryColor: "#D282AE",
    backgroundColor: "#FFF0F6",
  },
  {
    // Purple
    primaryColor: "#C385F8",
    offwhiteColor: "#FAFAFA",
    offblackColor: "#3F3F46",
    secondaryColor: "#9A7DE0",
    backgroundColor: "#F5F0FF",
  },
  {
    // Blue
    primaryColor: "#62A0EC",
    offwhiteColor: "#FAFAFA",
    offblackColor: "#3F3F46",
    secondaryColor: "#5BA3E0",
    backgroundColor: "#EFF6FF",
  },
];

// TODO: Move to layout
export const NATIVE_BUTTON_COLOR: ButtonColorProps = {
  primaryColor: SECTION_COLOR.sectionPrimaryColor,
  secondaryColor: SECTION_COLOR.sectionSecondaryColor,
  offwhiteColor: SECTION_COLOR.appWhiteColor,
  offblackColor: SECTION_COLOR.appBlackColor,
  backgroundColor: SECTION_COLOR.appGreyColor,
};

// Feedback color configurations
const CORRECT_COLORS: ButtonColorProps = {
  primaryColor: "#62CC82",
  offwhiteColor: "#FAFAFA",
  offblackColor: "#3F3F46",
  secondaryColor: "#2E8B57",
  backgroundColor: "#E8F5E9",
};

const INCORRECT_COLORS: ButtonColorProps = {
  primaryColor: "#FF5A5F",
  offwhiteColor: "#FAFAFA",
  offblackColor: "#3F3F46",
  secondaryColor: "#D32F2F",
  backgroundColor: "#FFEBEE",
};

const DISABLED_COLORS: ButtonColorProps = {
  primaryColor: "#F2EFF0",
  offwhiteColor: "#FAFAFA",
  offblackColor: "#D4D4D8",
  secondaryColor: "#888888",
  backgroundColor: "#F5F5F5",
};

// Props for the DraggableButton component
interface DraggableButtonProps {
  item: ButtonItem;
  disabled?: boolean;
  onAudioPlay: () => void;
  onDragStart: () => void;
  onDragEnd: (position: Position, isInTarget: boolean) => void;
  buttonColor: ButtonColorProps;
  targetPosition: Position | null;
  isPlaced?: boolean;
  isCorrect?: boolean | null;
  isPlaying?: boolean;
  onMarkDisabled?: (buttonId: string) => void;
  breatheDuration?: number;
  animationBorderColor?: string;
  animationBorderWidth?: number;
}

// ------------------------------------------------------------
// CONSTANTS
// ------------------------------------------------------------

type GameSet = {
  correctAnswer: string;
  options: string[];
};

// TODO: Not sure if we want to generate these or have a static list...
const generatedGameSets: GameSet[] = VOCABULARY_WORD_LIST_BY_LEVEL.LEVEL_1.map(
  (word: string) => {
    return {
      correctAnswer: word,
      options: VOCABULARY_WORD_LIST_BY_LEVEL.LEVEL_1.filter(
        (option) => option !== word,
      )
        .slice(0, 2)
        .concat(word),
    };
  },
);

// Layout and animation constants
const BUTTON_SIZE: number = 80;
const FLASHCARD_HEIGHT: number = 350;
const DRAG_DELAY_MS: number = 100;
const INCORRECT_FEEDBACK_DURATION_MS: number = 2000;
const SPRING_CONFIG: { damping: number; stiffness: number } = {
  damping: 15,
  stiffness: 100,
};

// ------------------------------------------------------------
// STYLES
// ------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  flashcardContainer: {
    flex: 1,
    justifyContent: "center", // Center the flashcard vertically
  },
  flashcard: {
    height: FLASHCARD_HEIGHT,
    borderWidth: 2,
    borderColor: SECTION_COLOR.sectionPrimaryColor,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    padding: 16,
    flexDirection: "column",
  },
  flashcardActive: {
    borderWidth: 2,
    borderColor: SECTION_COLOR.sectionPrimaryColor,
    borderStyle: "dashed",
    backgroundColor: "#FAE7D6",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    backgroundColor: APP_COLORS.backgroundgrey,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  image: {
    width: 100,
    borderRadius: 8,
  },
  nativeButtonOverlay: {
    position: "absolute",
    top: -10,
    right: -10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: APP_COLORS.offwhite,
  },
  iconButton: {
    position: "absolute",
    width: 40,
    height: 40,
  },
  iconButtonActive: {
    backgroundColor: SECTION_COLOR.sectionSecondaryColor,
  },
  dropCircleContainer: {
    flex: 1, // Take remaining space in the flashcard
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  emptyDropCircle: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    borderWidth: 2,
    borderColor: SECTION_COLOR.sectionPrimaryColor,
    borderStyle: "dashed",
    backgroundColor: SECTION_COLOR.sectionSecondaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPool: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: SECTION_COLOR.sectionPrimaryColor,
    // borderStyle: "dashed",
    backgroundColor: SECTION_COLOR.sectionSecondaryColor,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  audioButtonContainer: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  animatedBorder: {
    position: "absolute",
    borderStyle: "solid",
    zIndex: -1,
  },
});

// ------------------------------------------------------------
// DRAGGABLE BUTTON COMPONENT
// ------------------------------------------------------------

const DraggableButton: React.FC<DraggableButtonProps> = ({
  item,
  onAudioPlay,
  onDragStart,
  onDragEnd,
  buttonColor,
  targetPosition,
  isPlaced,
  isCorrect,
  isPlaying = false,
  disabled = false,
  onMarkDisabled,
  breatheDuration = 2000,
  animationBorderColor = "#4CAF50", // TODO: Refactor our green color?
  animationBorderWidth = 4,
}) => {
  // Track position of button
  const translateX: SharedValue<number> = useSharedValue<number>(0);
  const translateY: SharedValue<number> = useSharedValue<number>(0);
  const savedPosition: SharedValue<{ x: number; y: number }> = useSharedValue<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // Track if currently dragging
  const isDragging: SharedValue<boolean> = useSharedValue<boolean>(false);

  // Track start time of touch
  const touchStartTime: SharedValue<number> = useSharedValue<number>(0);

  // Animation for audio playback
  const borderOpacity: SharedValue<number> = useSharedValue<number>(0);

  // Track original position (where the button starts in the button pool)
  const buttonRef = useRef<Reanimated.View>(null);
  const [buttonOrigin, setButtonOrigin] = useState<Position | null>(null);

  // Get button's original position
  useEffect(() => {
    const measureButton = () => {
      if (buttonRef.current) {
        buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
          console.log(`Button ${item.id} measured at:`, {
            x,
            y,
            width,
            height,
            pageX,
            pageY,
          });
          setButtonOrigin({ x: pageX, y: pageY, width, height });
        });
      }
    };

    // Slight delay to ensure component is rendered
    const timerId = setTimeout(measureButton, 100);
    return () => clearTimeout(timerId);
  }, [item.id]);

  // Reset incorrect button after feedback duration
  useEffect(() => {
    let timeoutId: number | undefined;

    if (isPlaced === true && isCorrect === false) {
      timeoutId = setTimeout(() => {
        // Reset position with animation
        translateX.value = withSpring(0, SPRING_CONFIG);
        translateY.value = withSpring(0, SPRING_CONFIG);

        // Notify parent component about the reset
        runOnJS(onDragEnd)({ x: 0, y: 0 }, false);

        // Mark the button as disabled
        if (onMarkDisabled) {
          runOnJS(onMarkDisabled)(item.id);
        }
      }, INCORRECT_FEEDBACK_DURATION_MS);
    }

    // Clean up timeout on unmount or when dependencies change
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [
    isPlaced,
    isCorrect,
    onDragEnd,
    onMarkDisabled,
    item.id,
    translateX,
    translateY,
  ]);

  useEffect(() => {
    // Immediately reset position to origin when key/item changes
    translateX.value = 0;
    translateY.value = 0;
    savedPosition.value = { x: 0, y: 0 };

    // Schedule measuring after layout
    const measureButton = () => {
      if (buttonRef.current) {
        buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
          if (pageX > 0 && pageY > 0) {
            setButtonOrigin({
              x: pageX,
              y: pageY,
              width: width || BUTTON_SIZE,
              height: height || BUTTON_SIZE,
            });
          } else {
            // Retry measurement if it failed
            setTimeout(measureButton, 100);
          }
        });
      }
    };

    // Use a slightly longer delay to ensure layout is complete
    const timerId = setTimeout(measureButton, 200);
    return () => clearTimeout(timerId);
  }, [item.id, translateX, translateY, savedPosition]);

  // Function to stop breathing animation
  const stopAnimation = useCallback(() => {
    cancelAnimation(borderOpacity);
    borderOpacity.value = withTiming(0, { duration: 500 });
  }, [borderOpacity]);

  // Function to start breathing animation
  const startBreathingAnimation = useCallback(() => {
    // Reset opacity before starting animation
    borderOpacity.value = 0;

    // Start the animation sequence
    borderOpacity.value = withSequence(
      withTiming(0.6, { duration: breatheDuration / 2, easing: Easing.ease }),
      withRepeat(
        withSequence(
          withTiming(1, { duration: breatheDuration / 2, easing: Easing.ease }),
          withTiming(0.6, {
            duration: breatheDuration / 2,
            easing: Easing.ease,
          }),
        ),
        -1,
      ),
    );
  }, [borderOpacity, breatheDuration]);

  // Control animation based on isPlaying prop
  useEffect(() => {
    console.log(`Button ${item.id} isPlaying changed to: ${isPlaying}`);

    if (isPlaying) {
      console.log(`Starting animation for button ${item.id}`);
      startBreathingAnimation();
    } else {
      console.log(`Stopping animation for button ${item.id}`);
      stopAnimation();
    }

    // Add an explicit return function to stop animation on unmount or change
    return () => {
      console.log(`Cleanup animation for button ${item.id}`);
      cancelAnimation(borderOpacity);
      borderOpacity.value = 0;
    };
  }, [
    isPlaying,
    item.id,
    startBreathingAnimation,
    stopAnimation,
    borderOpacity,
  ]);

  // Define tap gesture
  const tapGesture = Gesture.Tap()
    .onStart(() => {
      if (!isDragging.value && !disabled && !isPlaying) {
        runOnJS(onAudioPlay)();
      }
    })
    .maxDuration(250)
    .enabled(!disabled);

  // Define drag gesture
  const dragGesture = Gesture.Pan()
    .onStart(() => {
      if (disabled) return;
      touchStartTime.value = Date.now();
      savedPosition.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      if (disabled) return;
      if (Date.now() - touchStartTime.value > DRAG_DELAY_MS) {
        if (!isDragging.value) {
          isDragging.value = true;
          runOnJS(onDragStart)();
        }

        translateX.value = savedPosition.value.x + event.translationX;
        translateY.value = savedPosition.value.y + event.translationY;
      }
    })
    .onEnd((event) => {
      if (disabled) return;
      if (isDragging.value) {
        const droppedX: number = event.absoluteX;
        const droppedY: number = event.absoluteY;

        // Detect if in drop area
        const isInDropArea: boolean =
          droppedY <
            (HEIGHT +
              HEADER_HEIGHT +
              FLASHCARD_HEIGHT -
              BOTTOM_TAB_HEIGHT -
              120) /
              2 &&
          droppedY > HEADER_HEIGHT && // Add a minimum bound
          droppedX > 0 &&
          droppedX < WIDTH;

        isDragging.value = false;

        // If we're in the drop area and have a valid target position, snap to target
        if (isInDropArea && targetPosition && buttonOrigin) {
          // Calculate center points
          const targetCenterX =
            targetPosition.x + (targetPosition.width || BUTTON_SIZE) / 2;
          const targetCenterY =
            targetPosition.y + (targetPosition.height || BUTTON_SIZE) / 2;
          const buttonCenterX =
            buttonOrigin.x + (buttonOrigin.width || BUTTON_SIZE) / 2;
          const buttonCenterY =
            buttonOrigin.y + (buttonOrigin.height || BUTTON_SIZE) / 2;

          // Calculate offset to align centers
          const offsetX = targetCenterX - buttonCenterX;
          const offsetY = targetCenterY - buttonCenterY;

          // Apply spring animation to move to target
          translateX.value = withSpring(offsetX, SPRING_CONFIG);
          translateY.value = withSpring(offsetY, SPRING_CONFIG);
        } else {
          // IMPORTANT: If not in drop area, always snap back to origin
          translateX.value = withSpring(0, SPRING_CONFIG);
          translateY.value = withSpring(0, SPRING_CONFIG);
        }

        // Notify parent component
        runOnJS(onDragEnd)(
          { x: droppedX, y: droppedY },
          isInDropArea && targetPosition !== null,
        );
      }
    });

  // Combine gestures
  const gesture = Gesture.Exclusive(dragGesture, tapGesture);

  // Animation style for position
  const animatedPositionStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  // Animation style for breathing border
  const animatedBorderStyle = useAnimatedStyle(() => ({
    opacity: borderOpacity.value,
  }));

  // Determine the button color configuration based on state
  const getButtonColorProps = (): ButtonColorProps => {
    if (disabled) {
      return DISABLED_COLORS;
    }

    if (isPlaced) {
      return isCorrect ? CORRECT_COLORS : INCORRECT_COLORS;
    }

    return buttonColor;
  };

  // Get the current color configuration
  const currentColors = getButtonColorProps();

  // Create props for EnglishButton
  const iconButtonProps: ButtonColorProps = {
    primaryColor: currentColors.primaryColor,
    secondaryColor: currentColors.secondaryColor,
    offwhiteColor: currentColors.offwhiteColor,
    offblackColor: currentColors.offblackColor,
    backgroundColor: currentColors.backgroundColor,
  };

  return (
    <GestureDetector gesture={gesture}>
      <Reanimated.View
        ref={buttonRef}
        style={[styles.audioButtonContainer, animatedPositionStyle]}
      >
        {/* Animated border for audio playback */}
        <Reanimated.View
          style={[
            styles.animatedBorder,
            {
              borderColor: animationBorderColor,
              borderWidth: animationBorderWidth,
              width: BUTTON_SIZE + animationBorderWidth * 2,
              height: BUTTON_SIZE + animationBorderWidth * 2,
              borderRadius: (BUTTON_SIZE + animationBorderWidth * 2) / 2,
            },
            animatedBorderStyle,
          ]}
        />
        <EnglishButton {...iconButtonProps} />
      </Reanimated.View>
    </GestureDetector>
  );
};

// ------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------

const DraggableAudioGame: React.FC = () => {
  // State for tracking if the flashcard is in "active" state (being dragged over)
  const [isCardActive, setIsCardActive] = useState<boolean>(false);

  // Store the target drop circle position
  const [targetPosition, setTargetPosition] = useState<Position | null>(null);

  // Track which button is currently placed in the target
  const [placedButtonId, setPlacedButtonId] = useState<string | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);

  // Audio playback tracking
  const [playingButtonId, setPlayingButtonId] = useState<string | null>(null);
  const currentSound = useRef<Sound | null>(null);

  // Game state
  const [currentGameSetIndex, setCurrentGameSetIndex] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // Reference to target drop circle
  const dropCircleRef = useRef<View>(null);

  // Function to shuffle array
  const shuffleArray = useCallback((array: string[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  // Function to get the absolute position of the target drop circle
  const measureDropCircle = useCallback((): void => {
    console.log("Attempting to measure drop circle");

    // Give a little more time for layout to complete
    setTimeout(() => {
      if (dropCircleRef.current) {
        dropCircleRef.current.measure((x, y, width, height, pageX, pageY) => {
          console.log("Drop circle measured at:", {
            x,
            y,
            width,
            height,
            pageX,
            pageY,
          });

          if (width > 0 && height > 0 && pageX > 0 && pageY > 0) {
            // Store the position with explicit values to avoid undefined issues
            setTargetPosition({
              x: pageX,
              y: pageY,
              width: width || BUTTON_SIZE,
              height: height || BUTTON_SIZE,
            });
          } else {
            // Retry if measurement failed
            console.log("Measurement failed, retrying...");
            setTimeout(measureDropCircle, 200);
          }
        });
      }
    }, 100);
  }, []);

  const resetAllButtonPositions = useCallback(() => {
    // Cancel any ongoing animations that might interfere
    if (currentSound.current) {
      currentSound.current.stopAsync().catch(() => {});
      currentSound.current.unloadAsync().catch(() => {});
      currentSound.current = null;
    }

    // First clear all states
    setPlayingButtonId(null);
    setIsCardActive(false);
    setDisabledButtons([]);
    setPlacedButtonId(null);
    setIsCorrectAnswer(null);

    // Schedule the next game setup after state updates have completed
    setTimeout(() => {
      // Get current game set and shuffle options
      const currentGameSet = generatedGameSets[currentGameSetIndex];
      if (currentGameSet) {
        const shuffled = shuffleArray([...currentGameSet.options]); // Create a new array to avoid reference issues
        setShuffledOptions(shuffled);

        // Force re-measurement after layout is updated with a longer delay
        setTimeout(measureDropCircle, 300);
      }
    }, 50);
  }, [currentGameSetIndex, measureDropCircle, shuffleArray]);

  useEffect(() => {
    resetAllButtonPositions();
  }, [currentGameSetIndex, resetAllButtonPositions]);

  useEffect(() => {
    if (generatedGameSets.length > 0 && shuffledOptions.length === 0) {
      const initialGameSet = generatedGameSets[0];
      const shuffled = shuffleArray(initialGameSet.options);
      setShuffledOptions(shuffled);
    }
  }, [shuffledOptions.length, shuffleArray]);

  // Current game data
  const currentGameSet = generatedGameSets[currentGameSetIndex];
  const CORRECT_BUTTON_ID: string = currentGameSet.correctAnswer;
  const Svg =
    VOCABULARY_IMAGE_SOURCES[
      CORRECT_BUTTON_ID as keyof typeof VOCABULARY_IMAGE_SOURCES
    ];

  // Available audio buttons using shuffled options
  const availableButtons: ButtonItem[] = shuffledOptions.map((word: string) => {
    return { id: word, word: word };
  });

  // Function to play audio - simplified for reliability
  const playAudio = useCallback(
    async (audioFile: any, buttonId: string): Promise<void> => {
      console.log("Playing audio for button:", buttonId);

      // Stop any currently playing audio
      if (currentSound.current) {
        try {
          await currentSound.current.stopAsync();
          await currentSound.current.unloadAsync();
        } catch (e) {
          console.error("Error cleaning up previous sound:", e);
        }
        currentSound.current = null;
      }

      // Set this button as the playing one
      setPlayingButtonId(buttonId);

      try {
        const { sound } = await Audio.Sound.createAsync(audioFile, {
          shouldPlay: true,
        });

        // Store the current sound
        currentSound.current = sound;

        // Create a variable to track if this specific sound instance has been handled
        let isHandled = false;

        // Listen for playback status updates
        sound.setOnPlaybackStatusUpdate((status) => {
          if (isHandled) return;

          if (!status.isLoaded) return;

          if (status.didJustFinish) {
            console.log(`Audio finished for button ${buttonId}`);
            isHandled = true;

            // Force update the playing button ID state
            setPlayingButtonId((prevId) => {
              if (prevId === buttonId) {
                console.log(
                  `Clearing playing button ID from ${prevId} to null`,
                );
                return null;
              }
              return prevId;
            });

            // Unload the sound
            sound.unloadAsync();
            if (currentSound.current === sound) {
              currentSound.current = null;
            }
          }
        });

        // Add a safety timeout
        const timeoutId = setTimeout(() => {
          if (isHandled) return;

          isHandled = true;
          console.log(`Safety timeout reached for button ${buttonId}`);

          setPlayingButtonId((prevId) => {
            if (prevId === buttonId) {
              console.log(
                `Clearing playing button ID from ${prevId} to null (timeout)`,
              );
              return null;
            }
            return prevId;
          });

          try {
            sound.unloadAsync();
            if (currentSound.current === sound) {
              currentSound.current = null;
            }
          } catch (e) {
            console.error("Error cleaning up sound in timeout:", e);
          }
        }, 5000);

        // Set up cleanup but don't return it directly
        // This fixes the "Type '() => void' is not assignable to type 'void'" error
        setTimeout(() => {
          clearTimeout(timeoutId);
        }, 6000);
      } catch (error) {
        console.error("Error playing audio:", error);
        setPlayingButtonId(null);
      }
    },
    [],
  );

  // Clean up sound when component unmounts
  useEffect(() => {
    return () => {
      if (currentSound.current) {
        currentSound.current.unloadAsync();
        currentSound.current = null;
      }
    };
  }, []);

  // Measure the drop circle position when the component mounts
  useEffect(() => {
    // Use setTimeout to ensure the layout is complete before measuring
    const timerId = setTimeout(() => {
      measureDropCircle();
    }, 500);

    return () => clearTimeout(timerId);
  }, [measureDropCircle]);

  // Handle drag end for buttons
  const handleDragEnd = useCallback(
    (
      position: Position,
      buttonId: string,
      isInTarget: boolean,
      CORRECT_BUTTON_ID: string,
    ): void => {
      setIsCardActive(false);

      if (isInTarget) {
        setPlacedButtonId(buttonId);
        const isCorrect = buttonId === CORRECT_BUTTON_ID;
        setIsCorrectAnswer(isCorrect);

        // If answer is correct, set a timeout to advance to next game
        if (isCorrect) {
          // Slight delay to show the correct feedback
          setTimeout(() => {
            // Stop any ongoing animations or sounds
            if (currentSound.current) {
              currentSound.current.stopAsync().catch(() => {});
              currentSound.current.unloadAsync().catch(() => {});
              currentSound.current = null;
            }
            setPlayingButtonId(null);

            // Move to next game set, loop back to beginning if at end
            setCurrentGameSetIndex(
              (prevIndex) => (prevIndex + 1) % generatedGameSets.length,
            );
          }, 1500); // Wait 1.5 seconds before advancing
        }
      } else if (placedButtonId === buttonId) {
        setPlacedButtonId(null);
        setIsCorrectAnswer(null);
      }
    },
    [placedButtonId],
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      {/* Flashcard */}
      <View style={styles.flashcardContainer}>
        <View
          style={[styles.flashcard, isCardActive && styles.flashcardActive]}
          // onLayout={() => setTimeout(measureDropCircle, 100)}
          onLayout={() => {
            console.log("Flashcard layout complete");
            // Delay measurement to ensure child components are laid out
            setTimeout(measureDropCircle, 100);
          }}
        >
          <View style={styles.imageContainer}>
            <Svg.file
              style={styles.image}
              height="60%"
              width="60%"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Native Button */}
            <View
              style={[
                styles.nativeButtonOverlay,
                isCardActive && styles.iconButtonActive,
              ]}
            />
            <View style={[styles.iconButton, { top: 0, right: 0 }]}>
              <AnimatedAudioButton
                audioSource={
                  NATIVE_VOCABULARY_AUDIO_SOURCES[CORRECT_BUTTON_ID].file
                }
                width={40}
                height={40}
              >
                <NativeButton {...NATIVE_BUTTON_COLOR} />
              </AnimatedAudioButton>
            </View>
          </View>

          {/* Drop target */}
          {/* <View style={styles.dropAreaContainer}> */}
          <View style={styles.dropCircleContainer}>
            <View ref={dropCircleRef} style={styles.emptyDropCircle} />
          </View>
        </View>
      </View>
      {/* Button Pool */}
      {/* TODO: Make only top border dashed: https://github.com/facebook/react-native/issues/7838 */}
      <View style={styles.buttonPool}>
        {availableButtons.map((item: ButtonItem, index: number) => (
          <DraggableButton
            key={`${item.id}-${currentGameSetIndex}`}
            item={item}
            onAudioPlay={() =>
              playAudio(
                ENGLISH_VOCABULARY_AUDIO_SOURCES[item.word].normal_speed,
                item.id,
              )
            }
            onDragStart={() => setIsCardActive(true)}
            onDragEnd={(pos, isInTarget) =>
              handleDragEnd(pos, item.id, isInTarget, CORRECT_BUTTON_ID)
            }
            buttonColor={BUTTON_COLORS[index % BUTTON_COLORS.length]}
            targetPosition={targetPosition}
            isPlaced={placedButtonId === item.id}
            isCorrect={placedButtonId === item.id ? isCorrectAnswer : null}
            disabled={disabledButtons.includes(item.id)}
            isPlaying={playingButtonId === item.id}
            onMarkDisabled={(buttonId: string) =>
              setDisabledButtons((prev) => [...prev, buttonId])
            }
          />
        ))}
      </View>
    </GestureHandlerRootView>
  );
};

const Screen = () => {
  const screenStyles = StyleSheet.create({
    content: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between", // Space between header, game, bottom tab bar
    },
  });

  const { isPlaying, playGuideAudio } = useGuideAudio({
    screenName: "audio-multiple-choice",
  });

  return (
    <SafeAreaView
      style={globalStyles.safeAreaView}
      edges={["top", "left", "right"]}
    >
      <View style={screenStyles.content}>
        <GuidanceAudioHeader
          title="Audio Multiple Choice"
          isPlaying={isPlaying}
          onPressGuide={playGuideAudio}
          showLetterCaseSwitch={false}
        />
        <DraggableAudioGame />
      </View>
    </SafeAreaView>
  );
};

export default Screen;
