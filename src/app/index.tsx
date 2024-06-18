import Illustration, { IllustrationName } from "@/ui/components/illustrations";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import {
  CheckIcon,
  DashesIcon,
  MultiLingualIcon,
  TeacherTipIllustration,
} from "@/ui/icons";

import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LESSONS = [
  {
    id: "lesson-1",
    image: "lesson-one-icon",
    title: "Lesson 1",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-introduction",
    isFinished: true,
  },
  {
    id: "lesson-2",
    image: "satpin-icon",
    title: "Lesson 2",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-introduction",
    isFinished: false,
  },
  {
    id: "lesson-3",
    image: "lesson-three-icon",
    title: "Lesson 3",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-introduction",
    isFinished: false,
  },
  {
    id: "lesson-4",
    image: "lesson-four-illustration",
    title: "Lesson 4",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-introduction",
    isFinished: false,
  },
  {
    id: "lesson-5",
    image: "lesson-five-illustration",
    title: "Lesson 5",
    description: "Introduction to the alphabet",
    path: "/(level-one)/letter-introduction",
    isFinished: false,
  },
];

const Home = () => {
  const [lessons, setLessons] = useState<ILesson[]>(LESSONS);
  const renderItem = ({ item }: { item: ILesson }) => {
    return (
      <View className="flex px-5">
        <View className="flex flex-row">
          <View className="bg-colors-green-500 w-12 h-12 rounded-full p-2 items-center justify-center">
            <MultiLingualIcon />
          </View>
          <View className="mx-auto">
            <Illustration name={item.image as IllustrationName} />
          </View>
          <View>
            <CheckIcon />
          </View>
        </View>
        <View className="absolute top-16 left-10">
          <DashesIcon />
        </View>
      </View>
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
                <TeacherTipIllustration />
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
