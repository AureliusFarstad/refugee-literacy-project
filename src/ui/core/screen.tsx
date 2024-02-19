import React from "react";
import { View } from "./view";

type Props = {
  children: React.ReactNode;
};

export const Screen = ({ children }: Props) => (
  <View className="flex flex-1 flex-col justify-center bg-white px-2">
    {children}
  </View>
);
