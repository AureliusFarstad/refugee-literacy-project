import React from "react";
import clsx from "clsx";
import { View } from "react-native";

interface ProgressBarProps {
  progress: number;
  color: string;
}

const ProgressBar = ({ progress, color }: ProgressBarProps) => {
  const progressBarWidth = `${progress}%` as `${number}%`;
  return (
    <View className="absolute px-3 flex justify-center bottom-3 h-5 w-full">
      <View
        className={clsx(
          "rounded-xl w-full h-4 px-1 flex justify-center",
          color
        )}
      >
        <View
          style={{
            width: progressBarWidth,
          }}
          className={clsx("bg-white h-3 rounded-xl")}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
