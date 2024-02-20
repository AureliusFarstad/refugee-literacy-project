import { Button, SafeAreaView, Text, View } from "@/ui";
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
        <View className="p-4">
          <Text>Bottom Sheet Content goes here</Text>
        </View>
      </BottomSheetModal>

      <Text>Alphabet Screen Level Three</Text>
    </SafeAreaView>
  );
};

export default Alphabet;
