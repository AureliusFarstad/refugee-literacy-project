import { INITIAL_LEVEL_STATE } from "@/core/store/levels/constants";
import { Pressable, SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { EarIcon } from "@/ui/icons";
import React, { useRef, useState } from "react";
import { SpeakerWaveIcon } from "react-native-heroicons/solid";

const LetterSound = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);
  const [activeActivity, setActiveActivity] = useState(
    INITIAL_LEVEL_STATE[0].sublevels[0].sections[0].activities[0]
  );

  /**
   * 1. 6 letters, S,A,T,P,I,N
   * 2. Save the progress
   * 3. One by one do the mapping, show 3 of the rest of the five (have the option to show rest of 25 apart from the correct one)
   * 4. Correct answer, show success
   * 5. Wrong answer, show try again
   * 6. Level completion UI
   *
   */

  const playSound = async () => {
    try {
    } catch (error) {
      console.log("error in playSound", error);
      throw error;
    }
  };

  /**
   * 1. shuffle the options available
   * 2. pick 3 of them and add the correct answer at the end,
   * 3. shuffle the options again
   */

  const getOptionsToRender = (
    options: IOption[],
    _correctAnswer: IOption
  ): IOption[] => {
    const shuffledOptions = options.sort(() => Math.random() - 0.5);
    const _shuffledOptionsWithCorrectAnswer = [
      ...shuffledOptions.slice(0, 3),
      _correctAnswer,
    ].sort(() => Math.random() - 0.5);
    return _shuffledOptionsWithCorrectAnswer;
  };

  const optionsToRender = getOptionsToRender(
    activeActivity.options,
    activeActivity.correctAnswer
  );

  return (
    <SafeAreaView>
      <Header title="Sound" modalRef={dynamicModalRef} />
      <View className="bg-[#ECE5E1] flex items-center p-4">
        <Pressable onPress={playSound}>
          <SpeakerWaveIcon />
        </Pressable>
        <View className="">
          {optionsToRender.map((option, index) => (
            <Pressable
              key={option.id}
              onPress={() => {
                if (option === activeActivity.correctAnswer) {
                  console.log("correct answer");
                } else {
                  console.log("wrong answer");
                }
              }}
              className="bg-white p-4 rounded-lg mt-4"
            >
              <Text>{option.title}</Text>
            </Pressable>
          ))}
        </View>
        <View>
          <Text>{activeActivity.correctAnswer.title}</Text>
        </View>
      </View>
      <DynamicModal ref={dynamicModalRef}>
        <View className="p-4 bg-white rounded-lg">
          <Text variant="h3">Letter sound activity</Text>
          <View className="h-20 flex items-center justify-center">
            <EarIcon />
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

export default LetterSound;
