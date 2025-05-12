import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

type AnimatedAudioButtonProps = {
  width?: number;
  height?: number;
  audioSource: AVPlaybackSource | string;
  children: React.ReactNode;
  borderColor?: string;
  borderWidth?: number;
  breatheDuration?: number;
};

export const AnimatedAudioButton = ({
  width = 40,
  height = 40,
  audioSource,
  children,
  borderColor = "#4CAF50",
  borderWidth = 4,
  breatheDuration = 2000,
}: AnimatedAudioButtonProps) => {
  const [sound, setSound] = React.useState<Sound>();
  const [isPlaying, setIsPlaying] = React.useState(false);

  const borderOpacity = useSharedValue(0);

  // Cleanup sound on unmount
  React.useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  const stopAnimation = () => {
    setIsPlaying(false);
    cancelAnimation(borderOpacity);
    borderOpacity.value = withTiming(0, { duration: 500 });
  };

  const startBreathingAnimation = () => {
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
  };

  const playSound = async () => {
    try {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync();
      }

      setIsPlaying(true);
      startBreathingAnimation();

      const source =
        typeof audioSource === "string" && audioSource.includes("mp3")
          ? { uri: audioSource }
          : audioSource;

      const { sound: newSound } = await Audio.Sound.createAsync(
        source as AVPlaybackSource,
        { shouldPlay: true },
      );
      setSound(newSound);

      newSound.setOnPlaybackStatusUpdate((status) => {
        if (!status.isLoaded || status.didJustFinish) {
          stopAnimation();
          return;
        }

        if (!status.isPlaying && !status.didJustFinish && isPlaying) {
          stopAnimation();
        }
      });
    } catch (error) {
      console.error("Error playing sound:", error);
      stopAnimation();
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: borderOpacity.value,
  }));

  return (
    <TouchableOpacity onPress={playSound}>
      <View style={[styles.container]}>
        <Animated.View
          style={[
            styles.border,
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
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderColor: "red", // Border for debugging
    // borderWidth: 2,
    // borderStyle: "solid",
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    position: "absolute",
    borderStyle: "solid",
    // borderColor: "purple", // Border for debugging
    // borderWidth: 2,
  },
  button: {
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white", // Ensures visibility
    borderRadius: 999,
  },
});
