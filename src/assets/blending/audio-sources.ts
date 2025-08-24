import type { IBlending_Audio_Source } from "./index";

export const ENGLISH_BLENDING_AUDIO: IBlending_Audio_Source = {
  tin: {
    file: require("assets/multilingual-audio/english/vocabulary/blending/blending1_tin.mp3"),
  },
  pin: {
    file: require("assets/multilingual-audio/english/vocabulary/blending/blending1_pin.mp3"),
  },
  pan: {
    file: require("assets/multilingual-audio/english/vocabulary/blending/blending1_pan.mp3"),
  },
  ant: {
    file: require("assets/multilingual-audio/english/vocabulary/blending/blending1_ant.mp3"),
  },
  in: {
    file: require("assets/multilingual-audio/english/vocabulary/blending/blending1_in.mp3"),
  },
  tap: {
    file: require("assets/multilingual-audio/english/vocabulary/blending/blending1_tap.mp3"),
  },
};

const FARSI_BLENDING_AUDIO: IBlending_Audio_Source = {
  tin: {
    file: require("assets/multilingual-audio/farsi/vocabulary/blending/blending1_tin.mp3"),
  },
  pin: {
    file: require("assets/multilingual-audio/farsi/vocabulary/blending/blending1_pin.mp3"),
  },
  pan: {
    file: require("assets/multilingual-audio/farsi/vocabulary/blending/blending1_pan.mp3"),
  },
  ant: {
    file: require("assets/multilingual-audio/farsi/vocabulary/blending/blending1_ant.mp3"),
  },
  in: {
    file: require("assets/multilingual-audio/farsi/vocabulary/blending/blending1_in.mp3"),
  },
  tap: {
    file: require("assets/multilingual-audio/farsi/vocabulary/blending/blending1_tap.mp3"),
  },
};

const DARI_BLENDING_AUDIO: IBlending_Audio_Source = {
  tin: {
    file: require("assets/multilingual-audio/dari/vocabulary/blending/blending1_tin.mp3"),
  },
  pin: {
    file: require("assets/multilingual-audio/dari/vocabulary/blending/blending1_pin.mp3"),
  },
  pan: {
    file: require("assets/multilingual-audio/dari/vocabulary/blending/blending1_pan.mp3"),
  },
  ant: {
    file: require("assets/multilingual-audio/dari/vocabulary/blending/blending1_ant.mp3"),
  },
  in: {
    file: require("assets/multilingual-audio/dari/vocabulary/blending/blending1_in.mp3"),
  },
  tap: {
    file: require("assets/multilingual-audio/dari/vocabulary/blending/blending1_tap.mp3"),
  },
};

const KURMANJI_BLENDING_AUDIO: IBlending_Audio_Source = {
  tin: {
    file: require("assets/multilingual-audio/kurmanji/vocabulary/blending/blending1_tin.mp3"),
  },
  pin: {
    file: require("assets/multilingual-audio/kurmanji/vocabulary/blending/blending1_pin.mp3"),
  },
  pan: {
    file: require("assets/multilingual-audio/kurmanji/vocabulary/blending/blending1_pan.mp3"),
  },
  // AUDIO TODO:
  // ant: {
  //   file: require("assets/multilingual-audio/kurmanji/vocabulary/blending/blending1_ant.mp3"),
  // },
  // in: {
  //   file: require("assets/multilingual-audio/kurmanji/vocabulary/blending/blending1_in.mp3"),
  // },
  tap: {
    file: require("assets/multilingual-audio/kurmanji/vocabulary/blending/blending1_tap.mp3"),
  },
};

const SYRIAN_ARABIC_BLENDING_AUDIO: IBlending_Audio_Source = {
  tin: {
    file: require("assets/multilingual-audio/syrian_arabic/vocabulary/blending/blending1_tin.mp3"),
  },
  pin: {
    file: require("assets/multilingual-audio/syrian_arabic/vocabulary/blending/blending1_pin.mp3"),
  },
  pan: {
    file: require("assets/multilingual-audio/syrian_arabic/vocabulary/blending/blending1_pan.mp3"),
  },
  // AUDIO TODO:
  // ant: {
  //   file: require("assets/multilingual-audio/syrian_arabic/vocabulary/blending/blending1_ant.mp3"),
  // },
  // in: {
  //   file: require("assets/multilingual-audio/syrian_arabic/vocabulary/blending/blending1_in.mp3"),
  // },
  tap: {
    file: require("assets/multilingual-audio/syrian_arabic/vocabulary/blending/blending1_tap.mp3"),
  },
};

const AUDIO_SOURCES_BY_LANGUAGE = {
  en: ENGLISH_BLENDING_AUDIO,
  fa: FARSI_BLENDING_AUDIO,
  fa_AF: DARI_BLENDING_AUDIO,
  ku: KURMANJI_BLENDING_AUDIO,
  ar_SY: SYRIAN_ARABIC_BLENDING_AUDIO,
} as const;

export { AUDIO_SOURCES_BY_LANGUAGE };
