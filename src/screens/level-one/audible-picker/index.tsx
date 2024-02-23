import { SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";

const AudiblePicker = () => {
  const { navigate } = useNavigation();
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  return (
    <SafeAreaView>
      <FocusAwareStatusBar />
      <Header title="Audible Picker" modalRef={dynamicModalRef} />
      <Text>Audible picker Screen</Text>
      <DynamicModal ref={dynamicModalRef}>
        <View className="p-4 bg-white">
          <Text>Modal Content of audible picker screen</Text>
        </View>
      </DynamicModal>
    </SafeAreaView>
  );
};

export default AudiblePicker;
