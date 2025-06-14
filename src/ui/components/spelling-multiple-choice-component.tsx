import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import type { ReactElement, RefObject } from "react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
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

import { APP_COLORS, SECTION_COLORS } from "@/constants/routes";
import { useLetterCase } from "@/ui/core/headers/letter-case-context";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";

// ------------------------------------------------------------
// TYPE DEFINITIONS
// ------------------------------------------------------------

type ButtonItem = {
  audioFile: string;
  id: string;
};

type Position = {
  x: number;
  y: number;
  width?: number;
  height?: number;
};

interface DraggableButtonProps {
  item: ButtonItem;
  disabled?: boolean;
  isLockedByGame?: boolean;
  onAudioPlay: () => void;
  onDragStart: () => void;
  onDragEnd: (position: Position, isInTarget: boolean) => void;
  buttonColor: ButtonColorProps;
  targetPosition: Position | null;
  destinationArea: Position | null;
  isPlaced?: boolean;
  isCorrect?: boolean | null;
  isPlaying?: boolean;
  onMarkDisabled?: (buttonId: string) => void;
  breatheDuration?: number;
  animationBorderColor?: string;
  animationBorderWidth?: number;
}

export type GameSet = {
  correctAnswerId: string;
  options: {
    id: string;
    audioFile: any;
  }[];
};

export type DestinationComponentType = () => ReactElement;

// ------------------------------------------------------------
// CONSTANTS
// ------------------------------------------------------------

const screenHeight = Dimensions.get("window").height;
const SMALL_SCREEN_THRESHOLD = 750; // Adjust this value as needed
const IS_SMALL_SCREEN = screenHeight < SMALL_SCREEN_THRESHOLD;

const BUTTON_SIZE = IS_SMALL_SCREEN ? 60 : 80;
const DRAG_DELAY_MS = 100;
const INCORRECT_FEEDBACK_DURATION_MS = 2000;
const SPRING_CONFIG = {
  damping: 15,
  stiffness: 100,
};

// ------------------------------------------------------------
// COLOR DEFINITIONS
// ------------------------------------------------------------

const CORRECT_BUTTON_COLORS: ButtonColorProps = {
  primaryColor: APP_COLORS.green,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  secondaryColor: APP_COLORS.lightgreen,
  backgroundColor: APP_COLORS.green,
};

const INCORRECT_BUTTON_COLORS: ButtonColorProps = {
  primaryColor: APP_COLORS.red,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  secondaryColor: APP_COLORS.red,
  backgroundColor: APP_COLORS.red,
};

// TODO: Update these colors
const DISABLED_BUTTON_COLORS: ButtonColorProps = {
  primaryColor: "#F2EFF0",
  offwhiteColor: "#FAFAFA",
  offblackColor: "#D4D4D8",
  secondaryColor: "#888888",
  backgroundColor: "#F5F5F5",
};

const DEFAULT_BUTTON_COLOR: ButtonColorProps = {
  // BLUE
  primaryColor: SECTION_COLORS.blending.primary,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  secondaryColor: SECTION_COLORS.blending.primary,
  backgroundColor: SECTION_COLORS.blending.primary,
};

