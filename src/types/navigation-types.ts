export type LevelOneBottomTabRoutes = {
  "letter-introduction": undefined;
  "letter-formation": undefined;
  "letter-sound": undefined;
  "letter-name": undefined;
  "letter-matching": undefined;
};
export type LevelTwoBottomTabRoutes = {
  "letter-draggable": undefined;
  "words-sound": undefined;
  "blending-game": undefined;
  "word-matching": undefined;
  "blending-introduction": undefined;
};

export type LevelThreeBottomTabRoutes = {
  listening: undefined;
};

export type CombinedRoutes =
  | keyof LevelOneBottomTabRoutes
  | keyof LevelTwoBottomTabRoutes
  | keyof LevelThreeBottomTabRoutes;
