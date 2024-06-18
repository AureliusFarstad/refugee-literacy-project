import { SafeAreaView, Text } from "@/ui";
import LetterMatchingGame from "@/ui/components/letters";

import React from "react";

const Matching = () => {
  return (
    <SafeAreaView>
      <Text className="text-pink-500">Matching</Text>
      <LetterMatchingGame />
    </SafeAreaView>
  );
};

export default Matching;
