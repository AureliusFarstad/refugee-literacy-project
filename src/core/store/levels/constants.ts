export const INITIAL_LEVEL_STATE = [
  {
    id: "level1",
    title: "Level 1",
    sublevels: [
      {
        id: "sublevel1",
        title: "Sublevel 1",
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
            activities: [],
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
    ],
  },
];
