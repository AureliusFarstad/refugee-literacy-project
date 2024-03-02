import { useBooleanState } from "@/core/hooks/useBooleanState";
import React, { forwardRef, useImperativeHandle } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Modal, { ModalProps } from "react-native-modal";
import { View } from "../view";

type DynamicModalProps = {
  style?: StyleProp<ViewStyle>;
  onRequestClose?: F1<boolean>;
};

export const DynamicModal = forwardRef<
  DynamicModalRefType,
  DynamicModalProps & Partial<ModalProps>
>(({ style, children, ...props }, ref) => {
  const [
    isDynamicModalVisible,
    { setFalse: _hideDynamicModal, setTrue: _showDynamicModal },
  ] = useBooleanState(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        showDynamicModal: () => {
          _showDynamicModal();
        },
        hideDynamicModal: () => {
          _hideDynamicModal();
        },
      };
    },
    []
  );

  return (
    <View>
      {isDynamicModalVisible && (
        <Modal
          {...props}
          backdropColor={"rgba(0, 0, 0, 0.4)"}
          backdropOpacity={1}
          isVisible={isDynamicModalVisible}
          onBackdropPress={_hideDynamicModal}
          onBackButtonPress={_hideDynamicModal}
          useNativeDriverForBackdrop={true}
          hideModalContentWhileAnimating={true}
          backdropTransitionOutTiming={0}
        >
          <View style={style}>{children}</View>
        </Modal>
      )}
    </View>
  );
});
