import { HeaderHomeIcon, InfoIcon, ShareIcon } from "@/ui/icons";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Text } from "../text";
import { View, Pressable } from "react-native";
import { router } from "expo-router";

type HeaderProps = {
  title: string;
  modalRef?: React.RefObject<DynamicModalRefType>;
};

const Header = ({ title, modalRef }: HeaderProps) => {
  const navigateToHome = useCallback(() => {
    router.navigate("/");
  }, []);

  return (
    <View className="flex-row justify-between items-center p-4 bg-[#6FB6A1]">
      <View className="flex-row items-center space-x-4">
        <Pressable onPress={navigateToHome}>
          <HeaderHomeIcon color={"white"} className="w-8 h-8" />
        </Pressable>
        <Text className="text-white">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-4">
        <Pressable
          onPress={() => {
            modalRef?.current?.showDynamicModal();
          }}
        >
          <InfoIcon color={"white"} />
        </Pressable>
        <ShareIcon color={"white"} />
      </View>
    </View>
  );
};

export default Header;
