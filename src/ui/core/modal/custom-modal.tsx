import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import { View } from "../view";

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
    <Modal {...props}>
      <View style={style}>{children}</View>
    </Modal>
  </View>
);
