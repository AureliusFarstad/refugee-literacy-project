import { router } from "expo-router";
import { useCallback } from "react";
import { Pressable, View } from "react-native";
import { HomeIcon, ShareIcon } from "react-native-heroicons/solid";

import { InformationIcon } from "@/ui/icons";

const SIZE = 36;

type HeaderProps = {
  title: string;
  modalRef?: React.RefObject<DynamicModalRefType>;
};

const Header = ({ modalRef }: HeaderProps) => {
  const navigateToHome = useCallback(() => {
    router.navigate("/");
  }, []);

  return (
    <View className="flex-row items-center justify-between p-4">
      <View className="flex-row items-center space-x-4">
        <Pressable onPress={navigateToHome} className="p-2">
          <HomeIcon color={"#8AC65B"} size={SIZE} />
        </Pressable>
      </View>
      <View className="flex-row items-center space-x-4">
        <Pressable
          onPress={() => {
            modalRef?.current?.showDynamicModal();
          }}
          className="p-2"
        >
          <InformationIcon color={"#8AC65B"} size={40} />
        </Pressable>
        <View className="p-2">
          <ShareIcon color={"#8AC65B"} size={SIZE} />
        </View>
      </View>
    </View>
  );
};

export default Header;
