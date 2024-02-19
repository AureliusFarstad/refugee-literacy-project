import { useBooleanState } from "@/core/hooks/useBooleanState";
import { Pressable, SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { XClose } from "@/ui/core/modal/x-close";
import { CustomModal } from "@/ui/core/react-native-modal/custom-modal";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { IS_IOS } from "@/utils/layout";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const CloseButton = ({ close }: { close: () => void }) => {
  return (
    <Pressable
      onPress={() => {
        close();
      }}
      className="h-[24px] w-[24px] items-center justify-center absolute top-4 right-4 z-10"
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      accessibilityLabel="close modal"
      accessibilityRole="button"
      accessibilityHint="closes the modal"
    >
      <XClose fill="fill-gray-600 dark:fill-gray-300" />
    </Pressable>
  );
};

type CoolestCardProps = {
  hideCoolestModal: () => void;
};

const CoolestCard = ({ hideCoolestModal }: CoolestCardProps) => {
  return (
    <View className=" bg-white p-4 rounded-xl">
      <CloseButton close={hideCoolestModal} />
      <Text className="text-pink-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
        delectus commodi ad minus impedit omnis repellat dolores, voluptate
        dolorem nemo totam rem reprehenderit debitis facilis laboriosam
        voluptatibus temporibus earum vitae.
      </Text>
    </View>
  );
};

const Alphabet = () => {
  const { navigate } = useNavigation();

  const [
    isCoolestModalVisible,
    { setFalse: hideCoolestModal, setTrue: showCoolestModal },
  ] = useBooleanState(false);

  return (
    <SafeAreaView>
      <FocusAwareStatusBar />
      <Header showCoolestModal={showCoolestModal} />
      <Text>Alphabet Screen</Text>
      <Pressable onPress={showCoolestModal}>
        <Text>Show modal</Text>
      </Pressable>
      <CustomModal
        style={{
          marginTop: IS_IOS ? 30 : 0,
        }}
        backdropColor={"rgba(0, 0, 0, 0.4)"}
        backdropOpacity={1}
        isVisible={isCoolestModalVisible}
        onBackdropPress={hideCoolestModal}
        onBackButtonPress={hideCoolestModal}
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
      >
        <CoolestCard hideCoolestModal={hideCoolestModal} />
      </CustomModal>
    </SafeAreaView>
  );
};

export default Alphabet;
