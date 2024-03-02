import { HeaderHomeIcon, InfoIcon, ShareIcon } from "@/ui/icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import { Pressable } from "../pressable";
import { Text } from "../text";
import { View } from "../view";
import { Share, Alert } from "react-native";

type HeaderProps = {
  title: string;
  modalRef?: React.RefObject<DynamicModalRefType>;
};

const Header = ({ title, modalRef }: HeaderProps) => {
  const { navigate } = useNavigation();

  const navigateToHome = useCallback(() => {
    navigate("Home");
  }, []);

  const route = useRoute();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `https://refugeeliteracy.org/${route.name}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

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
        <Pressable onPress={onShare}>
          <ShareIcon color={"white"} />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;
