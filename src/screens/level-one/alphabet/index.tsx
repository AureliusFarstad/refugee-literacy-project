import { SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Alphabet = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <FocusAwareStatusBar />
      <Header title="Alphabet" />
      <View className="bg-[#ECE5E1] flex items-center p-4">
        <Text>content goes here</Text>
      </View>
    </SafeAreaView>
  );
};

export default Alphabet;
