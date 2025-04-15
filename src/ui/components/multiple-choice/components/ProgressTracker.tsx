import React from "react";
import { StyleSheet, Text, View } from "react-native";

import type { ProgressTrackerProps } from "../types";

/**
 * Component to display game progress
 */
const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  current,
  total,
  colors,
}) => {
  const styles = StyleSheet.create({
    container: {
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 18,
      fontWeight: "500",
      color: colors.appBlackColor,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {current + 1} / {total}
      </Text>
    </View>
  );
};

export default ProgressTracker;
