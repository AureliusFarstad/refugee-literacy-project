import { router } from "expo-router";
import type { ReactNode } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { APP_COLORS } from "@/constants/routes";
import LetterCaseSwitch from "@/ui/components/global-letter-casing-switch";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EmptyHeadButton } from "@/ui/icons/circular/empty-head-button";
import { HomeButton } from "@/ui/icons/circular/home-button";
import { NativeButton } from "@/ui/icons/circular/native-button";

const NATIVE_BUTTON_COLOR: ButtonColorProps = {
  primaryColor: "blue",
  secondaryColor: APP_COLORS.lightgreen,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const buttonColorProps: ButtonColorProps = {
  primaryColor: APP_COLORS.green,
  secondaryColor: APP_COLORS.lightgreen,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const SIZE = 40;

type AnimatedAudioButtonProps = {
  onPress: () => void;
  icon: ReactNode;
  isPlaying?: boolean;
  width?: number;
  height?: number;
  borderColor?: string;
  borderWidth?: number;
  breatheDuration?: number;
  className?: string;
};

function AnimatedAudioButton({
  onPress,
  icon,
  isPlaying = false,
  width = 40,
  height = 40,
  borderColor = "#F69F4E",
  borderWidth = 3, // Increased from 2 to 3
  breatheDuration = 1500, // Reduced from 2000 to 1500 for faster animation
  className,
}: AnimatedAudioButtonProps) {
  const borderOpacity = useSharedValue(0);
  const borderScale = useSharedValue(1);

  useEffect(() => {
    if (isPlaying) {
      startBreathingAnimation();
    } else {
      stopAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      cancelAnimation(borderOpacity);
      cancelAnimation(borderScale);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopAnimation = () => {
    cancelAnimation(borderOpacity);
    cancelAnimation(borderScale);
    borderOpacity.value = withTiming(0, { duration: 300 });
    borderScale.value = withTiming(1, { duration: 300 });
  };

  const startBreathingAnimation = () => {
    // Enhanced opacity animation
    borderOpacity.value = withSequence(
      withTiming(0.8, { duration: breatheDuration / 2, easing: Easing.ease }),
      withRepeat(
        withSequence(
          withTiming(1, { duration: breatheDuration / 2, easing: Easing.ease }),
          withTiming(0.8, {
            duration: breatheDuration / 2,
            easing: Easing.ease,
          }),
        ),
        -1,
      ),
    );

    // Add scale animation for more intensity
    borderScale.value = withSequence(
      withTiming(1.1, { duration: breatheDuration / 2, easing: Easing.ease }),
      withRepeat(
        withSequence(
          withTiming(1.15, {
            duration: breatheDuration / 2,
            easing: Easing.ease,
          }),
          withTiming(1.1, {
            duration: breatheDuration / 2,
            easing: Easing.ease,
          }),
        ),
        -1,
      ),
    );
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: borderOpacity.value,
    transform: [{ scale: borderScale.value }],
  }));

  return (
    <TouchableOpacity
      style={[styles.animatedButtonContainer]}
      onPress={onPress}
      className={className}
    >
      <Animated.View
        style={[
          styles.animatedBorder,
          {
            borderColor,
            borderWidth,
            width: width + borderWidth * 2,
            height: height + borderWidth * 2,
            borderRadius: (width + borderWidth * 2) / 2,
          },
          animatedStyle,
        ]}
      />
      <View
        style={[
          styles.animatedButton,
          { width, height, borderRadius: width / 2 },
        ]}
      >
        {icon}
      </View>
    </TouchableOpacity>
  );
}

type HeaderProps = {
  title: string;
  onPressGuide?: () => void;
  isPlaying: boolean;
  colorType?: "NATIVE_BUTTON_COLOR" | "DEFAULT";
};

const GuidanceAudioHeader = ({
  title,
  onPressGuide,
  isPlaying,
  colorType,
}: HeaderProps) => {
  const navigateToHome = useCallback(() => {
    router.navigate("/");
  }, []);
  console.log(title);

  return (
    <View className="flex-row items-center justify-between p-4">
      <View className="flex-row items-center space-x-4">
        <Pressable onPress={navigateToHome} className="p-2">
          <View style={[{ width: SIZE, height: SIZE }]}>
            <HomeButton {...buttonColorProps} />
          </View>
        </Pressable>
      </View>
      <View className="flex-row items-center space-x-4">
        <LetterCaseSwitch />
      </View>
      <View className="flex-row items-center space-x-4">
        <AnimatedAudioButton
          onPress={onPressGuide || (() => {})}
          isPlaying={isPlaying}
          width={SIZE}
          height={SIZE}
          borderColor={APP_COLORS.green}
          icon={
            <View style={{ width: SIZE, height: SIZE }}>
              {colorType === "NATIVE_BUTTON_COLOR" ? (
                <EmptyHeadButton {...buttonColorProps} />
              ) : (
                <NativeButton {...NATIVE_BUTTON_COLOR} />
              )}
            </View>
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animatedButtonContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedBorder: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  animatedButton: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default GuidanceAudioHeader;
