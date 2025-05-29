export type LevelOneBottomTabRoutes = {
  "letter-introduction": undefined;
  "letter-formation": undefined;
  "letter-sound": undefined;
  "letter-name": undefined;
  "letter-matching": undefined;
};
export type LevelTwoBottomTabRoutes = {
  // spelling: undefined; TODO: Remove
  "audio-multiple-choice": undefined;
  "blending-flashcard": undefined;
  "multiple-choice": undefined;
  "spelling-drag-and-drop": undefined;
};

export type LevelThreeBottomTabRoutes = {
  listening: undefined;
  "video-explanation": undefined;
  "audio-ordering": undefined;
};

export type LevelFourBottomTabRoutes = {
  flashcard: undefined;
  "picture-multiple-choice": undefined;
  "audio-multiple-choice": undefined;
  "video-explanation": undefined;
};

export type CombinedRoutes =
  | keyof LevelOneBottomTabRoutes
  | keyof LevelTwoBottomTabRoutes
  | keyof LevelThreeBottomTabRoutes
  | keyof LevelFourBottomTabRoutes;
