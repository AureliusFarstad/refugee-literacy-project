import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { State } from "react-native-gesture-handler";
import { runOnJS, useSharedValue } from "react-native-reanimated";
import { useDerivedValue } from "react-native-reanimated";

import useSound from "@/core/hooks/useSound";
import { SmallEarIcon } from "@/ui/icons";
import { WIDTH } from "@/utils/layout";
import type { DndProviderProps } from "@/vendor/react-native-dnd";
import { DndProvider, Draggable, Droppable } from "@/vendor/react-native-dnd";

import DynamicStroke from "./dynamic-strokes";

interface Item {
  id: string;
  content: string;
}

const initialItems: Item[] = [
  { id: "item0", content: "N" },
  { id: "item1", content: "A" },
  { id: "item2", content: "I" },
  { id: "item3", content: "T" },
  { id: "item4", content: "P" },
];

const correctAnswers = [
  {
    id: "item0",
    content: "P",
    audio: require("assets/audio/alphabet/name/p.mp3"),
  },
  {
    id: "item1",
    content: "A",
    audio: require("assets/audio/alphabet/name/a.mp3"),
  },
  {
    id: "item2",
    content: "N",
    audio: require("assets/audio/alphabet/name/n.mp3"),
  },
];

const OFFSET_VALUES_FOR_INDICES: {
  [key: number]: "first" | "second" | "third";
} = {
  0: "first",
  1: "second",
  2: "third",
};

export const DragDropQuiz = () => {
  const dynamicData = useSharedValue<{
    items: Item[];
    elements: {
      first: Item | null;
      second: Item | null;
      third: Item | null;
    };
  }>({
    items: initialItems,
    elements: {
      first: null,
      second: null,
      third: null,
    },
  });
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [, setCounter] = useState(0);
  const [isHintDisplayed, setIsHintDisplayed] = useState(false);

  const { playSound } = useSound();

  const updateCounter = useCallback(() => {
    setCounter((prev) => prev + 1);
  }, [setCounter]);

  const handleDragEnd: DndProviderProps["onDragEnd"] = ({ active, over }) => {
    "worklet";
    if (over) {
      const draggedItem = dynamicData.value.items.find(
        (item) => item.id === active.id,
      );

      dynamicData.modify((value) => {
        if (
          !value.elements.first &&
          over.id.toString().includes("0") &&
          draggedItem
        ) {
          value.elements.first = draggedItem;
          value.items = value.items.filter((item) => item.id !== active.id);
        } else if (
          !value.elements.second &&
          over.id.toString().includes("1") &&
          draggedItem
        ) {
          value.elements.second = draggedItem;
          value.items = value.items.filter((item) => item.id !== active.id);
        } else if (
          !value.elements.third &&
          over.id.toString().includes("2") &&
          draggedItem
        ) {
          value.elements.third = draggedItem;
          value.items = value.items.filter((item) => item.id !== active.id);
        }
        return value;
      });
      runOnJS(updateCounter)();
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
    "worklet";
    const elements = dynamicData.value.elements;
    const isCorrectAnswer =
      elements.first?.content === "P" &&
      elements.second?.content === "A" &&
      elements.third?.content === "N";
    setIsCorrect(isCorrectAnswer);
  }, [dynamicData.value]);

  const items = useDerivedValue(() => dynamicData.value.items, [dynamicData]);

  const onTapping = useCallback(
    (item: Item) => {
      "worklet";
      const updatedElements = dynamicData.value.elements;
      let updatedItems = dynamicData.value.items;
      if (!updatedElements.first) {
        updatedElements.first = item;
        updatedItems = dynamicData.value.items.filter(
          (_item) => _item.id !== item.id,
        );
      } else if (!updatedElements.second) {
        updatedElements.second = item;
        updatedItems = dynamicData.value.items.filter(
          (_item) => _item.id !== item.id,
        );
      } else if (!updatedElements.third) {
        updatedElements.third = item;
        updatedItems = dynamicData.value.items.filter(
          (_item) => _item.id !== item.id,
        );
      }
      dynamicData.value = {
        items: updatedItems,
        elements: {
          ...updatedElements,
        },
      };
      runOnJS(updateCounter)();
    },
    [updateCounter, dynamicData],
  );

  const onRemove = useCallback(
    (item: Item) => {
      "worklet";
      const updatedElements = dynamicData.value.elements;
      let updatedItems = dynamicData.value.items;
      if (updatedElements.first?.id === item.id) {
        updatedElements.first = null;
        updatedItems = [...dynamicData.value.items, item];
      } else if (updatedElements.second?.id === item.id) {
        updatedElements.second = null;
        updatedItems = [...dynamicData.value.items, item];
      } else if (updatedElements.third?.id === item.id) {
        updatedElements.third = null;
        updatedItems = [...dynamicData.value.items, item];
      }
      dynamicData.value = {
        items: updatedItems,
        elements: updatedElements,
      };
      runOnJS(updateCounter)();
    },
    [dynamicData, updateCounter],
  );

  useEffect(() => {
    checkOrder();
  }, [dynamicData.value, checkOrder]);

  return (
    <DndProvider
      onDragEnd={handleDragEnd}
      onBegin={handleBegin}
      onFinalize={handleFinalize}
      style={{ height: 400, width: WIDTH }}
    >
      <View className="mb-10 mt-24 flex flex-row justify-center">
        {correctAnswers.map((item, index) => {
          const offset: "first" | "second" | "third" =
            OFFSET_VALUES_FOR_INDICES[index];
          return (
            <Droppable
              key={item.id}
              id={item.id}
              className={clsx(
                "z-50 mx-1 flex size-[64] items-center justify-center rounded-full ",
                {
                  "bg-[#F36889]": dynamicData.value.elements[offset]?.content,
                  "bg-[#F7D6DE] border-4 border-dashed border-[#F36889]":
                    !dynamicData.value.elements[offset]?.content,
                },
              )}
            >
              <Pressable
                onPress={() => {
                  if (dynamicData.value.elements[offset]) {
                    onRemove(dynamicData.value.elements[offset]);
                  }
                }}
                className="size-[64] w-full items-center justify-center "
              >
                {isHintDisplayed &&
                !dynamicData.value.elements[offset]?.content ? (
                  <TouchableOpacity
                    onPress={() => {
                      playSound(item.audio);
                    }}
                  >
                    <SmallEarIcon />
                  </TouchableOpacity>
                ) : (
                  <Text
                    style={styles.itemText}
                    className={clsx("font-medium text-black", {})}
                  >
                    {dynamicData.value.elements[offset]?.content}
                  </Text>
                )}
              </Pressable>
            </Droppable>
          );
        })}
      </View>

      {isCorrect ? (
        <Text>Done</Text>
      ) : (
        <Pressable onPress={checkOrder}>
          <Text>Check</Text>
        </Pressable>
      )}
      {!isHintDisplayed ? (
        <Pressable
          onPress={() => {
            setIsHintDisplayed(true);
          }}
        >
          <Text>Show hints</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            setIsHintDisplayed(false);
          }}
        >
          <Text>Hide hints</Text>
        </Pressable>
      )}

      <View className="z-50 mt-10 flex size-full flex-row flex-wrap justify-evenly gap-6 bg-[#F7D6DE] p-8 px-16">
        <>
          <DynamicStroke />
          {items.value.map((item) => (
            <Draggable key={item.id} id={item.id} data={item}>
              <Pressable
                className={clsx(
                  "flex size-[60] items-center justify-center rounded-full bg-[#F36889]",
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
