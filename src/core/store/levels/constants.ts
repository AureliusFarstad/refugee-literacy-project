export const INITIAL_LEVEL_STATE = [
  {
    id: "level1",
    title: "Level 1",
    modules: [
      {
        id: "module1",
        title: "S,A,T,P,I,N",
        sections: [
          {
            id: "section1",
            icon: "abc",
            title: "LetterIntroduction",
            completed: false,
            metadata: {
              description: "Learn letters A, B, C...",
              keywords: ["alphabet", "letters", "beginner"],
            },
            activities: [
              {
                id: "activity1",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_LETTER",
                character: "S",
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
                letter: {
                  lowerCase: "s",
                  upperCase: "S",
                },
              },
              {
                id: "activity2",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_LETTER",
                character: "A",
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
                letter: {
                  lowerCase: "a",
                  upperCase: "A",
                },
              },
              {
                id: "activity3",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_LETTER",
                character: "T",
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
                letter: {
                  lowerCase: "t",
                  upperCase: "T",
                },
              },
              {
                id: "activity4",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_LETTER",
                character: "P",
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
                letter: {
                  lowerCase: "p",
                  upperCase: "P",
                },
              },
              {
                id: "activity5",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_LETTER",
                character: "I",
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
                letter: {
                  lowerCase: "i",
                  upperCase: "I",
                },
              },
              {
                id: "activity6",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_LETTER",
                character: "N",
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
                letter: {
                  lowerCase: "n",
                  upperCase: "N",
                },
              },
            ],
          },
          {
            id: "section2",
            icon: "speaker",
            title: "Pronunciation",
            completed: false,
            metadata: {
              description: "Practice the sounds of letters...",
              keywords: ["sounds", "pronunciation", "phonetics"],
            },
            activities: [
              {
                id: "activity1",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionS", title: "S" },
                audio: require("@/assets/alphabet/audio/sound/s.mp4"),
                options: [
                  { id: "optionA", title: "A" },
                  { id: "optionT", title: "T" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
              },
              {
                id: "activity2",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionA", title: "A" },
                audio: require("@/assets/alphabet/audio/sound/a.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
              },
              {
                id: "activity3",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionT", title: "T" },
                audio: require("@/assets/alphabet/audio/sound/t.mp4"),
                options: [
                  { id: "optionA", title: "A" },
                  { id: "optionS", title: "S" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
              },
              {
                id: "activity4",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionP", title: "P" },
                audio: require("@/assets/alphabet/audio/sound/p.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionA", title: "A" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
              },
              {
                id: "activity5",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionI", title: "I" },
                audio: require("@/assets/alphabet/audio/sound/p.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionA", title: "A" },
                  { id: "optionP", title: "P" },
                  { id: "optionN", title: "N" },
                ],
              },
              {
                id: "activity6",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionN", title: "N" },
                audio: require("@/assets/alphabet/audio/sound/n.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionA", title: "A" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                ],
              },
            ],
          },
          {
            id: "section3",
            icon: "book",
            title: "Reading",
            completed: true,
            metadata: {
              description: "Simple words reading practice",
              keywords: ["reading", "words", "practice"],
            },
            activities: [],
          },
          {
            id: "section4",
            icon: "emotions",
            title: "Feelings",
            completed: true,
            metadata: {
              description: "Expressing and recognizing feelings",
              keywords: ["feelings", "emotions", "expression"],
            },
            activities: [],
          },
        ],
      },
      {
        id: "module2",
        title: "I'm am",
        sections: [],
      },
      {
        id: "module3",
        title: "Sit pen",
        sections: [],
      },
      {
        id: "module4",
        title: "Feelings",
        sections: [],
      },
    ],
  },
];
