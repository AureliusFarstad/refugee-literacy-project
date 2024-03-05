import type { BottomSheetModalProps } from "@gorhom/bottom-sheet";
import { BottomSheetModal as GorhomBottomSheetModal } from "@gorhom/bottom-sheet";
import * as React from "react";

import { renderBackdrop } from "./bottom-sheet-modal-backdrop";
import { ModalHeader } from "./bottom-sheet-modal-header";
import type { ModalProps, ModalRef } from "./types";
import { View } from "react-native";

export const useBottomSheetModal = () => {
  const ref = React.useRef<GorhomBottomSheetModal>(null);
  const present = React.useCallback((data?: any) => {
    ref.current?.present(data);
  }, []);
  const dismiss = React.useCallback(() => {
    ref.current?.dismiss();
  }, []);
  return { ref, present, dismiss };
};

export const BottomSheetModal = React.forwardRef(
  (
    {
      snapPoints: _snapPoints = ["60%"],
      title,
      detached = false,
      ...props
    }: ModalProps,
    ref: ModalRef
  ) => {
    const detachedProps = React.useMemo(
      () => getDetachedProps(detached),
      [detached]
    );
    const modal = useBottomSheetModal();
    const snapPoints = React.useMemo(() => _snapPoints, [_snapPoints]);

    React.useImperativeHandle(
      ref,
      () => (modal.ref.current as GorhomBottomSheetModal) || null
    );

    const renderHandleComponent = React.useCallback(
      () => (
        <>
          <View className="mt-2 h-1 w-12 self-center rounded-lg bg-gray-400 dark:bg-gray-700" />
          <ModalHeader title={title} dismiss={modal.dismiss} />
        </>
      ),
      [title, modal.dismiss]
    );

    return (
      <GorhomBottomSheetModal
        {...props}
        {...detachedProps}
        ref={modal.ref}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={props.backdropComponent || renderBackdrop}
        handleComponent={renderHandleComponent}
      />
    );
  }
);

const getDetachedProps = (detached: boolean) => {
  if (detached) {
    return {
      detached: true,
      bottomInset: 46,
      style: { marginHorizontal: 16, overflow: "hidden" },
    } as Partial<BottomSheetModalProps>;
  }
  return {} as Partial<BottomSheetModalProps>;
};
