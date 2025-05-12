import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { SafeAreaView, Text, View } from "@/ui";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { HEIGHT, IS_IOS } from "@/utils/layout";

const VideoExplanation = () => {
  const insets = useSafeAreaInsets();
  const { playGuideAudio, isPlaying } = useGuideAudio({
    screenName: "letter-formation",
  });

  return (
    <SafeAreaView>
      <GuidanceAudioHeader
        title="Sound"
        isPlaying={isPlaying}
        onPressGuide={playGuideAudio}
        colorType="NATIVE_BUTTON_COLOR"
      />
      <View
        style={{
          height:
            HEIGHT - (insets.bottom + insets.top + 90 + (IS_IOS ? 96 : 112)),
        }}
      >
        <View className="flex items-center justify-between" />

        <View className="mt-auto ">
          <View />
          <View className=" flex flex-row justify-between ">
            <Text>VideoExplanation</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VideoExplanation;
