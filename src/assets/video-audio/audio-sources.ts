import { useUser } from "@/core/store/user";

const ENGLISH_WELCOME_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/english/videos/welcome/welcome_partA.mp3"),
  partB: require("assets/multilingual-audio/english/videos/welcome/welcome_partB.mp3"),
  partC: require("assets/multilingual-audio/english/videos/welcome/welcome_partC.mp3"),
  partD: require("assets/multilingual-audio/english/videos/welcome/welcome_partD.mp3"),
  partE: require("assets/multilingual-audio/english/videos/welcome/welcome_partE.mp3"),
  partF: require("assets/multilingual-audio/english/videos/welcome/welcome_partF.mp3"),
  partG: require("assets/multilingual-audio/english/videos/welcome/welcome_partG.mp3"),
  partH: require("assets/multilingual-audio/english/videos/welcome/welcome_partH.mp3"),
  partI: require("assets/multilingual-audio/english/videos/welcome/welcome_partI.mp3"),
};

const FARSI_WELCOME_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partA.mp3"),
  partB: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partB.mp3"),
  partC: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partC.mp3"),
  partD: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partD.mp3"),
  partE: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partE.mp3"),
  partF: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partF.mp3"),
  partG: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partG.mp3"),
  partH: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partH.mp3"),
  partI: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partI.mp3"),
};

const DARI_WELCOME_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/dari/videos/welcome/welcome_partA.mp3"),
  partB: require("assets/multilingual-audio/dari/videos/welcome/welcome_partB.mp3"),
  partC: require("assets/multilingual-audio/dari/videos/welcome/welcome_partC.mp3"),
  partD: require("assets/multilingual-audio/dari/videos/welcome/welcome_partD.mp3"),
  partE: require("assets/multilingual-audio/dari/videos/welcome/welcome_partE.mp3"),
  partF: require("assets/multilingual-audio/dari/videos/welcome/welcome_partF.mp3"),
  partG: require("assets/multilingual-audio/dari/videos/welcome/welcome_partG.mp3"),
  partH: require("assets/multilingual-audio/dari/videos/welcome/welcome_partH.mp3"),
  partI: require("assets/multilingual-audio/dari/videos/welcome/welcome_partI.mp3"),
};

const KURMANJI_WELCOME_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partA.mp3"),
  partB: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partB.mp3"),
  partC: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partC.mp3"),
  partD: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partD.mp3"),
  partE: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partE.mp3"),
  partF: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partF.mp3"),
  partG: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partG.mp3"),
  partH: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partH.mp3"),
  partI: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partI.mp3"),
};

const SYRIAN_ARABIC_WELCOME_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partA.mp3"),
  partB: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partB.mp3"),
  partC: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partC.mp3"),
  partD: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partD.mp3"),
  partE: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partE.mp3"),
  partF: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partF.mp3"),
  partG: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partG.mp3"),
  partH: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partH.mp3"),
  partI: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partI.mp3"),
};

const VIDEO_AUDIO_SOURCES_BY_LANGUAGE_VIDEONAME_PART = {
  en: {
    welcome: ENGLISH_WELCOME_VIDEO_AUDIO,
  },
  fa: {
    welcome: FARSI_WELCOME_VIDEO_AUDIO,
  },
  fa_af: {
    welcome: DARI_WELCOME_VIDEO_AUDIO,
  },
  ku: {
    welcome: KURMANJI_WELCOME_VIDEO_AUDIO,
  },
  ar_sy: {
    welcome: SYRIAN_ARABIC_WELCOME_VIDEO_AUDIO,
  },
};

export const requireVideoAudio = (videoName: string, part: string): any => {
  const { language } = useUser.getState();

  // TODO: not ideal as any type...
  const audioSource = (VIDEO_AUDIO_SOURCES_BY_LANGUAGE_VIDEONAME_PART as any)[
    language
  ];
  const audio = audioSource?.[videoName]?.[part];

  if (!audio) {
    // Fallback to English
    return (VIDEO_AUDIO_SOURCES_BY_LANGUAGE_VIDEONAME_PART as any).en[
      videoName
    ]?.[part];
  }
  return audio;
};
