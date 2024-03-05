import { SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { NameIcon } from "@/ui/icons";
import React, { useRef } from "react";

const LetterName = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  return (
    <SafeAreaView>
      <Header title="Name" modalRef={dynamicModalRef} />
      <View className="bg-[#ECE5E1] flex items-center p-4">
        <Text>content goes here</Text>
      </View>
      <DynamicModal ref={dynamicModalRef}>
        <View className="p-4 bg-white rounded-lg">
          <Text>Letter Name Activity</Text>
          <View className="h-20 flex items-center justify-center">
            <NameIcon />
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

export default LetterName;
