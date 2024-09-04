import type { Sound } from "expo-av/build/Audio";
import React, { useEffect, useRef, useState } from "react";

import { useLevelStore } from "@/core/store/levels";
import { SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { EarIcon } from "@/ui/icons";

const Listening = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);
  const { levels: _levels } = useLevelStore();
  const [sound, _setSound] = useState<Sound>();

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <SafeAreaView>
      <Header title="Sound" modalRef={dynamicModalRef} />

      <DynamicModal ref={dynamicModalRef}>
        <View className="rounded-lg bg-white p-4">
          <Text>Letter sound activity</Text>
          <View className="flex h-20 items-center justify-center">
            <EarIcon />
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

export default Listening;
