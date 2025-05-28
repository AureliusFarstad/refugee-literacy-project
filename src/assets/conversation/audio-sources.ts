import type { IConversation_Audio_Source } from "./index";

export const ENGLISH_CONVERSATION_AUDIO: IConversation_Audio_Source = {
  part1: {
    female: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_female.mp3"),
    male: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
  },
  part2: {
    female: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partB_female.mp3"),
    male: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partB_male.mp3"),
  },
  part3: {
    female: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partC_female.mp3"),
    male: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partC_male.mp3"),
  },
  part4: {
    female: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partD_female.mp3"),
    male: require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partD_male.mp3"),
  },
};

const FARSI_CONVERSATION_AUDIO: IConversation_Audio_Source = {
  part1: {
    female: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partA_female.mp3"),
    male: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
  },
  part2: {
    female: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partB_female.mp3"),
    male: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partB_male.mp3"),
  },
  part3: {
    female: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partC_female.mp3"),
    male: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partC_male.mp3"),
  },
  part4: {
    female: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partD_female.mp3"),
    male: require("assets/multilingual-audio/farsi/conversations/how_are_you/conversation1_how_are_you_partD_male.mp3"),
  },
};

const DARI_CONVERSATION_AUDIO: IConversation_Audio_Source = {
  part1: {
    female: require("assets/multilingual-audio/dari/conversations/how_are_you/conversation1_how_are_you_partA_female.mp3"),
    male: require("assets/multilingual-audio/dari/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
  },
  part2: {
    female: require("assets/multilingual-audio/dari/conversations/how_are_you/conversation1_how_are_you_partB_female.mp3"),
    male: require("assets/multilingual-audio/dari/conversations/how_are_you/conversation1_how_are_you_partB_male.mp3"),
  },
  part3: {
    female: require("assets/multilingual-audio/dari/conversations/how_are_you/conversation1_how_are_you_partC_female.mp3"),
    male: require("assets/multilingual-audio/dari/conversations/how_are_you/conversation1_how_are_you_partC_male.mp3"),
  },
  part4: {
    female: require("assets/multilingual-audio/dari/conversations/how_are_you/conversation1_how_are_you_partD_female.mp3"),
    male: require("assets/multilingual-audio/dari/conversations/how_are_you/conversation1_how_are_you_partD_male.mp3"),
  },
};

const KURMANJI_CONVERSATION_AUDIO: IConversation_Audio_Source = {
  // AUDIO TODO: ADD female (currently hardcoded to male)
  part1: {
    female: require("assets/multilingual-audio/kurmanji/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
    male: require("assets/multilingual-audio/kurmanji/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
  },
  part2: {
    female: require("assets/multilingual-audio/kurmanji/conversations/how_are_you/conversation1_how_are_you_partB_male.mp3"),
    male: require("assets/multilingual-audio/kurmanji/conversations/how_are_you/conversation1_how_are_you_partB_male.mp3"),
  },
  part3: {
    female: require("assets/multilingual-audio/kurmanji/conversations/how_are_you/conversation1_how_are_you_partC_male.mp3"),
    male: require("assets/multilingual-audio/kurmanji/conversations/how_are_you/conversation1_how_are_you_partC_male.mp3"),
  },
  part4: {
    female: require("assets/multilingual-audio/kurmanji/conversations/how_are_you/conversation1_how_are_you_partD_male.mp3"),
    male: require("assets/multilingual-audio/kurmanji/conversations/how_are_you/conversation1_how_are_you_partD_male.mp3"),
  },
};

const SYRIAN_ARABIC_CONVERSATION_AUDIO: IConversation_Audio_Source = {
  part1: {
    female: require("assets/multilingual-audio/syrian_arabic/conversations/how_are_you/conversation1_how_are_you_partA_female.mp3"),
    male: require("assets/multilingual-audio/syrian_arabic/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
  },
  part2: {
    female: require("assets/multilingual-audio/syrian_arabic/conversations/how_are_you/conversation1_how_are_you_partB_female.mp3"),
    male: require("assets/multilingual-audio/syrian_arabic/conversations/how_are_you/conversation1_how_are_you_partB_male.mp3"),
  },
  part3: {
    female: require("assets/multilingual-audio/syrian_arabic/conversations/how_are_you/conversation1_how_are_you_partC_female.mp3"),
    male: require("assets/multilingual-audio/syrian_arabic/conversations/how_are_you/conversation1_how_are_you_partC_male.mp3"),
  },
  part4: {
    female: require("assets/multilingual-audio/syrian_arabic/conversations/how_are_you/conversation1_how_are_you_partD_female.mp3"),
    male: require("assets/multilingual-audio/syrian_arabic/conversations/how_are_you/conversation1_how_are_you_partD_male.mp3"),
  },
};

const AUDIO_SOURCES_BY_LANGUAGE = {
  en: ENGLISH_CONVERSATION_AUDIO,
  fa: FARSI_CONVERSATION_AUDIO,
  fa_AF: DARI_CONVERSATION_AUDIO,
  ku: KURMANJI_CONVERSATION_AUDIO,
  ar_SY: SYRIAN_ARABIC_CONVERSATION_AUDIO,
} as const;

export { AUDIO_SOURCES_BY_LANGUAGE };