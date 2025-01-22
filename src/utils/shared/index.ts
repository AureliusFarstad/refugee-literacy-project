import type { AVPlaybackSource } from "expo-av";

import type { CombinedRoutes } from "@/types/navigation-types";

type AudioFile = AVPlaybackSource;

const guidance: GuidanceType = {
  "alphabet-module": {
    "letter-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partD.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partE.mp3"),
      ],
    },
    "letter-formation": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-formation/phonics1_practice1_info.mp3"),
      ],
    },
    "letter-sound": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-sound/phonics1_game1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-sound/phonics1_game1_info_partB.mp3"),
      ],
    },
    "letter-name": {
      "audio-files": require("assets/multilingual-audio/english/guidance/alphabet-module/letter-name/phonics1_game2_info.mp3"),
    },
    "letter-matching": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-matching/phonics1_game3_info.mp3"),
      ],
    },
  },
  "blending-module": {
    "blending-game": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partD.mp3"),
      ],
    },
    "blending-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-introduction/blending1_lesson1_info.mp3"),
      ],
    },
    "word-matching": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/word-matching/blending1_game1_info.mp3"),
      ],
    },
  },
};

export const getGuides = async (
  screenName: CombinedRoutes,
  module: keyof GuidanceType = "alphabet-module",
): Promise<AudioFile[]> => {
  try {
    if (guidance[module] && screenName in guidance[module]) {
      const audioFiles =
        guidance[module][screenName as keyof GuidanceMOdule]["audio-files"];
      return Array.isArray(audioFiles) ? audioFiles : [audioFiles];
    }
    throw new Error(`Screen name ${screenName} not found in guidance`);
  } catch (error) {
    console.log("error in getGuides", error);
    throw error;
  }
};
