import clsx from "clsx";
import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import React, { useEffect, useRef, useState } from "react";
import Svg, { Line } from "react-native-svg";

import { useLevelStore } from "@/core/store/levels";
import { Pressable, SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import {
  CustomPencilIcon,
  EarIcon,
  LettersNameIcon,
  SimplePencilIcon,
  TeacherIcon,
} from "@/ui/icons";
import { WIDTH } from "@/utils/layout";

const PageLinesSVG = () => {
  return (
    <Svg
      width={WIDTH - 16}
      height="143"
      viewBox={`0 0 ${WIDTH - 16} 143`}
      fill="none"
    >
      <Line
        x1="-9.00391"
        y1="141.295"
        x2={WIDTH - 16}
        y2="141.295"
        stroke="#E4E4E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <Line
        x1="-10.0039"
        y1="96.8115"
        x2={WIDTH - 16}
        y2="96.8115"
        stroke="#E4E4E7"
        strokeWidth="2"
      />
      <Line
        x1="-9.00391"
        y1="46.3955"
        x2={WIDTH - 16}
        y2="46.3955"
        stroke="#E4E4E7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />
      <Line
        x1="-10.0039"
        y1="1.91113"
        x2={WIDTH - 16}
        y2="1.91113"
        stroke="#E4E4E7"
        strokeWidth="2"
      />
    </Svg>
  );
};

const LetterIntroduction = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  const { levels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();
  // const [isUpdatingSession, setIsUpdatingSession] = useState(false);
  // const [tappedAnswer, setTappedAnswer] = useState<IOption>();

  const [activeActivity, setActiveActivity] = useState(
    levels[0].modules[0].sections[0].activities[0]
  );

  const activitiesInCurrentSection =
    levels[0].modules[0].sections[0].activities;

  const lowercaseWebView = useRef(null);
  const uppercaseWebView = useRef(null);

  const animateLowercase = () => {
    const jsCommand = `document.querySelector('svg').svgatorPlayer['ready']((player) => player.play()); true;`;
    console.log(jsCommand);
    // @ts-ignore
    lowercaseWebView.current?.injectJavaScript(jsCommand);
  };

  const animateUppercase = () => {
    const jsCommand = `document.querySelector('svg').svgatorPlayer['ready']((player) => player.play()); true;`;
    // @ts-ignore
    uppercaseWebView.current?.injectJavaScript(jsCommand);
  };

  const playSound = async (playbackSource: AVPlaybackSource) => {
    try {
      const { sound: soundResponse } = await Audio.Sound.createAsync(
        playbackSource
      );
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
    <SafeAreaView className="flex-1">
      <Header title="Introduction" modalRef={dynamicModalRef} />
      <View>
        <View className="flex items-center justify-center">
          <View className="flex flex-row rounded-full bg-colors-purple-200 p-4">
            <Pressable
              onPress={() => playSound(activeActivity.sound.phoneticAudioSrc)}
              className="mr-5 flex size-[80] items-center justify-center rounded-full bg-colors-purple-500"
            >
              <EarIcon />
            </Pressable>
            <Pressable
              onPress={() => playSound(activeActivity.sound.alphabeticAudioSrc)}
              className="flex size-[80] items-center justify-center rounded-full bg-colors-purple-500"
            >
              <LettersNameIcon />
            </Pressable>
          </View>
        </View>
        <View className="mx-4 mt-5  overflow-hidden">
          <PageLinesSVG />
        </View>
      </View>
      <View className="my-10 flex flex-row items-center justify-evenly">
        <Pressable onPress={() => animateLowercase()}>
          <CustomPencilIcon size={56} border={true} />
        </Pressable>
        <SimplePencilIcon width={60} height={60} />
        <Pressable onPress={() => animateUppercase()}>
          <CustomPencilIcon size={44} />
        </Pressable>
      </View>
      <View className="flex flex-row justify-between">
        <View className="mt-20 flex w-full flex-row items-center justify-around px-[10px]">
          {activitiesInCurrentSection.map((activity, index) => (
            <Pressable
              className={clsx(
                "flex size-[60] items-center justify-center rounded-md ",
                {
                  "bg-colors-gray-300": activity.id !== activeActivity.id,
                  "bg-colors-purple-500": activity.id === activeActivity.id,
                }
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
      <DynamicModal ref={dynamicModalRef}>
        <View className="rounded-lg bg-white p-4">
          <Text>Letter introduction activity</Text>
          <View className="flex h-20 items-center justify-center">
            <TeacherIcon />
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

export default LetterIntroduction;
