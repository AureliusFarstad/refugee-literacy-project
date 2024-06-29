import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function ModalScreen() {
  const { correctOption } = useLocalSearchParams();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-4xl font-bold text-white">{correctOption}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C385F8", // Header background color
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    backgroundColor: "#C385F8", // Light purple color
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
