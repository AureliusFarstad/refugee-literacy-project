import { SafeAreaView, Text } from "@/ui";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const LetterFormation = () => {
  const { navigate } = useNavigation();

  return (
    <SafeAreaView>
      <Text>Audible picker Screen Level Four</Text>
    </SafeAreaView>
  );
};

export default LetterFormation;
