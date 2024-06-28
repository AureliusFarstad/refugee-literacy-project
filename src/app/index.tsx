import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { CheckIcon, DashesIcon, MultiLingualIcon } from "@/ui/icons";
import { Image } from "expo-image";

import ProgressBar from "@/ui/components/home/progress-bar";
import {
  HOME_BANNER_IMAGE,
  LESSON_FOUR_IMAGE,
  LESSON_ONE_IMAGE,
  LESSON_THREE_IMAGE,
  LESSON_TWO_IMAGE,
  TEACHER_TIP_IMAGE,
} from "@/ui/components/illustrations/home";
import { WIDTH } from "@/utils/layout";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LESSONS = [
  {
    id: "teacher-tip",
    image: TEACHER_TIP_IMAGE,
    title: "Teacher tip",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-formation",
    isFinished: true,
    progressBarColor: "bg-[#2B4AB0]",
  },
  {
    id: "lesson-1",
    image: LESSON_ONE_IMAGE,
    title: "Lesson 1",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-name",
    isFinished: false,
    progressBarColor: "bg-[#6D28D9]",
  },
  {
    id: "lesson-2",
    image: LESSON_TWO_IMAGE,
    title: "Lesson 2",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-sound",
    isFinished: false,
    progressBarColor: "bg-[#B43855]",
  },
  {
    id: "lesson-3",
    image: LESSON_THREE_IMAGE,
    title: "Lesson 3",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-introduction",
    isFinished: false,
    progressBarColor: "bg-[#CA8A04]",
  },
  {
    id: "lesson-4",
    image: LESSON_FOUR_IMAGE,
    title: "Lesson 4",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-introduction",
    isFinished: false,
    progressBarColor: "bg-[#C07027]",
  },
];

const Home = () => {
  const [lessons, setLessons] = useState<ILesson[]>(LESSONS);
  const renderItem = ({ item }: { item: ILesson }) => {
    return (
      <Pressable
        className="flex px-5"
        onPress={() => {
          router.push(item.path);
        }}
      >
        <View className="flex flex-row">
          <View className="bg-colors-green-500 w-12 h-12 rounded-full p-2 items-center justify-center">
            <MultiLingualIcon />
          </View>
          <View className="mx-auto relative">
            <Image
              source={item.image}
              style={{
                width: WIDTH,
                height: 180,
                aspectRatio: 1.3,
                borderRadius: 10,
              }}
            />
            <ProgressBar progress={10} color={item.progressBarColor} />
          </View>
          <View>
            <CheckIcon />
          </View>
        </View>
        <View className="absolute top-16 left-10">
          <DashesIcon />
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView className="flex-1">
      <FocusAwareStatusBar />

      <View className="py-10">
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View className="w-full flex items-center mb-10">
                <View className="">
                  <Image
                    source={HOME_BANNER_IMAGE}
                    style={{
                      width: WIDTH - 32,
                      height: 200,
                    }}
                  />
                </View>
              </View>
              <View className="bg-colors-green-500 mb-10">
                <Text className="text-white text-center text-4xl py-2">1</Text>
              </View>
            </>
          )}
          data={LESSONS}
          renderItem={renderItem}
          keyExtractor={(_) => _.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="my-8" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
