import { BlurView } from "expo-blur";
import { router } from "expo-router";
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import useSound from "@/core/hooks/useSound";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { HomeButton } from "@/ui/icons/circular/home-button";
import { PlayButton } from "@/ui/icons/circular/play-button";

// Types
export type VideoInput = {
  audio: string;
  svgator: string;
};

export interface InteractiveVideoPlayerRef {
  play?: () => void;
  pause?: () => void;
  reset?: () => void;
}

interface InteractiveVideoPlayerProps {
  videoInputs: VideoInput[];
  buttonColorProps: ButtonColorProps;
  videoComponent: React.ComponentType<any>;
  slideDuration?: number; // Duration in milliseconds (default: 10000)
  onComplete?: () => void;
  onSlideChange?: (currentSlide: VideoInput, index: number) => void;
  showHomeButton?: boolean;
  onHomePress?: () => void;
  playButtonColor?: string;
  playButtonSize?: number;
}

const SIZE = 40;

const InteractiveVideoPlayer = forwardRef<
  InteractiveVideoPlayerRef,
  InteractiveVideoPlayerProps
>(
  (
    {
      videoInputs,
      buttonColorProps,
      videoComponent: VideoComponent,
      slideDuration = 10000,
      onComplete,
      onSlideChange,
      showHomeButton = true,
      onHomePress,
      playButtonColor = "#FBD65B",
      playButtonSize = 80,
    },
    ref,
  ) => {
    const videoRef = useRef<any>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [showOverlay, setShowOverlay] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const overlayOpacity = useRef(new Animated.Value(1)).current;
    const lastSlideTimer = useRef<number | null>(null);

    // Slider state
    const progressValue = useSharedValue(0);
    const min = useSharedValue(0);
    const max = useSharedValue(Math.max(0, videoInputs.length - 1));

    // Animation timers
    const animationTimers = useRef<number[]>([]);

    const { playSound } = useSound();

    // Current slide data
    const currentSlide = videoInputs[currentSlideIndex] || videoInputs[0];

    // Update progress when slide changes
    useEffect(() => {
      progressValue.value = currentSlideIndex;
    }, [currentSlideIndex, progressValue]);

    // Update max value when videoInputs change
    useEffect(() => {
      max.value = Math.max(0, videoInputs.length - 1);
    }, [videoInputs.length, max]);

    // Call onSlideChange when slide changes
    useEffect(() => {
      if (onSlideChange && currentSlide) {
        onSlideChange(currentSlide, currentSlideIndex);
      }
    }, [currentSlide, currentSlideIndex, onSlideChange]);

    // Expose methods to parent component
    useImperativeHandle(ref, () => ({
      play: initAnimation,
      pause: handlePause,
      reset: resetToInitialState,
    }));

    // Clear all animation timers
    const clearAllTimers = useCallback(() => {
      animationTimers.current.forEach((timer) => clearTimeout(timer));
      animationTimers.current = [];

      if (lastSlideTimer.current) {
        clearTimeout(lastSlideTimer.current);
        lastSlideTimer.current = null;
      }
    }, []);

    const resetToInitialState = useCallback(() => {
      clearAllTimers();
      setShowOverlay(true);
      setIsAnimating(false);
      setCurrentSlideIndex(0);
      progressValue.value = 0;

      Animated.timing(overlayOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }, [clearAllTimers, overlayOpacity, progressValue]);

    const playSlide = useCallback(
      (slide: VideoInput, index: number) => {
        setCurrentSlideIndex(index);

        setTimeout(() => {
          if (videoRef.current?.play) {
            videoRef.current.play();
          }

          if (slide.audio) {
            const audioSource = slide.audio;
            playSound(audioSource);
          }
        }, 1000);
      },
      [playSound],
    );

    const initAnimation = useCallback(() => {
      try {
        // Clear any existing timers
        clearAllTimers();

        // Hide overlay and start animations
        setIsAnimating(true);
        setShowOverlay(false);

        // Fade out overlay
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();

        // Reset to first slide
        setCurrentSlideIndex(0);
        progressValue.value = 0;

        // Set up animation sequence
        videoInputs.forEach((slide, index) => {
          const timer = setTimeout(() => {
            playSlide(slide, index);
          }, index * slideDuration);

          animationTimers.current.push(timer);
        });

        // Set a timer for when all animations should be completed
        const totalDuration = videoInputs.length * slideDuration;
        lastSlideTimer.current = setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
          resetToInitialState();
        }, totalDuration);
      } catch (error) {
        console.error("Error in initAnimation:", error);
        resetToInitialState();
      }
    }, [
      clearAllTimers,
      overlayOpacity,
      progressValue,
      videoInputs,
      slideDuration,
      playSlide,
      onComplete,
      resetToInitialState,
    ]);

    // Handle slider value change
    const handleSliderChange = useCallback(
      (value: number) => {
        // Clear existing timers
        clearAllTimers();

        // Move to the selected slide
        const slideIndex = Math.floor(value);
        if (slideIndex >= 0 && slideIndex < videoInputs.length) {
          const selectedSlide = videoInputs[slideIndex];
          playSlide(selectedSlide, slideIndex);

          // Setup remaining slides
          for (let i = slideIndex + 1; i < videoInputs.length; i++) {
            const timer = setTimeout(
              () => {
                const nextSlide = videoInputs[i];
                playSlide(nextSlide, i);
              },
              (i - slideIndex) * slideDuration,
            );

            animationTimers.current.push(timer);
          }

          // Set a timer for when all animations should be completed after slider change
          const remainingDuration =
            (videoInputs.length - slideIndex) * slideDuration;
          lastSlideTimer.current = setTimeout(() => {
            if (onComplete) {
              onComplete();
            }
            resetToInitialState();
          }, remainingDuration);
        }
      },
      [
        clearAllTimers,
        videoInputs,
        slideDuration,
        playSlide,
        onComplete,
        resetToInitialState,
      ],
    );

    // Handle tap on the animation area to pause
    const handlePause = useCallback(() => {
      if (isAnimating) {
        setShowOverlay(true);
        setIsAnimating(false);
        overlayOpacity.setValue(1);

        // Clear animation timers
        clearAllTimers();
      }
    }, [isAnimating, overlayOpacity, clearAllTimers]);

    const navigateToHome = useCallback(() => {
      if (onHomePress) {
        onHomePress();
      } else {
        router.navigate({
          pathname: "/",
        });
      }
    }, [onHomePress]);

    // Don't render if no video inputs
    if (!videoInputs || videoInputs.length === 0) {
      return null;
    }

    return (
      <SafeAreaView style={styles.container}>
        <View className="flex-row items-center justify-between p-4">
          <View className="flex-row items-center space-x-4">
            <Pressable onPress={navigateToHome} className="p-2">
              <View style={[{ width: SIZE, height: SIZE }]}>
                <HomeButton {...buttonColorProps} />
              </View>
            </Pressable>
          </View>
          <View className="flex-1 flex-row items-center pl-2 pr-16">
            <View style={styles.sliderContainer}>
              <Slider
                style={styles.slider}
                sliderHeight={8}
                theme={{
                  bubbleTextColor: buttonColorProps.primaryColor,
                  minimumTrackTintColor: buttonColorProps.primaryColor,
                  maximumTrackTintColor: "#D4D4D8",
                  bubbleBackgroundColor: "#ffffff",
                }}
                progress={progressValue}
                minimumValue={min}
                maximumValue={max}
                onSlidingComplete={handleSliderChange}
                disable={showOverlay || !isAnimating}
              />
            </View>
          </View>
        </View>

        <View className="flex-1 items-center justify-center">
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={handlePause}
            disabled={!isAnimating}
          >
            <VideoComponent
              ref={videoRef}
              svgator={currentSlide.svgator}
              onAnimationComplete={() => {
                console.log(
                  "Animation completed for slide:",
                  currentSlideIndex,
                );
              }}
            />
          </Pressable>

          {/* Overlay with play button */}
          {showOverlay && (
            <Animated.View
              style={[StyleSheet.absoluteFill, { opacity: overlayOpacity }]}
            >
              <BlurView
                intensity={40}
                tint="dark"
                className="absolute size-full items-center justify-center"
              >
                <View className="flex flex-row">
                  <Pressable
                    onPress={initAnimation}
                    className="flex items-center justify-center"
                  >
                    <PlayButton
                      backgroundColor={playButtonColor}
                      offblackColor="black"
                      offwhiteColor="white"
                      primaryColor={playButtonColor}
                      secondaryColor="white"
                      height={playButtonSize}
                      width={playButtonSize}
                    />
                  </Pressable>
                  {showHomeButton && (
                    <Pressable className="ml-4 w-[80]" onPress={navigateToHome}>
                      <HomeButton {...buttonColorProps} />
                    </Pressable>
                  )}
                </View>
              </BlurView>
            </Animated.View>
          )}
        </View>
      </SafeAreaView>
    );
  },
);

export default InteractiveVideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -40,
  },
  sliderContainer: {
    paddingHorizontal: 4,
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  slider: {
    height: 40,
  },
});
