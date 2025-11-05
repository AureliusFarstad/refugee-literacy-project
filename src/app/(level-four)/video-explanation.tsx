import you from "assets/videos/you";
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
  const youAnimationCollection: AnimationCollection =
    useMemo<AnimationCollection>(
      () => ({
        svgatorDict: you,
        segments: [
          {
            audio: requireVideoAudio("you", "partA"),
            svgatorDictKey: "you_screen_1",
            animationDuration: 7000,
          },
          {
            audio: requireVideoAudio("you", "partB"),
            svgatorDictKey: "you_screen_2",
            animationDuration: 10000,
          },
          {
            audio: requireVideoAudio("you", "partC"),
            svgatorDictKey: "you_screen_3",
            animationDuration: 3500,
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
        animationCollection={youAnimationCollection}
        buttonColorProps={sectionButtonColorProps}
      />
    </SafeAreaView>
  );
};

export default VideoTab;
