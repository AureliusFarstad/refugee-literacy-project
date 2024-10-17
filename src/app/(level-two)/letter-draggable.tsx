import React, { useState } from "react";

import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { SafeAreaView, TouchableOpacity, View } from "@/ui";
import LetterCaseSwitch from "@/ui/components/letter-casing-switch";
import DragDrop from "@/ui/components/level-two/dragdrop";
import Header from "@/ui/core/headers";
import { EarIcon } from "@/ui/icons";

const activeActivity = {
  options: [
    { id: "item0", content: "P" },
    { id: "item1", content: "A" },
    { id: "item2", content: "N" },
    { id: "item3", content: "I" },
    { id: "item4", content: "T" },
  ],
  correctAnswer: {
    word: "PAN",
    alphabets: [
      {
        id: "item0",
        content: "P",
        audio: require("assets/alphabet/audio/name/p.mp3"),
      },
      {
        id: "item1",
        content: "A",
        audio: require("assets/alphabet/audio/name/a.mp3"),
      },
      {
        id: "item2",
        content: "N",
        audio: require("assets/alphabet/audio/name/n.mp3"),
      },
    ],
  },
};

const LetterDragDrop = () => {
  const [isLowercase, setIsLowercase] = useState(false);

  const { playGuideAudio } = useGuideAudio({
    screenName: "blending-introduction",
    module: "blending-module",
  });

  return (
    <SafeAreaView>
      <Header title="Letter Draggable" onPressGuide={playGuideAudio} />

      <View className="flex h-full items-center ">
        <View className="flex w-full flex-1 flex-col   ">
          <View className="px-5">
            <LetterCaseSwitch
              backgroundColor="#F36889"
              isLowercase={isLowercase}
              letter="A"
              setIsLowercase={setIsLowercase}
            />
            <TouchableOpacity
              onPress={() => {}}
              className="mx-auto flex size-[110] items-center justify-center rounded-full bg-colors-red-500"
            >
              <EarIcon primaryColor="#F36889" />
            </TouchableOpacity>
          </View>
          <DragDrop activeActivity={activeActivity} isLowercase={isLowercase} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LetterDragDrop;
