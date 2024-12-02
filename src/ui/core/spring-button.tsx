import type { ReactNode } from "react";
import React, { useEffect } from "react";
import type { GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

// Define the props interface for our SpringButton
interface SpringButtonProps {
  className?: string;
  children?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

// Create the animated component
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const SpringButton = ({
  className = "",
  children,
  onPress,
}: SpringButtonProps): JSX.Element => {
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(1, {
      damping: 15,
      stiffness: 150,
    });
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <AnimatedTouchableOpacity
      className={`items-center justify-center rounded-lg bg-[#b58df1] p-4 ${className}`}
      style={animatedStyle}
      onPress={onPress}
    >
      {children}
    </AnimatedTouchableOpacity>
  );
};

export default SpringButton;
