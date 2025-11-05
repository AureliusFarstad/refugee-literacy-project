import { useUser } from "@/core/store/user";

// Welcome
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
  partJ: require("assets/multilingual-audio/dari/videos/welcome/welcome_partI.mp3"),
};

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
  partJ: require("assets/multilingual-audio/english/videos/welcome/welcome_partJ.mp3"),
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
  partJ: require("assets/multilingual-audio/farsi/videos/welcome/welcome_partJ.mp3"),
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
  partJ: require("assets/multilingual-audio/kurmanji/videos/welcome/welcome_partJ.mp3"),
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
  partJ: require("assets/multilingual-audio/syrian_arabic/videos/welcome/welcome_partJ.mp3"),
};

// Grammar You
const DARI_YOU_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/dari/videos/grammar-you/grammar_you_partA.mp3"),
  partB: require("assets/multilingual-audio/dari/videos/grammar-you/grammar_you_partB.mp3"),
  partC: require("assets/multilingual-audio/dari/videos/grammar-you/grammar_you_partC.mp3"),
};

const ENGLISH_YOU_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/english/videos/grammar-you/grammar_you_partA.mp3"),
  partB: require("assets/multilingual-audio/english/videos/grammar-you/grammar_you_partB.mp3"),
  partC: require("assets/multilingual-audio/english/videos/grammar-you/grammar_you_partC.mp3"),
};

const FARSI_YOU_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/farsi/videos/grammar-you/grammar_you_partA.mp3"),
  partB: require("assets/multilingual-audio/farsi/videos/grammar-you/grammar_you_partB.mp3"),
  partC: require("assets/multilingual-audio/farsi/videos/grammar-you/grammar_you_partC.mp3"),
};

const KURMANJI_YOU_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/kurmanji/videos/grammar-you/grammar_you_partA.mp3"),
  partB: require("assets/multilingual-audio/kurmanji/videos/grammar-you/grammar_you_partB.mp3"),
  partC: require("assets/multilingual-audio/kurmanji/videos/grammar-you/grammar_you_partC.mp3"),
};

const SYRIAN_ARABIC_YOU_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/syrian_arabic/videos/grammar-you/grammar_you_partA.mp3"),
  partB: require("assets/multilingual-audio/syrian_arabic/videos/grammar-you/grammar_you_partB.mp3"),
  partC: require("assets/multilingual-audio/syrian_arabic/videos/grammar-you/grammar_you_partC.mp3"),
};

// Grammar I Am
const DARI_I_AM_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/dari/videos/grammar-i-am/grammar_i_am_partA.mp3"),
  partB: require("assets/multilingual-audio/dari/videos/grammar-i-am/grammar_i_am_partB.mp3"),
};

const ENGLISH_I_AM_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/english/videos/grammar-i-am/grammar_i_am_partA.mp3"),
  partB: require("assets/multilingual-audio/english/videos/grammar-i-am/grammar_i_am_partB.mp3"),
};

const FARSI_I_AM_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/farsi/videos/grammar-i-am/grammar_i_am_partA.mp3"),
  partB: require("assets/multilingual-audio/farsi/videos/grammar-i-am/grammar_i_am_partB.mp3"),
};

const KURMANJI_I_AM_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/kurmanji/videos/grammar-i-am/grammar_i_am_partA.mp3"),
  partB: require("assets/multilingual-audio/kurmanji/videos/grammar-i-am/grammar_i_am_partB.mp3"),
};

const SYRIAN_ARABIC_I_AM_VIDEO_AUDIO = {
  partA: require("assets/multilingual-audio/syrian_arabic/videos/grammar-i-am/grammar_i_am_partA.mp3"),
  partB: require("assets/multilingual-audio/syrian_arabic/videos/grammar-i-am/grammar_i_am_partB.mp3"),
};

// Teacher Tip Out and About
const DARI_OUT_AND_ABOUT = {
  partA: require("assets/multilingual-audio/dari/videos/teacher-tip-out-and-about/tip2_out_and_about_partA.mp3"),
  partB: require("assets/multilingual-audio/dari/videos/teacher-tip-out-and-about/tip2_out_and_about_partB.mp3"),
  partC: require("assets/multilingual-audio/dari/videos/teacher-tip-out-and-about/tip2_out_and_about_partC.mp3"),
};

