import { HeaderHomeIcon, InfoIcon, ShareIcon } from "@/ui/icons";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Pressable } from "../pressable";
import { Text } from "../text";
import { View } from "../view";

type HeaderProps = {
  title: string;
  modalRef?: React.RefObject<DynamicModalRefType>;
};

const Header = ({ title, modalRef }: HeaderProps) => {
  const { navigate } = useNavigation();

  const navigateToHome = useCallback(() => {
    navigate("Home");
  }, []);

  return (
    <View className="flex-row justify-between items-center p-4 bg-[#6FB6A1]">
      <View className="flex-row items-center space-x-4">
        <Pressable onPress={navigateToHome}>
          <HeaderHomeIcon color={"white"} className="w-8 h-8" />
        </Pressable>
        <Text variant="h3" className="text-white">
          {title}
        </Text>
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
