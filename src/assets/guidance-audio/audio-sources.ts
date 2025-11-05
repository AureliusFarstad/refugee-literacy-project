import { useUser } from "@/core/store/user";

const ENGLISH_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/alphabet-module/section_letters_explanation.mp3"),
      ],
    },
    "blending-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/section_blending_explanation.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/vocabulary-module/section_vocabulary_explanation.mp3"),
      ],
    },
    "conversation-module": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/conversation-module/section_conversation_explanation.mp3"),
      ],
    },
    "teacher-tip": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/teacher-tip-module/section_teacher_tip_explanation.mp3"),
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
    "blending-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/blending-introduction/blending1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-introduction/blending1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-introduction/blending1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/blending-introduction/blending1_lesson1_info_partD.mp3"),
      ],
    },
    "multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/multiple-choice-tab/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/audio-multiple-choice-tab/blending1_game2.mp3"),
      ],
    },
    "spelling-tab": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/blending-module/spelling-tab/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/spelling-tab/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/spelling-tab/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/blending-module/spelling-tab/blending1_practice1_info_partD.mp3"),
      ],
    },
  },
  "conversation-module": {
    "listening-tab": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/conversation-module/listening-tab/conversation1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/conversation-module/listening-tab/conversation1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/conversation-module/listening-tab/conversation1_lesson1_partC.mp3"),
        require("assets/multilingual-audio/english/guidance/conversation-module/listening-tab/conversation1_lesson1_partD.mp3"),
      ],
    },
    "audio-ordering-tab": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/conversation-module/audio-ordering-tab/conversation1_game1.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "flashcards-tab": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/english/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/english/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partC.mp3"),
      ],
    },
    "picture-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/vocabulary-module/picture-multiple-choice-tab/vocabulary1_game1.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/english/guidance/vocabulary-module/audio-multiple-choice-tab/vocabulary1_game2.mp3"),
      ],
    },
  },
};

const FARSI_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/alphabet-module/section_letters_explanation.mp3"),
      ],
    },
    "blending-module": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/blending-module/section_blending_explanation.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/vocabulary-module/section_vocabulary_explanation.mp3"),
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
    "blending-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/blending-module/blending-introduction/blending1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/farsi/guidance/blending-module/blending-introduction/blending1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/farsi/guidance/blending-module/blending-introduction/blending1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/farsi/guidance/blending-module/blending-introduction/blending1_lesson1_info_partD.mp3"),
      ],
    },
    "multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/blending-module/multiple-choice-tab/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/blending-module/audio-multiple-choice-tab/blending1_game2.mp3"),
      ],
    },
    "spelling-tab": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/blending-module/spelling-tab/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/farsi/guidance/blending-module/spelling-tab/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/farsi/guidance/blending-module/spelling-tab/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/farsi/guidance/blending-module/spelling-tab/blending1_practice1_info_partD.mp3"),
      ],
    },
  },
  "conversation-module": {
    "listening-tab": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/conversation-module/listening-tab/conversation1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/farsi/guidance/conversation-module/listening-tab/conversation1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/farsi/guidance/conversation-module/listening-tab/conversation1_lesson1_partC.mp3"),
        require("assets/multilingual-audio/farsi/guidance/conversation-module/listening-tab/conversation1_lesson1_partD.mp3"),
      ],
    },
    "audio-ordering-tab": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/conversation-module/audio-ordering-tab/conversation1_game1.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "flashcards-tab": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/farsi/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/farsi/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partC.mp3"),
      ],
    },
    "picture-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/vocabulary-module/picture-multiple-choice-tab/vocabulary1_game1.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/farsi/guidance/vocabulary-module/audio-multiple-choice-tab/vocabulary1_game2.mp3"),
      ],
    },
  },
};

const DARI_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/alphabet-module/section_letters_explanation.mp3"),
      ],
    },
    "blending-module": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/blending-module/section_blending_explanation.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/vocabulary-module/section_vocabulary_explanation.mp3"),
      ],
    },
    "conversation-module": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/conversation-module/section_conversation_explanation.mp3"),
      ],
    },
    "teacher-tip": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/teacher-tip-module/section_teacher_tip_explanation.mp3"),
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
    "blending-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/blending-module/blending-introduction/blending1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/dari/guidance/blending-module/blending-introduction/blending1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/dari/guidance/blending-module/blending-introduction/blending1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/dari/guidance/blending-module/blending-introduction/blending1_lesson1_info_partD.mp3"),
      ],
    },
    "multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/blending-module/multiple-choice-tab/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/blending-module/audio-multiple-choice-tab/blending1_game2.mp3"),
      ],
    },
    "spelling-tab": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/blending-module/spelling-tab/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/dari/guidance/blending-module/spelling-tab/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/dari/guidance/blending-module/spelling-tab/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/dari/guidance/blending-module/spelling-tab/blending1_practice1_info_partD.mp3"),
      ],
    },
  },
  "conversation-module": {
    "listening-tab": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/conversation-module/listening-tab/conversation1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/dari/guidance/conversation-module/listening-tab/conversation1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/dari/guidance/conversation-module/listening-tab/conversation1_lesson1_partC.mp3"),
        require("assets/multilingual-audio/dari/guidance/conversation-module/listening-tab/conversation1_lesson1_partD.mp3"),
      ],
    },
    "audio-ordering-tab": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/conversation-module/audio-ordering-tab/conversation1_game1.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "flashcards-tab": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/dari/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/dari/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partC.mp3"),
      ],
    },
    "picture-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/vocabulary-module/picture-multiple-choice-tab/vocabulary1_game1.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/dari/guidance/vocabulary-module/audio-multiple-choice-tab/vocabulary1_game2.mp3"),
      ],
    },
  },
};

