import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import Info from "../../assets/icons/Info";

export default function InfoShare({}) {
  return (
    <TouchableOpacity className="pr-2">
      <Info />
    </TouchableOpacity>
  );
}
