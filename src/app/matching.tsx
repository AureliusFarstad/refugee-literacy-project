import React from "react";

import { SafeAreaView, Text } from "@/ui";
import LetterMatchingGame from "@/ui/components/letters";

const Matching = () => {
  return (
    <SafeAreaView>
      <Text className="text-pink-500">Matching</Text>
      <LetterMatchingGame />
    </SafeAreaView>
  );
};

export default Matching;
