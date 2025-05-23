import * as React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

type AnimatedBreathingViewProps = {
  isPlaying: boolean;
  size?: number;
  borderColor?: string;
  borderWidth?: number;
  breatheDuration?: number;
  children?: React.ReactNode;
};

export const AnimatedBreathingView = ({
  isPlaying,
  size = 24,
  borderColor = "#4CAF50",
  borderWidth = 4,
  breatheDuration = 2000,
  children,
}: AnimatedBreathingViewProps) => {
  const borderOpacity = useSharedValue(0);

  React.useEffect(() => {
    if (isPlaying) {
      startBreathingAnimation();
    } else {
      stopAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying]);

  const stopAnimation = () => {
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

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: borderOpacity.value,
  }));

  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[
          styles.border,
          {
            borderColor,
            borderWidth,
            width: size + borderWidth * 2,
            height: size + borderWidth * 2,
            borderRadius: (size + borderWidth * 2) / 2,
          },
          animatedStyle,
        ]}
      />
      <View style={[styles.content, { width: size, height: size }]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  border: {
    position: "absolute",
    borderStyle: "solid",
  },
  content: {
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
  },
});
