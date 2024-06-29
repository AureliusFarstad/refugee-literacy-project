import React, { useRef } from "react";

import { SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { PencilIcon } from "@/ui/icons";

const LetterFormation = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  return (
    <SafeAreaView>
      <Header title="Formation" modalRef={dynamicModalRef} />
      <DynamicModal ref={dynamicModalRef}>
        <View className="rounded-lg bg-white p-4">
          <Text>Letter formation activity</Text>
          <View className="flex h-20 items-center justify-center">
            <PencilIcon />
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

export default LetterFormation;
