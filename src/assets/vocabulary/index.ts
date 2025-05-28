import type { AVPlaybackSource } from "expo-av";

import angry_svg from "./images/angry.svg";
import cold_svg from "./images/cold.svg";
import good_svg from "./images/good.svg";
import hot_svg from "./images/hot.svg";
import hungry_svg from "./images/hungry.svg";
import sad_svg from "./images/sad.svg";
import sick_svg from "./images/sick.svg";
import tired_svg from "./images/tired.svg";

type IVocabulary_Word_List = {
  [key: string]: string[];
};

type IEnglish_Vocabulary_Audio_Source = {
  [key: string]: {
    normal_speed: AVPlaybackSource;
    snail_speed: AVPlaybackSource;
  };
};

type INative_Vocabulary_Audio_Source = {
  [key: string]: {
    file: AVPlaybackSource;
  };
};

export const VOCABULARY_WORD_LIST_BY_LEVEL: IVocabulary_Word_List = {
  LEVEL_1: ["good", "sad", "tired", "hungry", "angry", "sick", "hot", "cold"],
};

export const ENGLISH_VOCABULARY_AUDIO_SOURCES: IEnglish_Vocabulary_Audio_Source =
  {
    good: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_good_complete_female.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_good_complete_snail_female.mp3"),
    },
    tired: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_tired_complete_female.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_tired_complete_snail_female.mp3"),
    },
    sad: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_sad_complete_female.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_sad_complete_snail_female.mp3"),
    },
    hungry: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_hungry_complete_female.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_hungry_complete_snail_female.mp3"),
    },
    angry: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_angry_complete_female.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_angry_complete_snail_female.mp3"),
    },
    sick: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_sick_complete_female.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_sick_complete_snail_female.mp3"),
    },
    hot: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_hot_complete_female.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_hot_complete_snail_female.mp3"),
    },
    cold: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_cold_complete_female.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/vocabulary1_cold_complete_snail_female.mp3"),
    },
  };

export const NATIVE_VOCABULARY_AUDIO_SOURCES: INative_Vocabulary_Audio_Source =
  {
    good: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/vocabulary1_good_complete_female.mp3"),
    },
    tired: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/vocabulary1_tired_complete_female.mp3"),
    },
    sad: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/vocabulary1_sad_complete_female.mp3"),
    },
    hungry: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/vocabulary1_hungry_complete_female.mp3"),
    },
    angry: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/vocabulary1_angry_complete_female.mp3"),
    },
    sick: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/vocabulary1_sick_complete_female.mp3"),
    },
    hot: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/vocabulary1_hot_complete_female.mp3"),
    },
    cold: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/vocabulary1_cold_complete_female.mp3"),
    },
  };

export const VOCABULARY_IMAGE_SOURCES = {
  good: {
    file: good_svg,
  },
  tired: {
    file: tired_svg,
  },
  sad: {
    file: sad_svg,
  },
  hungry: {
    file: hungry_svg,
  },
  angry: {
    file: angry_svg,
  },
  sick: {
    file: sick_svg,
  },
  hot: {
    file: hot_svg,
  },
  cold: {
    file: cold_svg,
  },
};
