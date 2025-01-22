import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LESSONS } from "@/constants/routes";
import ProgressBar from "@/ui/components/home/progress-bar";
import { HOME_BANNER_IMAGE } from "@/ui/components/illustrations/home";
import { FocusAwareStatusBar } from "@/ui/focus-aware-status-bar";
import { CheckIcon, DashesIcon, MultiLingualIcon } from "@/ui/icons";
import { WIDTH } from "@/utils/layout";

const HomeHeader = () => {
  return (
    <Pressable
      onPress={() => {
        router.push("/welcome-screen-modal");
      }}
    >
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
      <View className="mb-10 hidden bg-colors-green-500">
        <Text className="py-2 text-center text-4xl text-white">1</Text>
      </View>
    </Pressable>
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
    <SafeAreaView className="flex-1   bg-white">
      <FocusAwareStatusBar />
      <Pressable
        className="hidden bg-colors-green-500 p-5"
        onPress={() => {
          router.push("/(level-three)/listening");
        }}
      >
        <Text>Listening activity</Text>
      </Pressable>
      <Pressable
        className="hidden bg-colors-green-500 p-5"
        onPress={() => {
          router.push("/audio-ordering");
        }}
      >
        <Text>audio ordering</Text>
      </Pressable>
      <Pressable
        className="hidden bg-colors-green-500 p-5"
        onPress={() => {
          router.push("/picture-multiple-choice");
        }}
      >
        <Text>picture</Text>
      </Pressable>
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
