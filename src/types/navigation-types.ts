export type LevelOneBottomTabRoutes = {
  "letter-introduction": undefined;
  "letter-formation": undefined;
  "letter-sound": undefined;
  "letter-name": undefined;
  "letter-matching": undefined;
};
export type LevelTwoBottomTabRoutes = {
  spelling: undefined;
  "multiple-choice": undefined;
  flashcard: undefined;
  blending_flashcard: undefined;
};

export type LevelThreeBottomTabRoutes = {
  listening: undefined;
  "video-explanation": undefined;
  "audio-ordering": undefined;
};

export type LevelFourBottomTabRoutes = {
  flashcard: undefined;
  "video-explanation": undefined;
  "picture-multiple-choice": undefined;
  "audio-multiple-choice": undefined;
};

export type CombinedRoutes =
  | keyof LevelOneBottomTabRoutes
  | keyof LevelTwoBottomTabRoutes
  | keyof LevelThreeBottomTabRoutes
  | keyof LevelFourBottomTabRoutes;
