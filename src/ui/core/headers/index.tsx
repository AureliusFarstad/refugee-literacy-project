import { HeaderHomeIcon } from "@/ui/icons";
import { Text } from "../text";
import { View } from "../view";
import { InformationCircleIcon, ShareIcon } from "react-native-heroicons/solid";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <View className="flex-row justify-between items-center p-4 bg-[#6FB6A1]">
      <View className="flex-row items-center space-x-4">
        <HeaderHomeIcon color={"white"} className="w-8 h-8" />
        <Text variant="h3" className="text-white">
          {title}
        </Text>
      </View>
      <View className="flex-row items-center space-x-4">
        <InformationCircleIcon color={"white"} />
        <ShareIcon color={"white"} />
      </View>
    </View>
  );
};

export default Header;
