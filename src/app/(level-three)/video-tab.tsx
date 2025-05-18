import welcome from "assets/videos/welcome-dict";

import { APP_COLORS } from "@/constants/routes";
import type { AnimationCollection } from "@/ui/components/interactive-video-player";
import InteractiveVideoPlayer from "@/ui/components/interactive-video-player";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";

import { sectionColor } from "./_layout";

// Example usage in your VideoTab component
const VideoTab = () => {
  const sectionButtonColorProps: ButtonColorProps = {
    primaryColor: sectionColor.primary,
    secondaryColor: sectionColor.light,
    offwhiteColor: APP_COLORS.offwhite,
    offblackColor: APP_COLORS.offblack,
    backgroundColor: APP_COLORS.backgroundgrey,
  };

  // REPLACE with correct SVG animation
  const imAnimationCollection: AnimationCollection = {
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
    <InteractiveVideoPlayer
      animationCollection={imAnimationCollection}
      buttonColorProps={sectionButtonColorProps}
    />
  );
};

export default VideoTab;
