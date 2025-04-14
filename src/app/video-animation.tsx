import WelcomeVideoAnimation from "assets/videos/welcome";
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

import { APP_COLORS } from "@/constants/routes";
import useSound from "@/core/hooks/useSound";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EmptyHeadButton } from "@/ui/icons/circular/empty-head-button";
import { HomeButton } from "@/ui/icons/circular/home-button";
import { PlayButton } from "@/ui/icons/circular/play-button";

interface WelcomeScreenVideoRef {
  play?: () => void;
}

// Animated audio button wrapper

const buttonColorProps: ButtonColorProps = {
  primaryColor: APP_COLORS.green,
  secondaryColor: APP_COLORS.lightgreen,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const SIZE = 40;

const SLIDES = [
  "welcome_screen_1",
  "welcome_screen_2",
  "welcome_screen_3",
  "welcome_screen_4",
  "welcome_screen_5",
  "welcome_screen_6",
  "welcome_screen_7",
] as const;

const _WELCOME_AUDIOS = [
  {
    id: SLIDES[0],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partA.mp3"),
  },
  {
    id: SLIDES[1],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partB.mp3"),
  },
  {
    id: SLIDES[2],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partC.mp3"),
  },
  {
    id: SLIDES[3],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partD.mp3"),
  },
  {
    id: SLIDES[4],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partE.mp3"),
  },
  {
    id: SLIDES[5],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partF.mp3"),
  },
  {
    id: SLIDES[6],
    source: require("assets/multilingual-audio/english/videos/welcome/welcome_partG.mp3"),
  },
];

const VideoAnimation = forwardRef<WelcomeScreenVideoRef>((props, ref) => {
  const welcomeVideoRef = useRef<WelcomeScreenVideoRef>(null);
  const [slideName, setSlideName] =
    useState<(typeof SLIDES)[number]>("welcome_screen_1");
  const [showOverlay, setShowOverlay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayOpacity = useRef(new Animated.Value(1)).current;
  const lastSlideTimer = useRef<NodeJS.Timeout | null>(null);

  // Slider state using useSharedValue for better performance
  const progressValue = useSharedValue(0);
  const min = useSharedValue(0);
  const max = useSharedValue(SLIDES.length - 1);

  // Animation timers
  const animationTimers = useRef<NodeJS.Timeout[]>([]);

  const [lowerCaseLetterSvgProp, setLowerCaseLetterSvgProp] = useState({
    onAnimationComplete: () => handleAnimationComplete(),
    letter: slideName,
  });

  const { playSound } = useSound();

  // Update progress when slide changes
  useEffect(() => {
    const currentIndex = SLIDES.indexOf(slideName);
    if (currentIndex >= 0) {
      progressValue.value = currentIndex;
    }
  }, [slideName, progressValue]);

  // Expose the play method to parent component
  useImperativeHandle(ref, () => ({
    play: () => {
      if (welcomeVideoRef.current && welcomeVideoRef.current.play) {
        welcomeVideoRef.current.play();
      }
    },
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

  const handleAnimationComplete = () => {
    console.log("Animation completed for slide:", slideName);
    // This function now only logs the completion of individual slides
    // The final animation completion is handled by the timer in initAnimation
  };

  const resetToInitialState = useCallback(() => {
    // Show overlay and fade it in
    setShowOverlay(true);
    setIsAnimating(false);

    Animated.timing(overlayOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [overlayOpacity]);

  const animateScreen = useCallback((slide: string) => {
    setTimeout(() => {
      if (welcomeVideoRef.current && welcomeVideoRef.current.play) {
        welcomeVideoRef.current?.play();
        const audio = _WELCOME_AUDIOS.find((_audio) => _audio.id === slide);
        if (audio) {
          playSound(audio.source);
        }
      }
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initAnimation = useCallback(async () => {
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
      setSlideName(SLIDES[0]);
      progressValue.value = 0;

      // Set up animation sequence
      SLIDES.forEach((slide, index) => {
        const timer = setTimeout(() => {
          setSlideName(slide);
          setLowerCaseLetterSvgProp({
            letter: slide,
            onAnimationComplete: handleAnimationComplete,
          });
          animateScreen(slide);
          if (welcomeVideoRef?.current?.play) {
            welcomeVideoRef?.current?.play();
          }
        }, index * 10000);

        animationTimers.current.push(timer);
      });

      // Set a timer for when all animations should be completed
      // This is slightly longer than the last slide's timer to ensure it completes
      const totalDuration = SLIDES.length * 10000;
      lastSlideTimer.current = setTimeout(() => {
        resetToInitialState();
      }, totalDuration);
    } catch (error) {
      console.log("error in initAnimation", error);
      throw error;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    animateScreen,
    overlayOpacity,
    clearAllTimers,
    progressValue,
    resetToInitialState,
  ]);

  // Handle slider value change
  const handleSliderChange = useCallback(
    (value: number) => {
      // Clear existing timers
      clearAllTimers();

      // Move to the selected slide
      const slideIndex = Math.floor(value);
      if (slideIndex >= 0 && slideIndex < SLIDES.length) {
        const selectedSlide = SLIDES[slideIndex];
        setSlideName(selectedSlide);
        setLowerCaseLetterSvgProp({
          letter: selectedSlide,
          onAnimationComplete: handleAnimationComplete,
        });

        // Play this slide
        if (welcomeVideoRef?.current?.play) {
          welcomeVideoRef?.current?.play();
          const audio = _WELCOME_AUDIOS.find(
            (_audio) => _audio.id === selectedSlide,
          );
          if (audio) {
            playSound(audio.source);
          }
        }

        // Setup remaining slides
        for (let i = slideIndex + 1; i < SLIDES.length; i++) {
          const timer = setTimeout(
            () => {
              const nextSlide = SLIDES[i];
              setSlideName(nextSlide);
              setLowerCaseLetterSvgProp({
                letter: nextSlide,
                onAnimationComplete: handleAnimationComplete,
              });
              animateScreen(nextSlide);
              if (welcomeVideoRef?.current?.play) {
                welcomeVideoRef?.current?.play();
              }
            },
            (i - slideIndex) * 10000,
          );

          animationTimers.current.push(timer);
        }

        // Set a timer for when all animations should be completed after slider change
        const remainingDuration = (SLIDES.length - slideIndex) * 10000;
        lastSlideTimer.current = setTimeout(() => {
          resetToInitialState();
        }, remainingDuration);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [animateScreen, clearAllTimers, playSound, resetToInitialState],
  );

  // Handle tap on the animation area to pause and show overlay
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
    router.back();
  }, []);

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
        <View className="flex-1 flex-row items-center  ">
          <View style={styles.sliderContainer}>
            <Slider
              style={styles.slider}
              sliderHeight={8}
              theme={{
                bubbleTextColor: "#63CB81",
                minimumTrackTintColor: "#63CB81",
                maximumTrackTintColor: "#D4D4D8",

                bubbleBackgroundColor: "#ffffff",
              }}
              progress={progressValue}
              minimumValue={min}
              maximumValue={max}
              onSlidingComplete={(value) => {
                handleSliderChange(value);
              }}
              disable={showOverlay || !isAnimating}
            />
          </View>
        </View>
        <View className="flex-row items-center space-x-4">
          <Pressable onPress={() => {}} className="p-2">
            <View style={[{ width: SIZE, height: SIZE }]}>
              <EmptyHeadButton {...buttonColorProps} />
              {/* NativeWind does not work: <View className="w-40 h-40 p-0"> */}
            </View>
          </Pressable>
          {/* <View className="p-2">
          <ShareIcon color={"#8AC65B"} size={SIZE} />
        </View> */}
        </View>
      </View>

      <View className="flex-1 items-center justify-center">
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={handlePause}
          disabled={!isAnimating}
        >
          <WelcomeVideoAnimation
            ref={welcomeVideoRef}
            {...lowerCaseLetterSvgProp}
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
              className="absolute flex size-full justify-center"
            >
              <View className="flex flex-row  items-center justify-center">
                <Pressable className="mr-10 size-[80]" onPress={navigateToHome}>
                  <HomeButton {...buttonColorProps} />
                </Pressable>
                <Pressable onPress={initAnimation}>
                  <PlayButton
                    backgroundColor="#FBD65B"
                    offblackColor="black"
                    offwhiteColor="white"
                    primaryColor="#FBD65B"
                    secondaryColor="white"
                    height={80}
                    width={80}
                  />
                </Pressable>
              </View>
            </BlurView>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
});

export default VideoAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -40,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#F2EFF0",
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 0,
    backgroundColor: "#F2EFF0",
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
