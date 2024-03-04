import React from "react";

import { Button, SafeAreaView, Text, View } from "@/ui";

import { useIsFirstTime } from "@/core/hooks/useIsFirstTime";
// import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";

export const Onboarding = () => {
  const [_, setIsFirstTime] = useIsFirstTime();
  return (
    <View className="flex h-full items-center  justify-center">
      <View className="w-full flex-1">
        <Text>Cover</Text>
      </View>

      {/* <SafeAreaView className="mt-6"> */}
      <Button
        label="Let's Get Started "
        onPress={() => {
          setIsFirstTime(false);
        }}
      />
      {/* </SafeAreaView> */}
    </View>
  );
};