const ENGLISH_OUT_AND_ABOUT = {
  partA: require("assets/multilingual-audio/english/videos/teacher-tip-out-and-about/tip2_out_and_about_partA.mp3"),
  partB: require("assets/multilingual-audio/english/videos/teacher-tip-out-and-about/tip2_out_and_about_partB.mp3"),
  partC: require("assets/multilingual-audio/english/videos/teacher-tip-out-and-about/tip2_out_and_about_partC.mp3"),
};

const FARSI_OUT_AND_ABOUT = {
  partA: require("assets/multilingual-audio/farsi/videos/teacher-tip-out-and-about/tip2_out_and_about_partA.mp3"),
  partB: require("assets/multilingual-audio/farsi/videos/teacher-tip-out-and-about/tip2_out_and_about_partB.mp3"),
  partC: require("assets/multilingual-audio/farsi/videos/teacher-tip-out-and-about/tip2_out_and_about_partC.mp3"),
};

// AUDIO TODO: Record Kurmanji Out and About
// const KURMANJI_OUT_AND_ABOUT = {
//   partA: require("assets/multilingual-audio/kurmanji/videos/teacher-tip-out-and-about/tip2_out_and_about_partA.mp3"),
//   partB: require("assets/multilingual-audio/kurmanji/videos/teacher-tip-out-and-about/tip2_out_and_about_partB.mp3"),
//   partC: require("assets/multilingual-audio/kurmanji/videos/teacher-tip-out-and-about/tip2_out_and_about_partC.mp3"),
// };

const SYRIAN_ARABIC_OUT_AND_ABOUT = {
  partA: require("assets/multilingual-audio/syrian_arabic/videos/teacher-tip-out-and-about/tip2_out_and_about_partA.mp3"),
  partB: require("assets/multilingual-audio/syrian_arabic/videos/teacher-tip-out-and-about/tip2_out_and_about_partB.mp3"),
  partC: require("assets/multilingual-audio/syrian_arabic/videos/teacher-tip-out-and-about/tip2_out_and_about_partC.mp3"),
};

// Teacher Tip Little and Often
const DARI_LITTLE_AND_OFTEN = {
  partA: require("assets/multilingual-audio/dari/videos/teacher-tip-little-and-often/tip1_little_often_partA.mp3"),
  partB: require("assets/multilingual-audio/dari/videos/teacher-tip-little-and-often/tip1_little_often_partB.mp3"),
  partC: require("assets/multilingual-audio/dari/videos/teacher-tip-little-and-often/tip1_little_often_partC.mp3"),
  partD: require("assets/multilingual-audio/dari/videos/teacher-tip-little-and-often/tip1_little_often_partD.mp3"),
  partE: require("assets/multilingual-audio/dari/videos/teacher-tip-little-and-often/tip1_little_often_partE.mp3"),
  partF: require("assets/multilingual-audio/dari/videos/teacher-tip-little-and-often/tip1_little_often_partF.mp3"),
};

const ENGLISH_LITTLE_AND_OFTEN = {
  partA: require("assets/multilingual-audio/english/videos/teacher-tip-little-and-often/tip1_little_often_partA.mp3"),
  partB: require("assets/multilingual-audio/english/videos/teacher-tip-little-and-often/tip1_little_often_partB.mp3"),
  partC: require("assets/multilingual-audio/english/videos/teacher-tip-little-and-often/tip1_little_often_partC.mp3"),
  partD: require("assets/multilingual-audio/english/videos/teacher-tip-little-and-often/tip1_little_often_partD.mp3"),
  partE: require("assets/multilingual-audio/english/videos/teacher-tip-little-and-often/tip1_little_often_partE.mp3"),
  partF: require("assets/multilingual-audio/english/videos/teacher-tip-little-and-often/tip1_little_often_partF.mp3"),
};

const FARSI_LITTLE_AND_OFTEN = {
  partA: require("assets/multilingual-audio/farsi/videos/teacher-tip-little-and-often/tip1_little_often_partA.mp3"),
  partB: require("assets/multilingual-audio/farsi/videos/teacher-tip-little-and-often/tip1_little_often_partB.mp3"),
  partC: require("assets/multilingual-audio/farsi/videos/teacher-tip-little-and-often/tip1_little_often_partC.mp3"),
  partD: require("assets/multilingual-audio/farsi/videos/teacher-tip-little-and-often/tip1_little_often_partD.mp3"),
  partE: require("assets/multilingual-audio/farsi/videos/teacher-tip-little-and-often/tip1_little_often_partE.mp3"),
  partF: require("assets/multilingual-audio/farsi/videos/teacher-tip-little-and-often/tip1_little_often_partF.mp3"),
};

