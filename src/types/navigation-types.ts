export type LevelOneBottomTabRoutes = {
  "letter-introduction": undefined;
  "letter-formation": undefined;
  "letter-sound": undefined;
  "letter-name": undefined;
  "letter-matching": undefined;
};
export type LevelTwoBottomTabRoutes = {
  "letter-draggable": undefined;
  draggable: undefined;
  "words-sound": undefined;
};

export type CombinedRoutes =
  | keyof LevelOneBottomTabRoutes
  | keyof LevelTwoBottomTabRoutes;
