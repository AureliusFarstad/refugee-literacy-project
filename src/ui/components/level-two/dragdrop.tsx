import clsx from "clsx";
import type { AVPlaybackSource } from "expo-av";
import React, { useCallback, useEffect, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { State } from "react-native-gesture-handler";
import {
  runOnJS,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import useSound from "@/core/hooks/useSound";
import { EyeClosed, EyeOpen, SmallEarIcon } from "@/ui/icons";
import { WIDTH } from "@/utils/layout";
import type { DndProviderProps } from "@/vendor/react-native-dnd";
import { DndProvider, Draggable, Droppable } from "@/vendor/react-native-dnd";

import DynamicStroke from "./dynamic-strokes";

const OFFSET_VALUES_FOR_INDICES: {
  [key: number]: "first" | "second" | "third";
} = {
  0: "first",
  1: "second",
  2: "third",
};

type WordGameData = {
  options: {
    id: string;
    content: string;
  }[];
  correctAnswer: {
    word: string;
    alphabets: {
      id: string;
      content: string;
      audio: AVPlaybackSource;
    }[];
  };
};

type DragDropProps = {
  activeActivity: WordGameData;
  isLowercase: boolean;
};

type Item = {
  id: string;
  content: string;
};

export const DragDrop = ({ activeActivity, isLowercase }: DragDropProps) => {
  const dynamicData = useSharedValue<{
    items: Item[];
    elements: {
      first: Item | null;
      second: Item | null;
      third: Item | null;
    };
  }>({
    items: activeActivity.options,
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
  }, []);

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
    const currentAnswer =
      (elements.first?.content || "") +
      (elements.second?.content || "") +
      (elements.third?.content || "");

    const isCorrectAnswer = activeActivity.correctAnswer.word === currentAnswer;
    setIsCorrect(isCorrectAnswer);
  }, [dynamicData.value, activeActivity.correctAnswer.word]);

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
        <View className="mr-10  size-[64] bg-transparent" />

        {activeActivity.correctAnswer.alphabets.map((item, index) => {
          const offset: "first" | "second" | "third" =
            OFFSET_VALUES_FOR_INDICES[index];
          return (
            <Droppable
              key={item.id}
              id={item.id}
              className={clsx(
                "z-50 flex size-[64] items-center justify-center rounded-full ",
                {
                  "bg-[#8AC65B]": dynamicData.value.elements[offset]?.content,
                  "bg-[#F7D6DE] border-4 border-dashed border-[#F36889]":
                    !dynamicData.value.elements[offset]?.content,
                  "bg-red-500":
                    dynamicData.value.elements[offset] &&
                    dynamicData.value.elements[offset]?.content !==
                      item.content,
                },
              )}
            >
              <TouchableOpacity
                onPress={() => {
                  if (dynamicData.value.elements[offset]) {
                    onRemove(dynamicData.value.elements[offset]);
                  } else if (!isHintDisplayed) {
                    playSound(item.audio);
                  }
                }}
                className="size-[64] w-full items-center justify-center "
              >
                {isHintDisplayed ? (
                  <Text className="text-3xl font-medium">
                    {dynamicData.value.elements[offset]?.content
                      ? isLowercase
                        ? dynamicData.value.elements[
                            offset
                          ]?.content.toLowerCase()
                        : dynamicData.value.elements[offset]?.content
                      : isLowercase
                        ? item.content.toLowerCase()
                        : item.content}
                  </Text>
                ) : (
                  <>
                    {dynamicData.value.elements[offset]?.content ? (
                      <Text className="text-3xl font-medium">
                        {isLowercase
                          ? dynamicData.value.elements[
                              offset
                            ]?.content.toLowerCase()
                          : dynamicData.value.elements[offset]?.content}
                      </Text>
                    ) : (
                      <SmallEarIcon />
                    )}
                  </>
                )}
              </TouchableOpacity>
            </Droppable>
          );
        })}
        <TouchableOpacity
          className="ml-10 flex  size-[64] items-center justify-center "
          onPress={() => {
            setIsHintDisplayed(!isHintDisplayed);
          }}
        >
          <View className="size-10 items-center justify-center rounded-full bg-colors-green-500">
            {isHintDisplayed ? <EyeClosed /> : <EyeOpen />}
          </View>
        </TouchableOpacity>
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
                <Text className="text-3xl font-medium">
                  {isLowercase ? item.content.toLowerCase() : item.content}
                </Text>
              </Pressable>
            </Draggable>
          ))}
        </>
      </View>
    </DndProvider>
  );
};

export default DragDrop;
