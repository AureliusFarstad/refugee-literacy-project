import clsx from "clsx";
import React from "react";
import { View } from "react-native";

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar = ({ progress, color }: ProgressBarProps) => {
  const progressBarWidth = `${progress}%` as `${number}%`;
  return (
    <View className="absolute bottom-3 flex h-5 w-full justify-center px-3">
      <View
        className={clsx(
          "flex h-4 w-full justify-center rounded-xl px-1",
          color
        )}
      >
        <View
          style={{
            width: progressBarWidth,
          }}
          className={clsx("h-3 rounded-xl bg-white")}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
