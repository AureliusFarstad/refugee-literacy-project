import "react-native-gesture-handler";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootNavigator } from "@/navigation";
import { ReactNativeModalProvider } from "./core/react-native-modal-provider";

const App = () => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
      }}
    >
      <ReactNativeModalProvider>
        <RootNavigator />
      </ReactNativeModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
