import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  findNodeHandle,
  StyleSheet,
  Text,
  UIManager,
  View,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import type { SharedValue } from "react-native-reanimated";
import Reanimated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EnglishButton } from "@/ui/icons/circular/english-button";
import { WIDTH } from "@/utils/layout";

// Define types
type ButtonItem = {
  id: string;
  word: string;
};

type Position = {
  x: number;
  y: number;
  width?: number;
  height?: number;
};

type AudioSource = {
  file: string;
  letter: string;
};

// Mock data with proper typing
const VOCABULARY_AUDIO_SOURCES: Record<string, AudioSource> = {
  a: { file: "audio_a.mp3", letter: "A" },
  b: { file: "audio_b.mp3", letter: "B" },
  c: { file: "audio_c.mp3", letter: "C" },
};

// Button colors - now defining the three color properties for each button
// Using ButtonColorProps as our color configuration type
type ButtonColorConfig = ButtonColorProps;

const BUTTON_COLORS: Record<string, ButtonColorConfig> = {
  a: {
    primaryColor: "#F8A5D1",
    offwhiteColor: "#FFFFFF",
    offblackColor: "#222222",
    secondaryColor: "#D282AE",
    backgroundColor: "#FFF0F6",
  }, // Pink
  b: {
    primaryColor: "#B999FF",
    offwhiteColor: "#FFFFFF",
    offblackColor: "#222222",
    secondaryColor: "#9A7DE0",
    backgroundColor: "#F5F0FF",
  }, // Purple
  c: {
    primaryColor: "#7FC2FF",
    offwhiteColor: "#FFFFFF",
    offblackColor: "#222222",
    secondaryColor: "#5BA3E0",
    backgroundColor: "#EFF6FF",
  }, // Blue
};

const CORRECT_COLORS: ButtonColorConfig = {
  primaryColor: "#4CAF50",
  offwhiteColor: "#FFFFFF",
  offblackColor: "#228B22",
  secondaryColor: "#2E8B57",
  backgroundColor: "#E8F5E9",
};

const INCORRECT_COLORS: ButtonColorConfig = {
  primaryColor: "#F44336",
  offwhiteColor: "#FFFFFF",
  offblackColor: "#B22222",
  secondaryColor: "#D32F2F",
  backgroundColor: "#FFEBEE",
};

const DISABLED_COLORS: ButtonColorConfig = {
  primaryColor: "#AAAAAA",
  offwhiteColor: "#DDDDDD",
  offblackColor: "#666666",
  secondaryColor: "#888888",
  backgroundColor: "#F5F5F5",
};

// Initialize constants
const BUTTON_SIZE: number = 80;
const FLASHCARD_HEIGHT: number = 350;
const CORRECT_BUTTON_ID: string = "a";
const DRAG_DELAY_MS: number = 100;
const INCORRECT_FEEDBACK_DURATION_MS: number = 2000;
const SPRING_CONFIG: { damping: number; stiffness: number } = {
  damping: 15,
  stiffness: 100,
};

// Using imported ButtonColorProps type instead of redefining it

// Remove this EnglishButton implementation since we're importing it from "@/ui/icons/circular/english-button"

// Props for the button component
interface DraggableButtonProps {
  item: ButtonItem;
  disabled?: boolean;
  onAudioPlay: () => void;
  onDragStart: () => void;
  onDragEnd: (position: Position, isInTarget: boolean) => void;
  buttonColor: ButtonColorConfig;
  // buttonText: string;
  targetPosition: Position | null;
  isPlaced?: boolean;
  isCorrect?: boolean | null;
  onMarkDisabled?: (buttonId: string) => void;
}

