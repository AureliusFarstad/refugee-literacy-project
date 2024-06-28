import { Dimensions, Platform } from "react-native";

export const IS_IOS = Platform.OS === "ios";
const { width, height } = Dimensions.get("screen");

export const WIDTH = width;
export const HEIGHT = height;

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
