import React, { useRef } from "react";

import { SafeAreaView, Text, TouchableOpacity, View } from "@/ui";
import DragDrop from "@/ui/components/level-two/dragdrop";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { EarIcon } from "@/ui/icons";

const LetterName = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  return (
    <SafeAreaView>
      <Header title="Name" modalRef={dynamicModalRef} />

      <View className="flex h-full items-center ">
        <View className="flex w-full flex-1 flex-col   ">
          <View className="">
            <TouchableOpacity
              onPress={() => {}}
              className="mx-auto flex size-[110] items-center justify-center rounded-full bg-colors-purple-500"
            >
              <EarIcon />
            </TouchableOpacity>
          </View>
          <DragDrop />
        </View>
      </View>
      <DynamicModal ref={dynamicModalRef}>
        <View className="rounded-lg bg-white p-4">
          <Text>Letter Draggable activity</Text>
          <View className="flex h-20 items-center justify-center" />
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
