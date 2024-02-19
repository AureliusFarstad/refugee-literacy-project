import { Button, SafeAreaView, Text } from "@/ui";
import { BottomSheetModal, useBottomSheetModal } from "@/ui/core/bottom-sheet";
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
      <BottomSheetModal
        ref={modal.ref}
        title="bottom sheet title"
        snapPoints={["60%"]}
      >
        <Text>Bottom Sheet Content</Text>
      </BottomSheetModal>

      <Text>Alphabet Screen Level Four</Text>
    </SafeAreaView>
  );
};

export default Alphabet;
