/* eslint-disable unused-imports/no-unused-vars */
// TODO: Resolve eventually:
// 117:5   error  'resumeSound' is assigned a value but never used. Allowed unused vars must match /^_/u                            unused-imports/no-unused-vars
// 120:16  error  'isAudioPlaying' is assigned a value but never used. Allowed unused vars must match /^_/u                         unused-imports/no-unused-vars

import { useIsFocused } from "@react-navigation/native";
import welcome from "assets/videos/welcome-dict";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Pressable, StyleSheet, View } from "react-native";
import { Slider } from "react-native-awesome-slider";
import { useSharedValue } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { APP_COLORS } from "@/constants/routes";
import useSound from "@/core/hooks/useSoundExtended";
import VideoPlayer from "@/ui/components/video-player";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { HomeButton } from "@/ui/icons/circular/home-button";
import { PlayButton } from "@/ui/icons/circular/play-button";

import { globalStyles } from "../styles";

// TODO: Refactor `defaultButtonColorProps` into a separate constants or theme file.
// This will improve maintainability by centralizing color definitions and reducing redundancy.
const defaultButtonColorProps: ButtonColorProps = {
  primaryColor: APP_COLORS.green,
  secondaryColor: APP_COLORS.lightgreen,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

interface VideoPlayerRef {
  play: () => void;
  pause: () => void;
  restart: () => void;
}

interface AnimationSegment {
  audio: any;
  svgatorDictKey: string;
  animationDuration: number;
}
interface SvgatorDictionary {
  [key: string]: string;
}

export interface AnimationCollection {
  svgatorDict: SvgatorDictionary;
  segments: AnimationSegment[];
}

const defaultAnimationCollection: AnimationCollection = {
  svgatorDict: welcome,
  segments: [
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partA.mp3"),
      svgatorDictKey: "welcome_screen_1",
      animationDuration: 0,
    },
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partB.mp3"),
      svgatorDictKey: "welcome_screen_2",
      animationDuration: 0,
    },
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partC.mp3"),
      svgatorDictKey: "welcome_screen_3",
      animationDuration: 6000,
    },
    {
      audio: require("assets/multilingual-audio/english/videos/welcome/welcome_partD.mp3"),
      svgatorDictKey: "welcome_screen_4",
      animationDuration: 0,
    },
  ],
};

