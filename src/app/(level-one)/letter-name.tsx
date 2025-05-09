import clsx from "clsx";
import { Audio } from "expo-av";
import type { Sound } from "expo-av/build/Audio";
import { router, usePathname } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";

import { FIVE_SEC } from "@/constants/timing";
import { useGuideAudio } from "@/core/hooks/useGuideAudio";
import { useLevelStore } from "@/core/store/levels";
import { Pressable, SafeAreaView, Text, TouchableOpacity, View } from "@/ui";
import LetterCaseSwitch from "@/ui/components/letter-casing-switch";
import GuidanceAudioHeader from "@/ui/core/headers/guidance-audio";
import { LettersNameIcon } from "@/ui/icons";
import { getOptionsToRender } from "@/utils/level-one";

const LetterName = () => {
  const { levels, updateLevels } = useLevelStore();
  const [sound, setSound] = useState<Sound>();
  const [tappedAnswer, setTappedAnswer] = useState<IOption>();
  const [incorrectAnswers, setIncorrectAnswers] = useState<string[]>([]);

  const [isLowercase, setIsLowercase] = useState(false);

  const pathname = usePathname();

  const { playGuideAudio, isPlaying: isPlayingGuidanceAudio } = useGuideAudio({
    screenName: "letter-name",
  });

  const [activeActivity, setActiveActivity] =
    useState<IActivityWithSoundAndName>(
      levels[0].modules[0].sections[3].activities[0],
    );

  const optionsToRender = useMemo(
    () =>
      getOptionsToRender(activeActivity.options, activeActivity?.correctAnswer),
    [activeActivity],
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
      const { sound: soundResponse } = await Audio.Sound.createAsync(
        activeActivity.audio,
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

  const initNextActivity = () => {
    const currentIndex = levels[0].modules[0].sections[3].activities.findIndex(
      (activity: IActivity) => activity.id === activeActivity.id,
    );
    let _nextActivity: IActivity;
    if (
      currentIndex === -1 ||
      currentIndex === levels[0].modules[0].sections[3].activities.length - 1
    ) {
      // If current element is not found or is the last element, return the first element
      _nextActivity = levels[0].modules[0].sections[3].activities[0];
    } else {
      // Return the next element in the array
      _nextActivity =
        levels[0].modules[0].sections[3].activities[currentIndex + 1];
    }

    if (_nextActivity) {
      setActiveActivity(_nextActivity);
    }
  };

  useEffect(() => {
    if (pathname !== "/letter-name") {
      return;
    }

    /**
     * Check if each activity have been answered correctly twice if so means level completed
     */
    const activitiesInCurrentSection =
      levels[0].modules[0].sections[2].activities;
    const isCompleted = activitiesInCurrentSection.every((activity) => {
      if (!activity.nameAndSoundActivityProgress) return false;
      return Object.values(activity.nameAndSoundActivityProgress).every(
        (count) => count >= 1,
      );
    });

    if (isCompleted) {
      console.log("done");
      // router.navigate("/(level-one)/letter-matching");
    }
  }, [levels, activeActivity, pathname]);

  return (
    <SafeAreaView>
      <GuidanceAudioHeader
        title="Sound"
        isPlaying={isPlayingGuidanceAudio}
        onPressGuide={playGuideAudio}
        colorType="NATIVE_BUTTON_COLOR"
      />
      <View className="px-5">
        <LetterCaseSwitch
          isLowercase={isLowercase}
          setIsLowercase={setIsLowercase}
          letter={"A"}
          backgroundColor="#C385F8"
        />
      </View>
      <View className="flex items-center p-4">
        <TouchableOpacity
          onPress={playSound}
          className="flex size-[110] items-center justify-center rounded-full bg-colors-purple-500"
        >
          <LettersNameIcon />
        </TouchableOpacity>
        <View className="flex w-full flex-1 flex-row">
          {optionsToRender.map((option, index) => (
            <Pressable
              key={option.id}
              onPress={() => {
                setTappedAnswer(option);
                if (option.id === activeActivity.correctAnswer.id) {
                  setIncorrectAnswers([]);

                  const _updatedLevels = levels.map((level: ILevel) => {
                    if (level.id !== levels[0].id) return level;

                    const _updatedModules = level.modules.map((sublevel) => {
                      if (sublevel.id !== levels[0].modules[0].id)
                        return sublevel;

                      const _updatedSections = sublevel.sections.map(
                        (section: ISection) => {
                          if (
                            section.id !== levels[0].modules[0].sections[3].id
                          )
                            return section;

                          const _updatedActivities = section.activities.map(
                            (activity: IActivity) => {
                              if (activity.id !== activeActivity.id)
                                return activity;

                              const updatedProgress = {
                                ...activity.nameAndSoundActivityProgress,
                              } as ILetterSoundAndNameProgress;

                              if (isLowercase && updatedProgress) {
                                updatedProgress.lowercaseSoundCount += 1;
                              } else if (!isLowercase && updatedProgress) {
                                updatedProgress.uppercaseSoundCount += 1;
                              }

                              return {
                                ...activity,
                                nameAndSoundActivityProgress: {
                                  ...updatedProgress,
                                },
                              };
                            },
                          );

                          return {
                            ...section,
                            activities: _updatedActivities,
                          };
                        },
                      );

                      return {
                        ...sublevel,
                        sections: _updatedSections,
                      };
                    });

                    return {
                      ...level,
                      modules: _updatedModules,
                    };
                  });
                  playSound();

                  router.push({
                    pathname: "/modal",
                    params: {
                      correctOption: option.title,
                    },
                  });
                  setTimeout(() => {
                    updateLevels(_updatedLevels);
                    setTappedAnswer(undefined);
                    initNextActivity();
                    router.back();
                  }, FIVE_SEC);
                } else {
                  setIncorrectAnswers((prevIncorrectAnswers) => [
                    ...prevIncorrectAnswers,
                    option.id,
                  ]);
                }
              }}
              className={clsx(
                "absolute flex  size-24 items-center justify-center rounded-full bg-colors-purple-200",
                {
                  "left-10 top-40": index === 0,
                  "left-36 top-72": index === 1,
                  "right-0 top-40": index === 2,
                  " bg-red-500 text-white":
                    // isUpdatingSession &&
                    // option.id === tappedAnswer?.id &&
                    incorrectAnswers.includes(option.id),
                  // activeActivity.correctAnswer.id !== tappedAnswer.id,
                  "text-green-400":
                    option.id === tappedAnswer?.id &&
                    activeActivity.correctAnswer.id === tappedAnswer.id,
                },
              )}
            >
              <Text
                className={clsx("text-4xl font-bold  text-colors-purple-500", {
                  "  text-white":
                    (option.id === tappedAnswer?.id &&
                      activeActivity.correctAnswer.id !== tappedAnswer.id) ||
                    incorrectAnswers.includes(option.id),
                })}
              >
                {isLowercase
                  ? option.title.toLowerCase()
                  : option.title.toUpperCase()}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LetterName;
