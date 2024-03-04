import { Button, SafeAreaView, Text } from "@/ui";
import { BottomSheetModal, useBottomSheetModal } from "@/ui/core/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const LetterIntroduction = () => {
  const { navigate } = useNavigation();
  const modal = useBottomSheetModal();

  return (
    <SafeAreaView>
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

      <Text>LetterIntroduction Screen Level Four</Text>
    </SafeAreaView>
  );
};

export default LetterIntroduction;
