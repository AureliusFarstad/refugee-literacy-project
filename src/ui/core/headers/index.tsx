import { router } from "expo-router";
import { useCallback } from "react";
import { Pressable, View } from "react-native";

import { APP_COLORS } from "@/constants/routes";
import LetterCaseSwitch from "@/ui/components/global-letter-casing-switch";
import type { ButtonColorProps } from "@/ui/icons/circular/color-scheme";
import { EmptyHeadButton } from "@/ui/icons/circular/empty-head-button";
import { HomeButton } from "@/ui/icons/circular/home-button";

const buttonColorProps: ButtonColorProps = {
  primaryColor: APP_COLORS.green,
  secondaryColor: APP_COLORS.lightgreen,
  offwhiteColor: APP_COLORS.offwhite,
  offblackColor: APP_COLORS.offblack,
  backgroundColor: APP_COLORS.backgroundgrey,
};

const SIZE = 40;

type HeaderProps = {
  title: string;
  onPressGuide?: () => void;
};

const Header = ({ onPressGuide }: HeaderProps) => {
  const navigateToHome = useCallback(() => {
    router.navigate("/");
  }, []);

  return (
    <View className="flex-row items-center justify-between p-4">
      <View className="flex-row items-center space-x-4">
        <Pressable onPress={navigateToHome} className="p-2">
          <View style={[{ width: SIZE, height: SIZE }]}>
            <HomeButton {...buttonColorProps} />
            {/* NativeWind does not work: <View className="w-40 h-40 p-0"> */}
          </View>
        </Pressable>
      </View>
      <View className="flex-row items-center space-x-4">
        <LetterCaseSwitch />
        {/* <View className="p-2">
          <ShareIcon color={"#8AC65B"} size={SIZE} />
      </View> */}
      </View>
      <View className="flex-row items-center space-x-4">
        <Pressable onPress={onPressGuide} className="p-2">
          <View style={[{ width: SIZE, height: SIZE }]}>
            <EmptyHeadButton {...buttonColorProps} />
            {/* NativeWind does not work: <View className="w-40 h-40 p-0"> */}
          </View>
        </Pressable>
        {/* <View className="p-2">
          <ShareIcon color={"#8AC65B"} size={SIZE} />
        </View> */}
      </View>
    </View>
  );
};

export default Header;
