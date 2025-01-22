import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { Text } from "@/ui";

export default function ModalScreen() {
  const { correctOption } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-8xl font-bold text-white">{correctOption}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C385F8",
  },
});
