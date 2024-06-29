import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import type { ModalProps } from "react-native-modal";
import Modal from "react-native-modal";

type CustomModalProps = {
  style?: StyleProp<ViewStyle>;
  onRequestClose?: F1<boolean>;
};

export const CustomModal = ({
  style,
  children,
  ...props
}: CustomModalProps & Partial<ModalProps>) => (
  <View>
    <Modal {...props} useNativeDriverForBackdrop={true}>
      <View style={style}>{children}</View>
    </Modal>
  </View>
);
