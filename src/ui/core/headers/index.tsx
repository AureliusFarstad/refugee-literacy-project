import { router } from "expo-router";
import { useCallback } from "react";
import { Pressable, View } from "react-native";
import {
  HomeIcon,
  InformationCircleIcon,
  ShareIcon,
} from "react-native-heroicons/solid";

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
          <HomeIcon color={"#C385F8"} size={SIZE} />
        </Pressable>
      </View>
      <View className="flex-row items-center space-x-4">
        <Pressable
          onPress={() => {
            modalRef?.current?.showDynamicModal();
          }}
          className="p-2"
        >
          <InformationCircleIcon color={"#C385F8"} size={SIZE} />
        </Pressable>
        <View className="p-2">
          <ShareIcon color={"#C385F8"} size={SIZE} />
        </View>
      </View>
    </View>
  );
};

export default Header;
