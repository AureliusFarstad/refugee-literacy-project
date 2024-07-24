import type { DndProviderProps } from "@mgcrea/react-native-dnd";
import { DndProvider, Draggable, Droppable } from "@mgcrea/react-native-dnd";
import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { State } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import { useDerivedValue } from "react-native-reanimated";

import { WIDTH } from "@/utils/layout";

import DynamicStroke from "./dynamic-strokes";

interface Item {
  id: string;
  content: string;
}

const initialItems: Item[] = [
  { id: "item1", content: "N" },
  { id: "item2", content: "A" },
  { id: "item4", content: "I" },
  { id: "item5", content: "T" },
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

  const updateCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, [setCounter]);

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
  }, [dynamicData.value]);

  const items = useDerivedValue(() => dynamicData.value.items, [dynamicData]);
  const droppedItems = useDerivedValue(
    () => dynamicData.value.droppedItems,
    [dynamicData]
  );

  useEffect(() => {
    if (droppedItems.value.length === 3) {
      checkOrder();
    }
  }, [droppedItems.value, checkOrder]);

  const onTapping = useCallback(
    (item: Item) => {
      "worklet";
      dynamicData.value = {
        items: dynamicData.value.items.filter((_item) => _item.id !== item.id),
        droppedItems: [...dynamicData.value.droppedItems, item],
      };
      runOnJS(updateCounter)();
    },
    [dynamicData, updateCounter]
  );

  const onRemove = useCallback(
    (item: Item) => {
      "worklet";
      dynamicData.value = {
        items: dynamicData.value.items.filter((_item) => _item.id !== item.id),
        droppedItems: [...dynamicData.value.droppedItems, item],
      };
      runOnJS(updateCounter)();
    },
    [dynamicData, updateCounter]
  );

  return (
    <DndProvider
      onDragEnd={handleDragEnd}
      onBegin={handleBegin}
      onFinalize={handleFinalize}
      style={{ height: 400, width: WIDTH }}
    >
      <Droppable
        id="dropzone"
        style={styles.dropzone}
        className={"mx-auto  w-[280] "}
      >
        <View style={styles.droppedItemsContainer} className="mx-auto w-full">
          {droppedItems.value.map((item) => (
            <Pressable
              key={item.id}
              className="z-50 mx-4 flex size-[64] items-center justify-center rounded-full bg-[#F36889]"
              onPress={() => onRemove(item)}
            >
              <Text style={styles.itemText}>{item.content}</Text>
            </Pressable>
          ))}
          <View className="absolute flex flex-row">
            <View
              className={clsx(
                "-z-10 mx-4 flex size-[64] items-center justify-center rounded-full  bg-transparent"
              )}
            >
              <View className=" size-16 rounded-full border-2 border-dashed border-[#F36889] bg-[#F7D6DE]" />
            </View>
            <View
              className={clsx(
                "-z-10 mx-4 flex size-[64] items-center justify-center rounded-full  bg-transparent"
              )}
            >
              <View className="   size-16 rounded-full border-2 border-dashed border-[#F36889] bg-[#F7D6DE]" />
            </View>
            <View
              className={clsx(
                "-z-10 mx-4 flex size-[64] items-center justify-center rounded-full  bg-transparent"
              )}
            >
              <View className=" size-16 rounded-full  border-2 border-dashed border-[#F36889] bg-[#F7D6DE]" />
            </View>
          </View>
        </View>
      </Droppable>
      {isCorrect ? (
        <Text>Done</Text>
      ) : (
        <Pressable onPress={checkOrder}>
          <Text>Check</Text>
        </Pressable>
      )}
      <View className="z-50 mt-10 flex size-full flex-row flex-wrap justify-evenly gap-6 bg-[#F7D6DE] p-8 px-16">
        <>
          <DynamicStroke />
          {items.value.map((item) => (
            <Draggable key={item.id} id={item.id}>
              <Pressable
                className={clsx(
                  "flex size-[60] items-center justify-center rounded-full bg-[#F36889]"
                )}
                onPress={() => onTapping(item)}
              >
                <Text style={styles.itemText}>{item.content}</Text>
              </Pressable>
            </Draggable>
          ))}
        </>
      </View>
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
    height: 80,
  },
  item: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F36889",
    borderRadius: 8,
  },
  itemText: {
    fontSize: 24,
    color: "#fff",
  },
  dropzone: {
    height: 100,
    borderColor: "#2ecc71",
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
    // justifyContent: "center",
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
