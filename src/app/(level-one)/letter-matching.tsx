import { SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { LetterMatchIcon } from "@/ui/icons";
import React, { useRef } from "react";

const LetterMatching = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  return (
    <SafeAreaView>
      <Header title="Matching" modalRef={dynamicModalRef} />
      <DynamicModal ref={dynamicModalRef}>
        <View className="p-4 bg-white rounded-lg">
          <Text>Letter introduction activity</Text>
          <View className="h-20 flex items-center justify-center">
            <LetterMatchIcon />
          </View>
          <Text className="mt-4">
            Start your language learning adventure. Let A, B, C, and D be the
            building blocks of your multilingual journey!
          </Text>
        </View>
      </DynamicModal>
    </SafeAreaView>
  );
};

export default LetterMatching;
