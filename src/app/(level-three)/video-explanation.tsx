import welcome from "assets/videos/welcome-dict";
import { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { requireVideoAudio } from "@/assets/video-audio/audio-sources";
import { APP_COLORS } from "@/constants/routes";
import { useUser } from "@/core/store/user";
import type { AnimationCollection } from "@/ui/components/interactive-video-player";
import InteractiveVideoPlayer from "@/ui/components/interactive-video-player";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { globalStyles } from "@/ui/styles";

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

  const { language } = useUser();

  // TODO: REPLACE with correct SVG animation
  const imAnimationCollection: AnimationCollection =
    useMemo<AnimationCollection>(
      () => ({
        svgatorDict: welcome,
        segments: [
          {
            audio: requireVideoAudio("welcome", "partA"),
            svgatorDictKey: "welcome_screen_1",
            animationDuration: 0,
          },
          {
            audio: requireVideoAudio("welcome", "partB"),
            svgatorDictKey: "welcome_screen_2",
            animationDuration: 0,
          },
          {
            audio: requireVideoAudio("welcome", "partC"),
            svgatorDictKey: "welcome_screen_3",
            animationDuration: 6000,
          },
          {
            audio: requireVideoAudio("welcome", "partD"),
            svgatorDictKey: "welcome_screen_4",
            animationDuration: 0,
          },
          {
            audio: requireVideoAudio("welcome", "partE"),
            svgatorDictKey: "welcome_screen_5",
            animationDuration: 0,
          },
        ],
      }),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [language],
      // requireVideoAudio depends on language but linter does not recognize
    );

  return (
    <SafeAreaView
      style={globalStyles.safeAreaView}
      edges={["top", "right", "left"]}
    >
      <InteractiveVideoPlayer
        animationCollection={imAnimationCollection}
        buttonColorProps={sectionButtonColorProps}
      />
    </SafeAreaView>
  );
};

export default VideoTab;
