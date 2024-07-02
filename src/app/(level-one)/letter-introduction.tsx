import LowerA from "assets/animation/a-animated";
import type { AVPlaybackSource } from "expo-av";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import React, { useEffect, useRef, useState } from "react";

import { useLevelStore } from "@/core/store/levels";
import { SafeAreaView, Text, TouchableOpacity, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import {
  EarIcon,
  HandwritingIcon,
  NameIcon,
  SpeakerIcon,
  SqFrameIcon,
  TeacherIcon,
} from "@/ui/icons";

const LetterIntroduction = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

  const { levels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();
  // const [isUpdatingSession, setIsUpdatingSession] = useState(false);
  // const [tappedAnswer, setTappedAnswer] = useState<IOption>();

  const [activeActivity] = useState(
    levels[0].modules[0].sections[0].activities[0]
  );

  const [selectedLetter, setSelectedLetter] = useState("a");

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
  }, [sound]);

  return (
    <SafeAreaView className="flex-1">
      <Header title="Introduction" modalRef={dynamicModalRef} />
      <View className="p-4">
        {/* Hand written letters section */}
        <View className="relative h-[200px] bg-white">
          {/* Outside solid blue lines */}
          <View className="relative top-[40px] h-[120px] border-y border-[#7747FF]/50">
            {/* Row of letters */}
            <View className="z-100 top-0 flex h-[120px] flex-row justify-around px-[50px]">
              <View className="h-[120px] w-[60px]">
                <LowerA ref={lowercaseWebView} />
              </View>
              <View className="h-[120px] w-[60px]">
                <LowerA ref={uppercaseWebView} />
              </View>
            </View>
            {/* Inner solid blue lines */}
            <View className="z-100 absolute inset-x-0 top-[40px] h-[40px] border-y border-[#7747FF]/50" />
          </View>

          {/* Animate writing button */}
          <TouchableOpacity
            className="absolute left-[30px] top-[150px] flex size-[60px] items-center justify-center rounded-full border-2 border-[#ADD590] bg-white"
            onPress={animateLowercase}
          >
            <View className="aspect-square w-[42px]">
              <HandwritingIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="absolute right-[30px] top-[150px] flex size-[60px] items-center justify-center rounded-full border-2 border-[#ADD590] bg-white"
            onPress={animateUppercase}
          >
            <View className="aspect-square w-[42px]">
              <HandwritingIcon />
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-colum mt-10 flex gap-y-[20px]">
          {/* Sound Button */}
          <View className="mx-auto flex flex-row items-center gap-x-[12px]">
            <TouchableOpacity className="aspect-square w-[40px]">
              <SpeakerIcon />
            </TouchableOpacity>
            <TouchableOpacity className="flex h-[80px] w-[200px] flex-row items-center justify-around rounded-full bg-[#dce1cd] px-[15px]">
              <Text>Sound</Text>
              <View className="aspect-square w-[70px]">
                <EarIcon />
              </View>
              <Text>صدا</Text>
            </TouchableOpacity>
          </View>
          {/* Name Button */}
          <View className="mx-auto flex flex-row items-center gap-x-[12px]">
            <TouchableOpacity
              className="aspect-square w-[40px]"
              onPress={() => {
                playSound(activeActivity.sound.letterSoundSrc);
              }}
            >
              <SpeakerIcon />
            </TouchableOpacity>
            <TouchableOpacity
              className="flex h-[80px] w-[200px] flex-row items-center justify-around rounded-full bg-[#dce1cd] px-[15px]"
              onPress={() => {
                playSound(activeActivity.sound.phoneticSoundSrc);
              }}
            >
              <Text>Name</Text>
              <View className="aspect-square w-[45px]">
                <NameIcon />
              </View>
              <Text>نام</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Switch through S,A,T,P,I,N */}
        <View className="mt-20 flex w-full flex-row items-center justify-around px-[10px]">
          {/* Map an array of letters in to buttons to toggle the selected letter*/}
          {["s", "a", "t", "p", "i", "n"].map((letter, index) => (
            <View
              className="flex-column flex items-center gap-y-[5px]"
              key={index}
            >
              <View className="size-[20px]" />
              <TouchableOpacity
                className="size-[42px]"
                onPress={() => setSelectedLetter(letter)}
              >
                <SqFrameIcon active={letter === selectedLetter} />
                <View className="absolute flex size-[42px] flex-row items-center justify-center">
                  <Text className="text-[30px] leading-[32px]">{letter}</Text>
                </View>
              </TouchableOpacity>
            </View>
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
