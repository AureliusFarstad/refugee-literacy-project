import type { DndProviderProps } from "@mgcrea/react-native-dnd";
import { DndProvider, Draggable, Droppable } from "@mgcrea/react-native-dnd";
import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { State } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import { useDerivedValue } from "react-native-reanimated";

interface Item {
  id: string;
  content: string;
}

const initialItems: Item[] = [
  { id: "item1", content: "N" },
  { id: "item2", content: "A" },
  { id: "item3", content: "P" },
];

const correctOrder = ["P", "A", "N"];

export const DragDropQuiz = () => {
  const dynamicData = useSharedValue<{
    items: Item[];
    droppedItems: Item[];
  }>({ items: initialItems, droppedItems: [] });
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDragEnd: DndProviderProps["onDragEnd"] = ({ active, over }) => {
    "worklet";
    if (over && over.id === "dropzone" && typeof active.id === "string") {
      const draggedItem = dynamicData.value.items.find(
        (item) => item.id === active.id
      );
      if (draggedItem) {
        dynamicData.modify((value) => {
          value.items = value.items.filter((item) => item.id !== active.id);
          value.droppedItems = [...value.droppedItems, draggedItem];
          return value;
        });
        runOnJS(updateCounter)();
      }
    }
  };

  const handleBegin: DndProviderProps["onBegin"] = () => {
    "worklet";
    console.log("onBegin");
  };

  const handleFinalize: DndProviderProps["onFinalize"] = ({ state }) => {
    "worklet";
    if (state !== State.FAILED) {
      console.log("Drag operation completed successfully");
    }
  };

  const checkOrder = useCallback(() => {
    const currentOrder = dynamicData.value.droppedItems.map(
      (item) => item.content
    );
    setIsCorrect(JSON.stringify(currentOrder) === JSON.stringify(correctOrder));
  }, [dynamicData]);

  const items = useDerivedValue(() => dynamicData.value.items, [dynamicData]);
  const droppedItems = useDerivedValue(
    () => dynamicData.value.droppedItems,
    [dynamicData]
  );

  return (
    <DndProvider
      onDragEnd={handleDragEnd}
      onBegin={handleBegin}
      onFinalize={handleFinalize}
      style={{ height: 600 }}
    >
      <Text style={styles.title}>Drag and Drop Quiz</Text>
      <Text style={styles.instructions}>
        Arrange the letters in the correct order: P, A, N
      </Text>
      <View style={styles.itemsContainer}>
        {items.value.map((item) => (
          <Draggable key={item.id} id={item.id}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.content}</Text>
            </View>
          </Draggable>
        ))}
      </View>
      <Droppable id="dropzone" style={styles.dropzone}>
        {droppedItems.value.length === 0 ? (
          <Text style={styles.dropzoneText}>Drag and drop here</Text>
        ) : (
          <View style={styles.droppedItemsContainer}>
            {droppedItems.value.map((item) => (
              <View key={item.id} style={styles.item}>
                <Text style={styles.itemText}>{item.content}</Text>
              </View>
            ))}
          </View>
        )}
      </Droppable>
      <TouchableOpacity style={styles.button} onPress={checkOrder}>
        <Text style={styles.buttonText}>Check Order</Text>
      </TouchableOpacity>
      {isCorrect !== null && (
        <Text
          style={[styles.result, isCorrect ? styles.correct : styles.incorrect]}
        >
          {isCorrect ? "Correct order!" : "Incorrect order. Try again!"}
        </Text>
      )}
    </DndProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    zIndex: 40,
  },
  item: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3498db",
    borderRadius: 8,
  },
  itemText: {
    fontSize: 24,
    color: "#fff",
  },
  dropzone: {
    height: 100,
    borderWidth: 2,
    borderColor: "#2ecc71",
    borderStyle: "dashed",
    borderRadius: 8,
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  dropzoneText: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  button: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  correct: {
    color: "#2ecc71",
  },
  incorrect: {
    color: "#e74c3c",
  },
  droppedItemsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  resetButton: {
    backgroundColor: "#e74c3c",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
});

export default DragDropQuiz;