const DraggableAudioGame: React.FC = () => {
  // State for tracking if the flashcard is in "active" state (being dragged over)
  const [isCardActive, setIsCardActive] = useState<boolean>(false);

  // Store the target drop circle position
  const [targetPosition, setTargetPosition] = useState<Position | null>(null);

  // Track which button is currently placed in the target
  const [placedButtonId, setPlacedButtonId] = useState<string | null>(null);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean | null>(null);
  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);

  // Reference to target drop circle
  const dropCircleRef = useRef<View | null>(null);

  // Available audio buttons
  const availableButtons: ButtonItem[] = [
    { id: "a", word: "a" },
    { id: "b", word: "b" },
    { id: "c", word: "c" },
  ];

  // Function to play audio
  const playAudio = useCallback((audioFile: string): void => {
    console.log("Playing audio:", audioFile);
    // Actual audio playback implementation would go here
  }, []);

  // Function to get the absolute position of the target drop circle
  const measureDropCircle = useCallback((): void => {
    if (dropCircleRef.current) {
      const nodeHandle = findNodeHandle(dropCircleRef.current);
      if (nodeHandle) {
        UIManager.measure(
          nodeHandle,
          (
            x: number,
            y: number,
            width: number,
            height: number,
            pageX: number,
            pageY: number,
          ) => {
            setTargetPosition({ x: pageX, y: pageY, width, height });
          },
        );
      }
    }
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
    (position: Position, buttonId: string, isInTarget: boolean): void => {
      setIsCardActive(false);

      if (isInTarget) {
        setPlacedButtonId(buttonId);
        const isCorrect = buttonId === CORRECT_BUTTON_ID;
        setIsCorrectAnswer(isCorrect);

        if (!isCorrect) {
          // Don't add to disabled list here - moved to the button component where the timer exists
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
      <View
        style={[styles.flashcard, isCardActive && styles.flashcardActive]}
        onLayout={() => setTimeout(measureDropCircle, 100)}
      >
        {/* Character container */}
        <View style={styles.characterContainer}>
          <View style={styles.characterImageContainer}>
            <View style={styles.characterImage} />
          </View>
          <View style={styles.speechBubble}>
            <Text>😊</Text>
          </View>
          <View style={styles.soundIcon}>
            <Text>🔊</Text>
          </View>
        </View>

        {/* Drop target */}
        <View style={styles.dropCircleContainer}>
          <View ref={dropCircleRef} style={styles.emptyDropCircle} />
        </View>
      </View>

      {/* Button Pool */}
      <View style={styles.buttonPool}>
        {availableButtons.map((item: ButtonItem) => (
          <DraggableButton
            key={item.id}
            item={item}
            onAudioPlay={() =>
              playAudio(VOCABULARY_AUDIO_SOURCES[item.word].file)
            }
            onDragStart={() => setIsCardActive(true)}
            onDragEnd={(pos, isInTarget) =>
              handleDragEnd(pos, item.id, isInTarget)
            }
            buttonColor={BUTTON_COLORS[item.word]}
            // buttonText={VOCABULARY_AUDIO_SOURCES[item.word].letter}
            targetPosition={targetPosition}
            isPlaced={placedButtonId === item.id}
            isCorrect={placedButtonId === item.id ? isCorrectAnswer : null}
            disabled={disabledButtons.includes(item.id)}
            onMarkDisabled={(buttonId: string) =>
              setDisabledButtons((prev) => [...prev, buttonId])
            }
          />
        ))}
      </View>
    </GestureHandlerRootView>
  );
};

// Button component
const DraggableButton: React.FC<DraggableButtonProps> = ({
  item,
  onAudioPlay,
  onDragStart,
  onDragEnd,
  buttonColor,
  // buttonText,
  targetPosition,
  isPlaced,
  isCorrect,
  disabled = false,
  onMarkDisabled,
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

  // Track original position (where the button starts in the button pool)
  const buttonRef = useRef<Reanimated.View | null>(null);
  const [buttonOrigin, setButtonOrigin] = useState<Position | null>(null);

  // Get button's original position
  useEffect(() => {
    if (buttonRef.current) {
      const nodeHandle = findNodeHandle(buttonRef.current);
      if (nodeHandle) {
        UIManager.measure(
          nodeHandle,
          (
            x: number,
            y: number,
            width: number,
            height: number,
            pageX: number,
            pageY: number,
          ) => {
            setButtonOrigin({ x: pageX, y: pageY, width, height });
          },
        );
      }
    }
  }, [item.id]);

  // Reset incorrect button after feedback duration
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

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

  // Define tap gesture
  const tapGesture = Gesture.Tap()
    .onStart(() => {
      if (!isDragging.value && !disabled) {
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
        const isInFlashcard: boolean =
          droppedY < FLASHCARD_HEIGHT &&
          droppedY > 0 &&
          droppedX > 0 &&
          droppedX < WIDTH;

        isDragging.value = false;

        if (isInFlashcard && targetPosition && buttonOrigin) {
          // Center button in the target
          const targetCenterX: number =
            targetPosition.x + (targetPosition.width || BUTTON_SIZE) / 2;
          const targetCenterY: number =
            targetPosition.y + (targetPosition.height || BUTTON_SIZE) / 2;
          const buttonCenterX: number =
            buttonOrigin.x + (buttonOrigin.width || BUTTON_SIZE) / 2;
          const buttonCenterY: number =
            buttonOrigin.y + (buttonOrigin.height || BUTTON_SIZE) / 2;

          translateX.value = withSpring(
            targetCenterX - buttonCenterX,
            SPRING_CONFIG,
          );
          translateY.value = withSpring(
            targetCenterY - buttonCenterY,
            SPRING_CONFIG,
          );
        } else {
          // Return to original position
          translateX.value = withSpring(0, SPRING_CONFIG);
          translateY.value = withSpring(0, SPRING_CONFIG);
        }

        runOnJS(onDragEnd)(
          { x: droppedX, y: droppedY },
          isInFlashcard && targetPosition !== null,
        );
      }
    });

  // Combine gestures
  const gesture = Gesture.Exclusive(dragGesture, tapGesture);

  // Animation style
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  // Determine the button color configuration based on state
  const getButtonColorConfig = (): ButtonColorProps => {
    if (disabled) {
      return DISABLED_COLORS;
    }

    if (isPlaced) {
      return isCorrect ? CORRECT_COLORS : INCORRECT_COLORS;
    }

    return buttonColor;
  };

  // Get the current color configuration
  const currentColors = getButtonColorConfig();

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
        style={[styles.audioButtonContainer, animatedStyle]}
      >
        <EnglishButton {...iconButtonProps} />
      </Reanimated.View>
    </GestureDetector>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  flashcard: {
    height: FLASHCARD_HEIGHT,
    borderWidth: 2,
    borderColor: "#FFA500",
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    padding: 16,
    position: "relative",
  },
  flashcardActive: {
    borderStyle: "dashed",
    backgroundColor: "#FFF8E0",
  },
  characterContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#FFEE99",
    borderRadius: 8,
    position: "relative",
  },
  characterImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  characterImage: {
    width: 120,
    height: 120,
    backgroundColor: "#DDD",
    borderRadius: 60,
  },
  speechBubble: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: "#FFEE66",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  soundIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 40,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  dropCircleContainer: {
    position: "absolute",
    bottom: 40,
    left: "50%",
    marginLeft: -40,
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyDropCircle: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    borderWidth: 4,
    borderColor: "#F36889",
    borderStyle: "dashed",
    backgroundColor: "#F7D6DE",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPool: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 20,
    backgroundColor: "#FFF2E6",
    borderWidth: 1,
    borderColor: "#FFA500",
    borderStyle: "dashed",
  },
  audioButtonContainer: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DraggableAudioGame;
