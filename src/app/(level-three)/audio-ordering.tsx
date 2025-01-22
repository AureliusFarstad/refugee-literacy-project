import React from "react";

import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { SafeAreaView, View } from "@/ui";
import DragDrop from "@/ui/components/conversation/dragdrop";
import Header from "@/ui/core/headers";

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
  const { playGuideAudio } = useGuideAudio({
    screenName: "audio-ordering",
    module: "blending-module",
  });

  return (
    <SafeAreaView>
      <Header title="AudioOrdering" onPressGuide={playGuideAudio} />
      <View className="flex h-full items-center ">
        <View className="flex w-full flex-1 flex-col   ">
          <DragDrop activeActivity={activeActivity} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AudioOrdering;
