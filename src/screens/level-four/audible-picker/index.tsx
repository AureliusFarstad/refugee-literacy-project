import { SafeAreaView, Text } from "@/ui";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const LetterFormation = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <FocusAwareStatusBar />
      <Text>Audible picker Screen Level Four</Text>
    </SafeAreaView>
  );
};

export default LetterFormation;
