import { RootNavigator } from "@/navigation";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ReactNativeModalProvider } from "./core/context/react-native-modal-provider";

const App = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <BottomSheetModalProvider>
        <ReactNativeModalProvider>
          <RootNavigator />
        </ReactNativeModalProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
