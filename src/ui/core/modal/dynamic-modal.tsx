import React, { forwardRef, useImperativeHandle } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { View } from "react-native";
import type { ModalProps } from "react-native-modal";
import Modal from "react-native-modal";

import { useBooleanState } from "@/core/hooks/useBooleanState";

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
    [_hideDynamicModal, _showDynamicModal]
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
