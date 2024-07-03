import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProgressBar from "@/ui/components/home/progress-bar";
import {
  HOME_BANNER_IMAGE,
  LESSON_FOUR_IMAGE,
  LESSON_ONE_IMAGE,
  LESSON_THREE_IMAGE,
  LESSON_TWO_IMAGE,
  TEACHER_TIP_IMAGE,
} from "@/ui/components/illustrations/home";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { CheckIcon, DashesIcon, MultiLingualIcon } from "@/ui/icons";
import { WIDTH } from "@/utils/layout";

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

const HomeHeader = () => {
  return (
    <>
      <View className="mb-10 flex w-full items-center">
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
      <View className="mb-10 bg-colors-green-500">
        <Text className="py-2 text-center text-4xl text-white">1</Text>
      </View>
    </>
  );
};

const Separator = () => <View className="my-8" />;

const Home = () => {
  // const [lessons, setLessons] = useState<ILesson[]>(LESSONS);
  const renderItem = ({ item }: { item: ILesson }) => {
    return (
      <Pressable
        className="flex px-5"
        onPress={() => {
          router.push(item.path as never);
          // router.push("/modal")
        }}
      >
        <View className="flex flex-row">
          <View className="size-12 items-center justify-center rounded-full bg-colors-green-500 p-2">
            <MultiLingualIcon />
          </View>
          <View className="relative mx-auto">
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
        <View className="absolute left-10 top-16">
          <DashesIcon />
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView className="flex-1 border-4 border-pink-500 bg-white">
      <FocusAwareStatusBar />

      <View className="py-10">
        <FlatList
          ListHeaderComponent={HomeHeader}
          data={LESSONS}
          renderItem={renderItem}
          keyExtractor={(_) => _.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
