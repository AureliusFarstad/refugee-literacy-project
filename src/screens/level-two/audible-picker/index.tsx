import { SafeAreaView, Text } from "@/ui";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const AudiblePicker = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Text>Audible picker Screen Level Two</Text>
    </SafeAreaView>
  );
};

export default AudiblePicker;
