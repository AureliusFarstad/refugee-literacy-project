import { SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import React, { useRef } from "react";

const Alphabet = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  return (
    <SafeAreaView>
      <FocusAwareStatusBar />
      <Header title="Alphabet" modalRef={dynamicModalRef} />
      <View className="bg-[#ECE5E1] flex items-center p-4">
        <Text>content goes here</Text>
      </View>
      <DynamicModal ref={dynamicModalRef}>
        <View className="p-4 bg-white">
          <Text>Modal Content of alphabet screen</Text>
        </View>
      </DynamicModal>
    </SafeAreaView>
  );
};

export default Alphabet;
