import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackRoutes = {
  Home: undefined;
  LevelOneTabNavigator: NavigatorScreenParams<LevelOneBottomTabRoutes>;
  LevelTwoTabNavigator: NavigatorScreenParams<LevelTwoBottomTabRoutes>;
  LevelThreeTabNavigator: NavigatorScreenParams<LevelThreeBottomTabRoutes>;
  LevelFourTabNavigator: NavigatorScreenParams<LevelFourBottomTabRoutes>;
};

// for useNavigation hook

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackRoutes {}
  }
}

export type RootStackNavigationType<RouteName extends keyof RootStackRoutes> =
  StackNavigationProp<RootStackRoutes, RouteName>;

export type RootStackNavigationProps<RouteName extends keyof RootStackRoutes> =
  {
    navigation: RootStackNavigationType<RouteName>;
    route: RouteProp<RootStackRoutes, RouteName>;
  };

export type LevelOneBottomTabRoutes = {
  Alphabet: undefined;
  AudiblePicker: undefined;
  ChapterThree: undefined;
  ChapterFour: undefined;
  ChapterFive: undefined;
};

// for level one useNavigation hook
export type LevelOneBottomTabNavigationType<
  RouteName extends keyof LevelOneBottomTabRoutes
> = StackNavigationProp<LevelOneBottomTabRoutes, RouteName>;

export type LevelOneBottomTabNavigationProps<
  RouteName extends keyof LevelOneBottomTabRoutes
> = {
  navigation: BottomTabNavigationProp<LevelOneBottomTabRoutes, RouteName>;
  route: RouteProp<LevelOneBottomTabRoutes, RouteName>;
};

// for level two useNavigation hook

export type LevelTwoBottomTabRoutes = {
  Alphabet: undefined;
  AudiblePicker: undefined;
  ChapterThree: undefined;
  ChapterFour: undefined;
  ChapterFive: undefined;
};

// for useNavigation hook
export type LevelTwoBottomTabNavigationType<
  RouteName extends keyof LevelTwoBottomTabRoutes
> = StackNavigationProp<LevelTwoBottomTabRoutes, RouteName>;

export type LevelTwoBottomTabNavigationProps<
  RouteName extends keyof LevelTwoBottomTabRoutes
> = {
  navigation: BottomTabNavigationProp<LevelTwoBottomTabRoutes, RouteName>;
  route: RouteProp<LevelTwoBottomTabRoutes, RouteName>;
};

// for level four useNavigation hook

export type LevelThreeBottomTabRoutes = {
  Alphabet: undefined;
  AudiblePicker: undefined;
};

// for useNavigation hook
export type LevelThreeBottomTabNavigationType<
  RouteName extends keyof LevelThreeBottomTabRoutes
> = StackNavigationProp<LevelThreeBottomTabRoutes, RouteName>;

export type LevelThreeBottomTabNavigationProps<
  RouteName extends keyof LevelThreeBottomTabRoutes
> = {
  navigation: BottomTabNavigationProp<LevelThreeBottomTabRoutes, RouteName>;
  route: RouteProp<LevelThreeBottomTabRoutes, RouteName>;
};
// for level four useNavigation hook

export type LevelFourBottomTabRoutes = {
  Alphabet: undefined;
  AudiblePicker: undefined;
  ChapterThree: undefined;
  ChapterFour: undefined;
  ChapterFive: undefined;
};

// for useNavigation hook
export type LevelFourBottomTabNavigationType<
  RouteName extends keyof LevelFourBottomTabRoutes
> = StackNavigationProp<LevelFourBottomTabRoutes, RouteName>;

export type LevelFourBottomTabNavigationProps<
  RouteName extends keyof LevelFourBottomTabRoutes
> = {
  navigation: BottomTabNavigationProp<LevelFourBottomTabRoutes, RouteName>;
  route: RouteProp<LevelFourBottomTabRoutes, RouteName>;
};
