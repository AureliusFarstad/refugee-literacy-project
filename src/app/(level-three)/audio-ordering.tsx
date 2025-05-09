import React from "react";

import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { SafeAreaView, View } from "@/ui";
import DragDrop from "@/ui/components/conversation/dragdrop";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";

const activeActivity = {
  options: [
    { id: "item0", content: "P", description: "Hello" },
    { id: "item1", content: "A", description: "Hi" },
    { id: "item2", content: "N", description: "How are you?" },
  ],
  correctAnswer: {
    word: "PAN",
    alphabets: [
      {
        id: "item0",
        content: "P",
        audio: require("assets/alphabet/audio/name/p.mp3"),
        description: "Hello",
      },
      {
        id: "item1",
        content: "A",
        audio: require("assets/alphabet/audio/name/a.mp3"),
        description: "Hi",
      },
      {
        id: "item2",
        content: "N",
        audio: require("assets/alphabet/audio/name/n.mp3"),
        description: "How are you?",
      },
    ],
  },
};

const AudioOrdering = () => {
  const { playGuideAudio, isPlaying: isPlayingGuidanceAudio } = useGuideAudio({
    screenName: "letter-formation",
  });

  return (
    <SafeAreaView>
      <GuidanceAudioHeader
        title="Sound"
        isPlaying={isPlayingGuidanceAudio}
        onPressGuide={playGuideAudio}
        colorType="NATIVE_BUTTON_COLOR"
      />
      <View className="flex h-full items-center ">
        <View className="flex w-full flex-1 flex-col   ">
          <DragDrop activeActivity={activeActivity} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AudioOrdering;
