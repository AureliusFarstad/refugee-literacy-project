import React from "react";
import { View, StyleSheet, Modal, Text, Image } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

function ResultScreen({ visible = false, source, title }) {
  return (
    <Modal visible={visible}>
      <View className="flex-1 items-center justify-center w-full">
        <LottieView
          source={source}
          autoPlay
          className="flex-1 justify-center items-center"
          style={{ backgroundColor: colors.background }}
        />
        <Text>{title}</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ResultScreen;
