import little_and_often from "assets/videos/little-and-often";
import { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { requireVideoAudio } from "@/assets/video-audio/audio-sources";
import { APP_COLORS } from "@/constants/routes";
import { useUser } from "@/core/store/user";
import type { AnimationCollection } from "@/ui/components/interactive-video-player";
import InteractiveVideoPlayer from "@/ui/components/interactive-video-player";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { globalStyles } from "@/ui/styles";

export const screenOptions = {
  headerShown: false,
};

// Example usage in your VideoTab component
const LittleAndOftenVideo = () => {
  const sectionButtonColorProps: ButtonColorProps = {
    primaryColor: APP_COLORS.green,
    secondaryColor: APP_COLORS.lightgreen,
    offwhiteColor: APP_COLORS.offwhite,
    offblackColor: APP_COLORS.offblack,
    backgroundColor: APP_COLORS.backgroundgrey,
  };

  const { language } = useUser();

  const littleAndOftenAnimationCollection = useMemo<AnimationCollection>(
    () => ({
      svgatorDict: little_and_often,
      segments: [
        {
          audio: requireVideoAudio("little_and_often", "partA"),
          svgatorDictKey: "little_and_often_screen_1",
          animationDuration: 3000,
        },
        {
          audio: requireVideoAudio("little_and_often", "partB"),
          svgatorDictKey: "little_and_often_screen_2",
          animationDuration: 7000,
        },
        {
          audio: requireVideoAudio("little_and_often", "partC"),
          svgatorDictKey: "little_and_often_screen_3",
          animationDuration: 6000,
        },
        {
          audio: requireVideoAudio("little_and_often", "partD"),
          svgatorDictKey: "little_and_often_screen_4",
          animationDuration: 3000,
        },
        {
          audio: requireVideoAudio("little_and_often", "partE"),
          svgatorDictKey: "little_and_often_screen_5",
          animationDuration: 3200,
        },
        {
          audio: requireVideoAudio("little_and_often", "partF"),
          svgatorDictKey: "little_and_often_screen_6",
          animationDuration: 3000,
        },
        {
          audio: null,
          svgatorDictKey: "little_and_often_screen_7",
          animationDuration: 3200,
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
      edges={["top", "right", "bottom", "left"]}
    >
      <InteractiveVideoPlayer
        animationCollection={littleAndOftenAnimationCollection}
        buttonColorProps={sectionButtonColorProps}
      />
    </SafeAreaView>
  );
};

export default LittleAndOftenVideo;
