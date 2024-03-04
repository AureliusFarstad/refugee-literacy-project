import { useLevelStore } from "@/core/store/levels";
import { IActivity } from "@/types/types";
import { Pressable, SafeAreaView, Text, View } from "@/ui";
import Header from "@/ui/core/headers";
import { DynamicModal } from "@/ui/core/modal/dynamic-modal";
import { EarIcon } from "@/ui/icons";
import { getOptionsToRender } from "@/utils/level-one";
import clsx from "clsx";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { SpeakerWaveIcon } from "react-native-heroicons/solid";

const LetterSound = () => {
  const dynamicModalRef = useRef<DynamicModalRefType>(null);
  const { levels, updateLevels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();
  const [isUpdatingSession, setIsUpdatingSession] = useState(false);
  const [tappedAnswer, setTappedAnswer] = useState<IOption>();

  const [activeActivity, setActiveActivity] = useState<IActivity>(
    levels[0].sublevels[0].sections[0].activities[0]
  );

  const optionsToRender = useMemo(
    () =>
      getOptionsToRender(activeActivity.options, activeActivity.correctAnswer),
    [activeActivity]
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
      const { sound } = await Audio.Sound.createAsync(activeActivity.audio);
      if (sound) {
        setSound(sound);
      }
      console.log("Playing Sound");
      await sound.playAsync();
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

  const initNextActivity = () => {
    const currentIndex =
      levels[0].sublevels[0].sections[0].activities.findIndex(
        (activity: IActivity) => activity.id === activeActivity.id
      );
    let _nextActivity: IActivity;
    if (
      currentIndex === -1 ||
      currentIndex === levels[0].sublevels[0].sections[0].activities.length - 1
    ) {
      // If current element is not found or is the last element, return the first element
      _nextActivity = levels[0].sublevels[0].sections[0].activities[0];
    } else {
      // Return the next element in the array
      _nextActivity =
        levels[0].sublevels[0].sections[0].activities[currentIndex + 1];
    }

    if (_nextActivity) {
      setActiveActivity(_nextActivity);
    }
  };

  return (
    <SafeAreaView>
      <Header title="Sound" modalRef={dynamicModalRef} />
      <View className="bg-[#ECE5E1] flex items-center p-4">
        <Pressable onPress={playSound}>
          <SpeakerWaveIcon />
        </Pressable>
        <Text>{activeActivity.numberOfTimesCorrectAnswerGiven}</Text>
        <View className="">
          {optionsToRender.map((option, index) => (
            <Pressable
              key={option.id}
              onPress={() => {
                setTappedAnswer(option);
                if (option.id === activeActivity.correctAnswer.id) {
                  console.log("correct answer");

                  const _updatedLevels = levels.map((level) => {
                    if (level.id !== levels[0].id) return level;

                    const _updatedSublevels = level.sublevels.map(
                      (sublevel) => {
                        if (sublevel.id !== levels[0].sublevels[0].id)
                          return sublevel;

                        const _updatedSections = sublevel.sections.map(
                          (section: ISection) => {
                            if (
                              section.id !==
                              levels[0].sublevels[0].sections[0].id
                            )
                              return section;

                            const _updatedActivities = section.activities.map(
                              (activity: IActivity) => {
                                if (activity.id !== activeActivity.id)
                                  return activity;

                                return {
                                  ...activity,
                                  numberOfTimesCorrectAnswerGiven:
                                    activity.numberOfTimesCorrectAnswerGiven +
                                    1,
                                };
                              }
                            );

                            return {
                              ...section,
                              activities: _updatedActivities,
                            };
                          }
                        );

                        return {
                          ...sublevel,
                          sections: _updatedSections,
                        };
                      }
                    );

                    return {
                      ...level,
                      sublevels: _updatedSublevels,
                    };
                  });

                  setIsUpdatingSession(true);
                  setTimeout(() => {
                    setIsUpdatingSession(false);
                    updateLevels(_updatedLevels);
                    setTappedAnswer(undefined);
                    initNextActivity();
                  }, 3000);
                } else {
                  setIsUpdatingSession(true);
                  setTimeout(() => {
                    setIsUpdatingSession(false);
                    setTappedAnswer(undefined);
                    initNextActivity();
                  }, 3000);
                  console.log(option.id, activeActivity.correctAnswer.id);
                  console.log("wrong answer");
                }
              }}
              className="bg-white p-4 rounded-lg mt-4"
            >
              <Text
                className={clsx("", {
                  "text-green-400":
                    isUpdatingSession &&
                    option.id === tappedAnswer?.id &&
                    activeActivity.correctAnswer.id === tappedAnswer.id,
                  "text-red-400":
                    isUpdatingSession &&
                    option.id === tappedAnswer?.id &&
                    activeActivity.correctAnswer.id !== tappedAnswer.id,
                })}
              >
                {option.title}
              </Text>
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
