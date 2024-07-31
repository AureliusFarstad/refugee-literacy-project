import * as React from "react";
import { Pressable, View } from "react-native";

import { Text } from "../text";
import { XClose } from "./x-close";

type ModalHeaderProps = {
  title?: string;
  dismiss: () => void;
};

export const ModalHeader = React.memo(
  ({ title, dismiss }: ModalHeaderProps) => {
    return (
      <View className="flex-row px-2 py-4">
        <View className="size-[24px]" />
        <View className="flex-1">
          <Text className="text-center text-[16px] font-bold text-[#26313D]">
            {title}
          </Text>
        </View>
        <CloseButton close={dismiss} />
      </View>
    );
  },
);

const CloseButton = ({ close }: { close: () => void }) => {
  return (
    <Pressable
      onPress={close}
      className="size-[24px] items-center justify-center  "
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      accessibilityLabel="close modal"
      accessibilityRole="button"
      accessibilityHint="closes the modal"
    >
      <XClose fill="fill-gray-600 dark:fill-gray-300" />
    </Pressable>
  );
};
