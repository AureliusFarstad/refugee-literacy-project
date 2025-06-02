import { Dimensions, Platform } from "react-native";

export const IS_IOS = Platform.OS === "ios";
const { width, height } = Dimensions.get("screen");

export const WIDTH = width;
export const HEIGHT = height;

// TODO: Use these constants in components
export const SMALL_SCREEN_HEIGHT_THRESHOLD = 680;
export const IS_SMALL_SCREEN = height < SMALL_SCREEN_HEIGHT_THRESHOLD;

export const HEADER_HEIGHT = 88;
export const BOTTOM_TAB_HEIGHT = IS_IOS ? 108 : 80;
export const TAB_ICON_CONTAINER_SIZE = 60;
