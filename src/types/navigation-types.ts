export type LevelOneBottomTabRoutes = {
  "letter-introduction": undefined;
  "letter-formation": undefined;
  "letter-sound": undefined;
  "letter-name": undefined;
  "letter-matching": undefined;
};
export type LevelTwoBottomTabRoutes = {
  "blending-introduction": undefined;
  "multiple-choice-tab": undefined;
  "audio-multiple-choice-tab": undefined;
  "spelling-tab": undefined;
};

export type LevelThreeBottomTabRoutes = {
  "listening-tab": undefined;
  "video-explanation": undefined;
  "audio-ordering-tab": undefined;
};

export type LevelFourBottomTabRoutes = {
  "flashcards-tab": undefined;
  "video-explanation": undefined;
  "picture-multiple-choice-tab": undefined;
  "audio-multiple-choice-tab": undefined;
};

export type CombinedRoutes =
  | keyof LevelOneBottomTabRoutes
  | keyof LevelTwoBottomTabRoutes
  | keyof LevelThreeBottomTabRoutes
  | keyof LevelFourBottomTabRoutes;
