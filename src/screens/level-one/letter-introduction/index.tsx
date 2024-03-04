import LowerA from "@/assets/alphabet/vector/lowercase/a-svg";
import { SafeAreaView, Text, TouchableOpacity, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import {
  CheckIcon,
  EarIcon,
  HandwritingIcon,
  NameIcon,
  SpeakerIcon,
  SqFrameIcon,
  TeacherIcon,
} from "@/ui/icons";
import React, { useRef, useState } from "react";

const LetterIntroduction = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);

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

  return (
    <SafeAreaView>
      <Header title="Introduction" modalRef={dynamicModalRef} />
      <View className="bg-[#ECE5E1]  p-4">
        {/* Hand written letters section */}
        <View className="relative h-[200px] bg-white">
          {/* Outside solid blue lines */}
          <View className="relative h-[120px] top-[40px] border-y-[1px] border-[#7747FF]/50">
            {/* Row of letters */}
            <View className="">
              <View className="h-[120px] w-[60px]">
                <LowerA />
              </View>
            </View>
            {/* Inner solid blue lines */}
            <View className="absolute z-100 h-[40px] inset-x-0 top-[40px] border-y-[1px] border-[#7747FF]/50" />
          </View>

          {/* Animate writing button */}
          <TouchableOpacity
            className="absolute top-[150px] left-[30px] w-[60px] h-[60px] bg-white border-2 border-[#ADD590] rounded-full flex items-center justify-center"
            onPress={animateLowercase}
          >
            <View className="w-[42px] aspect-square">
              <HandwritingIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className="absolute top-[150px] right-[30px] w-[60px] h-[60px] bg-white border-2 border-[#ADD590] rounded-full flex items-center justify-center"
            onPress={animateUppercase}
          >
            <View className="w-[42px] aspect-square">
              <HandwritingIcon />
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex flex-colum gap-y-[20px]">
          {/* Sound Button */}
          <View className="flex flex-row items-center gap-x-[12px] mx-auto">
            <TouchableOpacity className="w-[40px] aspect-square">
              <SpeakerIcon />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#dce1cd] h-[80px] w-[200px] rounded-full flex flex-row items-center justify-around px-[15px]">
              <Text>Sound</Text>
              <View className="w-[70px] aspect-square">
                <EarIcon />
              </View>
              <Text>صدا</Text>
            </TouchableOpacity>
          </View>
          {/* Name Button */}
          <View className="flex flex-row items-center gap-x-[12px] mx-auto">
            <TouchableOpacity className="w-[40px] aspect-square">
              <SpeakerIcon />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#dce1cd] h-[80px] w-[200px] rounded-full flex flex-row items-center justify-around px-[15px]">
              <Text>Name</Text>
              <View className="w-[45px] aspect-square">
                <NameIcon />
              </View>
              <Text>نام</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Switch through S,A,T,P,I,N */}
        <View className="flex flex-row items-center justify-around w-[100%] px-[10px]">
          {/* Map an array of letters in to buttons to toggle the selected letter*/}
          {["s", "a", "t", "p", "i", "n"].map((letter, index) => (
            <View
              className="flex flex-column items-center gap-y-[5px]"
              key={index}
            >
              <View className="w-[20px] h-[20px]">
                <CheckIcon />
              </View>
              <TouchableOpacity
                className="w-[42px] h-[42px]"
                onPress={() => setSelectedLetter(letter)}
              >
                <SqFrameIcon active={letter == selectedLetter} />
                <View className="absolute w-[42px] h-[42px] flex flex-row items-center justify-center">
                  <Text className="text-[30px] leading-[32px]">{letter}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <DynamicModal ref={dynamicModalRef}>
        <View className="p-4 bg-white rounded-lg">
          <Text variant="h3">Letter introduction activity</Text>
          <View className="h-20 flex items-center justify-center">
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