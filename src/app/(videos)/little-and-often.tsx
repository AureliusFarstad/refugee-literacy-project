import welcome from "assets/videos/welcome-dict";
import { SafeAreaView } from "react-native-safe-area-context";

import { APP_COLORS } from "@/constants/routes";
import type { AnimationCollection } from "@/ui/components/interactive-video-player";
import InteractiveVideoPlayer from "@/ui/components/interactive-video-player";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { globalStyles } from "@/ui/styles";

export const screenOptions = {
  headerShown: false,
};

// Example usage in your VideoTab component
const WelcomeVideo = () => {
  const sectionButtonColorProps: ButtonColorProps = {
    primaryColor: APP_COLORS.green,
    secondaryColor: APP_COLORS.lightgreen,
    offwhiteColor: APP_COLORS.offwhite,
    offblackColor: APP_COLORS.offblack,
    backgroundColor: APP_COLORS.backgroundgrey,
  };

  // REPLACE with correct SVG animation
  const littleAndOftenAnimationCollection: AnimationCollection = {
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

  return (
    <SafeAreaView
      style={globalStyles.safeAreaView}
      edges={["right", "bottom", "left"]} // Exclude 'top' edge
    >
      <InteractiveVideoPlayer
        animationCollection={littleAndOftenAnimationCollection}
        buttonColorProps={sectionButtonColorProps}
      />
    </SafeAreaView>
  );
};

export default WelcomeVideo;