const DEFAULT_SECTION_COLOR = {
  primary: "#62A0EC",
  light: "#D7E9FF",
  dark: "#006BB4",
};

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
  destinationArea,
  isPlaced,
  isCorrect,
  isPlaying = false,
  disabled = false,
  onMarkDisabled,
  breatheDuration = 2000,
  animationBorderColor = "#4CAF50",
  animationBorderWidth = 4,
  isLockedByGame = false,
}) => {
  // Animated values for position
  const translateX = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);
  const savedPosition = useSharedValue<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Animation and interaction states
  const isDragging = useSharedValue<boolean>(false);
  const touchStartTime = useSharedValue<number>(0);
  const borderOpacity = useSharedValue<number>(0);

  // Refs and state
  const buttonRef = useRef<Reanimated.View>(null);
  const [buttonOrigin, setButtonOrigin] = useState<Position | null>(null);
  const hasSetTimeoutRef = useRef(false);
  const timeoutIdRef = useRef<number | undefined>(undefined);

  // Styles
  const styles = StyleSheet.create({
    audioButtonContainer: {
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      borderRadius: BUTTON_SIZE / 2,
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    },
    animatedBorder: {
      position: "absolute",
      borderStyle: "solid",
      zIndex: -1,
    },
    letterStyle: {
      fontFamily: "Thomas",
      fontSize: IS_SMALL_SCREEN ? 40 : 55,
      lineHeight: IS_SMALL_SCREEN ? 45 : 62,
      textAlign: "center",
      color: APP_COLORS.offblack,
    },
  });

  // Measure button position - only once when mounted

  useEffect(() => {
    console.log(
      `[TRACE] Button ${item.id} - Initial measurement effect running`,
    );

    const measureButton = () => {
      if (buttonRef.current) {
        buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
          if (pageX > 0 && pageY > 0) {
            console.log(
              `[MEASURE] Button ${item.id} - setting initial position: ${pageX},${pageY}`,
            );
            setButtonOrigin({ x: pageX, y: pageY, width, height });
          }
        });
      }
    };

    const timerId = setTimeout(measureButton, 100);
    return () => {
      console.log(
        `[TRACE] Button ${item.id} - Initial measurement effect cleanup`,
      );
      clearTimeout(timerId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // Removed item.id - just for logging

  // Handle incorrect button reset

  useEffect(() => {
    console.log(
      `[TRACE] Button ${item.id} - Incorrect reset effect running - isPlaced: ${isPlaced}, isCorrect: ${isCorrect}`,
    );

    if (isPlaced === true && isCorrect === false && !hasSetTimeoutRef.current) {
      console.log(
        `[STATE] Button ${item.id} - Setting timeout for incorrect button`,
      );
      hasSetTimeoutRef.current = true;

      timeoutIdRef.current = setTimeout(() => {
        console.log(
          `[EVENT] Button ${item.id} - Incorrect button timeout executed`,
        );

        // Reset position with animation
        translateX.value = withSpring(0, SPRING_CONFIG);
        translateY.value = withSpring(0, SPRING_CONFIG);

        // Notify parent
        onDragEnd({ x: 0, y: 0 }, false);

        // Mark as disabled
        if (onMarkDisabled) {
          onMarkDisabled(item.id);
        }

        // Reset timeout flag
        hasSetTimeoutRef.current = false;
        timeoutIdRef.current = undefined;
      }, INCORRECT_FEEDBACK_DURATION_MS);
    }

    // Reset the timeout flag if button is no longer incorrectly placed
    if (
      !(isPlaced === true && isCorrect === false) &&
      hasSetTimeoutRef.current
    ) {
      console.log(
        `[STATE] Button ${item.id} - Clearing incorrect button timeout`,
      );
      hasSetTimeoutRef.current = false;

      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = undefined;
      }
    }

    return () => {
      console.log(`[TRACE] Button ${item.id} - Incorrect reset effect cleanup`);
    };
  }, [isPlaced, isCorrect, onDragEnd, onMarkDisabled, item.id]); // eslint-disable-line react-hooks/exhaustive-deps
  // Removed translateX and translateY from dependencies to avoid unnecessary re-renders

  // Initial setup and cleanup
  useEffect(() => {
    // Removed logging
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = undefined;
      }
    };
  }, []);

  // Reset position when item changes - with memoized measurements

  useEffect(() => {
    console.log(`[TRACE] Button ${item.id} - Position reset effect running`);

    translateX.value = 0;
    translateY.value = 0;
    savedPosition.value = { x: 0, y: 0 };

    // Only measure if we don't have a valid position yet
    if (!buttonOrigin || buttonOrigin.x <= 0 || buttonOrigin.y <= 0) {
      console.log(
        `[STATE] Button ${item.id} - No valid position, will measure`,
      );

      const measureButton = () => {
        if (buttonRef.current) {
          buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
            if (pageX > 0 && pageY > 0) {
              console.log(
                `[MEASURE] Button ${item.id} - Updated position: ${pageX},${pageY}`,
              );
              setButtonOrigin({
                x: pageX,
                y: pageY,
                width: width || BUTTON_SIZE,
                height: height || BUTTON_SIZE,
              });
            }
          });
        }
      };

      const timerId = setTimeout(measureButton, 200);
      return () => {
        console.log(
          `[TRACE] Button ${item.id} - Position reset effect cleanup`,
        );
        clearTimeout(timerId);
      };
    }

    return () => {
      console.log(
        `[TRACE] Button ${item.id} - Position reset effect cleanup (no measurement)`,
      );
    };
  }, [item.id, buttonOrigin]); // eslint-disable-line react-hooks/exhaustive-deps

  // Animation control functions
  const stopAnimation = useCallback(() => {
    cancelAnimation(borderOpacity);
    borderOpacity.value = withTiming(0, { duration: 500 });
  }, [borderOpacity]);

  const startBreathingAnimation = useCallback(() => {
    borderOpacity.value = 0;

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
    console.log(
      `[TRACE] Button ${item.id} - Animation effect running - isPlaying: ${isPlaying}`,
    );

    if (isPlaying) {
      console.log(`[ANIM] Button ${item.id} - Starting animation`);
      startBreathingAnimation();
    } else {
      console.log(`[ANIM] Button ${item.id} - Stopping animation`);
      stopAnimation();
    }

    return () => {
      console.log(`[TRACE] Button ${item.id} - Animation effect cleanup`);
      cancelAnimation(borderOpacity);
      borderOpacity.value = 0;
    };
  }, [
    isPlaying,
    startBreathingAnimation,
    stopAnimation,
    borderOpacity,
    item.id, // Added for tracing only
  ]);

  // Gesture handling
  const tapGesture = Gesture.Tap()
    .onStart(() => {
      if (!isDragging.value && !disabled && !isLockedByGame && !isPlaying) {
        runOnJS(onAudioPlay)();
      }
    })
    .maxDuration(250)
    .enabled(!disabled && !isLockedByGame);

  const dragGesture = Gesture.Pan()
    .onStart(() => {
      if (disabled || isLockedByGame) return;
      touchStartTime.value = Date.now();
      savedPosition.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      if (disabled || isLockedByGame) return;
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
      if (disabled || isLockedByGame) {
        if (isDragging.value) {
          translateX.value = withSpring(0, SPRING_CONFIG);
          translateY.value = withSpring(0, SPRING_CONFIG);
          isDragging.value = false;
        }
        return;
      }

      if (isDragging.value) {
        const droppedX = event.absoluteX;
        const droppedY = event.absoluteY;

        const isInDropArea = destinationArea
          ? droppedX >= destinationArea.x &&
            droppedX <= destinationArea.x + (destinationArea.width || 0) &&
            droppedY >= destinationArea.y &&
            droppedY <= destinationArea.y + (destinationArea.height || 0)
          : false;

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
          // If not in drop area, snap back to origin
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

  // Animation styles
  const animatedPositionStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  const animatedBorderStyle = useAnimatedStyle(() => ({
    opacity: borderOpacity.value,
  }));

  // Button color selection based on state
  const getButtonColorProps = (): ButtonColorProps => {
    if (disabled) {
      return DISABLED_BUTTON_COLORS;
    }

    if (isPlaced) {
      return isCorrect ? CORRECT_BUTTON_COLORS : INCORRECT_BUTTON_COLORS;
    }

    return buttonColor;
  };

  const currentColors = getButtonColorProps();

  const { isLowercase } = useLetterCase();

  return (
    <GestureDetector gesture={gesture}>
      <Reanimated.View
        ref={buttonRef}
        style={[
          styles.audioButtonContainer,
          animatedPositionStyle,
          {
            backgroundColor: currentColors.backgroundColor,
            borderColor: currentColors.primaryColor,
          },
        ]}
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
        {/* Capitalize based on isLowercase */}
        <Text style={styles.letterStyle}>
          {isLowercase ? item.id.toLowerCase() : item.id.toUpperCase()}
        </Text>
      </Reanimated.View>
    </GestureDetector>
  );
};

// ------------------------------------------------------------
// DEFAULT DESTINATION COMPONENT
// ------------------------------------------------------------

const DefaultUseDestinationComponent = (
  isCardActive: boolean,
): [
  DestinationComponentType,
  RefObject<View | null>,
  RefObject<View | null>,
] => {
  const styles = StyleSheet.create({
    flashcardContainer: {
      flex: 1,
      justifyContent: "center", // Center the flashcard vertically
    },
    flashcard: {
      height: 100,
      width: 100,
      borderWidth: 2,
      borderColor: "blue",
      borderRadius: 12,
      backgroundColor: "white",
      marginHorizontal: 16,
      padding: 16,
      flexDirection: "column",
    },
    flashcardActive: {
      borderWidth: 2,
      borderColor: "red",
      borderStyle: "dashed",
      backgroundColor: "green",
    },
    dropCircleContainer: {
      justifyContent: "center", // Center vertically
      alignItems: "center", // Center horizontally
    },
    emptyDropCircle: {
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      borderRadius: BUTTON_SIZE / 2,
      borderWidth: 2,
      borderColor: "purple",
      borderStyle: "dashed",
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  const dropCircleRef = useRef<View>(null);
  const destinationContainerRef = useRef<View>(null); // New ref for entire destination area

  // Use memo to prevent unnecessary re-renders

  const DestinationComponent = React.useCallback(
    () => (
      <View style={styles.flashcardContainer}>
        <View
          style={[styles.flashcard, isCardActive && styles.flashcardActive]}
          ref={destinationContainerRef}
        >
          <View style={styles.dropCircleContainer}>
            <View ref={dropCircleRef} style={styles.emptyDropCircle} />
          </View>
        </View>
      </View>
    ),
    [isCardActive], // eslint-disable-line react-hooks/exhaustive-deps
  );

  return [DestinationComponent, dropCircleRef, destinationContainerRef];
};

// ------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------

const defaultOnCorrectAnswer = () => {
  console.log("Correct answer!");
};

interface AudioMultipleChoiceProps {
  gameSet: GameSet;
  useDestinationComponent?: typeof DefaultUseDestinationComponent;
  buttonColor?: ButtonColorProps;
  sectionColorTheme?: any;
  onCorrectAnswer?: () => void;
}

const SpellingMultipleChoice: React.FC<AudioMultipleChoiceProps> = ({
  gameSet,
  useDestinationComponent = DefaultUseDestinationComponent,
  buttonColor = DEFAULT_BUTTON_COLOR,
  sectionColorTheme = DEFAULT_SECTION_COLOR,
  onCorrectAnswer = defaultOnCorrectAnswer,
}) => {
  // State
  const [isCardActive, setIsCardActive] = useState<boolean>(false);
  const [targetPosition, setTargetPosition] = useState<Position | null>(null);
  const [destinationArea, setDestinationArea] = useState<Position | null>(null);
  const [placedButtonId, setPlacedButtonId] = useState<string | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);
  const [playingButtonId, setPlayingButtonId] = useState<string | null>(null);
  const [isGameInteractionLocked, setIsGameInteractionLocked] =
    useState<boolean>(false);

  // Refs
  const currentSound = useRef<Sound | null>(null);

  // Setup destination component
  const [DestinationComponent, dropCircleRef, destinationContainerRef] =
    useDestinationComponent(isCardActive);

  // Styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: APP_COLORS.backgroundgrey,
    },
    buttonPool: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      paddingVertical: IS_SMALL_SCREEN ? 10 : 20,
      borderWidth: 2,
      borderColor: sectionColorTheme.primary,
      backgroundColor: sectionColorTheme.light,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      marginVertical: IS_SMALL_SCREEN ? 5 : 10,
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

  // Measurement callbacks
  const measureDestinationArea = useCallback((): void => {
    console.log(`[TRACE] AudioMultipleChoice - measureDestinationArea called`);

    // Simplified measurement with fewer log statements
    setTimeout(() => {
      if (destinationContainerRef.current) {
        destinationContainerRef.current.measure(
          (x, y, width, height, pageX, pageY) => {
            if (width > 0 && height > 0 && pageX > 0 && pageY > 0) {
              console.log(
                `[MEASURE] Destination area measured successfully: ${pageX},${pageY}`,
              );
              setDestinationArea({
                x: pageX,
                y: pageY,
                width: width,
                height: height,
              });
            } else {
              console.log(
                `[MEASURE] Destination area measurement failed, retrying once`,
              );
              // Retry once with logging
              setTimeout(() => {
                if (destinationContainerRef.current) {
                  destinationContainerRef.current.measure(
                    (x, y, width, height, pageX, pageY) => {
                      if (width > 0 && height > 0 && pageX > 0 && pageY > 0) {
                        console.log(
                          `[MEASURE] Destination area retry successful: ${pageX},${pageY}`,
                        );
                        setDestinationArea({
                          x: pageX,
                          y: pageY,
                          width: width,
                          height: height,
                        });
                      } else {
                        console.log(
                          `[MEASURE] Destination area measurement failed after retry`,
                        );
                      }
                    },
                  );
                }
              }, 200);
            }
          },
        );
      }
    }, 100);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const measureDropCircle = useCallback((): void => {
    console.log(`[TRACE] AudioMultipleChoice - measureDropCircle called`);

    // Only measure once with minimal logging
    setTimeout(() => {
      if (dropCircleRef.current) {
        dropCircleRef.current.measure((x, y, width, height, pageX, pageY) => {
          if (width > 0 && height > 0 && pageX > 0 && pageY > 0) {
            console.log(
              `[MEASURE] Drop circle measured successfully: ${pageX},${pageY}`,
            );
            setTargetPosition({
              x: pageX,
              y: pageY,
              width: width || BUTTON_SIZE,
              height: height || BUTTON_SIZE,
            });
          } else {
            console.log(
              `[MEASURE] Drop circle measurement failed, retrying once`,
            );
            // Retry once without logging
            setTimeout(() => {
              if (dropCircleRef.current) {
                dropCircleRef.current.measure(
                  (x, y, width, height, pageX, pageY) => {
                    if (width > 0 && height > 0 && pageX > 0 && pageY > 0) {
                      console.log(
                        `[MEASURE] Drop circle retry successful: ${pageX},${pageY}`,
                      );
                      setTargetPosition({
                        x: pageX,
                        y: pageY,
                        width: width || BUTTON_SIZE,
                        height: height || BUTTON_SIZE,
                      });
                    } else {
                      console.log(
                        `[MEASURE] Drop circle measurement failed after retry`,
                      );
                    }
                  },
                );
              }
            }, 200);
          }
        });
      }
    }, 100);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const measurementsCompleteRef = useRef(false);

  // Then in the component's initialization effect:
  useEffect(() => {
    console.log(
      `[TRACE] AudioMultipleChoice - Initial measurement effect running`,
    );

    if (!measurementsCompleteRef.current) {
      const timerId = setTimeout(() => {
        console.log(
          `[MEASURE] AudioMultipleChoice - Starting initial measurements`,
        );
        measureDropCircle();
        measureDestinationArea();
        measurementsCompleteRef.current = true;
      }, 500);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Clean up sound when component unmounts
  useEffect(() => {
    console.log(`[TRACE] AudioMultipleChoice - Sound cleanup effect mounted`);

    return () => {
      console.log(
        `[TRACE] AudioMultipleChoice - Sound cleanup running on unmount`,
      );
      if (currentSound.current) {
        currentSound.current.unloadAsync();
        currentSound.current = null;
      }
    };
  }, []);

  // Audio playback function
  const playAudio = useCallback(
    async (audioFile: any, buttonId: string): Promise<void> => {
      // Removed excessive logging

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
            isHandled = true;

            // Force update the playing button ID state
            setPlayingButtonId((prevId) => {
              if (prevId === buttonId) {
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

          setPlayingButtonId((prevId) => {
            if (prevId === buttonId) {
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

        // Clean up timeout
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

  // Handle drag end for buttons
  const handleDragEnd = useCallback(
    (buttonId: string, isInTarget: boolean): void => {
      setIsCardActive(false);

      if (isInTarget) {
        setIsGameInteractionLocked(true);
        setPlacedButtonId(buttonId);
        const isCorrect = buttonId === gameSet.correctAnswerId;
        setIsCorrectAnswer(isCorrect);

        if (isCorrect) {
          console.log(
            `[EVENT] Button ${buttonId} - Correct answer, will call onCorrectAnswer in 1.5s`,
          );
          setTimeout(() => {
            if (currentSound.current) {
              currentSound.current.stopAsync().catch(() => {});
              currentSound.current.unloadAsync().catch(() => {});
              currentSound.current = null;
            }
            setPlayingButtonId(null);
            if (onCorrectAnswer) {
              onCorrectAnswer();
            }
          }, 1500);
        } else {
          // Incorrect answer, feedback is handled by DraggableButton's useEffect
          // The DraggableButton will call this handleDragEnd again with isInTarget: false
          // after its timeout, at which point the lock will be released.
        }
      } else {
        if (placedButtonId === buttonId) {
          setPlacedButtonId(null);
          setIsCorrectAnswer(null);
          setIsGameInteractionLocked(false);
        }
      }
    },
    [gameSet.correctAnswerId, onCorrectAnswer, placedButtonId],
  );

  // Prepare available buttons
  const availableButtons: ButtonItem[] = gameSet.options;

  return (
    <GestureHandlerRootView style={styles.container}>
      <DestinationComponent />

      {/* Button Pool */}
      <View style={styles.buttonPool}>
        <View style={styles.buttonRow}>
          {availableButtons.slice(0, 3).map((item: ButtonItem) => (
            <DraggableButton
              key={`${item.id}-${gameSet.correctAnswerId}`}
              item={item}
              disabled={disabledButtons.includes(item.id)}
              isLockedByGame={isGameInteractionLocked}
              onAudioPlay={() => playAudio(item.audioFile, item.id)}
              onDragStart={() => setIsCardActive(true)}
              onDragEnd={(_pos, isInTarget) =>
                handleDragEnd(item.id, isInTarget)
              }
              buttonColor={buttonColor}
              targetPosition={targetPosition}
              destinationArea={destinationArea}
              isPlaced={placedButtonId === item.id}
              isCorrect={placedButtonId === item.id ? isCorrectAnswer : null}
              isPlaying={playingButtonId === item.id}
              onMarkDisabled={(buttonId: string) =>
                setDisabledButtons((prev) => [...prev, buttonId])
              }
            />
          ))}
        </View>
        <View style={styles.buttonRow}>
          {availableButtons.slice(3, 5).map((item: ButtonItem) => (
            <DraggableButton
              key={`${item.id}-${gameSet.correctAnswerId}`}
              item={item}
              disabled={disabledButtons.includes(item.id)}
              isLockedByGame={isGameInteractionLocked}
              onAudioPlay={() => playAudio(item.audioFile, item.id)}
              onDragStart={() => setIsCardActive(true)}
              onDragEnd={(_pos, isInTarget) =>
                handleDragEnd(item.id, isInTarget)
              }
              buttonColor={buttonColor}
              targetPosition={targetPosition}
              destinationArea={destinationArea}
              isPlaced={placedButtonId === item.id}
              isCorrect={placedButtonId === item.id ? isCorrectAnswer : null}
              isPlaying={playingButtonId === item.id}
              onMarkDisabled={(buttonId: string) =>
                setDisabledButtons((prev) => [...prev, buttonId])
              }
            />
          ))}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default SpellingMultipleChoice;
