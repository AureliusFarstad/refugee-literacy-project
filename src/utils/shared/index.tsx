import type { AVPlaybackSource } from "expo-av";

import type { CombinedRoutes } from "@/types/navigation-types";

type AudioFile = AVPlaybackSource;

interface AudioSection {
  "audio-files": AudioFile | AudioFile[];
}

interface AlphabetModule {
  "letter-introduction": AudioSection;
  "letter-formation": AudioSection;
  "letter-sound": AudioSection;
  "letter-name": AudioSection;
  "letter-matching": AudioSection;
}

interface GuidanceType {
  "alphabet-module": AlphabetModule;
}

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
};

export const getGuides = async (
  screenName: CombinedRoutes,
): Promise<AudioFile[]> => {
  try {
    const module = "alphabet-module" as const;
    if (guidance[module] && screenName in guidance[module]) {
      const audioFiles =
        guidance[module][screenName as keyof AlphabetModule]["audio-files"];
      return Array.isArray(audioFiles) ? audioFiles : [audioFiles];
    }
    throw new Error(`Screen name ${screenName} not found in guidance`);
  } catch (error) {
    console.log("error in getGuides", error);
    throw error;
  }
};
