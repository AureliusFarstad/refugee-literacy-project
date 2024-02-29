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
            completed: true,
            metadata: {
              description: "Learn letters A, B, C...",
              keywords: ["alphabet", "letters", "beginner"],
            },
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
          },
        ],
      },
    ],
  },
];
