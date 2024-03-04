import { Button, SafeAreaView, Text } from "@/ui";
import { useBottomSheetModal } from "@/ui/core/bottom-sheet";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Alphabet = () => {
  const { navigate } = useNavigation();
  const modal = useBottomSheetModal();

  return (
    <SafeAreaView>
      <FocusAwareStatusBar />

      <Button
        variant="primary"
        label="Show Bottom Sheet"
        onPress={modal.present}
      />

      <Text>Alphabet Screen Level Two</Text>
    </SafeAreaView>
  );
};

export default Alphabet;
