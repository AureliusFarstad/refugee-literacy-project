import { Button, Modal, SafeAreaView, Text, useModal } from "@/ui";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Alphabet = () => {
  const { navigate } = useNavigation();
  const modal = useModal();

  return (
    <SafeAreaView>
      <FocusAwareStatusBar />

      <Button
        variant="primary"
        label="Show Bottom Sheet"
        onPress={modal.present}
      />
      <Modal ref={modal.ref} title="bottom sheet title" snapPoints={["60%"]}>
        <Text>Bottom Sheet Content</Text>
      </Modal>

      <Text>Alphabet Screen Level Three</Text>
    </SafeAreaView>
  );
};

export default Alphabet;
