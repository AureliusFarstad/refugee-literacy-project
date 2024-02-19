import { InformationCircleIcon } from "react-native-heroicons/solid";
import { View } from "../view";
import { Text } from "../text";
import { Pressable } from "../pressable";

type HeaderProps = {
  showCoolestModal: () => void;
};

const Header = ({ showCoolestModal }: HeaderProps) => {
  return (
    <View className="flex-row justify-between items-center p-4">
      <Text className="text-2xl font-bold">Alphabet</Text>
      <Pressable onPress={showCoolestModal}>
        <InformationCircleIcon />
      </Pressable>
    </View>
  );
};

export default Header;
