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

type IVocabulary_Audio_Source = {
  [key: string]: {
    file: string;
  };
};

export const VOCABULARY_WORD_LIST_BY_LEVEL: IVocabulary_Word_List = {
  LEVEL_1: ["good", "sad", "tired", "hungry", "angry", "sick", "hot", "cold"],
};

// TODO: Update the audio files
export const VOCABULARY_AUDIO_SOURCES: IVocabulary_Audio_Source = {
  good: {
    file: require("assets/alphabet/audio/name/b.mp3"),
  },
  tired: {
    file: require("assets/alphabet/audio/name/c.mp3"),
  },
  sad: {
    file: require("assets/alphabet/audio/name/d.mp3"),
  },
  hungry: {
    file: require("assets/alphabet/audio/name/e.mp3"),
  },
  angry: {
    file: require("assets/alphabet/audio/name/f.mp3"),
  },
  sick: {
    file: require("assets/alphabet/audio/name/g.mp3"),
  },
  hot: {
    file: require("assets/alphabet/audio/name/h.mp3"),
  },
  cold: {
    file: require("assets/alphabet/audio/name/i.mp3"),
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