const InteractiveVideoPlayer = ({
  animationCollection = defaultAnimationCollection,
  buttonColorProps = defaultButtonColorProps,
}: {
  animationCollection?: AnimationCollection;
  buttonColorProps?: ButtonColorProps;
}) => {
  const navigateToHome = () => {
    stopSound(); // Stop audio explicitly before navigation
    router.navigate({
      pathname: "/",
    });
  };

  const homeColorProps: ButtonColorProps = {
    primaryColor: APP_COLORS.green,
    secondaryColor: APP_COLORS.lightgreen,
    offwhiteColor: APP_COLORS.offwhite,
    offblackColor: APP_COLORS.offblack,
    backgroundColor: APP_COLORS.backgroundgrey,
  };

  // Player state management
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [svgContent, setSvgContent] = useState<string | null>(null);

  // Completion tracking
  const [audioCompleted, setAudioCompleted] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const nextSegmentTimerRef = useRef<number | null>(null);

  // Animation for the overlay
  const overlayOpacityValue = useRef(new Animated.Value(1)).current;
  const overlayOpacity = overlayOpacityValue;

  // Player reference for play/pause control
  const playerRef = useRef<VideoPlayerRef>(null);

  // Audio management using the useSound hook
  // @ts-ignore
  const {
    playSound,
    stopSound,
    pauseSound,
    // @ts-ignore - unused var
    resumeSound,
    cleanup,
    // @ts-ignore -
    isPlaying: isAudioPlaying,
  } = useSound();

  // Add a timer reference to track animation completion
  const animationTimerRef = useRef<number | null>(null);

  // Add this at the top of your component
  const isMountedRef = useRef(true);

  // Add this useEffect right after your component is defined
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // 1. Segment loading useEffect - loads content and auto-plays if needed
  useEffect(() => {
    if (!animationCollection) return;

    // Get the current segment
    const segment = animationCollection.segments[currentSegmentIndex];
    setSvgContent(animationCollection.svgatorDict[segment.svgatorDictKey]);

    // Clear any pending timers
    if (nextSegmentTimerRef.current) {
      clearTimeout(nextSegmentTimerRef.current);
      nextSegmentTimerRef.current = null;
    }

    if (animationTimerRef.current) {
      clearTimeout(animationTimerRef.current);
      animationTimerRef.current = null;
    }

    // Stop any existing audio
    stopSound();

    // Reset completion tracking
    setAudioCompleted(false);

    // IMPORTANT: For animation with duration 0, immediately set as completed
    // Do this BEFORE any other animation logic
    if (segment.animationDuration === 0) {
      console.log("Setting animation completed to true for zero duration");
      setAnimationCompleted(true);
    } else {
      // Only reset animation completed if we have an actual animation
      setAnimationCompleted(false);
    }

    // Auto-play for any segment change if we're in playing mode
    if (isPlaying && currentSegmentIndex > 0) {
      // Short timeout to ensure content is loaded
      const timeoutId = setTimeout(() => {
        setShowOverlay(false);

        // Only start animation if it has a duration
        if (segment.animationDuration > 0 && playerRef.current) {
          playerRef.current.play();

          // Set a timer to mark animation as complete after the duration
          animationTimerRef.current = setTimeout(() => {
            console.log("Animation timer completed");
            setAnimationCompleted(true);
          }, segment.animationDuration);
        } else {
          setAnimationCompleted(true);
        }

        // Play audio
        if (segment.audio) {
          playSound(segment.audio)
            .then((sound) => {
              if (sound) {
                sound.setOnPlaybackStatusUpdate((status) => {
                  if (status.isLoaded && status.didJustFinish) {
                    console.log("Audio completed");
                    setAudioCompleted(true);
                  }
                });
              }
            })
            .catch((error) => {
              console.error("Error playing sound:", error);
              setAudioCompleted(true);
            });
        } else {
          setAudioCompleted(true);
        }
      }, 50);

      return () => {
        clearTimeout(timeoutId);
        if (animationTimerRef.current) {
          clearTimeout(animationTimerRef.current);
        }
      };
    }
  }, [
    currentSegmentIndex,
    animationCollection,
    isPlaying,
    stopSound,
    playSound,
  ]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused && isPlaying) {
      console.log("Screen lost focus - pausing all activity");
      // Stop everything
      setIsPlaying(false);
      stopSound();
      pauseSound();

      // Clear timers
      if (nextSegmentTimerRef.current) {
        clearTimeout(nextSegmentTimerRef.current);
        nextSegmentTimerRef.current = null;
      }
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
        animationTimerRef.current = null;
      }

      // Reset state
      setCurrentSegmentIndex(0);
      setShowOverlay(true);
      setAudioCompleted(false);
      setAnimationCompleted(false);
    }
  }, [isFocused, isPlaying, stopSound, pauseSound]);

  // Handle play button press
  const handlePlay = useCallback(() => {
    const currentSegment = animationCollection.segments[currentSegmentIndex];

    // Set playing state
    setIsPlaying(true);
    setShowOverlay(false);

    // Only play animation if it has a duration
    if (currentSegment.animationDuration > 0 && playerRef.current) {
      playerRef.current.restart();

      // Clear any existing animation timer
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
      }

      // Set a timer to mark animation as complete after the duration
      animationTimerRef.current = setTimeout(() => {
        console.log("Play button: Animation timer completed");
        setAnimationCompleted(true);
      }, currentSegment.animationDuration);
    }
    // For zero-duration, we already set animationCompleted to true in the segment loading effect

    // Play audio
    if (currentSegment.audio) {
      playSound(currentSegment.audio)
        .then((sound) => {
          if (sound) {
            sound.setOnPlaybackStatusUpdate((status) => {
              if (status.isLoaded && status.didJustFinish) {
                console.log("Play button: Audio completed");
                setAudioCompleted(true);
              }
            });
          }
        })
        .catch((error) => {
          console.error("Error playing sound:", error);
          setAudioCompleted(true);
        });
    } else {
      setAudioCompleted(true);
    }
  }, [currentSegmentIndex, animationCollection, playSound]);

  // Handle pause button press
  const handlePause = useCallback(() => {
    if (playerRef.current) {
      // Call pause command on the player reference
      playerRef.current.pause();
      setIsPlaying(false);
      setShowOverlay(true);

      // Pause audio if playing
      pauseSound();

      // Clear animation completion timer when paused
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
        animationTimerRef.current = null;
      }
    }
  }, [pauseSound]);

  // Keep the animation complete handler as a fallback
  // but don't rely on it as the primary mechanism
  const handleAnimationComplete = useCallback(() => {
    console.log("Animation complete callback fired");
    setAnimationCompleted(true);
  }, []);

  // Handle overlay visibility changes
  useEffect(() => {
    if (showOverlay) {
      // Show overlay with animation
      overlayOpacityValue.setValue(0);
      Animated.timing(overlayOpacityValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Hide overlay with animation
      Animated.timing(overlayOpacityValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [showOverlay, overlayOpacityValue]);

  // Effect to handle segment completion and advance to next
  useEffect(() => {
    if (audioCompleted && animationCompleted && isPlaying) {
      // Wait 1 second before proceeding to next segment
      nextSegmentTimerRef.current = setTimeout(() => {
        if (currentSegmentIndex < animationCollection.segments.length - 1) {
          // Simply go to next segment - auto-play will happen in the segment loading effect
          setCurrentSegmentIndex((prev) => prev + 1);
        } else {
          // End of all segments, reset to original state
          setIsPlaying(false);
          setShowOverlay(true);
          setCurrentSegmentIndex(0);
        }
      }, 1300);
    }

    return () => {
      if (nextSegmentTimerRef.current) {
        clearTimeout(nextSegmentTimerRef.current);
      }
    };
  }, [
    audioCompleted,
    animationCompleted,
    currentSegmentIndex,
    animationCollection,
    isPlaying,
  ]);

  const progressValue = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(animationCollection.segments.length - 1);

  useEffect(() => {
    // Update progress whenever current segment changes
    progressValue.value = currentSegmentIndex;
  }, [currentSegmentIndex, progressValue]);

  // Replace or enhance your existing cleanup useEffect
  useEffect(() => {
    return () => {
      console.log("Component unmounting - performing cleanup");
      // Stop any playing sounds
      setIsPlaying(false);
      stopSound();
      cleanup();

      // Clear any pending timers
      if (nextSegmentTimerRef.current) {
        clearTimeout(nextSegmentTimerRef.current);
        nextSegmentTimerRef.current = null;
      }
      if (animationTimerRef.current) {
        clearTimeout(animationTimerRef.current);
        animationTimerRef.current = null;
      }
    };
  }, [cleanup, stopSound]);

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      {/* Top Bar */}
      <View className="flex-row items-center justify-between p-4">
        {/* Home Button */}
        <View className="flex-row items-center space-x-4">
          <Pressable onPress={navigateToHome} className="p-2">
            <View style={[{ width: 40, height: 40 }]}>
              <HomeButton {...homeColorProps} />
            </View>
          </Pressable>
        </View>
        {/* Progress Bar */}
        <View className="flex-1 flex-row items-center pl-2 pr-20">
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              sliderHeight={8}
              theme={{
                bubbleTextColor: APP_COLORS.green,
                minimumTrackTintColor: APP_COLORS.green,
                maximumTrackTintColor: APP_COLORS.grey,
                bubbleBackgroundColor: APP_COLORS.offwhite,
              }}
              progress={progressValue}
              minimumValue={min}
              maximumValue={max}
            />
          </View>
        </View>
      </View>

      {/* Video Screen */}
      <View className="flex-1 items-center justify-center">
        {/* Overlay To Pause */}
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={handlePause}
          disabled={!isPlaying}
        >
          {/* Animation Itself */}
          <VideoPlayer
            ref={playerRef}
            // @ts-ignore
            svgContent={svgContent}
            onAnimationComplete={handleAnimationComplete}
          />
        </Pressable>

        {/* Overlay When Paused */}
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
                  onPress={handlePlay}
                  className="flex items-center justify-center"
                >
                  <PlayButton width={80} height={80} {...buttonColorProps} />
                </Pressable>
              </View>
            </BlurView>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default InteractiveVideoPlayer;

const styles = StyleSheet.create({
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
