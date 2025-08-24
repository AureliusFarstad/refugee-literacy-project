// AUDIO TODO: replace all require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),

import { useUser } from "@/core/store/user";

const ENGLISH_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "blending-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "conversation-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "teacher-tip": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "alphabet-module": {
    "letter-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partD.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partE.mp3"),
      ],
    },
    "letter-formation": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-formation/phonics1_practice1_info.mp3"),
      ],
    },
    "letter-sound": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-sound/phonics1_game1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-sound/phonics1_game1_info_partB.mp3"),
      ],
    },
    "letter-name": {
      "audio-files": require("assets/multilingual-audio/english/guidance/alphabet-module/letter-name/phonics1_game2_info.mp3"),
    },
    "letter-matching": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-matching/phonics1_game3_info.mp3"),
      ],
    },
  },
  "blending-module": {
    "spelling-drag-and-drop": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partD.mp3"),
      ],
    },
    "blending-flashcard": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-introduction/blending1_lesson1_info.mp3"),
      ],
    },
    "multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/word-matching/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "conversation-module": {
    "audio-ordering": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    listening: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    flashcard: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "picture-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
};

const FARSI_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/section_letters_explanation.mp3")
      ],
    },
    "blending-module": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/blending-module/section_blending_explanation.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/vocabulary-module/section_vocabulary_explanation1.mp3"),
      ],
    },
    "conversation-module": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/conversation-module/section_conversation_explanation.mp3"),
      ],
    },
    "teacher-tip": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/teacher-tip-module/section_teacher_tip_explanation.mp3"),
      ],
    },
  },
  "alphabet-module": {
    "letter-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partD.mp3"),
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partE.mp3"),
      ],
    },
    "letter-formation": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-formation/phonics1_practice1_info.mp3"),
      ],
    },
    "letter-sound": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-sound/phonics1_game1_info_partA.mp3"),
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-sound/phonics1_game1_info_partB.mp3"),
      ],
    },
    "letter-name": {
      "audio-files": require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-name/phonics1_game2_info.mp3"),
    },
    "letter-matching": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/letter-matching/phonics1_game3_info.mp3"),
      ],
    },
  },
  "blending-module": {
    "spelling-drag-and-drop": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/blending-module/blending-game/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partB.mp3"), // TODO AUDIO: Missing part?
        require("assets/multilingual-audio/farsi/guidance/blending-module/blending-game/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/farsi/guidance/blending-module/blending-game/blending1_practice1_info_partD.mp3"),
      ],
    },
    "blending-flashcard": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/blending-module/blending-introduction/blending1_lesson1_info.mp3"),
      ],
    },
    "multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/blending-module/word-matching/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "conversation-module": {
    "audio-ordering": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    listening: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    flashcard: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "picture-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
};

const DARI_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "blending-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "conversation-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "teacher-tip": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "alphabet-module": {
    "letter-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partD.mp3"),
        require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partE.mp3"),
      ],
    },
    "letter-formation": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-formation/phonics1_practice1_info.mp3"),
      ],
    },
    "letter-sound": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-sound/phonics1_game1_info_partA.mp3"),
        require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-sound/phonics1_game1_info_partB.mp3"),
      ],
    },
    "letter-name": {
      "audio-files": require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-name/phonics1_game2_info.mp3"),
    },
    "letter-matching": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/alphabet-module/letter-matching/phonics1_game3_info.mp3"),
      ],
    },
  },
  "blending-module": {
    "spelling-drag-and-drop": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partD.mp3"),
      ],
    },
    "blending-flashcard": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-introduction/blending1_lesson1_info.mp3"),
      ],
    },
    "multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/word-matching/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "conversation-module": {
    "audio-ordering": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    listening: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    flashcard: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "picture-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
};

const KURMANJI_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "blending-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "conversation-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "teacher-tip": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "alphabet-module": {
    "letter-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partD.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partE.mp3"),
      ],
    },
    "letter-formation": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-formation/phonics1_practice1_info.mp3"),
      ],
    },
    "letter-sound": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-sound/phonics1_game1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-sound/phonics1_game1_info_partB.mp3"),
      ],
    },
    "letter-name": {
      "audio-files": require("assets/multilingual-audio/english/guidance/alphabet-module/letter-name/phonics1_game2_info.mp3"),
    },
    "letter-matching": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/letter-matching/phonics1_game3_info.mp3"),
      ],
    },
  },
  "blending-module": {
    "spelling-drag-and-drop": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partD.mp3"),
      ],
    },
    "blending-flashcard": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-introduction/blending1_lesson1_info.mp3"),
      ],
    },
    "multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/word-matching/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "conversation-module": {
    "audio-ordering": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    listening: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    flashcard: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "picture-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
};

const SYRIAN_ARABIC_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "blending-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "conversation-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "teacher-tip": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "alphabet-module": {
    "letter-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partD.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partE.mp3"),
      ],
    },
    "letter-formation": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-formation/phonics1_practice1_info.mp3"),
      ],
    },
    "letter-sound": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-sound/phonics1_game1_info_partA.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-sound/phonics1_game1_info_partB.mp3"),
      ],
    },
    "letter-name": {
      "audio-files": require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-name/phonics1_game2_info.mp3"),
    },
    "letter-matching": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/letter-matching/phonics1_game3_info.mp3"),
      ],
    },
  },
  "blending-module": {
    "spelling-drag-and-drop": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-game/blending1_practice1_info_partD.mp3"),
      ],
    },
    "blending-flashcard": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-introduction/blending1_lesson1_info.mp3"),
      ],
    },
    "multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/word-matching/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "conversation-module": {
    "audio-ordering": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    listening: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "audio-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    flashcard: {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
    "picture-multiple-choice": {
      "audio-files": [
        require("assets/multilingual-audio/english/conversations/how_are_you/conversation1_how_are_you_partA_male.mp3"),
      ],
    },
  },
};

const GUIDANCE_AUDIO_SOURCES_BY_LANGUAGE = {
  en: ENGLISH_GUIDANCE_AUDIO,
  fa: FARSI_GUIDANCE_AUDIO,
  fa_AF: DARI_GUIDANCE_AUDIO,
  ku: KURMANJI_GUIDANCE_AUDIO,
  ar_SY: SYRIAN_ARABIC_GUIDANCE_AUDIO,
} as const;

export { GUIDANCE_AUDIO_SOURCES_BY_LANGUAGE };

export const requireHomeScreenAudioByScreenName = (module: string): string => {
  const { language } = useUser.getState();

  const audioSource =
    GUIDANCE_AUDIO_SOURCES_BY_LANGUAGE[
      language as keyof typeof GUIDANCE_AUDIO_SOURCES_BY_LANGUAGE
    ];

  const audio = (audioSource as any)["home-screen"]?.[module]?.[
    "audio-files"
  ][0];

  return audio;
};
