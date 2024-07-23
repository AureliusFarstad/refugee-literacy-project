import React from "react";
import { View } from "react-native";

import { WIDTH } from "@/utils/layout";

const DynamicStroke = ({ chunkWidth = 20 }) => {
  const numberOfChunks = Math.floor(WIDTH / chunkWidth);

  return (
    <View className="absolute inset-x-0 flex h-1 flex-row items-center justify-evenly bg-[#F36889]">
      {[...Array(numberOfChunks)].map((_, index) => (
        <View
          key={index}
          className="flex size-2 h-1 items-center  justify-center bg-[#F7D6DE]"
        />
      ))}
    </View>
  );
};

export default DynamicStroke;
