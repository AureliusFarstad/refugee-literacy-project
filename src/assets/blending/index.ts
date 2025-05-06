import ant_svg from "./images/ant.svg";
import in_svg from "./images/in.svg";
import pan_svg from "./images/pan.svg";
import pin_svg from "./images/pin.svg";
import tap_svg from "./images/tap.svg";
import tin_svg from "./images/tin.svg";

type IBlending_Word_List = {
  [key: string]: string[];
};

type IBlending_Audio_Source = {
  [key: string]: {
    file: string;
  };
};

export const BLENDING_WORD_LIST_BY_LEVEL: IBlending_Word_List = {
  LEVEL_1: ["tin", "pin", "pan", "ant", "in", "tap"],
};

// TODO: Update these
export const BLENDING_AUDIO_SOURCES: IBlending_Audio_Source = {
  tin: {
    file: require("assets/alphabet/audio/name/b.mp3"),
  },
  pin: {
    file: require("assets/alphabet/audio/name/c.mp3"),
  },
  pan: {
    file: require("assets/alphabet/audio/name/d.mp3"),
  },
  ant: {
    file: require("assets/alphabet/audio/name/e.mp3"),
  },
  in: {
    file: require("assets/alphabet/audio/name/f.mp3"),
  },
  tap: {
    file: require("assets/alphabet/audio/name/g.mp3"),
  },
};

export const BLENDING_IMAGE_SOURCES = {
  tin: {
    file: tin_svg,
  },
  pin: {
    file: pin_svg,
  },
  pan: {
    file: pan_svg,
  },
  ant: {
    file: ant_svg,
  },
  in: {
    file: in_svg,
  },
  tap: {
    file: tap_svg,
  },
};
