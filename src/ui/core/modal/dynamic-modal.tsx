import React, { forwardRef, useImperativeHandle } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import { View } from "../view";
import { useBooleanState } from "@/core/hooks/useBooleanState";
import { IS_IOS } from "@/utils/layout";

type DynamicModalProps = {
  style?: StyleProp<ViewStyle>;
  onRequestClose?: F1<boolean>;
};

export type DynamicModalRefType = {
  showCoolestModal: () => void;
  hideCoolestModal: () => void;
};

export const DynamicModal = forwardRef<
  DynamicModalRefType,
  DynamicModalProps & Partial<ModalProps>
>(({ style, children, ...props }, ref) => {
  const [
    isCoolestModalVisible,
    { setFalse: _hideCoolestModal, setTrue: _showCoolestModal },
  ] = useBooleanState(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        showCoolestModal: () => {
          _showCoolestModal();
        },
        hideCoolestModal: () => {
          _hideCoolestModal();
        },
      };
    },
    []
  );

  return (
    <View>
      <Modal
        {...props}
        style={{
          marginTop: IS_IOS ? 30 : 0,
        }}
        backdropColor={"rgba(0, 0, 0, 0.4)"}
        backdropOpacity={1}
        isVisible={isCoolestModalVisible}
        onBackdropPress={_hideCoolestModal}
        onBackButtonPress={_hideCoolestModal}
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
      >
        <View style={style}>{children}</View>
      </Modal>
    </View>
  );
});
