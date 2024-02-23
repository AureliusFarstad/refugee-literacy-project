import { SafeAreaView, Text } from "@/ui";
import Header from "@/ui/core/headers";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const AudiblePicker = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <FocusAwareStatusBar />
      <Header title="Audible Picker" />
      <Text>Audible picker Screen</Text>
    </SafeAreaView>
  );
};

export default AudiblePicker;
