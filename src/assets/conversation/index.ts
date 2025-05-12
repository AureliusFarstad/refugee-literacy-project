type IConversation_Audio_Source = {
  [key: string]: {
    female: string;
    male: string;
  };
};

export const CONVERSATION_AUDIO_SOURCES_ENGLISH: IConversation_Audio_Source = {
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

export const CONVERSATION_AUDIO_SOURCES_FARSI: IConversation_Audio_Source = {
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
