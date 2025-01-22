import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { HEIGHT, IS_IOS } from "@/utils/layout";

const VideoExplanation = () => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <Header title="Formation" />
      <View
        style={{
          height:
            HEIGHT - (insets.bottom + insets.top + 90 + (IS_IOS ? 96 : 112)),
        }}
      >
        <View className="flex items-center justify-between" />

        <View className="mt-auto ">
          <View />
          <View className=" flex flex-row justify-between ">
            <Text>VideoExplanation</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VideoExplanation;
