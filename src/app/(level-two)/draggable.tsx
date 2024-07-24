import type { DndProviderProps } from "@mgcrea/react-native-dnd";
import { DndProvider, Draggable, Droppable } from "@mgcrea/react-native-dnd";
import { type FunctionComponent, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { State } from "react-native-gesture-handler";

const DraggableScreen: FunctionComponent = () => {
  const handleDragEnd: DndProviderProps["onDragEnd"] = ({ active, over }) => {
    "worklet";
    if (over) {
      console.log("onDragEnd", { active, over });
    }
  };

  const handleBegin: DndProviderProps["onBegin"] = () => {
    "worklet";
    console.log("onBegin");
  };

  const handleFinalize: DndProviderProps["onFinalize"] = ({ state }) => {
    "worklet";
    console.log("onFinalize");
    if (state !== State.FAILED) {
      console.log("onFinalize");
    }
  };

  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <Pressable onPress={() => setCount((prev) => prev + 1)}>
        <Text>Count: {count}</Text>
      </Pressable>
      <DndProvider
        onBegin={handleBegin}
        onFinalize={handleFinalize}
        onDragEnd={handleDragEnd}
        style={{
          borderWidth: 4,
        }}
      >
        <Droppable id="drop" style={styles.box}>
          <Text>DROP</Text>
        </Droppable>
        <Draggable id="drag" style={styles.box}>
          <Text>DRAG</Text>
        </Draggable>
      </DndProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 24,
    padding: 24,
    height: 128,
    width: 128,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkseagreen",
  },
});

export default DraggableScreen;
