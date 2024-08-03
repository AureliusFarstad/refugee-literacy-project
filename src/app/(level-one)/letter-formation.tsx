import clsx from "clsx";
import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import React, { useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useLevelStore } from "@/core/store/levels";
import { Pressable, SafeAreaView, Text, TouchableOpacity, View } from "@/ui";
import AlphabetTracing from "@/ui/components/home/alphabet-tracing";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { EarIcon, LettersNameIcon, PencilIcon } from "@/ui/icons";
import { HEIGHT, IS_IOS } from "@/utils/layout";

const LetterFormation = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);
  const { levels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();

  const insets = useSafeAreaInsets();

  const [activeActivity, setActiveActivity] = useState(
    levels[0].modules[0].sections[1].activities[0],
  );

  const activitiesInCurrentSection =
    levels[0].modules[0].sections[1].activities;

  const playSound = async (playbackSource: AVPlaybackSource) => {
    try {
      const { sound: soundResponse } =
        await Audio.Sound.createAsync(playbackSource);
      if (soundResponse) {
        setSound(soundResponse);
      }
      console.log("Playing Sound");
      await soundResponse.playAsync();
    } catch (error) {
      console.log("error in playSound", error);
      throw error;
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound, activeActivity]);

  return (
    <SafeAreaView>
      <Header title="Formation" modalRef={dynamicModalRef} />
      <View
        style={{
          height:
            HEIGHT - (insets.bottom + insets.top + 90 + (IS_IOS ? 96 : 112)),
        }}
      >
        <View className="flex items-center justify-between">
          <View className="flex flex-row items-center justify-between  rounded-full bg-colors-purple-200 p-4">
            <TouchableOpacity
              onPress={() => playSound(activeActivity.sound.alphabeticAudioSrc)}
              className="mr-2 flex size-[80] items-center justify-center rounded-full  bg-colors-purple-500"
            >
              <LettersNameIcon />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => playSound(activeActivity.sound.phoneticAudioSrc)}
              className=" flex size-[80] items-center justify-center rounded-full  bg-colors-purple-500"
            >
              <EarIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View className="relative h-full ">
          <AlphabetTracing letter={activeActivity.letter.upperCase} />
        </View>
        <View className="mt-auto ">
          <View>{/* <View className="mx-4 mt-5  overflow-hidden" /> */}</View>
          <View className=" flex flex-row justify-between ">
            <View className="mt-16 flex w-full flex-row items-center justify-around px-[10px]">
              {activitiesInCurrentSection.map((activity, index) => (
                <Pressable
                  className={clsx(
                    "flex size-[60] items-center justify-center rounded-md ",
                    {
                      "bg-colors-gray-300": activity.id !== activeActivity.id,
                      "bg-colors-purple-500": activity.id === activeActivity.id,
                    },
                  )}
                  onPress={() => {
                    /**
                     * update current activity
                     */
                    setActiveActivity(activity);
                  }}
                  key={index}
                >
                  <Text className="text-[24px] text-white">
                    {activity.letter.upperCase}
                    {activity.letter.lowerCase}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </View>

      <DynamicModal ref={dynamicModalRef}>
        <View className="rounded-lg bg-white p-4">
          <Text>Letter formation activity</Text>
          <View className="flex h-20 items-center justify-center">
            <PencilIcon />
          </View>
          <Text className="mt-4">
            Start your language learning adventure. Let A, B, C, and D be the
            building blocks of your multilingual journey!
          </Text>
        </View>
      </DynamicModal>
    </SafeAreaView>
  );
};

export default LetterFormation;
