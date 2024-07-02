export const INITIAL_LEVEL_STATE: ILevel[] = [
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
                audio: "",
                correctAnswer: {
                  id: "",
                  title: "",
                },
                options: [],
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
                audio: "",
                correctAnswer: {
                  id: "",
                  title: "",
                },
                options: [],
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
                audio: "",
                correctAnswer: {
                  id: "",
                  title: "",
                },
                options: [],
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
                audio: "",
                correctAnswer: {
                  id: "",
                  title: "",
                },
                options: [],
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
                audio: "",
                correctAnswer: {
                  id: "",
                  title: "",
                },
                options: [],
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
                audio: "",
                correctAnswer: {
                  id: "",
                  title: "",
                },
                options: [],
              },
            ],
          },
          {
            id: "section2",
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
            id: "section3",
            icon: "speaker",
            title: "Pronunciation",
            completed: false,
            metadata: {
              description: "Practice the sounds of letters...",
              keywords: ["sounds", "pronunciation", "phonetics"],
            },
            activities: [
              {
                id: "activity4_1",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_NAME",
                correctAnswer: { id: "optionS", title: "S" },
                audio: require("assets/alphabet/audio/name/s.mp4"),
                options: [
                  { id: "optionA", title: "A" },
                  { id: "optionT", title: "T" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity4_2",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_NAME",
                correctAnswer: { id: "optionA", title: "A" },
                audio: require("assets/alphabet/audio/name/a.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity4_3",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_NAME",
                correctAnswer: { id: "optionT", title: "T" },
                audio: require("assets/alphabet/audio/name/t.mp4"),
                options: [
                  { id: "optionA", title: "A" },
                  { id: "optionS", title: "S" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity4_4",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_NAME",
                correctAnswer: { id: "optionP", title: "P" },
                audio: require("assets/alphabet/audio/name/p.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionA", title: "A" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity4_5",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_NAME",
                correctAnswer: { id: "optionI", title: "I" },
                audio: require("assets/alphabet/audio/name/i.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionA", title: "A" },
                  { id: "optionP", title: "P" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity4_6",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_NAME",
                correctAnswer: { id: "optionN", title: "N" },
                audio: require("assets/alphabet/audio/name/n.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionA", title: "A" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
            ],
          },
          {
            id: "section4",
            icon: "speaker",
            title: "Pronunciation",
            completed: false,
            metadata: {
              description: "Practice the names of letters...",
              keywords: ["sounds", "pronunciation", "phonetics"],
            },
            activities: [
              {
                id: "activity3_1",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionS", title: "S" },
                audio: require("assets/alphabet/audio/sound/s.mp4"),
                options: [
                  { id: "optionA", title: "A" },
                  { id: "optionT", title: "T" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity3_2",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionA", title: "A" },
                audio: require("assets/alphabet/audio/sound/a.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity3_3",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionT", title: "T" },
                audio: require("assets/alphabet/audio/sound/t.mp4"),
                options: [
                  { id: "optionA", title: "A" },
                  { id: "optionS", title: "S" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity3_4",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionP", title: "P" },
                audio: require("assets/alphabet/audio/sound/p.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionA", title: "A" },
                  { id: "optionI", title: "I" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity3_5",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionI", title: "I" },
                audio: require("assets/alphabet/audio/sound/i.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionA", title: "A" },
                  { id: "optionP", title: "P" },
                  { id: "optionN", title: "N" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
              {
                id: "activity3_6",
                numberOfTimesCorrectAnswerGiven: 0,
                type: "MATCH_THE_SOUND",
                correctAnswer: { id: "optionN", title: "N" },
                audio: require("assets/alphabet/audio/sound/n.mp4"),
                options: [
                  { id: "optionS", title: "S" },
                  { id: "optionT", title: "T" },
                  { id: "optionA", title: "A" },
                  { id: "optionP", title: "P" },
                  { id: "optionI", title: "I" },
                ],
                character: "",
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
              },
            ],
          },
          {
            id: "section5",
            icon: "emotions",
            title: "Match Letters",
            completed: true,
            metadata: {
              description: "Match the letters",
              keywords: ["", "", ""],
            },
            activities: [
              {
                id: "activity5_1",
                letters: ["s", "n", "i", "t", "p", "a"],
                numberOfTimesCorrectAnswerGiven: 0,
                audio: "",
                character: "",
                correctAnswer: {
                  id: "",
                  title: "",
                },
                letter: {
                  lowerCase: "",
                  upperCase: "",
                },
                options: [],
                sound: {
                  letterSoundSrc: "",
                  phoneticSoundSrc: "",
                },
                type: "MATCH_THE_LETTER",
              },
            ],
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