const KURMANJI_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/section_letters_explanation.mp3"),
      ],
    },
    "blending-module": {
      "audio-files": [
          require("assets/multilingual-audio/kurmanji/guidance/blending-module/section_blending_explanation.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/vocabulary-module/section_vocabulary_explanation.mp3"),
      ],
    },
    "conversation-module": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/conversation-module/section_conversation_explanation.mp3"),
      ],
    },
    "teacher-tip": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/teacher-tip-module/section_teacher_tip_explanation.mp3"),
      ],
    },
  },
  "alphabet-module": {
    "letter-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partD.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-introduction/phonics1_lesson1_info_partE.mp3"),
      ],
    },
    "letter-formation": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-formation/phonics1_practice1_info.mp3"),
      ],
    },
    "letter-sound": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-sound/phonics1_game1_info_partA.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-sound/phonics1_game1_info_partB.mp3"),
      ],
    },
    "letter-name": {
      "audio-files": require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-name/phonics1_game2_info.mp3"),
    },
    "letter-matching": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/alphabet-module/letter-matching/phonics1_game3_info.mp3"),
      ],
    },
  },
  "blending-module": {
    "blending-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/blending-introduction/blending1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/blending-introduction/blending1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/blending-introduction/blending1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/blending-introduction/blending1_lesson1_info_partD.mp3"),
      ],
    },
    "multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/multiple-choice-tab/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/audio-multiple-choice-tab/blending1_game2.mp3"),
      ],
    },
    "spelling-tab": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/spelling-tab/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/spelling-tab/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/spelling-tab/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/blending-module/spelling-tab/blending1_practice1_info_partD.mp3"),
      ],
    },
  },
  "conversation-module": {
    "listening-tab": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/conversation-module/listening-tab/conversation1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/conversation-module/listening-tab/conversation1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/conversation-module/listening-tab/conversation1_lesson1_partC.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/conversation-module/listening-tab/conversation1_lesson1_partD.mp3"),
      ],
    },
    "audio-ordering-tab": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/conversation-module/audio-ordering-tab/conversation1_game1.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "flashcards-tab": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/kurmanji/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partC.mp3"),
      ],
    },
    "picture-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/vocabulary-module/picture-multiple-choice-tab/vocabulary1_game1.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/kurmanji/guidance/vocabulary-module/audio-multiple-choice-tab/vocabulary1_game2.mp3"),
      ],
    },
  },
};

const SYRIAN_ARABIC_GUIDANCE_AUDIO: GuidanceType = {
  "home-screen": {
    "alphabet-module": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/alphabet-module/section_letters_explanation.mp3"),
      ],
    },
    "blending-module": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/section_blending_explanation.mp3"),
      ],
    },
    "vocabulary-module": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/vocabulary-module/section_vocabulary_explanation.mp3"),
      ],
    },
    "conversation-module": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/conversation-module/section_conversation_explanation.mp3"),
      ],
    },
    "teacher-tip": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/teacher-tip-module/section_teacher_tip_explanation.mp3"),
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
    "blending-introduction": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/blending-introduction/blending1_lesson1_info_partA.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/blending-introduction/blending1_lesson1_info_partB.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/blending-introduction/blending1_lesson1_info_partC.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/blending-introduction/blending1_lesson1_info_partD.mp3"),
      ],
    },
    "multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/multiple-choice-tab/blending1_game1_info.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/audio-multiple-choice-tab/blending1_game2.mp3"),
      ],
    },
    "spelling-tab": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/spelling-tab/blending1_practice1_info_partA.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/spelling-tab/blending1_practice1_info_partB.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/spelling-tab/blending1_practice1_info_partC.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/blending-module/spelling-tab/blending1_practice1_info_partD.mp3"),
      ],
    },
  },
  "conversation-module": {
    "listening-tab": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/conversation-module/listening-tab/conversation1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/conversation-module/listening-tab/conversation1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/conversation-module/listening-tab/conversation1_lesson1_partC.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/conversation-module/listening-tab/conversation1_lesson1_partD.mp3"),
      ],
    },
    "audio-ordering-tab": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/conversation-module/audio-ordering-tab/conversation1_game1.mp3"),
      ],
    },
  },
  "vocabulary-module": {
    "flashcards-tab": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partA.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partB.mp3"),
        require("assets/multilingual-audio/syrian_arabic/guidance/vocabulary-module/flashcards-tab/vocabulary1_lesson1_partC.mp3"),
      ],
    },
    "picture-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/vocabulary-module/picture-multiple-choice-tab/vocabulary1_game1.mp3"),
      ],
    },
    "audio-multiple-choice-tab": {
      "audio-files": [
        require("assets/multilingual-audio/syrian_arabic/guidance/vocabulary-module/audio-multiple-choice-tab/vocabulary1_game2.mp3"),
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
