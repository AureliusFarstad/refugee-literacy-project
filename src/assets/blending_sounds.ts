type IBlending_Audio_Source = {
  [key: string]: {
    file: string;
  };
};

export const BLENDING_AUDIO_SOURCES: IBlending_Audio_Source = {
  sit: {
    file: require("assets/alphabet/audio/name/a.mp3"),
  },
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
