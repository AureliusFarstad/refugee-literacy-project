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
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/good_complete.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/snail_good_complete.mp3"),
    },
    tired: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/tired_complete.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/snail_tired_complete.mp3"),
    },
    sad: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/sad_complete.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/snail_sad_complete.mp3"),
    },
    hungry: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/hungry_complete.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/snail_hungry_complete.mp3"),
    },
    angry: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/angry_complete.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/snail_angry_complete.mp3"),
    },
    sick: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/sick_complete.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/snail_sick_complete.mp3"),
    },
    hot: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/hot_complete.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/snail_hot_complete.mp3"),
    },
    cold: {
      normal_speed: require("assets/multilingual-audio/english/vocabulary/emotions/cold_complete.mp3"),
      snail_speed: require("assets/multilingual-audio/english/vocabulary/emotions/snail_cold_complete.mp3"),
    },
  };

export const NATIVE_VOCABULARY_AUDIO_SOURCES: INative_Vocabulary_Audio_Source =
  {
    good: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/good_complete.mp3"),
    },
    tired: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/tired_complete.mp3"),
    },
    sad: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/sad_complete.mp3"),
    },
    hungry: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/hungry_complete.mp3"),
    },
    angry: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/angry_complete.mp3"),
    },
    sick: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/sick_complete.mp3"),
    },
    hot: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/hot_complete.mp3"),
    },
    cold: {
      file: require("assets/multilingual-audio/farsi/vocabulary/emotions/cold_complete.mp3"),
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