const KURMANJI_LITTLE_AND_OFTEN = {
  partA: require("assets/multilingual-audio/kurmanji/videos/teacher-tip-little-and-often/tip1_little_often_partA.mp3"),
  partB: require("assets/multilingual-audio/kurmanji/videos/teacher-tip-little-and-often/tip1_little_often_partB.mp3"),
  partC: require("assets/multilingual-audio/kurmanji/videos/teacher-tip-little-and-often/tip1_little_often_partC.mp3"),
  partD: require("assets/multilingual-audio/kurmanji/videos/teacher-tip-little-and-often/tip1_little_often_partD.mp3"),
  partE: require("assets/multilingual-audio/kurmanji/videos/teacher-tip-little-and-often/tip1_little_often_partE.mp3"),
  partF: require("assets/multilingual-audio/kurmanji/videos/teacher-tip-little-and-often/tip1_little_often_partF.mp3"),
};

const SYRIAN_ARABIC_LITTLE_AND_OFTEN = {
  partA: require("assets/multilingual-audio/syrian_arabic/videos/teacher-tip-little-and-often/tip1_little_often_partA.mp3"),
  partB: require("assets/multilingual-audio/syrian_arabic/videos/teacher-tip-little-and-often/tip1_little_often_partB.mp3"),
  partC: require("assets/multilingual-audio/syrian_arabic/videos/teacher-tip-little-and-often/tip1_little_often_partC.mp3"),
  partD: require("assets/multilingual-audio/syrian_arabic/videos/teacher-tip-little-and-often/tip1_little_often_partD.mp3"),
  partE: require("assets/multilingual-audio/syrian_arabic/videos/teacher-tip-little-and-often/tip1_little_often_partE.mp3"),
  partF: require("assets/multilingual-audio/syrian_arabic/videos/teacher-tip-little-and-often/tip1_little_often_partF.mp3"),
};

const VIDEO_AUDIO_SOURCES_BY_LANGUAGE_VIDEONAME_PART = {
  en: {
    welcome: ENGLISH_WELCOME_VIDEO_AUDIO,
    you: ENGLISH_YOU_VIDEO_AUDIO,
    i_am: ENGLISH_I_AM_VIDEO_AUDIO,
    out_and_about: ENGLISH_OUT_AND_ABOUT,
    little_and_often: ENGLISH_LITTLE_AND_OFTEN,
  },
  fa: {
    welcome: FARSI_WELCOME_VIDEO_AUDIO,
    you: FARSI_YOU_VIDEO_AUDIO,
    i_am: FARSI_I_AM_VIDEO_AUDIO,
    out_and_about: FARSI_OUT_AND_ABOUT,
    little_and_often: FARSI_LITTLE_AND_OFTEN,
  },
  fa_af: {
    welcome: DARI_WELCOME_VIDEO_AUDIO,
    you: DARI_YOU_VIDEO_AUDIO,
    i_am: DARI_I_AM_VIDEO_AUDIO,
    out_and_about: DARI_OUT_AND_ABOUT,
    little_and_often: DARI_LITTLE_AND_OFTEN,
  },
  ku: {
    welcome: KURMANJI_WELCOME_VIDEO_AUDIO,
    you: KURMANJI_YOU_VIDEO_AUDIO,
    i_am: KURMANJI_I_AM_VIDEO_AUDIO,
    // out_and_about: KURMANJI_OUT_AND_ABOUT,
    little_and_often: KURMANJI_LITTLE_AND_OFTEN,
  },
  ar_sy: {
    welcome: SYRIAN_ARABIC_WELCOME_VIDEO_AUDIO,
    you: SYRIAN_ARABIC_YOU_VIDEO_AUDIO,
    i_am: SYRIAN_ARABIC_I_AM_VIDEO_AUDIO,
    out_and_about: SYRIAN_ARABIC_OUT_AND_ABOUT,
    little_and_often: SYRIAN_ARABIC_LITTLE_AND_OFTEN,
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
