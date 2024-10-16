import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { Text } from "@/ui";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex flex-1 items-center justify-center">
        <Text>Teacher tip modal</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
